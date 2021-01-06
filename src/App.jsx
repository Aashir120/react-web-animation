import React,{useState} from 'react';
import Typical from 'react-typical'
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import {Navbar,Nav,Button,Container,Carousel,handleSelect,index,Row,Col} from 'react-bootstrap';
import './App.css';
function App() {
  AOS.init({
    duration: 1200,
  })
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
    <Container >
    <Navbar className="navbar" bg="light" variant="light">
    <Navbar.Brand href="#home"><img className="nav-img" src="https://junto.digital/wp-content/uploads/2019/01/logo-junto-main.png"/></Navbar.Brand>

    <Nav className="mr-auto side-nav">
      <Nav.Link className="nav-link" href="#"><a href="#">Home</a></Nav.Link>
      <Nav.Link className="nav-link" href="#"><a href="#">About Us</a></Nav.Link>
      <Nav.Link className="nav-link" href="#"><a href="#">Contact</a></Nav.Link>
      <Nav.Link className="nav-link" href="#"><a href="#">Services</a></Nav.Link>
      <Button className="button-start">Get Started <i class="fa fa-long-arrow-right" aria-hidden="true"></i></Button>
    </Nav>
    </Navbar>
    </Container>
    <Container fluid>
      <div className="slide1">
      <h5 className="animate__animated animate__backInUp header1" style={{animationDuration:"2s"}}>HI, WE'RE JUNTO</h5>
    <h2 className="animate__animated animate__backInUp header2" style={{animationDuration:"4s"}}> We're here to help you
    <br/>
    <Typical
        steps={['close more deals.', 2000,
        'generate more leads!', 2000,
        'grow your business.',2000,
        'look sexy online.',2000,
        'optimize conversions.',2000]}
        loop={Infinity}
        wrapper="b"
      />
      </h2>
      <div className="button-bottom header3">
        <ul className="btn-ul">
          <li className="btn-list">
            <Button className="btn-list-1">Let's Make it happen</Button>
          </li>
          <li className="btn-list">
            <a href="#" className="btn-list-2">How we works <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </li>
        </ul>
      </div>
      </div>
      </Container>
      <Container>
      <div className="item" data-aos="slide-up">
        <h1>OUR CLIENTS’ GOALS ARE OUR GOALS</h1>
        <h2>Here’s what they have to say.</h2>
        <div className="inner-item">
          <img className="animate__animated animate__bounce" src="https://junto.digital/wp-content/themes/junto/assets/img/star.svg"/>
          <img className="animate__animated animate__bounce" src="https://junto.digital/wp-content/themes/junto/assets/img/star.svg"/>
          <img className="animate__animated animate__bounce" src="https://junto.digital/wp-content/themes/junto/assets/img/star.svg"/>
          <img className="animate__animated animate__bounce" src="https://junto.digital/wp-content/themes/junto/assets/img/star.svg"/>
          <img className="animate__animated animate__bounce" src="https://junto.digital/wp-content/themes/junto/assets/img/star.svg"/>

        <div>
          <p>We have been working with Junto during our growth period and they have been nothing but professional. Junto has exceptional talent and is always timely. We look forward to a long term relationship with Junto.</p>
          <p>Brandon K.  •Brevité</p>
        </div>
        </div>
      </div>
      </Container >
      <Carousel  data-aos="slide-up" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className="slider-item">
        <img
          className="d-block w-100"
          src="https://junto.digital/wp-content/uploads/2018/08/Website-Redesign-Case-Study.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="animate__animated animate__backInUp">SEO {'&'} Content Marketing</h3>
          <p className="animate__animated animate__backInUp">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://junto.digital/wp-content/uploads/2017/11/Whitehat-b2b-linkbuilding-case-study-1.jpg"
          alt="Second slide"
        />
        <Carousel.Caption className="caption">
          <h3 className="animate__animated animate__backInUp">Web Design {'&'} Development</h3>
          <p className="animate__animated animate__backInUp">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://junto.digital/wp-content/uploads/2018/11/affiliate-marketing-case-study.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="animate__animated animate__backInUp">And Much More</h3>
          <p className="animate__animated animate__backInUp">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <br/>
<div class="services-footer">
  <div class="container">
    <div class="row">
      <div class="col-md">
        <div class="footer-logo">
          <img width="200" src="https://junto.digital/wp-content/uploads/2018/09/junto-logo-white.png"alt=""/>
        </div>
        <p class="first-para" style={{marginTop:"10%"}}>Grabbing the concsumer’s attention <br/> isn’t enough you have to keep that <br/> attention for at least a.</p>
        <h3 class="second-para">+564 <strong>7885 3222</strong></h3>
        <p>syedaashir120@gmail.com</p>
      </div>
      <div class="col-md">
        <h5>USEFUL LINKS</h5>
        <p class="first-para"><strong>New York</strong></p>
        <p>123 East 26th Street, Fifth Floor, <br/> New York, NY 10011</p>
        <p class="second-para"><strong>Japan</strong></p>
        <p>123 East 26th Street, Fifth Floor, <br/> New York, NY 10011</p>
      </div>
      <div class="col-md">
       <h5>INSTAGRAM FEED</h5>
       <div class="first-para">
         <img src="https://aashir120.github.io/SaylaniWebsiteS04/images/instagram1.png" alt=""/>
         <img style={{marginLeft: "6px"}} src="https://aashir120.github.io/SaylaniWebsiteS04/images/instagram2.png" alt=""/>
         <img style={{marginLeft: "6px"}} src="https://aashir120.github.io/SaylaniWebsiteS04/images/instagram3.png" alt=""/>
       </div>
       <div class="second-para">
         <img src="https://aashir120.github.io/SaylaniWebsiteS04/images/instagram4.png" alt=""/>
         <img style={{marginLeft: "6px"}} src="https://aashir120.github.io/SaylaniWebsiteS04/images/instagram5.png" alt=""/>
         <img style={{marginLeft: "6px"}} src="https://aashir120.github.io/SaylaniWebsiteS04/images/instagram6.png" alt=""/>
       </div>
      </div>
    </div>
    <br/> <br/> <br/>
    <div class="row">
    <div class="col-md-8">
      <div class="copyright">
        <p>Copyright ©2020 All rights reserved | This template is made with <i class="fa fa-heart" style={{color: "red"}} aria-hidden="true"></i> by <strong>Syed Aashir</strong>
        </p>
      </div>
    </div>
    <div class="col-md-4">
      <div class="footer-fa-right">
      <p><span>Follow Us</span> 
            <a href="#" class="social-icon" target="_blank">
              <i class="fa fa-youtube"></i>
            </a>
           <a href="#" class="social-icon" target="_blank">
             <i class="fa fa-facebook"></i>
           </a>
           <a href="#" class="social-icon" target="_blank">
             <i class="fa fa-linkedin"></i>
           </a>
           <a href="#" class="social-icon" target="_blank">
             <i class="fa fa-instagram"></i>
           </a>
      </p>
    </div>
    </div>
    </div>
  </div>
  </div>
  </>

  );
}

export default App;
