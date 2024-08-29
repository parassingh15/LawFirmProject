import * as React from 'react';
import '../style/biographyPage.css';
import LawyerImg from '../images/lawyerImg.JPG'
import ProgressBar from 'react-bootstrap/ProgressBar';


function biographyPage() {

    return (
        <div id='biographyPageMainDiv' className='biographyPageMainDiv'>
            <div className="attorneyProfileDiv">
                <img className='LawyerImg' src={LawyerImg} alt="" />
                <h2>Paras Singh</h2>
                <p>Partner</p>

                <div className="bioEmailPhone">
                    <h4><span>Email</span>Lawfirm@Gmail.com</h4>
                    <h4><span>Phone</span>+91 987-6541-320</h4>
                </div>

                <div className="biographyPageSocialMediaDetails">
                    <span className="facebook"><i class="fa-brands fa-facebook-f"></i></span>
                    <span className="linkdin"><i class="fa-brands fa-linkedin-in"></i></span>
                    <span className="twitter"><i class="fa-brands fa-x-twitter"></i></span>
                    <span className="instagram"><i class="fa-brands fa-instagram"></i></span>
                </div>


            </div>
            <div className="biographyContent">
                
                <h2>BIOGRAPHY</h2>
                <p>John Smith is a Partner at Attorna and the Head of International Arbitration Practice. John specialises in consulting clients in the area of international trade, and representing their interests in international commercial arbitrations of GAFTA.</p>
                <h3>___</h3>
                <p>John is the leader of the Working Group on International Taxation & EU Harmonization in UK at the American Chamber of Commerce. He is also the Committee Head of the Permanent Scientific Committee of IFA. During 2011 John served as the Co-Chair of the Tax Committee of the American Chamber of Commerce and was the member of the working group on VAT reform at the Ministry of Finance of United Kingdom.</p>
                <h3>___</h3>
                <p>Prior to joining Attorna, John worked in the UK of an international law firm.</p>

                <h2>PRACTICE AREA</h2>
                <p><i class="fa-regular fa-circle-dot"></i>Estate Planning</p>
                <p><i class="fa-regular fa-circle-dot"></i>Contract Law</p>
                <p><i class="fa-regular fa-circle-dot"></i>Business and Corporate Law</p>
                <p><i class="fa-regular fa-circle-dot"></i>Real Estate Law</p>

                <h2>EDUCATION & BAE ADMISSION</h2>
                <p>BA, Columbia College; 2001</p>
                <h3>___</h3>
                <p>Master of Law, 2007. UK University</p>
                <h3>___</h3>
                <p>Admitted to the Bar since 2013</p>
                <h3>___</h3>
                <p>Member of the International Bar Association</p>
                <h3>___</h3>
                <p>Member of the London City Bar Association</p>
                <h3>___</h3>
                <p>Speaker of GAFTA Professional Development Programmes</p>

                <h2>MY SKILLS</h2>
                <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into</p>

                <div className="skillsheading">
                <h5 className='skillName'>Practice Area</h5>
                <h5 className='skillPerc'>85%</h5>
                </div>
                <div className="progressBar">
                <ProgressBar animated variant='warning' now={85} />
                </div>

                <div className="skillsheading">
                <h5 className='skillName'>Firm Size</h5>
                <h5 className='skillPerc'>70%</h5>
                </div>
                <div className="progressBar">
                <ProgressBar animated variant='warning' now={70} />
                </div>

                <div className="skillsheading">
                <h5 className='skillName'>Happy Customer</h5>
                <h5 className='skillPerc'>100%</h5>
                </div>
                <div className="progressBar">
                <ProgressBar animated variant='warning' now={100} />
                </div>

                <div className="skillsheading">
                <h5 className='skillName'>Success Case</h5>
                <h5 className='skillPerc'>90%</h5>
                </div> 
                <div className="progressBar">
                <ProgressBar animated variant='warning' now={90} />
                </div> 
                            
                
    
            </div>


            
        </div>
    );
}

export default biographyPage;