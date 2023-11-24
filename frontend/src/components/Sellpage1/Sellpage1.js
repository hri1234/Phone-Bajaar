import React from 'react'
import pic1 from '../../assets/images/Categories/category-1.jpg'
import pic2 from '../../assets/images/Categories/category-2.jpg'
import pic3 from '../../assets/images/Categories/category-3.jpg'
import pic4 from '../../assets/images/Categories/category-4.jpg'
import pic5 from '../../assets/images/Categories/category-5.jpg'
import './Sellpage1.css'

const Sellpage1 = () => {
  return (
    <div>
      <>
       {/* Main Banner Area Start */}
       <div class="main-banner" id="top" style={{marginTop:"-135px"}}>
                <div class="container-fluid">
                    <div class="row">
                          <div class="col-lg-6">
                            <div class="left-content">
                                <div class="thumb">
                                    <div class="inner-content">
                                        <h5 style={{color:"black"}}>Man's fashion </h5>
                                        <span></span>
                                        <div class="main-border-button">
                                        </div>
                                    </div>
                                    <img src={pic2} alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="right-content">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="right-first-image">
                                            <div class="thumb">
                                                <div class="inner-content">
                                                    <h5  style={{color:"black", fontWeight:"700"}}>Women</h5>
                                                    <p  style={{color:"black", fontWeight:"700"}}>Best Clothes For Women</p>
                                                </div> 
                                                <img src={pic1} />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="right-first-image">
                                            <div class="thumb">
                                                <div class="inner-content">
                                                    <h5  style={{color:"black", fontWeight:"700"}}>Men</h5>
                                                    <p  style={{color:"black", fontWeight:"700"}}>Best Clothes For Men</p>
                                                </div>  
                                                <img src={pic3} />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="right-first-image">
                                            <div class="thumb">
                                                <div class="inner-content">
                                                    <h5  style={{color:"black", fontWeight:"700"}}> Women</h5>
                                                    <p  style={{color:"black", fontWeight:"700"}}>Best Cosmetics</p>
                                                </div>  
                                                <img src={pic4} />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="right-first-image">
                                            <div class="thumb">
                                                <div class="inner-content">
                                                    <h5  style={{color:"black", fontWeight:"700"}}>Accessories</h5>
                                                    <p  style={{color:"black", fontWeight:"600"}}>Best Trend Accessories</p>
                                                </div>
                                                <img src={pic5} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* banner Area end  */}
           
      </>
    </div>
  )
}

export default Sellpage1
