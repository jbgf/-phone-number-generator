import Link from "next/link"
import { CountryLabels, GenerateStyles, StyleMaps, locales } from "../const"
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
import { TrustpilotWidget } from "../client-component/TrustpilotWidget"
import { WhatIsPhoneGenerator } from "../server-components/what-is-phone-generator"
import { UseCases } from "../server-components/use-cases"
import { HowToGuide } from "../server-components/how-to-guide"
import { BenefitsFeatures } from "../server-components/benefits-features"

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
  // console.log(style, 'style')
  const egItem = StyleMaps?.get(style);
  return (
    <div className="relative">
      <div className="hero bg-base-200 px-4 md:px-8">
        <div className="hero-content text-center p-0 md:p-6">
          <div className="max-w-4xl w-full">
            <h2 className="font-bold text-2xl md:text-3xl lg:text-5xl text-primary mb-4 mt-4 animate-in fade-in slide-in-from-bottom-3 duration-1000 ease-in-out">
              Generate Phone Number{` for ${countryName}`} with Just a Click!
            </h2>

            <h3 className="text-base md:text-xl text-base-content/70 mb-8 md:mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1200 ease-in-out">
              {countryName} Random phone number generator for Testing Purposes
            </h3>

            <div className="w-full md:max-w-md mx-auto space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-1200 ease-in-out">
              <GeneratorForm country={countryLabel} style={style} />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-8 md:py-16">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body p-4 md:p-8">
            <H2Header>Other countries and regions</H2Header>
            <h3 className="sr-only">Available Countries for Phone Number Generation</h3>
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-6 place-items-start pb-6 md:pb-8">
              {locales?.filter(item => item.label !== country).map(item => {
                return (
                  <Link key={item.label}
                    className="btn btn-ghost btn-sm normal-case w-full sm:w-auto justify-start"
                    href={`/${item.label}?style=${style}`}
                    title={`${item.localeName} phone number generator`}>
                    <Space className="text-base-content">
                      {item?.icon && <item.icon className="size-4" />}
                      <span className="hover:text-primary truncate">{item.localeName}</span>
                    </Space>
                  </Link>
                )
              })}
            </section>

            <div className="divider my-2 md:my-4"></div>

            <H2Header>Other styles of generating phone numbers</H2Header>
            <h3 className="sr-only">Phone Number Generation Formats</h3>
            <div className="flex flex-wrap gap-2 pb-6 md:pb-8">
              {LoopEnum(GenerateStyles)?.map?.(item =>
                item?.value === style ? (
                  <span key={item.key} className="badge badge-primary text-xs md:text-sm">{item.value}</span>
                ) : (
                    <Link href={`?style=${item.value}`} key={item.key}
                      className="badge badge-outline hover:badge-primary text-xs md:text-sm">
                    {item.value}
                  </Link>
                  )
              )}
            </div>

            <div className="divider my-2 md:my-4"></div>

            <H2Header>What is the format of the generated phone number</H2Header>
            <h3 className="sr-only">Phone Number Format Examples</h3>
            <div className="alert alert-info mb-6 md:mb-8 flex-col sm:flex-row items-start sm:items-center p-4">
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full">
                <span className="whitespace-nowrap">Format example:</span>
                <code className="px-2 py-1 bg-base-200 rounded break-all">{egItem?.eg}</code>
                {(!!egItem?.egLink?.link && !!egItem?.egLink?.title) && (
                  <span className="mt-2 sm:mt-0">
                    <NoFollowLink href={egItem?.egLink?.link as string}
                      className="link link-primary inline-flex items-center gap-1">
                      {egItem?.egLink?.title} <ExportOutlined />
                    </NoFollowLink>
                  </span>
                )}
              </div>
            </div>

            <div className="divider my-2 md:my-4"></div>

            <WhatIsPhoneGenerator />

            <div className="divider my-2 md:my-4"></div>

            <BenefitsFeatures />

            <div className="divider my-2 md:my-4"></div>

            <UseCases />

            <div className="divider my-2 md:my-4"></div>

            <HowToGuide />

            <div className="divider my-2 md:my-4"></div>

            <H2Header>What Our Users Say</H2Header>
            <div className="w-full max-w-4xl mx-auto my-6">
              <TrustpilotWidget className="bg-base-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300" />
            </div>

            <div className="divider my-2 md:my-4"></div>

            <H2Header>How a Fake Random Phone Number Generator Can Help</H2Header>
            <h3 className="sr-only">Benefits and Use Cases</h3>
            <div className="grid gap-4 pb-6 md:pb-8">
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
              ]?.map((item, index) => (
                <div key={index} className="card bg-base-200">
                  <div className="card-body p-4">
                    <h3 className="card-title text-base md:text-lg">{item?.title}</h3>
                    <p className="text-sm md:text-base">{item?.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <UserGuide isHome={props.isHome} />
          </div>
        </div>
      </div>
    </div>
  )
}
