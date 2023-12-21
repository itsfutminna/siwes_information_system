// src/pages/TrainingUnit.js
import React from 'react';
import cordi from '../assets/cordinator-siwes.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faLinkedin, faSkype, faTwitter}  from '@fortawesome/free-brands-svg-icons';


const TrainingUnit = () => {
  return (
    <><div className="bg-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center mb-4 text-Futpurple">ITS Training and Siwes Unit</h1>
      <div className="flex flex-col items-center mb-4">
        <img src="cordinator-siwes.png" alt="ITS Training Unit Image"  className="w-64 h-auto mb-2 transition-width duration-300 transform hover:scale-105"/>
       <div className='text-center mb-8'>
        <h1 className='font-bold'>Mr Mohammed Isah (Siwes Cordinator) </h1>
        <p>
            - PhD, Information Communication System Engineering, Beijing University of Posts and Telecommunications, China.
            <br />
            - M.Tech Electrical and Computer Engineering, Federal University Of Technology Minna
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            More Detail
          </button>
       </div>
        <div className="flex items-center justify-center mt-4">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="mx-2">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="mx-2">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://www.skype.com/" target="_blank" rel="noopener noreferrer" className="mx-2">
          <FontAwesomeIcon icon={faSkype} size="2x" />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="mx-2">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      </div>

      </div>
      
    </div>
    </>
  );
};

export default TrainingUnit;

