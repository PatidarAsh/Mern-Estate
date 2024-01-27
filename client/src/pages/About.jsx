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
          Our mission is to find every family the space they need to relax, reconnect, and enjoy precious time away together.
        </h3>
      </div>
    </section> <br/>
    <div className='flex flex-row  p-5 text-center   '>
      <div className='p-3'>
        <h2 className='text-2xl font-medium'>We believe in family connection</h2>
      </div>
      <div className="p-3">
        <p className='text-2xl font-medium'>
              We need each other now more than ever, and we all want more quality time with the people we love. Our focus is on the importance of connection and the joy that celebrating meaningful moments together brings. That’s the magic we’re trying to capture. That’s why we’re here.
        </p>
        <hr />
      </div>
    </div>
  </div>
    // <div className="div">
    //   <div className="text-center">
    //     <img className='h-[500px] w-full' src={Image} alt="About" />
    //   </div>
    //   <div className="container mx-auto p-8">
    //   <h1 className="text-4xl font-bold mb-4">About Us</h1>
    //   <p className="text-lg mb-4">
    //     Welcome to our Real Estate platform! We are dedicated to helping you find your dream home.
    //     Our team of experienced professionals is here to guide you through the buying or selling process.
    //   </p>
    //   <p className="text-lg mb-4">
    //     Whether you are looking for a cozy apartment, a spacious house, or a modern condominium,
    //     we have a diverse range of properties to suit your needs.
    //   </p>
    //   <p className="text-lg mb-4">
    //     At [Your Company Name], we prioritize customer satisfaction and strive to provide a seamless
    //     and enjoyable real estate experience for every client.
    //   </p>
    // </div>
    // </div>
    
  )
}
