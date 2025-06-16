import { H2Header } from "./h2-header";

/**
 * How To Guide 组件
 * 详细的使用指南，提升用户体验和SEO
 */
export const HowToGuide = () => {
    const steps = [
        {
            step: 1,
            title: "Select Your Country",
            description: "Choose the country or region for which you want to generate phone numbers. Our phone number generator supports over 100 countries with authentic formatting.",
            tips: ["Each country has specific phone number formats", "Country selection affects the generated number structure", "International formats are also available"]
        },
        {
            step: 2,
            title: "Choose Number Format",
            description: "Select your preferred phone number format from the available options. You can choose between international format, local format, or mobile-specific formats.",
            tips: ["International format includes country codes", "Local format follows regional patterns", "Mobile format generates cell phone numbers"]
        },
        {
            step: 3,
            title: "Generate Phone Numbers",
            description: "Click the generate button to instantly create random phone numbers. Our phone number generator produces realistic numbers that follow proper formatting rules.",
            tips: ["Generation is instant and unlimited", "Each number follows authentic patterns", "Numbers are safe for testing purposes"]
        },
        {
            step: 4,
            title: "Copy and Use",
            description: "Copy the generated phone numbers and use them in your applications, tests, or projects. The numbers are formatted and ready to use immediately.",
            tips: ["One-click copying functionality", "Numbers are properly formatted", "Safe for all testing scenarios"]
        }
    ];

    const faqs = [
        {
            question: "Are the generated phone numbers real?",
            answer: "No, our phone number generator creates fake phone numbers that follow real formatting patterns but are not connected to actual phone services. They are safe for testing purposes."
        },
        {
            question: "Can I generate phone numbers in bulk?",
            answer: "Yes, our phone number generator supports bulk generation. You can generate multiple phone numbers at once for comprehensive testing scenarios."
        },
        {
            question: "Do I need to register to use the phone number generator?",
            answer: "No registration required! Our phone number generator is completely free and accessible without any sign-up process."
        },
        {
            question: "What countries does the phone number generator support?",
            answer: "Our phone number generator supports over 100 countries and regions worldwide, including all major countries with their specific formatting rules."
        }
    ];

    return (
        <section className="mb-8">
            <H2Header>How to Use the Phone Number Generator</H2Header>

            <div className="prose prose-lg max-w-none text-base-content mb-8">
                <p>
                    Using our phone number generator is simple and straightforward. Follow these easy steps
                    to generate realistic phone numbers for your testing and development needs.
                </p>
            </div>

            {/* Step-by-step guide */}
            <div className="space-y-6 mb-12">
                {steps.map((item, index) => (
                    <div key={index} className="flex gap-4 p-6 bg-base-200 rounded-lg">
                        <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-primary text-primary-content rounded-full flex items-center justify-center font-bold">
                                {item.step}
                            </div>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-base-content/80 mb-3">{item.description}</p>
                            <div className="space-y-1">
                                <h4 className="font-medium text-sm">Pro Tips:</h4>
                                <ul className="list-disc list-inside space-y-1">
                                    {item.tips.map((tip, tipIndex) => (
                                        <li key={tipIndex} className="text-sm text-base-content/70">{tip}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Best Practices */}
            <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Best Practices for Phone Number Generation</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-success/10 rounded-lg">
                        <h4 className="font-medium text-success mb-2">✅ Do's</h4>
                        <ul className="space-y-2 text-sm">
                            <li>• Use generated numbers only for testing purposes</li>
                            <li>• Verify format compatibility with your application</li>
                            <li>• Generate multiple numbers for comprehensive testing</li>
                            <li>• Keep generated numbers for consistent test data</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-error/10 rounded-lg">
                        <h4 className="font-medium text-error mb-2">❌ Don'ts</h4>
                        <ul className="space-y-2 text-sm">
                            <li>• Don't use generated numbers for real communications</li>
                            <li>• Don't assume generated numbers are active</li>
                            <li>• Don't use for production user data</li>
                            <li>• Don't rely on generated numbers for actual services</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div>
                <h3 className="text-xl font-semibold mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="collapse collapse-plus bg-base-200">
                            <input type="radio" name="faq-accordion" />
                            <div className="collapse-title text-lg font-medium">
                                {faq.question}
                            </div>
                            <div className="collapse-content">
                                <p className="text-base-content/80">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}; 