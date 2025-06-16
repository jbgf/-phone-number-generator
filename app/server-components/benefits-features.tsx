import { H2Header } from "./h2-header";

/**
 * Benefits and Features 组件
 * 展示电话号码生成器的功能特点和优势
 */
export const BenefitsFeatures = () => {
    const features = [
        {
            icon: "⚡",
            title: "Lightning Fast Generation",
            description: "Generate phone numbers instantly with our optimized phone number generator. No waiting, no delays - get results in milliseconds."
        },
        {
            icon: "🌐",
            title: "Global Phone Number Support",
            description: "Our phone number generator supports 100+ countries worldwide. Generate authentic phone numbers for any region with proper formatting."
        },
        {
            icon: "🎯",
            title: "Multiple Format Options",
            description: "Choose from various phone number formats including international, local, mobile, and landline numbers with our versatile generator."
        },
        {
            icon: "🔒",
            title: "Privacy & Security Focused",
            description: "All generated phone numbers are completely safe and private. Our phone number generator ensures no real numbers are compromised."
        },
        {
            icon: "📱",
            title: "Mobile Responsive Design",
            description: "Use our phone number generator on any device. Fully responsive design ensures perfect functionality on desktop, tablet, and mobile."
        },
        {
            icon: "🆓",
            title: "Completely Free to Use",
            description: "Our phone number generator is 100% free with no hidden costs, registration requirements, or usage limitations."
        }
    ];

    const benefits = [
        {
            category: "For Developers",
            items: [
                "Streamline testing workflows with realistic phone number data",
                "Validate form inputs and phone number formatting",
                "Test SMS and communication features safely",
                "Generate bulk test data for database population",
                "Ensure application compatibility across different number formats"
            ]
        },
        {
            category: "For QA Teams",
            items: [
                "Comprehensive testing with diverse phone number formats",
                "Automated testing integration with generated numbers",
                "Cross-platform compatibility testing",
                "User interface validation with various number lengths",
                "Performance testing with bulk phone number generation"
            ]
        },
        {
            category: "For Privacy-Conscious Users",
            items: [
                "Protect personal phone numbers from exposure",
                "Safe registration for testing services",
                "Anonymous form submissions and surveys",
                "Educational projects without privacy concerns",
                "Research activities with synthetic data"
            ]
        }
    ];

    const technicalSpecs = [
        { label: "Supported Countries", value: "100+" },
        { label: "Number Formats", value: "Multiple" },
        { label: "Generation Speed", value: "Instant" },
        { label: "Daily Limit", value: "Unlimited" },
        { label: "API Access", value: "Available" },
        { label: "Mobile Support", value: "Full" }
    ];

    return (
        <section className="mb-8">
            <H2Header>Phone Number Generator Features & Benefits</H2Header>

            <div className="prose prose-lg max-w-none text-base-content mb-8">
                <p>
                    Discover why our phone number generator is the preferred choice for developers, testers,
                    and privacy-conscious users worldwide. Explore comprehensive features designed to meet
                    all your phone number generation needs.
                </p>
            </div>

            {/* Key Features */}
            <div className="mb-12">
                <h3 className="text-xl font-semibold mb-6">Key Features</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="card bg-base-200 shadow-sm hover:shadow-md transition-shadow">
                            <div className="card-body p-6 text-center">
                                <div className="text-4xl mb-3">{feature.icon}</div>
                                <h4 className="card-title text-lg justify-center mb-3">{feature.title}</h4>
                                <p className="text-sm text-base-content/80">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>



            {/* Technical Specifications */}
            <div className="mb-8">
                <h3 className="text-xl font-semibold mb-6">Technical Specifications</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {technicalSpecs.map((spec, index) => (
                        <div key={index} className="stat bg-base-200 rounded-lg">
                            <div className="stat-title text-sm">{spec.label}</div>
                            <div className="stat-value text-2xl text-primary">{spec.value}</div>
                        </div>
                    ))}
                </div>
            </div>


        </section>
    );
}; 