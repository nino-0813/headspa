import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Concept from '@/components/Concept'
import Menu from '@/components/Menu'
import Problem from '@/components/Problem'
import Service from '@/components/Service'
import Voice from '@/components/Voice'
import Access from '@/components/Access'
import CTABanner from '@/components/CTABanner'
import SchoolRecruit from '@/components/SchoolRecruit'
import News from '@/components/News'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Concept />
        <Menu />
        <Problem />
        <Service />
        <Voice />
        <Access />
        <CTABanner />
        <SchoolRecruit />
        <News />
      </main>
      <Footer />
    </>
  )
}
