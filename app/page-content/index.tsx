import Link from "next/link"
import { CountryLabels, GenerateStyles, StyleMaps, locales } from "../const"
import { EmojiCount } from "../emoji-count"
import { GeneratorForm } from "../emoji-form"
import { UserGuide } from "../user-guide"
import Image from "next/image"
import { H2Header } from "../server-components/h2-header"


import NoFollowLink from "../server-components/no-follow-link"
import { FiExternalLink } from "react-icons/fi"
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
              {countryName} phone number generator for Testing Purposes
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

            {/* Enhanced Countries Section with Beautiful Grid Layout */}
            <section className="pb-8 md:pb-12">
              <div className="mb-6">
                <p className="text-base-content/70 text-center max-w-2xl mx-auto">
                  Generate authentic phone numbers for any country worldwide. Each region follows local formatting standards and conventions.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 md:gap-4">
                {locales?.filter(item => item.label !== country).map((item, index) => {
                  return (
                    <Link key={item.label}
                      className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-base-200 to-base-300 hover:from-primary/10 hover:to-primary/20 border border-base-300 hover:border-primary/30 transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:-translate-y-1"
                      href={`/${item.label}?style=${style}`}
                      title={`${item.localeName} phone number generator`}
                      style={{
                        animationDelay: `${index * 50}ms`
                      }}>

                      {/* Animated background gradient */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>

                      <div className="relative p-4 flex flex-col items-center text-center space-y-2">
                        {/* Flag Icon with Animation */}
                        <div className="relative">
                          {item?.icon && (
                            <item.icon className="size-8 md:size-10 rounded-md shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-110" />
                          )}
                          <div className="absolute inset-0 rounded-md bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        {/* Country Name */}
                        <span className="font-medium text-sm md:text-base text-base-content group-hover:text-primary transition-colors duration-300 leading-tight">
                          {item.localeName}
                        </span>

                        {/* Subtle indicator */}
                        <div className="w-0 group-hover:w-8 h-0.5 bg-primary rounded-full transition-all duration-300 ease-out"></div>
                      </div>
                    </Link>
                  )
                })}
              </div>

              {/* Additional Info */}
              <div className="mt-8 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 text-success rounded-full text-sm font-medium">
                  <span className="w-2 h-2 bg-success rounded-full animate-pulse"></span>
                  {locales.length}+ Countries Supported
                </div>
              </div>
            </section>

            <div className="divider my-8 md:my-12">
              <div className="text-base-content/40">•••</div>
            </div>

            <H2Header>Other styles of generating phone numbers</H2Header>
            <h3 className="sr-only">Phone Number Generation Formats</h3>

            {/* Enhanced Styles Section with Modern Cards */}
            <section className="pb-8 md:pb-12">
              <div className="mb-6">
                <p className="text-base-content/70 text-center max-w-2xl mx-auto">
                  Choose from different phone number formats to match your specific testing or development needs.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                {LoopEnum(GenerateStyles)?.map?.((item, index) => {
                  const isActive = item?.value === style;
                  const styleInfo = StyleMaps.get(item.value as GenerateStyles);

                  return isActive ? (
                    <div key={item.key}
                      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary-focus text-primary-content shadow-lg border-2 border-primary/20"
                      style={{
                        animationDelay: `${index * 100}ms`
                      }}>

                      {/* Active indicator animation */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-pulse"></div>

                      <div className="relative px-6 py-4 flex flex-col items-center text-center space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                          <span className="font-bold text-lg capitalize">{item.value}</span>
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        </div>

                        <div className="text-xs opacity-90 font-medium">ACTIVE FORMAT</div>

                        {styleInfo?.eg && (
                          <code className="text-xs bg-white/20 px-2 py-1 rounded font-mono">
                            {styleInfo.eg.split(' ')[0]}
                          </code>
                        )}
                      </div>
                    </div>
                  ) : (
                    <Link href={`?style=${item.value}`} key={item.key}
                        className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-base-200 to-base-300 hover:from-base-300 hover:to-base-200 border border-base-300 hover:border-primary/40 transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:-translate-y-1"
                        style={{
                          animationDelay: `${index * 100}ms`
                        }}>

                        {/* Hover animation */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-out"></div>

                        <div className="relative px-6 py-4 flex flex-col items-center text-center space-y-2">
                          <span className="font-semibold text-base capitalize text-base-content group-hover:text-primary transition-colors duration-300">
                            {item.value}
                          </span>

                          {styleInfo?.eg && (
                            <code className="text-xs bg-base-100 px-2 py-1 rounded font-mono text-base-content/70 group-hover:text-primary/70 transition-colors duration-300">
                              {styleInfo.eg.split(' ')[0]}
                            </code>
                          )}

                          <div className="w-0 group-hover:w-6 h-0.5 bg-primary rounded-full transition-all duration-300 ease-out"></div>
                        </div>
                      </Link>
                  );
                })}
              </div>

              {/* Format comparison table */}
              <div className="mt-8 overflow-hidden rounded-2xl bg-gradient-to-br from-base-200/50 to-base-300/50 border border-base-300">
                <div className="p-6">
                  <h4 className="font-semibold text-lg mb-4 text-center">Format Comparison</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    {LoopEnum(GenerateStyles)?.map?.((item) => {
                      const styleInfo = StyleMaps.get(item.value as GenerateStyles);
                      return (
                        <div key={item.key} className="text-center p-4 rounded-xl bg-base-100/50 border border-base-300/50">
                          <div className="font-medium capitalize mb-2">{item.value}</div>
                          <code className="text-sm bg-base-200 px-2 py-1 rounded block">
                            {styleInfo?.eg || 'N/A'}
                          </code>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>

            <div className="divider my-8 md:my-12">
              <div className="text-base-content/40">•••</div>
            </div>

            <H2Header>What is the format of the generated phone number</H2Header>
            <h3 className="sr-only">Phone Number Format Examples</h3>

            {/* Enhanced Format Section with Interactive Card */}
            <section className="pb-8 md:pb-12">
              <div className="mb-6">
                <p className="text-base-content/70 text-center max-w-2xl mx-auto">
                  Understanding the format helps you integrate generated numbers seamlessly into your applications and testing workflows.
                </p>
              </div>

              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-info/10 via-info/5 to-primary/10 border border-info/20 shadow-xl">
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-info/20 to-transparent animate-pulse"></div>
                </div>

                <div className="relative p-8 md:p-12">
                  {/* Header with icon */}
                  <div className="flex items-center justify-center mb-8">
                    <div className="flex items-center gap-4 px-6 py-3 bg-info/10 rounded-full border border-info/20">
                      <div className="w-3 h-3 bg-info rounded-full animate-pulse"></div>
                      <span className="font-semibold text-info">Current Format: {style}</span>
                      <div className="w-3 h-3 bg-info rounded-full animate-pulse"></div>
                    </div>
                  </div>

                  {/* Main format display */}
                  <div className="text-center mb-8">
                    <div className="inline-block">
                      <div className="text-sm font-medium text-base-content/60 mb-2">Format Example</div>
                      <div className="relative group">
                        <code className="text-2xl md:text-3xl font-mono font-bold bg-gradient-to-r from-primary to-info bg-clip-text text-transparent p-4 block">
                          {egItem?.eg}
                        </code>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-info/10 rounded-lg -z-10 group-hover:from-primary/20 group-hover:to-info/20 transition-all duration-300"></div>
                      </div>
                    </div>
                  </div>

                  {/* Additional information */}
                  {(!!egItem?.egLink?.link && !!egItem?.egLink?.title) && (
                    <div className="text-center mb-6">
                      <NoFollowLink href={egItem?.egLink?.link as string}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary hover:text-primary-focus rounded-full border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-lg group">
                        <span className="font-medium">{egItem?.egLink?.title}</span>
                        <FiExternalLink className="group-hover:translate-x-1 transition-transform duration-300" />
                      </NoFollowLink>
                    </div>
                  )}

                  {/* Format breakdown */}
                  <div className="grid md:grid-cols-3 gap-4 mt-8">
                    <div className="text-center p-4 rounded-2xl bg-base-100/50 border border-base-300/50 hover:border-primary/30 transition-all duration-300 hover:scale-105">
                      <div className="text-2xl mb-2">🌍</div>
                      <div className="font-medium mb-1">International</div>
                      <div className="text-sm text-base-content/70">Includes country codes</div>
                    </div>

                    <div className="text-center p-4 rounded-2xl bg-base-100/50 border border-base-300/50 hover:border-primary/30 transition-all duration-300 hover:scale-105">
                      <div className="text-2xl mb-2">📱</div>
                      <div className="font-medium mb-1">Authentic</div>
                      <div className="text-sm text-base-content/70">Follows real patterns</div>
                    </div>

                    <div className="text-center p-4 rounded-2xl bg-base-100/50 border border-base-300/50 hover:border-primary/30 transition-all duration-300 hover:scale-105">
                      <div className="text-2xl mb-2">🔧</div>
                      <div className="font-medium mb-1">Ready to Use</div>
                      <div className="text-sm text-base-content/70">Perfect for testing</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

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

          </div>
        </div>
      </div>
    </div>
  )
}
