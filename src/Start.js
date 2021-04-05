import React from 'react';
import mainImage from './main-img.jpg'
import { Link } from 'react-router-dom'

function Start(props) {
    return (
        <div className="start-page">
            <div className='content'>
                <img className="animated bounceInUp" src={mainImage} alt="Sport Fans"/>
                <p className="animated bounceInLeft" >A REVOLUTION IN AVIATION TRAINING <br/>NEXT-GENERATION SOFTWARE SOLUTIONS FOR INDIVIDUALS, AIRLINES & ATOS <br/> <strong>Pick your plan!</strong></p>
                <Link to="/quiz" className="animated bounceInRight start-button">Free Plan</Link>
                <Link to="/documentation" className="animated bounceInRight start-button">Gold Plan</Link>
            </div>
        </div>
    );
}

export default Start;
