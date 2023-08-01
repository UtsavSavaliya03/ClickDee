import React from 'react';
import './FeatureBox.css';
import img1 from './Assets/img_1.png';

export default function FeatureBox(props) {
  return (
    <div className={`${props?.blue ? 'main-blue-container' : 'main-white-container'} col-6`}>
      <div>
        <img className='feature-img' src={props?.img} />
      </div>
      <div className='mt-4'>
        <h3 className='pl-4 feature-title'>{props?.title}</h3>
      </div>
      <div className='mt-4'>
        <p className='pl-4 feature-title-description'>{props?.description}</p>
      </div>
    </div>
  )
}
