import Navigation from "./components/Navigation"
import HeroSection from "./components/HeroSection"
import FeaturedContent from "./components/FeaturedContent"
import DiscoverSection from "./components/DiscoverSection"
import CaseStudiesSection from "./components/CaseStudiesSection"
import IndustriesSection from "./components/IndustriesSection"
import GlobalReachSection from "./components/GlobalReachSection"
import ServicesSection from "./components/ServicesSection"
import StatsSection from "./components/StatsSection"
import WhyChooseUsSection from "./components/WhyChooseUsSection"
import PartnersSection from "./components/PartnersSection"
import CTASection from "./components/CTASection"
import NewsletterSection from "./components/NewsletterSection"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <FeaturedContent />
      <DiscoverSection />
      <ServicesSection />
      <StatsSection />
      <WhyChooseUsSection />
      <PartnersSection />
      <CaseStudiesSection />
      <IndustriesSection />
      <GlobalReachSection />
      <ServicesSection />
      <CTASection />
      <NewsletterSection />
      <Footer />
    </div>
  )
}
