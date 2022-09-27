import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import './App.css';
const Contact = () => {
  return (
    <div>
          <div className='duo' data-aos="fade-up">
    <img src='imeges\xbg_4.jpg.pagespeed.ic.RltLC5r6zR.webp' />
   
    <h1>Contact Us
    <br></br>
    <Link style={{ color:' rgb(44, 83, 10)'}} to="/Home">Home</Link><span>Contact</span>
    </h1>
    <h6>.</h6>
    </div>
    <div className='se33'>
    <div className='container'>
    <Form style={{width: '100%', padding:'20px', position:'relative' , bottom: '800px', backgroundColor:" rgb(245, 241, 241)"}}>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Enter Name" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27640.33348692258!2d31.50780485020157!3d30.006959400463565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145822cffcd270e7%3A0x98b73d687889fd8!2z2YXYr9mK2YbYqSDYp9mE2YLYp9mH2LHYqSDYp9mE2KzYr9mK2K_YqdiMINmF2K3Yp9mB2LjYqSDYp9mE2YLYp9mH2LHYqeKArA!5e0!3m2!1sar!2seg!4v1664169148906!5m2!1sar!2seg" width="100%" height="450" style={{position:'relative' , bottom: '600px'}} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
   
    </div>
    </div>
    <footer class="footer text-center" data-aos="fade-up"style={{ position:'relative' , bottom: '500px'}}>
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

export default Contact