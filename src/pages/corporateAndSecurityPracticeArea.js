import React from 'react';
import '../style/corporateAndSecurityPracticeArea.css';
import ContactAndSocial from '../components/contactAndSocial';
import Navbar from '../components/navbar';
import PracticeAreaCS from '../components/PracticeAreaCS.js';
import PracticeAreaLeftComponent from '../components/PracticeAreaLeftComponent.js';
import PracticeAreaCSMainBody from '../components/PracticeAreaCSMainBody.js';
import LookingForHelpComponent from '../components/lookingForHelpComponent.js';
import Footer from '../components/footer.js';
import { FloatingWhatsApp } from 'react-floating-whatsapp';


function corporateAndSecurityPracticeArea() {
    return (
        <div>
            <ContactAndSocial/>
            <PracticeAreaCS/>
            <Navbar/>
            <div className="partitionDivs">
                <PracticeAreaLeftComponent/>
                <PracticeAreaCSMainBody/>
            </div>
            <LookingForHelpComponent/>
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

export default corporateAndSecurityPracticeArea;