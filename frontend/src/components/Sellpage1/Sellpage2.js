import React from 'react'
import './Sellpage1.css'
import pic6 from '../../assets/images/instagram/insta-1.jpg'
import pic7 from '../../assets/images/instagram/insta-2.jpg'
import pic8 from '../../assets/images/instagram/insta-3.jpg'
import pic9 from '../../assets/images/instagram/insta-4.jpg'
import pic10 from '../../assets/images/instagram/insta-5.jpg'
import pic11 from '../../assets/images/instagram/insta-6.jpg'
const Sellpage2 = () => {
    return (
        <>
            {/* Social Area start  */}

            <section class="section" id="social">
              
                <div class="container-fluid">
                    <div class="row images">
                        <div class="col-2">
                            <div class="thumb">
                                <div class="icon">
                                    <h6>Fashion</h6>
                                    <i class="fa fa-instagram"></i>
                                </div>
                                <img src={pic6} alt="" />
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="thumb">
                                <div class="icon">
                                    <h6>New</h6>
                                    <i class="fa fa-instagram"></i>
                                </div>
                                <img src={pic7} alt="" />
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="thumb">
                                <div class="icon">
                                    <h6>Brand</h6>
                                    <i class="fa fa-instagram"></i>
                                </div>
                                <img src={pic8} alt="" />
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="thumb">
                                <div class="icon">
                                    <h6>Makeup</h6>
                                    <i class="fa fa-instagram"></i>
                                </div>
                                <img src={pic9} alt="" />
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="thumb">
                                <div class="icon">
                                    <h6>Leather</h6>
                                    <i class="fa fa-instagram"></i>
                                </div>
                                <img src={pic10} alt="" />
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="thumb">
                                <div class="icon">
                                    <h6>Shirt</h6>
                                    <i class="fa fa-instagram"></i>
                                </div>
                                <img src={pic11} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Social Area Ends  */}
        </>
    )
}

export default Sellpage2;
