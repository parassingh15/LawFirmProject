import React, { forwardRef } from 'react';
import '../style/freeConsultationComponent.css';

function freeConsultationComponent() {
    return (
        <div className='freeConsultationMainDiv'>
            <div id='freeConsultationContent' className="freeConsultationContent">

                <h2>Free Consultation</h2>
                <p>Law is complicate matter. It can cause you a big problem
if you ignore it. Let us help you!</p>
                <form action="">
                <div className="freeConsultPhoneName">
                    
                <select id="suffix" name="suffix">
                    <option value="Mr.">Mr.</option>
                    <option value="Mrs.">Mrs.</option>
                    <option value="Other">Other</option>
      </select>
                    <input type="text" name="username" id="username" placeholder="*Name"  />
                </div>

                <div className="freeConsultEmail">
                    <input type="text" name="number" id="number" placeholder="Number*" />
                    <input type="email" name="email" id="email" placeholder="Email*" />
                </div>

                <div className="freeConsultMessage">
                <textarea id="textarea" name="textarea" placeholder="Write something.."></textarea>
                </div>

                <div className="freeConsultSubmit">
                    <input type="submit" value="Submit Now" className='freeConsultSubmitBtn' />
                </div>
                </form>
            </div>
        </div>
    );
}

export default freeConsultationComponent;