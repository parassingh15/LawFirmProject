import '../style/startPageComponent.css';
import Logo from '../images/LawLogo.png';

function startPageComponent() {
    return (
        <div className='startPageComponentMainDiv'>
            <div className="achievementsDiv">
                <div className="logoImg">
                    <img className='Logo' src={Logo} alt="" />
                </div>

                <div className="acievments">
                <div className="target">
                    <i class="fa-solid fa-bullseye"></i><h5 className='h5'>  Number #1</h5>
                    <p>Law Firm in India</p>
                </div>

                <div className="awards">
                    <i class="fa-regular fa-star"></i><h5 className='h5'>  Have Won Over</h5>
                    <p>30+ Law Firm Awards</p>
                </div>

                <div className="trust">
                    <i class="fa-solid fa-earth-americas"></i><h5 className='h5'>  Trusted By</h5>
                    <p>10,000+ Clients</p>
                </div>

                <div className="consultBtnDiv">
                    <a href="#ContactInfoMainDiv"><button className='consultBtn'><i class="fa-regular fa-comment"></i>FREE CONSULTANT</button></a>
                    
                </div>
                </div>
            </div>

            <div className="headings">
                <h1>Professional Law Firm</h1>
                <p>We are leading Law Firm in financial and business industry. with more then 20 years of experience.</p>
                <a href="#freeConsultationContent"><button  className='contactNowtBtn'>CONTACT NOW<i class="fa-solid fa-arrow-right-long"></i></button></a>
            </div>
        </div>
    );
}

export default startPageComponent;