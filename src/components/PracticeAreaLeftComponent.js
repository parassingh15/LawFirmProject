import React from 'react';
import '../style/PracticeAreaLeftComponent.css';

function PracticeAreaLeftComponent() {
    return (
        <div className='PracticeAreaLeftComponentMainDiv'>
            <div className="PracticeAreaListComponent">
                <div class="list">
                    <h2>Practice Areas</h2>
                    <ul>
                        <li><span>Corporate & Security Law</span></li>
                        <li><span>Real Estate Law</span></li>
                        <li><span>Health Care Law</span></li>
                        <li><span>Insurance Law</span></li>
                        <li><span>Construction & Engineering</span></li>
                        <li><span>Ecommerce Law</span></li>
                        <li><span>Private Fund</span></li>
                        <li><span>Power & Energy</span></li>
                        <li><span>Leading Law</span></li>
                    </ul>
                </div>
            </div>

            <div className="PracticeAreaLetUsHelpYou">
                <h2 className='letUsHelp'>Let us help you!</h2>
                <p>If you need any helps, please feel free to contact us. We will get back to you with 1 business day. Or if in hurry, just call us now.</p>
                <h2 className='callHelp'>Call: (+91)987-6541-320</h2>
                <p className='contactInfoMail'><i class="fa-regular fa-envelope"></i>LawFirm@gmail.com</p>
                <p className='contactInfoTime'><i class="fa-regular fa-clock"></i>Mon - Fri 09:00-17:00</p>
                
            </div>
            
        </div>
    );
}

export default PracticeAreaLeftComponent;