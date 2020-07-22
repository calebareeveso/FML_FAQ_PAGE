import React from 'react';
import FQACss from './FQA.module.css'
import seach from './search.svg'
import Navbar from '../../Navbar';
import Footer from '../../Footer';


const FQA = () => {
  
     
    function handleClick(e) {
        e.preventDefault();
        document.getElementById("info1").classList.toggle(FQACss.none);
        document.getElementById("info1-s-1").classList.toggle(FQACss.none);
        document.getElementById("info1-s-2").classList.toggle(FQACss.show);
      }

      function handleClick1(e) {
        e.preventDefault();
        
        document.getElementById("info2").classList.toggle(FQACss.show);
        document.getElementById("info2-s-1").classList.toggle(FQACss.none);
        document.getElementById("info2-s-2").classList.toggle(FQACss.show);
      }

      function handleClick2(e) {
        e.preventDefault();
        document.getElementById("info3").classList.toggle(FQACss.show);
        document.getElementById("info3-s-1").classList.toggle(FQACss.none);
        document.getElementById("info3-s-2").classList.toggle(FQACss.show);
      }

      function handleClick3(e) {
        e.preventDefault();
        document.getElementById("info4").classList.toggle(FQACss.show);
        document.getElementById("info4-s-1").classList.toggle(FQACss.none);
        document.getElementById("info4-s-2").classList.toggle(FQACss.show);
      }
   
    return(
        <>
        <Navbar />
        <div className={FQACss.fqa}>
            <div className={FQACss.container}>
                <h1 className={FQACss.h1}>How can we help you</h1>
                <div className={FQACss.grid}>
                <input className={FQACss.input1} type="text"  placeholder="Describe your issue"></input><button  className={FQACss.btn} >
                    <img src={seach}></img>
                </button>
                </div>
                <p className={FQACss.p}>You can also browse the topics below to find what you’re looking for</p>
            </div>
           <div className={FQACss.questions}>
                <div className={FQACss.container1}>
                
                <ul>
                     <h1 className={FQACss.h2}>Getting Started</h1>
                    <li className={FQACss.fqaLinks}>Funding</li>
                    <li className={FQACss.fqaLinks}>Menu III</li>
                    <li className={FQACss.fqaLinks}>Menu IV</li>
                    <li className={FQACss.fqaLinks}>Menu V</li>
                </ul>
                </div>               
                <div  >
                <h1 className={FQACss.h3}>Getting Started</h1>
                <div className={FQACss.container2} >
                    <div className={FQACss.headInfo}>
                        <p className={FQACss.pTop}>What is FundMy<span className={FQACss.red} >Laptop</span> and how does it work ? </p> <p onClick={handleClick}  ><span className={FQACss.minplus} id="info1-s-1">-</span><span className={FQACss.minplus2} id="info1-s-2">+</span></p>
                    </div>
                    <div className={FQACss.divP2show} id="info1">
                        <p className={FQACss.p2} >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex odit rem amet sed! Minus maiores aperiam, saepe, magnam voluptate at nam repellendus cumque aliquid tempore, excepturi eum nesciunt in a!
                        </p>
                    </div>
                </div>

                {/* second */}
                <div className={FQACss.container2} >
                    <div className={FQACss.headInfo}>
                        <p  className={FQACss.pTop}>In what countries can i apply for a laptop ? </p> <p onClick={handleClick1} ><span className={FQACss.minplus} id="info2-s-1">+</span><span className={FQACss.minplus2} id="info2-s-2">-</span></p>
                    </div>
                    <div id="info2" className={FQACss.divP2} >
                        <p  className={FQACss.p2} >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex odit rem amet sed! Minus maiores aperiam, saepe, magnam voluptate at nam repellendus cumque aliquid tempore, excepturi eum nesciunt in a!
                        </p>
                    </div>
                </div>

                {/* thried */}

                <div className={FQACss.container2} >
                    <div className={FQACss.headInfo}>
                        <p  className={FQACss.pTop}>Question III ? </p><p onClick={handleClick2} ><span className={FQACss.minplus} id="info3-s-1">+</span><span className={FQACss.minplus2} id="info3-s-2">-</span></p>
                    </div>
                    <div className={FQACss.divP2} id="info3">
                        <p className={FQACss.p2}>
                        Lorem ipsum dolor sit amet, consectetur adipisiccing elit. Ex odit rem amet sed! Minus maiores aperiam, saepe, magnam voluptate at nam repellendus cumque aliquid tempore, excepturi eum nesciunt in a!
                        </p>
                    </div>
                </div>

                {/* forth */}

                <div className={FQACss.container2} >
                    <div className={FQACss.headInfo}>
                    <p className={FQACss.pTop}>Question Iv ? </p><p onClick={handleClick3} ><span className={FQACss.minplus} id="info4-s-1">+</span><span className={FQACss.minplus2} id="info4-s-2">-</span></p>
                    </div>
                    <div className={FQACss.divP2} id="info4">
                        <p className={FQACss.p2}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex odit rem amet sed! Minus maiores aperiam, saepe, magnam voluptate at nam repellendus cumque aliquid tempore, excepturi eum nesciunt in a!
                        </p>
                    </div>
                </div>
                </div>               
           </div>
           <div className={FQACss.pdT}><h1 className={FQACss.h1}> Looking For Something Else ?</h1>
            <div className={FQACss.center}>
                <a  className={FQACss.contactBtn}>Contact us <span className={FQACss.greaterthan}>&gt;</span></a>
            </div>  </div>        
        </div>
        <Footer />
        </>
    )
}

export default FQA;