import React from 'react';
import '../style/lookingForHelpComponent.css';

function lookingForHelpComponent() {
    return (
        <div className='lookingForHelpMainDiv'>
            <div className="lookingForHelpContentBoxDiv">
                <div className="lookingForHelpContentDiv">
                    <h3 className='lookingForSomeoneHeading'>ARE YOU LOOKING FOR SOMEONE TO HELP </h3>
                    <h4 className='lookingForSomeonPara'>Let us help you! Call Now : (1)2345-2345-54</h4>
                    <div className="lookingForHelpContact">
                        <span className="email"><i class="fa-solid fa-envelope"></i><span> LawFirm@gmail.com</span></span>
                        <span className='timmings'><i class="fa-regular fa-clock"></i><span> Mon - Fri 09:00-17:00</span></span>
                    </div>
                </div>

            </div>
            
        </div>
    );
}

export default lookingForHelpComponent;