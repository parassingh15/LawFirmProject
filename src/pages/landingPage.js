import React from 'react';
import ContactAndSocial from '../components/contactAndSocial';
import Navbar from '../components/navbar';
import StartPageComponent from '../components/startPageComponent.js';
import AboutLawFirmComponent from '../components/aboutLawFirmComponent';
import LegalPracticeAreas from '../components/legalPracticeAreas.js';
import ReviewFromClients from '../components/reviewFromClients.js'
import FreeConsultationComponent from '../components/freeConsultationComponent.js';
import WhyChooseUsComponent from '../components/whyChooseUsComponent.js';
import WorfFromClient from '../components/wordFromClient.js'
import ContactInfoComponent from '../components/contactInfoComponent.js';
import Footer from '../components/footer.js';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

function landingPage() {
    return (
        <div>
            
            <ContactAndSocial/>
            <StartPageComponent/>
            <Navbar/>
            <AboutLawFirmComponent/>
            <LegalPracticeAreas/>
            <ReviewFromClients/>
            <FreeConsultationComponent/>
            <WhyChooseUsComponent/>
            <WorfFromClient/>
            <ContactInfoComponent/>
            <Footer/>
            <FloatingWhatsApp
                avatar='https://image.similarpng.com/very-thumbnail/2021/06/Lawyer-and-Law-Firm-Logo-premium-vector-PNG.png'
                phoneNumber="9873328286"
                accountName="Paras Singh"
                allowEsc
                allowClickAway
                notification
                notificationSound />

        </div>
    );
}

export default landingPage;