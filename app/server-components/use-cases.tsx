import { H2Header } from "./h2-header";

/**
 * Use Cases 组件
 * 详细介绍电话号码生成器的使用场景，提升SEO和用户理解
 */
export const UseCases = () => {
    const useCases = [
        {
            title: "Software Testing & QA",
            description: "Use our phone number generator for comprehensive software testing. Generate test phone numbers to validate form inputs, test SMS functionality, and ensure your application handles various phone number formats correctly.",
            examples: ["Form validation testing", "SMS service testing", "User registration testing", "Database integration testing"]
        },
        {
            title: "App Development & Prototyping",
            description: "Developers rely on our phone number generator during app development phases. Create realistic test data without using real phone numbers, ensuring privacy and avoiding potential issues with actual phone services.",
            examples: ["Mobile app development", "Web application testing", "API testing", "User interface mockups"]
        },
        {
            title: "Privacy Protection",
            description: "Protect your personal information by using generated phone numbers instead of your real number. Our phone number generator helps maintain privacy when signing up for services or testing applications.",
            examples: ["Online registrations", "Service trials", "Privacy-conscious testing", "Anonymous form submissions"]
        },
        {
            title: "Educational & Training",
            description: "Educational institutions and training programs use our phone number generator for teaching purposes. Create realistic datasets for database courses, programming tutorials, and data analysis projects.",
            examples: ["Database design courses", "Programming tutorials", "Data science projects", "Student assignments"]
        },
        {
            title: "Marketing & Sales Testing",
            description: "Marketing teams use our phone number generator to test CRM systems, email marketing platforms, and sales automation tools without affecting real customer data.",
            examples: ["CRM system testing", "Marketing automation", "Sales funnel testing", "Lead generation testing"]
        },
        {
            title: "Research & Analytics",
            description: "Researchers and data analysts use generated phone numbers for statistical analysis, pattern recognition studies, and data modeling without compromising real user privacy.",
            examples: ["Statistical research", "Data modeling", "Pattern analysis", "Academic research projects"]
        }
    ];

    return (
        <section className="mb-8">
            <H2Header>Phone Number Generator Use Cases</H2Header>
            <div className="prose prose-lg max-w-none text-base-content mb-6">
                <p>
                    Our phone number generator serves multiple industries and use cases. Whether you're a developer,
                    tester, researcher, or privacy-conscious user, our tool provides reliable phone number generation
                    for various scenarios.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {useCases.map((useCase, index) => (
                    <div key={index} className="card bg-base-200 shadow-sm">
                        <div className="card-body p-6">
                            <h3 className="card-title text-lg font-semibold mb-3">{useCase.title}</h3>
                            <p className="text-base-content/80 mb-4">{useCase.description}</p>

                            <div className="mt-4">
                                <h4 className="font-medium mb-2">Common Applications:</h4>
                                <ul className="list-disc list-inside space-y-1 text-sm">
                                    {useCase.examples.map((example, idx) => (
                                        <li key={idx} className="text-base-content/70">{example}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 p-6 bg-primary/10 rounded-lg">
                <h3 className="font-semibold text-lg mb-3">Why Choose Our Phone Number Generator?</h3>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                        <div className="text-2xl mb-2">🚀</div>
                        <h4 className="font-medium">Instant Generation</h4>
                        <p className="text-sm text-base-content/70">Generate phone numbers instantly with one click</p>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl mb-2">🌍</div>
                        <h4 className="font-medium">Global Coverage</h4>
                        <p className="text-sm text-base-content/70">Support for 100+ countries worldwide</p>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl mb-2">🔒</div>
                        <h4 className="font-medium">Privacy Safe</h4>
                        <p className="text-sm text-base-content/70">Generated numbers are safe for testing</p>
                    </div>
                </div>
            </div>
        </section>
    );
}; 