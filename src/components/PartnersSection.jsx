import { useRef } from "react"

export default function PartnersSection() {
    const partners = [
        { name: "Oracle NetSuite", logo: "/oracle-netsuite-logo.png" },
        { name: "Shopify", logo: "/shopify-logo.png" },
        { name: "Microsoft", logo: "/microsoft-logo.png" },
        { name: "Amazon", logo: "/amazon-logo.png" },
        { name: "Salesforce", logo: "/salesforce-logo.png" }
    ]

    const awards = [
        { name: "Oracle NetSuite", logo: "/oracle-netsuite-logo.png" },
        { name: "Shopify", logo: "/shopify-logo.png" },
        { name: "Microsoft", logo: "/microsoft-logo.png" },
        { name: "Amazon", logo: "/amazon-logo.png" },
        { name: "Salesforce", logo: "/salesforce-logo.png" }
    ]

    const partnersRef = useRef(null)
    const awardsRef = useRef(null)

    return (
        <section className="py-8 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Partners</h2>
                </div>
                <div className="relative overflow-hidden whitespace-nowrap">
                    <div className="absolute left-0 w-24 h-full z-10 bg-gradient-to-r from-white to-transparent"></div>
                    <div className="absolute right-0 w-24 h-full z-10 bg-gradient-to-l from-white to-transparent"></div>
                    <div className="flex justify-center">
                        <div ref={partnersRef} className="inline-block animate-marquee-left">
                            {[...partners, ...partners, ...partners].map((partner, index) => (
                                <div key={index} className="inline-block mx-4">
                                    <img src={partner.logo} alt={partner.name} className="h-12 opacity-60" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                
                <div className="text-center mt-6 mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Awards</h2>
                </div>
                <div className="relative overflow-hidden whitespace-nowrap">
                    <div className="absolute left-0 w-24 h-full z-10 bg-gradient-to-r from-white to-transparent"></div>
                    <div className="absolute right-0 w-24 h-full z-10 bg-gradient-to-l from-white to-transparent"></div>
                    <div className="flex justify-center">
                        <div ref={awardsRef} className="inline-block animate-marquee-right">
                            {[...awards, ...awards, ...awards].map((award, index) => (
                                <div key={index} className="inline-block mx-4">
                                    <img src={award.logo} alt={award.name} className="h-12 opacity-60" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                @keyframes marquee-left {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-100% / 3)); }
                }
                @keyframes marquee-right {
                    0% { transform: translateX(calc(-100% / 3)); }
                    100% { transform: translateX(0); }
                }
                .animate-marquee-left {
                    animation: marquee-left 15s linear infinite;
                    width: fit-content;
                }
                .animate-marquee-right {
                    animation: marquee-right 15s linear infinite;
                    width: fit-content;
                }
            `}</style>
        </section>
    )
}