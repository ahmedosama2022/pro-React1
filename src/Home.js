
import React, { useEffect, useRef, useState }from 'react'
import { BrowserRouter, Link, Route, Routes, NavLink } from 'react-router-dom'
import About from './About'
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import { Swiper, SwiperSlide } from "swiper/react";
import { Icon } from '@iconify/react';
import Aos from 'aos';
import "aos/dist/aos.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./App.css";

// import required modules
import { Pagination } from "swiper";

import ListGroup from 'react-bootstrap/ListGroup';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { fontSize } from '@mui/system';
import Broperties from './Broperties';
const Home = () => {
  useEffect(() => {
    Aos.init({duration:500});
  }, []);
  return (
  <div>
    
<div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel"data-aos="fade-right">
  <div className="carousel-inner">
    <div className="carousel-item active">
     <div className='him1'>
      <h6>.</h6>
      <h1>Your Property Is Our Priority</h1>
      <p>A sma1 river named Duden flows by their place and supplies it with the necessary regelialia.</p>
        <p> It is a paradisematic country, in which roasted </p>
        <p> parts of sentences fly into your mouth.</p>
         <button>Learn More</button>
     </div>
      <img src="\imeges\xbg_1.jpg.pagespeed.ic.ECkgENYrAq.webp" className="d-block w-100" alt="..."height="700px" width="200vh" />
    </div>
    <div className="carousel-item">
    <div className='him1'>
    <h6>.</h6>
      <h1>Modern House Make Better Life</h1>
      <p>A sma1 river named Duden flows by their place and supplies it with the necessary regelialia.</p>
        <p> It is a paradisematic country, in which roasted </p>
         <p>parts of sentences fly into your mouth.</p>
         <button>Learn More</button>
     </div>
      <img src="\imeges\xbg_2.jpg.pagespeed.ic.dI0Ye6FBiM.webp" className="d-block w-100" alt="..." height="700px"/>
    </div>
    <div className="carousel-item">
    <div className='him1'>
    <h6>.</h6>
      <h1>Your Property Is Our Priority</h1>
      <p>A sma1 river named Duden flows by their place and supplies it with the necessary regelialia.</p>
        <p> It is a paradisematic country, in which roasted </p>
         <p>parts of sentences fly into your mouth.</p>
         <button>Learn More</button>
     </div>
    <img src="\imeges\xbg_3.jpg.pagespeed.ic.s6WS1uIYUY.webp" className="d-block w-100" alt="..." height="700px"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <i className="carousel-control-prev-icon" aria-hidden="true"></i>
    <i className="visually-hidden">Previous</i>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <i className="carousel-control-next-icon" aria-hidden="true"></i>
    <i className="visually-hidden">Next</i>
  </button>
</div>

<div className='sec2'data-aos="fade-right">
  <div className='container'>
  <p data-aos="fade-up" >OAKBERRY CATEGORIES</p>
  <h1 data-aos="fade-up">Explore Our Categories & Places</h1>
  </div>
  
</div>
<div className='sec6'data-aos="fade-right">
<CardGroup data-aos="fade-left">
  <Card style={{ margin: "30px"}}>
    <CardImg
      alt="Card image cap"
      src="imeges\xwork-1.jpg.pagespeed.ic.r4YD_gEfJx (1).webp"
      top
      width="200px"
      height="250px"
      
    />
    <CardBody data-aos="fade-left">
      <CardTitle tag="h5">
      Your Property Is Our Priority
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        A sma1 river named Duden flows by their place and supplies it with the necessary regelialia.
      </CardSubtitle>
     
     
    </CardBody >
  </Card>
  <Card  style={{ margin: "30px"}}>
    <CardImg
      alt="Card image cap"
      src="imeges\xwork-3.jpg.pagespeed.ic.CB-wwkvPAl.webp"
      top
      width="100%"
      height="250px"
    />
    <CardBody>
      <CardTitle tag="h5">
      Let Your Home Be Unique & Stylist
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
       A sma1 river named Duden flows by their place and supplies it with the necessary regelialia.
      </CardSubtitle>
      
    </CardBody>
  </Card>
  <Card  style={{ margin: "30px"}}>
    <CardImg
      alt="Card image cap"
      src="imeges\xwork-2.jpg.pagespeed.ic.FiqwqttO-0.webp"
      top
      width="100%"
      height="250px"
    />
    <CardBody>
      <CardTitle tag="h5">
      Modern House Make Better Life
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        A sma1 river named Duden flows by their place and supplies it with the necessary regelialia.
      </CardSubtitle>
     
    </CardBody>
  </Card>
</CardGroup>
</div>
<div className='sec7'data-aos="fade-right">
<div class="col-md-4">
<ul class="places-list">
<li>
<a href="#">
Atlanta
<i>100 Properties</i>
</a>
</li>
<li>
<a href="#">
Newyork
<i>200 Properties</i>
</a>
</li>
<li>
<a href="#">
Texas
<i>200 Properties</i>
</a>
</li>
<li>
<a href="#">
North Carolina
<i>200 Properties</i>
</a>
</li>
</ul>
<hr></hr>
</div>
<div class="col-md-4 " data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
<ul class="places-list">
<li>
<a href="#">
California
<i>100 Properties</i>
</a>
</li>
<li>
<a href="#">
cairo
<i>200 Properties</i>
</a>
</li>
<li>
<a href="#">
Florida
<i>200 Properties</i>
</a>
</li>
<li>
<a href="#">
 Carolina
<i>200 Properties</i>
</a>
</li>
</ul>
<hr></hr>
</div>
<div class="col-md-4" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
<ul class="places-list">
<li>
<a href="#">
California
<i>100 Properties</i>
</a>
</li>
<li>
<a href="#">
Tennessee
<i>200 Properties</i>
</a>
</li>
<li>
<a href="#">
Texas
<i>200 Properties</i>
</a>
</li>
<li>
<a href="#">
North Carolina
<i>200 Properties</i>
</a>
</li>
</ul>
<hr></hr>
</div>

</div>
<div className='sec5'data-aos="fade-right">
<div className='container'>
  
<p data-aos="fade-in" data-aos-delay="500" data-aos-duration="1000">OUR PROPERTIES</p>
<h1 data-aos="fade-in">Featured Properties</h1>
</div>
<div class="responsive" data-aos="fade-right">
  <div class="gallery">
    
      <img src="imeges\xgallery-2.jpg.pagespeed.ic.-RIUyvBQPB.webp" alt="Cinque Terre" width=" 100%" height="250"/>
      <a href='#'>$300</a>
    
    <div class="desc"> <img src='imeges\xperson_1.jpg.pagespeed.ic.a2MnMHMs44.webp'/>
      <h4>John Dorf</h4></div>
      <h5>Sunny Loft Property</h5>
      <div className='icon'>
        <i class="ion-ios-pin" style={{color:"green", fontSize:'30px', position:"relative", bottom:'10px' }}></i>
        <h6> New York Rent</h6>

      </div>
  </div>
</div>


<div class="responsive" data-aos="fade-left">
  <div class="gallery">
    
      <img src="imeges\xgallery-3.jpg.pagespeed.ic.9RqS9yQsRS.webp" alt="Forest" width=" 100%" height="250"/>
      <a href='#'>$300</a>
   
    <div class="desc">
      <img src='imeges\xperson_1.jpg.pagespeed.ic.a2MnMHMs44.webp'/>
      <h4>John Dorf</h4>
    </div>
    <h5>Sunny Loft Property</h5>
    <div className='icon'>
        <i class="ion-ios-pin" style={{color:"green", fontSize:'30px', position:"relative", bottom:'10px' }}></i>
        <h6> New York Rent</h6>

      </div>
  </div>
</div>

<div class="responsive" data-aos="fade-right">
  <div class="gallery">
    
      <img src="imeges\xgallery-5.jpg.pagespeed.ic.LHQsQC-F4u.webp" alt="Northern Lights" width=" 100%" height="250"/>
      <a href='#'>$300</a>
    
    <div class="desc"> <img src='imeges\xperson_1.jpg.pagespeed.ic.a2MnMHMs44.webp'/>
      <h4>John Dorf</h4></div>
      <h5>Sunny Loft Property</h5>
      <div className='icon'>
        <i class="ion-ios-pin" style={{color:"green", fontSize:'30px', position:"relative", bottom:'10px' }}></i>
        <h6> New York Rent</h6>

      </div>
      
  </div>
</div>

<div class="responsive" data-aos="fade-left">
  <div class="gallery">
    
      <img src="imeges\xgallery-6.jpg.pagespeed.ic.aKbyC3YLls.webp" alt="Mountains" width=" 100%" height="250"/>
      <a href='#'>$300</a>
    
    <div class="desc"> <img src='imeges\xperson_1.jpg.pagespeed.ic.a2MnMHMs44.webp'/>
      <h4>John Dorf</h4></div>
      <h5>Sunny Loft Property</h5>
      <div className='icon'>
        <i class="ion-ios-pin" style={{color:"green", fontSize:'30px', position:"relative", bottom:'10px' }}></i>
        <h6> New York Rent</h6>

      </div>
  </div>
</div>

</div>

<div className='viduo'data-aos="fade-right">
  <img src='imeges\xbg_4.jpg.pagespeed.ic.RltLC5r6zR.webp' />
  <h1>Modern House Video</h1>
  <p>Far far away, behind the word mountains, far from the countries</p> 
  <p>Vokalia and Consonantia, there live the blind texts.</p>
  <i class="ion-ios-play" ></i>
</div>
<section className='sec10 '  data-aos="fade-left">


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

<div className='sec12'  data-aos="fade-right">
<img  src='imeges\xbg_4.jpg.pagespeed.ic.RltLC5r6zR.webp' />

<h1>Find Best Place For Leaving</h1>
<p>Find Best Place For Leaving</p>
<button>Get in touch</button>
</div>

<div className='sec2' data-aos="fade-left">
  <div className='container' style={{ position:'relative' , bottom:'1050px'}}>
  <p data-aos="fade-in" data-aos-delay="500" data-aos-duration="1000">TESTIMONIAL</p>
  <h1 data-aos="fade-in">Clients We Help</h1>
  </div>
  
</div>
<section className='sec14'  data-aos="fade-left">
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
<div className='sec2' style={{ position:'relative' , top:'200px'}} data-aos="fade-down-left">
  <div className='container' style={{ position:'relative' , bottom:'1050px'}}>
  <p data-aos="fade-in" data-aos-delay="500" data-aos-duration="1000">MEETS OUR AGENTS</p>
  <h1 data-aos="fade-in">Our Agents</h1>
  </div>
  
</div>

<section className='sec15'data-aos="fade-down-left">
 
    <div className='row'>
<Card style={{ width: '18rem', margin: '20px'  }}>
      <Card.Img variant="top" src="imeges\xteam-1.jpg.pagespeed.ic.bIlCy6xZVc.webp" style={{width:'290px',position:'relative' , right:'15px'}}/>
      <Card.Body style={{background: ' #5ea51d' ,width:'290px',position:'relative' , right:'15px'}}>
        <Card.Title style={{color:'white'}}>Mike Bochs</Card.Title>
        <Card.Text style={{color:'white'}}>
        LISTING 10 PROPERTIES
        </Card.Text><a href='#'><Icon icon="bxl:facebook-circle" /></a><a href='#'><Icon icon="akar-icons:twitter-fill" /></a>
       <a href='#'> <Icon icon="ant-design:google-circle-filled" /></a>
       <a href='#'><Icon icon="akar-icons:instagram-fill" /></a>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', margin: '20px'  }}>
      <Card.Img variant="top" src="imeges\xteam-2.jpg.pagespeed.ic.lVGVM1ZqjP.webp" style={{width:'290px',position:'relative' , right:'15px'}}/>
      <Card.Body style={{background: ' #5ea51d' ,width:'290px',position:'relative' , right:'15px'}}>
        <Card.Title style={{color:'white'}}>Mike Bochs</Card.Title>
        <Card.Text style={{color:'white'}}>
        LISTING 10 PROPERTIES
        </Card.Text><a href='#'><Icon icon="bxl:facebook-circle" /></a><a href='#'><Icon icon="akar-icons:twitter-fill" /></a>
       <a href='#'> <Icon icon="ant-design:google-circle-filled" /></a>
       <a href='#'><Icon icon="akar-icons:instagram-fill" /></a>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', margin: '20px' }}>
      <Card.Img variant="top" src="imeges\xteam-3.jpg.pagespeed.ic.ZduX31RDtO.webp" style={{width:'290px',position:'relative' , right:'15px'}}/>
      <Card.Body style={{background: ' #5ea51d' ,width:'290px',position:'relative' , right:'15px'}}>
        <Card.Title style={{color:'white'}}>Jessica Moore</Card.Title>
        <Card.Text style={{color:'white'}}>
        LISTING 10 PROPERTIES
        </Card.Text><a href='#'><Icon icon="bxl:facebook-circle" /></a><a href='#'><Icon icon="akar-icons:twitter-fill" /></a>
       <a href='#'> <Icon icon="ant-design:google-circle-filled" /></a>
       <a href='#'><Icon icon="akar-icons:instagram-fill" /></a>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', margin: '20px'  }}>
      <Card.Img variant="top" src="imeges\xteam-4.jpg.pagespeed.ic.awW0IeAxxv.webp" style={{width:'290px',position:'relative' , right:'15px'}}/>
      <Card.Body style={{background: ' #5ea51d' ,width:'290px',position:'relative' , right:'15px'}}>
        <Card.Title style={{color:'white'}}>Sarah Geronimo</Card.Title>
        <Card.Text style={{color:'white'}}>
        LISTING 10 PROPERTIES
        </Card.Text><a href='#'><Icon icon="bxl:facebook-circle" /></a><a href='#'><Icon icon="akar-icons:twitter-fill" /></a>
       <a href='#'> <Icon icon="ant-design:google-circle-filled" /></a>
       <a href='#'><Icon icon="akar-icons:instagram-fill" /></a>
      </Card.Body>
    </Card>
    
   
  
    </div>
</section>

<div className='sec2' style={{ position:'relative' , top:'330px'}} data-aos="fade-down-left">
  <div className='container' style={{ position:'relative' , bottom:'1050px'}}>
  
  <h1 data-aos="fade-in">Recent Blog</h1>
  </div>
  
</div>
 
<section className='sec22' data-aos="fade-left">
  <div className='row'>

    <Card style={{ width: '16rem' , height:'500px', margin: '30px' }}>
      <Card.Img variant="top" src="imeges\ximage_1.jpg.pagespeed.ic.K--6tMW6Tl.webp"style={{ width: '16rem' , height:'300px', position:'relative' , right:'13px' }} />
      <Card.Body>
      <Card.Title>New Home Sales Picked Up in December</Card.Title>
        <Card.Text style={{color:'green'}}>
        ADMIN DEC. 01, 20203
        </Card.Text>
        <ListGroup.Item style={{color:'gray'}}>A small river named Duden flows by their
           place and supplies it with 
           the necessary regelialia</ListGroup.Item> 
      </Card.Body>
      
       
      
    </Card>
    <Card style={{ width: '16rem' , height:'500px', margin: '30px' }}>
      <Card.Img variant="top" src="imeges\ximage_2.jpg.pagespeed.ic.yG61gYt8iz.webp"style={{ width: '16rem' , height:'300px', position:'relative' , right:'13px' }} />
      <Card.Body>
      <Card.Title>New Home Sales Picked Up in December</Card.Title>
        <Card.Text style={{color:'green'}}>
        ADMIN DEC. 01, 20203
        </Card.Text>
        <ListGroup.Item style={{color:'gray'}}>A small river named Duden flows by their
           place and supplies it with 
           the necessary regelialia</ListGroup.Item> 
      </Card.Body>
      
       
      
    </Card>
    <Card style={{ width: '16rem' , height:'500px', margin: '30px' }}>
      <Card.Img variant="top" src="imeges\ximage_3.jpg.pagespeed.ic.L063JoXyYB.webp"style={{ width: '16rem' , height:'300px', position:'relative' , right:'13px' }} />
      <Card.Body>
      <Card.Title>New Home Sales Picked Up in December</Card.Title>
        <Card.Text style={{color:'green'}}>
        ADMIN DEC. 01, 20203
        </Card.Text>
        <ListGroup.Item style={{color:'gray'}}>A small river named Duden flows by their
           place and supplies it with 
           the necessary regelialia</ListGroup.Item> 
      </Card.Body>
      
       
      
    </Card>
    <Card style={{ width: '16rem' , height:'500px', margin: '30px' }}>
      <Card.Img variant="top" src="imeges\ximage_4.jpg.pagespeed.ic.cfzO3eGw69.webp"style={{ width: '16rem' , height:'300px', position:'relative' , right:'13px' }} />
      <Card.Body>
      <Card.Title>New Home Sales Picked Up in December</Card.Title>
        <Card.Text style={{color:'green'}}>
        ADMIN DEC. 01, 20203
        </Card.Text>
        <ListGroup.Item style={{color:'gray'}}>A small river named Duden flows by their
           place and supplies it with 
           the necessary regelialia</ListGroup.Item> 
      </Card.Body>
      
       
      
    </Card>
    
  
  </div>
</section>

<section className='sec55' data-aos="fade-left">
 
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


export default Home