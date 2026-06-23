import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import CounterSection from '@/components/sections/CounterSection'
import AboutSection from '@/components/sections/AboutSection'
import ServicesSection from '@/components/sections/ServicesSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import PricingSection from '@/components/sections/PricingSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CtaMiddleSection from '@/components/sections/CtaMiddleSection'
import BlogSection from '@/components/sections/BlogSection'
import FaqSection from '@/components/sections/FaqSection'
import CtaBottomSection from '@/components/sections/CtaBottomSection'
import ValuePillars from '@/components/sections/ValuePillars'
import SolutionsSnapshot from '@/components/sections/SolutionsSnapshot'
import SISGroupBand from '@/components/sections/SISGroupBand'

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <CounterSection />
        <AboutSection />
        <ValuePillars />
        <SolutionsSnapshot />
        
         {/*<ServicesSection />
        <ProjectsSection />
        <PricingSection />
        <TestimonialsSection />
        <CtaMiddleSection />
        <BlogSection />
        <FaqSection />*/}
        <SISGroupBand />
        {/* <CtaBottomSection />  */}
      </main>
      <Footer />
    </div>
  )
}
