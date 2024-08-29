import React from 'react';
import '../style/footer.css';
import Logo from '../images/LawLogo.png';
import { Link } from 'react-router-dom';


function footer() {
    return (
        <div className='footerMainDiv'>
            <div className="footerTopDiv">
            <div className="footerCol1">
                <div className="footercol1Line1">
                    <img className='footerLogo' src={Logo} alt="" />
                </div>

                <div className="footercol1Line2">
                    <p className='footerPara1'>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into.</p>
                </div>

                <div className="footercol1Line3">
                <span className="facebook"><i class="fa-brands fa-facebook-f"></i></span>
                <span className="linkdin"><i class="fa-brands fa-linkedin-in"></i></span>
                <span className="twitter"><i class="fa-brands fa-x-twitter"></i></span>
                <span className="instagram"><i class="fa-brands fa-instagram"></i></span>
                </div>

            </div>


            <div className="footerCol2">
                <div className="footercol2Line1">
                    <h4 className='footerHeading'>Contact Info</h4>
                </div>

                <div className="footercol2Line2">
                    <p className='footerPara'>Box 3233</p>
                    <p className='footerPara'>1810 Kings Way</p>
                    <p className='footerPara'>King Street, 5th Avenue, New York</p>                
                </div>

                <div className="footercol2Line3">
                    <p className='footerPara'>+91 987-6541-320</p> 
                    <p className='footerPara'>LawFirm@gmail.com</p>         
                </div>

            </div>

            <div className="footerCol3">
                <div className="footercol3Line1">
                    <h4 className='footerHeading'>Practice Area</h4>
                </div>

                <div className="footercol3Line2">
                    <p className='footerParaPracticeArea'>Family Violence</p>      
                    <p className='footerParaPracticeArea'>Car Accident Insurance</p>
                    <p className='footerParaPracticeArea'>Public Company Fraud</p>
                    <p className='footerParaPracticeArea'>Privacy Matter</p>
                    <p className='footerParaPracticeArea'>Failure of Apple Acquisition</p>          
                </div>
            </div>

            <div className="footerCol4">
                
                <div className="footercol3Line1">
                    <p className='footerParaPracticeArea'>Giving Million Air Its Wings</p>      
                    <p className='footerParaPracticeArea'>Making Sure It's Closed</p>
                    <p className='footerParaPracticeArea'>Nightmare on Wall Street</p>
                    <p className='footerParaPracticeArea'>Matix Tax Invation</p>          
                </div>
            </div>
            </div>
            <div className="copyrightDiv">
                <div className='copyrightText'>
                    <p className='footerMenuText'>Copyright 2024 LawFirm, All Right Reserved</p>
                </div>
                <div className="footerMenu">
                    <Link to="/" style={{ textDecoration: 'none', color: 'white' }}><p className='footerMenuText'>Home</p></Link>
                    <Link to="/attorneyPage" style={{ textDecoration: 'none' ,color: 'white'}}><p className='footerMenuText'>About</p></Link>
                    <p className='footerMenuText'>Case</p>
                    <p className='footerMenuText'>Privacy & Policy</p>


                </div>
            </div>

        </div>
    );
}

export default footer;