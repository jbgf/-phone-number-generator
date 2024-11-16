"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { createEmoji } from "./action"
import { SubmitButton } from "./submit-button"
import { Button, ConfigProvider, Flex, Input, Select, Space, message } from "antd"
import { TinyColor } from '@ctrl/tinycolor';
import { CopyOutlined, EnterOutlined } from "@ant-design/icons"
import { Faker, allFakers } from '@faker-js/faker'
import { CountryLabels, GenerateStyles, locales } from "../const"
import { ToolTipWrapper } from "../client-component/tooltip-wrapper"
// import { experimental_useFormState as useFormState } from "react-dom"
// import toast from "react-hot-toast"
// import useSWR from "swr"

interface GeneratorFormProps {
  country?: CountryLabels
  style?: GenerateStyles
}
let timer: NodeJS.Timeout;
export function GeneratorForm({ country, style }: GeneratorFormProps) {
  const [phoneNumbers, setPhoneNumbers] = useState<string[]>([])
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const config = useMemo(() => {
    // google search old link with lowercase, eg: hk
    const item = locales?.filter(item => item.label?.toLocaleLowerCase?.()?.indexOf(country?.toLocaleLowerCase?.()!) > -1)?.[0] || locales[0]
    return item;
  }, [country])
  // const [formState, formAction] = useFormState(createEmoji)
  const currentLocale = useMemo(() => {
    console.log(`local`, config.locale)
    const FakerFN = allFakers[config.locale]
    return FakerFN
  }, [config])
  useEffect(() => {
    if (country) generatePhoneNumber()
  }, [country])
  const generatePhoneNumber = () => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      const phone = currentLocale.phone?.number({ 'style': style || GenerateStyles.International })
      setPhoneNumbers(prev => [phone, ...prev].slice(0, 10))
      message.success(`Generated ${phone}`)
    }, 300)
  }
  const copy = (text: string) => {
    // 首先检查是否支持 navigator.clipboard.writeText
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        console.log('Text copied to clipboard successfully!');
      }).catch(err => {
        console.error('Failed to copy text to clipboard', err);
      });
    } else {
      // 降级方案：使用 document.execCommand() 方法
      // 创建一个临时的 textarea 元素
      const textarea = document.createElement('textarea');
      // 将要复制的文本设置为 textarea 的值
      textarea.value = text;
      // 将 textarea 设置为不可见
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'absolute';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
      // 选择文本
      textarea.select();
      try {
        // 执行复制命令
        const successful = document.execCommand('copy');
        const msg = successful ? 'successfully' : 'unsuccessfully';
        console.log(`Fallback: Copying text command was ${msg}`);
      } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
      }
      // 移除临时创建的 textarea
      document.body.removeChild(textarea);
    }
  }

  const copyAll = () => {
    if (phoneNumbers.length === 0) return
    const allNumbers = phoneNumbers.join('\n')
    copy(allNumbers)
    message.success('All numbers copied!')
  }

  const handleCopy = (phone: string, index: number) => {
    copy(phone)
    setCopiedIndex(index)
    message.success('Number copied!')
    // 重置复制状态
    setTimeout(() => {
      setCopiedIndex(null)
    }, 500)
  }

  // 调用函数进行测试
  // copyTextToClipboard('要复制的文本');


  /* useEffect(() => {
    if (!formState) return
    toast.error(formState.message)
  }, [formState])

  useSWR(
    "/api/token",
    async (url: string) => {
      const res = await fetch(url)
      const json = await res.json()
      return json?.token ?? ""
    },
    {
      onSuccess: (token) => setToken(token),
    }
  ) */
  const ICON = config?.icon;
  const getHoverColors = (colors: string[]) =>
    colors.map((color) => new TinyColor(color).lighten(5).toString());
  const getActiveColors = (colors: string[]) =>
    colors.map((color) => new TinyColor(color).darken(5).toString());
  const colors2 = ['#6253E1', '#04BEFE']//['#fc6076', '#ff9a44', '#ef9d43', '#e75516'];
  return (
    <div className="w-full space-y-6">
      {/* 生成按钮区域 */}
      <div className="card bg-base-100 shadow-lg">
        <div className="card-body p-4">
          <div className="flex items-center gap-4">
            <Button
              onClick={generatePhoneNumber}
              type="primary"
              size="large"
              className="flex-1"
            >
              Generate Number
              <ICON title={config?.localeName} className="size-5 ml-2 inline-block" />
            </Button>

            {(
              <button
                onClick={copyAll}
                className="btn btn-outline btn-secondary"
                title="Copy all numbers"
              >
                <CopyOutlined className="size-5" />
                Copy All
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 号码列表区域 */}
      {phoneNumbers.length > 0 && (
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body p-4">
            <h3 className="card-title text-lg mb-4">Generated Numbers</h3>
            <div className="space-y-2">
              {phoneNumbers.map((phone, index) => (
                <div 
                  key={`${phone}-${index}`}
                  className={`
                    group relative flex items-center justify-between p-3 
                    rounded-lg cursor-pointer
                    transition-all duration-200 ease-in-out
                    ${copiedIndex === index
                      ? 'bg-success/10 scale-[0.99] border border-success/20'
                      : 'bg-base-200 hover:bg-base-300 hover:shadow-md hover:-translate-y-0.5 border border-transparent hover:border-primary/20'
                    }
                  `}
                >
                  {/* 左侧号码和序号 */}
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-base-content/60 group-hover:text-primary/60">
                      #{phoneNumbers.length - index}
                    </span>
                    <span className="font-mono text-base-content group-hover:text-primary transition-colors">
                      {phone}
                    </span>
                  </div>

                  {/* 右侧复制按钮 - 现在是常驻显示 */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // 防止触发整行的点击事件
                      handleCopy(phone, index);
                    }}
                    className={`
                      btn btn-ghost btn-sm min-h-8 h-8
                      hover:bg-primary/10 transition-all duration-200
                      ${copiedIndex === index
                        ? 'text-success bg-success/10'
                        : 'text-base-content/70 hover:text-primary'
                      }
                    `}
                    title="Copy number"
                  >
                    <CopyOutlined className={`
                      size-4 transition-transform duration-200
                      ${copiedIndex === index ? 'scale-125' : ''}
                    `} />
                    <span className="ml-1 text-xs">Copy</span>
                  </button>

                  {/* 点击整行复制 */}
                  <button
                    onClick={() => handleCopy(phone, index)}
                    className="absolute inset-0 bg-transparent"
                    aria-label={`Copy ${phone}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}



      {/* 空状态提示 */}
      {phoneNumbers.length === 0 && (
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body p-8 text-center">
            <div className="text-base-content/60">
              Click the generate button to create phone numbers
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
