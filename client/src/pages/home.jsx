'use client';


import Features from '../components/features.jsx'
import HeroSection from '../components/herosection.jsx'
import Navbar from '../components/navbar.jsx'
import StressChecker from '../components/stresschecker.jsx';
import ReactLenis from 'lenis/react';
import { Working } from '../components/working.jsx';
import MainFeatures from '../components/mainfeatures.jsx';
import PrivacySection from '../components/privacy.jsx';
import TestimonialSection from '../components/testimonial.jsx';
import Footer from '../components/footer.jsx';

export function Home(){
    return(
        <ReactLenis root>
            <div className='px-[20rem]'>
                <Navbar/>
                <HeroSection/>
                <StressChecker/>
                <Features/>
                <Working/>
                <MainFeatures/>
                <PrivacySection/>
                <TestimonialSection/>
                <Footer/>
            </div>
        </ReactLenis>



    );

}