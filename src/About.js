import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Icon } from '@iconify/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./App.css";

// import required modules
import { Pagination } from "swiper";
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <div>
      <div className='duo'  data-aos="fade-left">
  <img src='imeges\xbg_4.jpg.pagespeed.ic.RltLC5r6zR.webp' />
  <h1>About Us
  <br></br>
    <Link style={{ color:' rgb(44, 83, 10)'}} to="/Home">Home</Link><span>ABOUT</span>
  </h1>
  <h6>.</h6>
</div>

<section className='sec10' data-aos="fade-up">


<div className='row'>
<div className='nk'>
  <div className='container'>
  <p>ABOUT US</p>
  <h1>Oakberry A Real Estate Company</h1>
  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,</p>
  <p> there live the blind texts. Separated they live in Bookmarksgrove </p>
  <p> right at the coast of the Semantics, a large language ocean.</p>
  <div className='div11'>
    <div className='mm'>
    <h1>50</h1>
    <p>YEARS OF EXPERIENCED</p>
    </div>
    <div className='mm'>
    <h1>210K+</h1>
    <p>TOTAL PROPERTIES</p>
    </div>
   <div className='mm'>
   <h1>200</h1>
    <p>QUALIFIED REALTORS</p>
   </div>
    <div className='mm'>
      <h1>450</h1>
    <p>TOTAL BRANCHES</p>
     
    </div>
  </div>
  <div className='im'>
  
  <img src='imeges\xabout-1.jpg.pagespeed.ic.YT323mxuBO.webp' style={{height: '400px', width:'600px', position:'relative' , bottom:'0px'}}/>
  </div>
  <div className='vv'>
  <img src='imeges\xabout.jpg.pagespeed.ic.7OnUbTzGAK.webp' style={{height: '800px', width:'600px'}}/>
  </div>
  </div>
</div>
</div>

</section>

<div className='viduo' style={{ position:'relative' , bottom:'1500px'}} data-aos="fade-up">
  <img src='imeges\xbg_4.jpg.pagespeed.ic.RltLC5r6zR.webp' />
  <h1>Modern House Video</h1>
  <p>Far far away, behind the word mountains, far from the countries</p> 
  <p>Vokalia and Consonantia, there live the blind texts.</p>
  <i class="ion-ios-play"></i>
</div>

<div className='sec12' data-aos="fade-up">
<img  src='imeges\xbg_4.jpg.pagespeed.ic.RltLC5r6zR.webp' />

<h1>Find Best Place For Leaving</h1>
<p>Find Best Place For Leaving</p>
<button>Get in touch</button>
</div>

<div className='sec2' data-aos="fade-up">
  <div className='container' style={{ position:'relative' , bottom:'1050px'}}>
  <p data-aos="fade-in" data-aos-delay="500" data-aos-duration="1000">TESTIMONIAL</p>
  <h1 data-aos="fade-in">Clients We Help</h1>
  </div>
  
</div>
<section className='sec14' data-aos="fade-up">
  <div className='containar'>
<div className='row'>
  

  <Swiper
   breakpoints={{
    640: {
      width: 640,
      slidesPerView: 1,
    },
    768: {
      width: 768,
      slidesPerView: 2,
    },
  }}
       
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><div className='div112 col-lg-12 col-sm-1'>
<i class="fa-solid fa-quote-left"></i>
  <p>Far far away, behind the word mountains, far from </p>
    <p>the countries Vokalia and Consonantia,</p>
    <p> there live the blind texts.</p>
    <div className='gg'>
      <img src='imeges\xperson_1.jpg.pagespeed.ic.a2MnMHMs44.webp'/>
      <h1>Roger Scott</h1>
    </div>
    <p  style={{ position:'relative' , left:'120px',  color:' rgb(95, 165, 29) '}}>MARKETING MANAGER</p>
</div></SwiperSlide>
        <SwiperSlide><div className='div112 col-lg-12 col-sm-1'>
<i class="fa-solid fa-quote-left"></i>
  <p>Far far away, behind the word mountains, far from </p>
    <p>the countries Vokalia and Consonantia,</p>
    <p> there live the blind texts.</p>
    <div className='gg'>
      <img src='imeges\xperson_1.jpg.pagespeed.ic.a2MnMHMs44.webp'/>
      <h1>Roger Scott</h1>
    </div>
    <p  style={{ position:'relative' , left:'100px',  color:' rgb(95, 165, 29) '}}>MARKETING MANAGER</p>
</div></SwiperSlide>
        <SwiperSlide><div className='div112 col-lg-12 col-sm-1'>
<i class="fa-solid fa-quote-left"></i>
  <p>Far far away, behind the word mountains, far from </p>
    <p>the countries Vokalia and Consonantia,</p>
    <p> there live the blind texts.</p>
    <div className='gg'>
      <img src='imeges\xperson_1.jpg.pagespeed.ic.a2MnMHMs44.webp'/>
      <h1>Roger Scott</h1>
    </div>
    <p  style={{ position:'relative' , left:'100px',  color:' rgb(95, 165, 29) '}}>MARKETING MANAGER</p>
</div></SwiperSlide>
        <SwiperSlide><div className='div112 col-lg-12 col-sm-1'>
<i class="fa-solid fa-quote-left"></i>
  <p>Far far away, behind the word mountains, far from </p>
    <p>the countries Vokalia and Consonantia,</p>
    <p> there live the blind texts.</p>
    <div className='gg'>
      <img src='imeges\xperson_1.jpg.pagespeed.ic.a2MnMHMs44.webp'/>
      <h1>Roger Scott</h1>
    </div>
    <p  style={{ position:'relative' , left:'100px',  color:' rgb(95, 165, 29) '}}>MARKETING MANAGER</p>
</div></SwiperSlide>
        <SwiperSlide><div className='div112 col-lg-12 col-sm-1'>
<i class="fa-solid fa-quote-left"></i>
  <p>Far far away, behind the word mountains, far from </p>
    <p>the countries Vokalia and Consonantia,</p>
    <p> there live the blind texts.</p>
    <div className='gg'>
      <img src='imeges\xperson_1.jpg.pagespeed.ic.a2MnMHMs44.webp'/>
      <h1>Roger Scott</h1>
    </div>
    <p  style={{ position:'relative' , left:'100px',  color:' rgb(95, 165, 29) '}}>MARKETING MANAGER</p>
</div></SwiperSlide>
        <SwiperSlide><div className='div112 col-lg-12 col-sm-1'>
<i class="fa-solid fa-quote-left"></i>
  <p>Far far away, behind the word mountains, far from </p>
    <p>the countries Vokalia and Consonantia,</p>
    <p> there live the blind texts.</p>
    <div className='gg'>
      <img src='imeges\xperson_1.jpg.pagespeed.ic.a2MnMHMs44.webp'/>
      <h1>Roger Scott</h1>
    </div>
    <p  style={{ position:'relative' , left:'100px',  color:' rgb(95, 165, 29) '}}>MARKETING MANAGER</p>
</div></SwiperSlide>
        <SwiperSlide><div className='div112 col-lg-12 col-sm-1'>
<i class="fa-solid fa-quote-left"></i>
  <p>Far far away, behind the word mountains, far from </p>
    <p>the countries Vokalia and Consonantia,</p>
    <p> there live the blind texts.</p>
    <div className='gg'>
      <img src='imeges\xperson_1.jpg.pagespeed.ic.a2MnMHMs44.webp'/>
      <h1>Roger Scott</h1>
    </div>
    <p  style={{ position:'relative' , left:'100px',  color:' rgb(95, 165, 29) '}}>MARKETING MANAGER</p>
</div></SwiperSlide>
        <SwiperSlide><div className='div112 col-lg-12 col-sm-1'>
<i class="fa-solid fa-quote-left"></i>
  <p>Far far away, behind the word mountains, far from </p>
    <p>the countries Vokalia and Consonantia,</p>
    <p> there live the blind texts.</p>
    <div className='gg'>
      <img src='imeges\xperson_1.jpg.pagespeed.ic.a2MnMHMs44.webp'/>
      <h1>Roger Scott</h1>
    </div>
    <p  style={{ position:'relative' , left:'100px',  color:' rgb(95, 165, 29) '}}>MARKETING MANAGER</p>
</div></SwiperSlide>
        <SwiperSlide><div className='div112 col-lg-12 col-sm-1'>
<i class="fa-solid fa-quote-left"></i>
  <p>Far far away, behind the word mountains, far from </p>
    <p>the countries Vokalia and Consonantia,</p>
    <p> there live the blind texts.</p>
    <div className='gg'>
      <img src='imeges\xperson_1.jpg.pagespeed.ic.a2MnMHMs44.webp'/>
      <h1>Roger Scott</h1>
    </div>
    <p  style={{ position:'relative' , left:'100px',  color:' rgb(95, 165, 29) '}}>MARKETING MANAGER</p>
</div></SwiperSlide>
      </Swiper>
      </div>
</div>

  
</section>
<section className='sec55' data-aos="fade-up">
 
    <img src='imeges\xgallery-2.jpg.pagespeed.ic.-RIUyvBQPB.webp' style={{width:'300px' , height:'300px'}}/>
    <img src='imeges\xgallery-6.jpg.pagespeed.ic.aKbyC3YLls.webp' style={{width:'300px' , height:'300px'}}/>
    <img src='imeges\xgallery-5.jpg.pagespeed.ic.LHQsQC-F4u.webp' style={{width:'300px' , height:'300px'}}/>
    <img src='imeges\xgallery-3.jpg.pagespeed.ic.9RqS9yQsRS.webp' style={{width:'300px' , height:'300px'}}/>
    

</section>

<footer class="footer text-center" data-aos="fade-up">
            <div class="container">
                <div class="row">
                 
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <h4 class="text-uppercase mb-4">Location</h4>
                        <p class="lead mb-0">
                            2215 John Daniel Drive
                            <br />
                            Clark, MO 65243
                        </p>
                    </div>
                 
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <h4 class="text-uppercase mb-4">Around the Web</h4>
                        <a class="btn btn-outline-light btn-social mx-1" href="#!"><Icon icon="bxl:facebook-circle" /></a>
                        <a class="btn btn-outline-light btn-social mx-1" href="#!"><Icon icon="akar-icons:twitter-fill" /></a>
                        <a class="btn btn-outline-light btn-social mx-1" href="#!"><Icon icon="ant-design:google-circle-filled" /></a>
                        <a class="btn btn-outline-light btn-social mx-1" href="#!"><Icon icon="akar-icons:instagram-fill" /></a>
                    </div>
                    
                    <div class="col-lg-4">
                        <h4 class="text-uppercase mb-4">About Freelancer</h4>
                        <p class="lead mb-0">
                            Freelance is a free to use, MIT licensed  theme created by
                            
                            .
                        </p>
                    </div>
                </div>
            </div>
        </footer>

    </div>
  )
}

export default About