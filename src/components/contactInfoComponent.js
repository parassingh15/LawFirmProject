import React from 'react';
import '../style/contactInfoComponent.css';

function contactInfoComponent() {
    return (
        
        <div id='ContactInfoMainDiv' className='ContactInfoMainDiv'>
            <div className="contactInfoContactDetails">
                <h2 className='contactInfoHead'>Contact Info</h2>
                <p className='dash'>____</p>
                <p className='callNow'>Call Now : (+91) 987-6541-320</p>
                <p className='contactInfoMail'><i class="fa-regular fa-envelope"></i>LawFirm@gmail.com</p>
                <p className='contactInfoTime'><i class="fa-regular fa-clock"></i>Mon - Fri 09:00-17:00</p>
                <p className='contactInfoLocation'><i class="fa-solid fa-location-arrow"></i>12th Wall Street NY CV564 Unites States</p>

                <p className='contactInfoPhrase'>Law is complicate matter. It can cause you a big problem if you ignore it. Let us help you!</p>

            </div>
            <div className="Blog">
                <h2 className='BlogHead'>Recent Articles</h2>
                <p className='Bdash'>____</p>   
            </div>
         </div>
    )
}

            


export default contactInfoComponent;