import React from 'react'

const PrivatePolicy = () => {
    return (
        <div className="w-full min-h-screen bg-black flex items-center justify-center flex-col pt-[110px]">
            <h1 className='lg:text-[56px] text-[28px] text-white mono font-bold pb-[30px]' >Privacy Policy</h1>
            <div className='w-[90%] h-[90%] bg-white/5'>
                <div className='lg:text-[18px] text-[14px] mono text-white flex flex-col gap-8 lg:px-[50px] lg:py-[50px] p-[20px] opacity-75'>
                    <p>
                        Privacy Policy<br />
                        Last Updated: [Date]<br />
                    </p>
                    <p>
                        Welcome to [Your Website Name] ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [YourWebsite.com] (the "Site"). By using our Site, you agree to the terms of this Privacy Policy. If you do not agree, please do not access or use the Site.<br />
                    </p>
                    <p>
                        We may collect the following types of information: Personal Data such as name, email address, phone number, mailing/billing address, payment information (processed securely via third-party services), and account credentials. Non-Personal Data such as browser type, IP address, pages visited, and cookies/tracking technologies. We may also receive information from third parties like social media platforms or payment processors.<br />
                    </p>
                    <p>
                        We use your data to provide and improve our services, process transactions, communicate with you (e.g., newsletters, support), personalize user experience, analyze Site usage, and comply with legal obligations. We do not sell your personal data but may share it with service providers (e.g., payment processors), legal authorities if required by law, or in case of business transfers like mergers.<br />
                    </p>
                    <p>

                        We use cookies and similar technologies to enhance user experience, analyze traffic, and deliver ads. You can manage cookies in your browser settings. Your data may be processed outside your country, but we ensure adequate protections (e.g., GDPR safeguards for EU users).<br />
                    </p>
                    <p>

                        We implement security measures like SSL encryption to protect your data, but no method is 100% secure. Depending on your location, you may have rights to access, correct, delete, or restrict processing of your data. To exercise these rights, contact us at [Your Contact Email].<br />
                    </p>
                    <p>

                        Our Site is not intended for children under [13/16] years old, and we do not knowingly collect their data. We may update this Privacy Policy periodically; the "Last Updated" date will reflect changes. Continued use of the Site constitutes acceptance.<br />
                    </p>
                    <p>

                        For questions, contact: [Your Company Name], [Your Address], Email: [Your Contact Email].
                    </p>
                </div>

            </div>

        </div>
    )
}

export default PrivatePolicy
