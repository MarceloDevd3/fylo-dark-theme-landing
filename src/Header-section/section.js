import React from 'react';
import bgImgBottom0 from '../images/bg-curvy-mobile.svg';
import bgImgBottom1 from '../images/bg-curvy-desktop.svg';

export default function HeaderSection(props) {
  return (
    <section className='d-flex header-section direction-column all-to-center-0'>
      <div className='bg-image'>
        <img src={bgImgBottom0} alt="" className='visible0' />
        <img src={bgImgBottom1} alt="" className='visible1' />
      </div>
     <div className='bg'>
     <div className="section--img">
        <img src={props.SectionImg} alt={props.altImg} className='z-show' />
      </div>
      <div className='info-block '>
        <div id="info">
        <h1 className='section-title z-show'> All your files in one secure location, <br className='break-line' /> accessible anywhere.</h1>
        <p className='section-txt z-show'>Fylo stores all your most important files in one secure location.<br className='break-line' />
          Access them wherever you need, share and collaborate with <br className='break-line' /> friends family, and co-workers.
        </p>
        </div>
        <div className='btn-block-item z-show'>
          <button className='btn btn-start z-show'>Get Started</button>
        </div>
      </div>
     </div>
    </section>
  )
}