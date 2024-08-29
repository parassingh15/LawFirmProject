import React from 'react';
import '../style/attorneyPage.css';
import ContactAndSocial from '../components/contactAndSocial';
import Navbar from '../components/navbar';
import AttorneyPageMainArea from '../components/attorneyPageMainArea.js';
import BiographyPage from '../components/BiographyPage.js';
import Footer from '../components/footer.js';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import LawLogo from '../images/LawLogo.png';

function attorneyPage() {
    return (
        <div>
            <ContactAndSocial/>
            <AttorneyPageMainArea/>
            <Navbar/>
            <BiographyPage/>
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

export default attorneyPage;