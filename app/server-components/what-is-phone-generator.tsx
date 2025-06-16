import { H2Header } from "./h2-header";

/**
 * What is Phone Number Generator 组件
 * 用于SEO优化，解释电话号码生成器的定义和用途
 */
export const WhatIsPhoneGenerator = () => {
    return (
        <section className="mb-8">
            <H2Header>What is a Phone Number Generator?</H2Header>
            <div className="prose prose-lg max-w-none text-base-content">
                <p className="mb-4">
                    A <strong>phone number generator</strong> is a specialized tool designed to create random,
                    valid-format telephone numbers for various testing and development purposes. Our phone number
                    generator creates realistic phone numbers that follow the correct formatting patterns for
                    different countries and regions worldwide.
                </p>

                <p className="mb-4">
                    Unlike real phone numbers, generated phone numbers are specifically created for testing
                    applications, software development, and privacy protection. The phone number generator
                    ensures that each generated number follows the proper format structure, including country
                    codes, area codes, and local number patterns.
                </p>

                <p className="mb-4">
                    Our advanced phone number generator supports multiple formats including international
                    phone numbers, local phone numbers, and mobile phone numbers. Whether you need a single
                    phone number or bulk phone number generation, our tool provides instant results with
                    just one click.
                </p>

                <div className="bg-base-200 p-4 rounded-lg mt-6">
                    <h3 className="font-semibold text-lg mb-2">Key Features of Our Phone Number Generator:</h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Instant phone number generation with realistic formatting</li>
                        <li>Support for 100+ countries and regions</li>
                        <li>Multiple phone number formats (international, local, mobile)</li>
                        <li>Bulk phone number generation capabilities</li>
                        <li>Privacy-safe phone numbers for testing purposes</li>
                        <li>No registration required for phone number generation</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}; 