// import React from 'react'
import '../index.css';
import Image from '../images/hero.jpg'

export default function About() {
  return (
    <div className="div">
      <div className="container-1 relative font-sans">
        <img src={Image} alt="Nature" className="h-[450px] w-full " />
        <div className="text-block absolute top-16 left-96 justify-items-center  text-black  p-4">
          <h4 className='text-white text-5xl font-extrabold'>Get to know SkyLine</h4>
          <p className='text-white text-center text-xl font-semibold'>Where families live better together</p>
        </div>
      </div> <br/>
      <section className="Intro">
      <div
        className="Intro__text  w-auto p-16 "
        style={{
          backgroundImage: 'url(//media-cms.vrbo.com/images/jgswy4nbaha7/4MQpuGM5s0WrbEEoJagCgA/4383698f428d2750aff56c36fb7cdf6a/intro-bg-desktop.png)',
        }}
      >
        <h3 className="text-white text-center">
        Our mission is to help our clients achieve their real estate goals by providing expert advice, personalized service, and a deep understanding of the local market. Whether you are looking to buy, sell, or rent a property, we are here to help you every step of the way.
        </h3>
      </div>
    </section> 
    <div className='flex flex-row gap-6  text-center py-20 px-3 max-w-6xl mx-auto  '>
        <h2 className='text-2xl font-medium  text-slate-700'>We believe in family connection</h2>
        <p className="text-2xl font-medium  text-slate-700">
            We need each other now more than ever, and we all want more quality time with the people we love. Our focus is on the importance of connection and the joy that celebrating meaningful moments together brings. That’s the magic we’re trying to capture. That’s why we’re here.
        </p>
    </div>
    <div className="flex flex-row gap-6  text-center  max-w-6xl mx-auto">
        <h2 className='text-2xl font-medium text-slate-700'>We want families to live better together</h2>
        <p className='text-2xl font-medium  text-slate-700'>That means new features that make getting away together simpler for everyone. It means filtering for preferences and highlighting destinations within driving distance. It means streamlined group planning tools. It means stays for every budget. And it means excellent customer service and flexible cancellation policies if plans change.</p>
    </div>
    
  </div>
    
    
  )
}
