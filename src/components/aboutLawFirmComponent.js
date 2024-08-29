import React from 'react';
import '../style/aboutLawFirmComponent.css';
import booksNStatueImg from '../images/booksNStatueImage.jpg';

function aboutLawFirmComponent() {
    return (
        <div className='aboutLawFirmComponentMainDiv'>
            <div className='aboutLawFirmComponentLeftDiv'>

                <h2>About LawFirm</h2>
                <p>We can provide corporate governance, helping clients manage the responsibilities of running a corporation in financial field. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>

            </div>
            <div className='aboutLawFirmComponentRightDiv'>
                <img src={booksNStatueImg} alt="" />
            </div>
        </div>
    );
}

export default aboutLawFirmComponent;