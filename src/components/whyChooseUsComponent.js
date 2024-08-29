import React from 'react';
import '../style/whyChooseUsComponent.css';
import whyChooseUsFirstImg from '../images/whyChooseFirstImg.jpg';
import whyChooseUsSecondImg from '../images/whyChooseUsSecondImg.jpg';



function whyChooseUsComponent() {
    return (
        <div className='whyChooseUsMainDiv'>
            <div className="whyChooseUsComponentImgDiv">
                <img className='whyChooseUsFirstImg' src={whyChooseUsFirstImg} alt="" />
                <img  className='whyChooseUsSecondImg' src={whyChooseUsSecondImg} alt="" />

            </div>
            <div className="whyChooseUsComponentContent">
                <p>What we are expert at</p>
                <h3>Why Clients Choose Us</h3>
                <h3>_____</h3>
                <p>We can provide corporate governance, helping clients manage the responsibilities of running a corporation in financial field.</p>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows.</p>
            </div>
            
        </div>
    );
}

export default whyChooseUsComponent;