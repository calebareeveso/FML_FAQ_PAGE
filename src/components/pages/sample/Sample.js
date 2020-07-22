import React from 'react';
import SampleCss from './Sample.module.css'
import Navbar from '../../Navbar';
import Footer from '../../Footer';


const Sample = () => {
    return(
      <>
       <Navbar />
        <div className={SampleCss.sample}>
         
            <h1>Sample Page</h1>
          
        </div>
        <Footer />
      </>
    )
}

export default Sample;