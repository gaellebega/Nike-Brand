import {Hero,
     CustomerRevie,
     SuperQuality,
     Footer,
     SpecialOffer,
     Services,
     Subscribe,
     PopularProducts} from './components'
     import Nav from './components/Nav'
const  App = () => {
  return (
    <main className='relative '>
     <Nav/> 
     <section className='xl:padding-1 sm:pr:16 pr-8 sm:pb-24 pb-12'>
<Hero/>
     </section>
     <section className='sm:px-16 px-8 sm:py-24 py-12'>
<PopularProducts/>
     </section>
     <section className='sm:px-16 px-8 sm:py-24 py-12'>
<SuperQuality/>
     </section>
     <section className=' sm:px-16 px-8 py-12'>
<Services/>
     </section>
     <section className='sm:px-16 px-8 sm:py-24 py-10'>
<SpecialOffer/>
     </section>
     <section className='bg-blue-200 sm:px-16 px-8 sm:py-24 py:12'>
<CustomerRevie/>
     </section>
     <section className='sm:px-16 px-8 sm:py-32 py-16 w-full'>
<Subscribe/>
     </section>
     <section className='bg-black pb-8 sm:pt-24 pt-12 sm:px-16 px-8'>
<Footer/>
     </section>
    </main>
  )
}

export default App
