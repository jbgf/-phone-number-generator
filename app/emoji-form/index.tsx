"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { createEmoji } from "./action"
import { SubmitButton } from "./submit-button"
import { ConfigProvider, Flex, Input, Select, Space } from "antd"
import styles from './styles.module.css'
import { CopyOutlined, EnterOutlined } from "@ant-design/icons"
import { Faker, en } from '@faker-js/faker'
// import { experimental_useFormState as useFormState } from "react-dom"
// import toast from "react-hot-toast"
// import useSWR from "swr"
const locales = [{locale: en, label: 'en'}]
const options = locales?.map(item => ({'label': item.label, value: item?.label}))
export const customFakers = locales.map(item => new Faker({
  locale: [item.locale],
}));
interface EmojiFormProps {
  initialPrompt?: string
}

export function EmojiForm({ initialPrompt }: EmojiFormProps) {
  const [label, setLabel] = useState<string>(locales[0]?.label)
  const [phoneDisplay, setPhoneDisplay] = useState('')
  // const [formState, formAction] = useFormState(createEmoji)
  const currentLocale = useMemo(() =>  {
    const item = locales?.filter(item => item.label === label)?.[0]
    return new Faker({
      locale: [item.locale],
    })
  }, [label])
  useEffect(() => { 
    generatePhoneNumber()
   }, [label])
  const generatePhoneNumber = () => {
    const phone = currentLocale.phone.number('###-###-####')
    setPhoneDisplay(phone)
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

  return (
    <Flex gap="small">
    <form className="bg-black rounded-xl shadow-lg h-fit flex flex-row px-1 items-center w-full">
      <Space.Compact style={{width: '100%'}}>
      <ConfigProvider
  theme={{
    components: {
      Select: {
        /* 这里是你的组件 token */
        'selectorBg': 'transparent',
        // 'optionHeight': 
        // 'optionSelectedColor': '#fff'
      },
    },
  }}
>
      <Select showSearch defaultValue={"am"} className={styles.selector} placeholder="area code"  variant="borderless" options={options} />
      </ConfigProvider>
      <Input
        // defaultValue={initialPrompt}
        type="text"
        name="prompt"
        variant="borderless"
        /* onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault()
            submitRef.current?.click()
          }
        }} */
        value={phoneDisplay}
        readOnly
        suffix={<Space>
          <EnterOutlined onClick={generatePhoneNumber} className="cursor-pointer"/>
          </Space>}
        placeholder="cat"
        className="bg-transparent text-white placeholder:text-gray-400 ring-0 outline-none resize-none 
        py-2.5 px-2 font-mono text-sm h-10 w-full transition-all duration-300"
        // ref={submitRef} 
        
        />
        
      </Space.Compact>
      {/* <input aria-hidden type="text" name="token" value={token} className="hidden" readOnly /> */}
    </form>
      <CopyOutlined onClick={() => copy(phoneDisplay)} className="cursor-pointer text-2xl text-gray-400 hover:text-gray-500 active:text-gray-900 transition-all" />
      </Flex>
  )
}
