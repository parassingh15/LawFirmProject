import React from 'react';
import '../style/contactAndSocial.css';


function contactAndSocial() {
    return (
        <div className='contactAndSocialMainDiv'>
            <div className="contactsDetails">
                <span className='phoneNumber'><i class="fa-solid fa-phone"></i><span>+91-9876-5432-10</span></span>
                <span className="email"><i class="fa-solid fa-envelope"></i><span> LawFirm@gmail.com</span></span>
            </div>

            <div className="SocialMediaDetails">
                <span className='timmings'><i class="fa-regular fa-clock"></i><span> Mon - Fri 09:00-17:00</span></span>
                <span className="facebook"><i class="fa-brands fa-facebook-f"></i></span>
                <span className="linkdin"><i class="fa-brands fa-linkedin-in"></i></span>
                <span className="twitter"><i class="fa-brands fa-x-twitter"></i></span>
                <span className="instagram"><i class="fa-brands fa-instagram"></i></span>

            </div>
        </div>
    );
}

export default contactAndSocial;