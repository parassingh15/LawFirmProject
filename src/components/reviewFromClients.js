import React from 'react';
import '../style/reviewFromClients.css';

function reviewFromClients() {
    return (
        <div className='reviewFromClientsMainDiv'>
            <div className="reviewFromClientsContentBoxDiv">
                <div className="reviewFromClientsContentDiv">
                    <h1>Reviews From Our Clients</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia voluptatibus maxime maiores sunt non sequi, fugiat recusandae perspiciatis vel animi voluptates dicta corrupti architecto voluptatum quae quidem, ea veniam sapiente?</p>
                </div>
                <div className="reviewFromClientsNumbersDiv">
                    <div className="reviewFromClientsNumberBox">
                        <h1>1000+</h1>
                        <p>Client Consultations</p>
                    </div>

                    <div className="reviewFromClientsNumberBox">
                        <h1>95%</h1>
                        <p>Successful Rate</p>
                    </div>

                    <div className="reviewFromClientsNumberBox">
                        <h1>30+</h1>
                        <p>Awards Recieved</p>
                    </div>
                </div>

            </div>
            
        </div>
    );
}

export default reviewFromClients;