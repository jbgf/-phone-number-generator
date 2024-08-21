
import Link from "next/link"
import { CountryLabels, GenerateStyles, locales } from "../const"
import { EmojiCount } from "../emoji-count"
import { GeneratorForm } from "../emoji-form"
import { UserGuide } from "../user-guide"
import Image from "next/image"
import { H2Header } from "../server-components/h2-header"

import cn from 'classnames'
import { BODY_PADDING } from "../layout"

import { Button, Space } from "antd"
import NoFollowLink from "../server-components/no-follow-link"
import { ExportOutlined } from "@ant-design/icons"
import { LoopEnum } from "@/util"
interface PageContentProps extends React.PropsWithChildren {
  country: CountryLabels
  isHome?: boolean
  style?: GenerateStyles
}

export const PageContent = (props: PageContentProps) => {
  const { children, country } = props;
  const countryLabel = (locales.filter(item => item.label === props.country?.replace('_phonenumber', ''))?.[0]?.label) || '';
  const countryName = countryLabel?.replace(/_/g, ' ') || '';
  const style = props.style || GenerateStyles.International
  return (
    <div className="relative">


      <div className="py-[15vh] sm:py-[6vh] flex flex-col items-center justify-center">
        <h2 className="font-medium text-2xl md:text-4xl text-black mb-3 animate-in fade-in slide-in-from-bottom-3 duration-1000 ease-in-out">
          Generate Phone Number{` for ${countryName}`} with Just a Click!
        </h2>

        <h3 className="text-gray-500 mb-12 text-base animate-in fade-in slide-in-from-bottom-4 duration-1200 ease-in-out">
          {countryName} Random phone number generator for Testing Purposes
        </h3>

        <div className="max-w-md space-y-4 w-full animate-in fade-in slide-in-from-bottom-4 duration-1200 ease-in-out">
          <GeneratorForm country={countryLabel} style={style} />
        </div>

        <div className="pt-36">
          <H2Header>Other countries and regions</H2Header>
          <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-4 place-items-center pb-8">
            {locales?.filter(item => item.label !== country).map(item => {
              return <Link key={item.label} className="whitespace-nowrap " href={`/${item.label}`
              } title={`${item.localeName} phone number generator`}>
                <Space className="text-gray-800">
                  {item?.icon && <item.icon className="size-4" />}
                  <span className="hover:text-sky-500 underline">{item.localeName}</span>
                </Space>
              </Link>
            })}
          </section>

          <H2Header>Other styles of generating phone numbers</H2Header>
          <Space className="pb-8">
            {LoopEnum(GenerateStyles)?.filter(item => item.value !== style)?.map?.(item => <Link href={`?style=${item.value}`}
              key={item.key}>
              {item.value}
            </Link>
            )}
          </Space>
          <H2Header>What is the format of the generated phone number</H2Header>

          <Space className="pb-8">

            We generate phone number in the E.123 international format, e.g. `+15551234567`
            <NoFollowLink href={`https://en.wikipedia.org/wiki/E.123`}>
              E.123 <ExportOutlined />
            </NoFollowLink>
          </Space>
          <H2Header>How a Fake Random Phone Number Generator Can Help</H2Header>
          <ol className="list-decimal list-inside pb-8">
            {[
              { title: `Ease of Testing`, text: `Automate and simplify the testing process for developers and QA engineers by generating cell phone number or mobile phone number directly within TestComplete or other testing environments, reducing manual input and errors` },
              { title: `Enhanced Privacy Protection`, text: `Safeguard personal privacy by using generated phone numbers for registrations, avoiding the need to disclose personal numbers on potentially insecure or spam-prone platforms` },
              { title: `Global Reach`, text: `Generate phone numbers from a wide range of countries, supporting international testing and user registration scenarios without geographical limitations` },
              // {Efficiency in Bulk Generation: Quickly produce a large volume of phone numbers to test the capacity and performance of SMS services, databases, or customer relationship management (CRM) systems.
              // {title: `Improved UX/UI Testing`, text: `Use generated phone numbers to test and ensure that your application's user interface accommodates various phone number formats properly`},
              { title: `Customization Options`, text: `Tailor the generated phone numbers to fit specific patterns, area codes, or country codes to meet the precise requirements of your test scenarios` },
              // {title: `Cost Savings`, text: `Reduce the need for purchasing additional SIM cards or services for testing purposes, saving on operational costs`},
              // {title: `Speed and Accessibility`, text: `Instantly generate phone numbers through a user-friendly interface, streamlining the workflow for developers, testers, and casual users`},
              // {title: `Compliance and Security Testing`, text: `Verify that your application correctly handles phone numbers in compliance with data protection regulations and security standards`},
              { title: `Versatility for Different Use Cases`, text: `Whether for app development, marketing campaigns, online registrations, or privacy concerns, the tool is versatile enough to cater to a broad spectrum of needs` }
            ]?.map((item, index) => <li key={index}>
              <span className="font-bold pr-2">{item?.title}:</span>
              {item?.text}
            </li>
            )}
          </ol>
          <UserGuide isHome={props.isHome} />
        </div>
      </div>

    </div >
  )
}
