import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import '../css/home.css'

const Home = () => {
    return(
        <div className="Home">
            <Carousel >
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          style={{"height": "300px"}} 
          src={require("../static/slide1.jpeg")}
          alt="First slide"
        />
        <Carousel.Caption>
          <h2 >Best Blogs</h2>
          <p>Lifestyle, Religion and Believe System</p>
          <Button variant="danger">Lifestyle</Button>{' '}
          <Button variant="primary">Religion</Button>{' '}
          <Button variant="success">Tech Fun</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          style={{"height": "300px"}} 
          src={require("../static/slide2.jpeg")}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h2>Best Blogs</h2>
          <p>Lifestyle, Religion and Believe System</p>
          <Button variant="danger">Lifestyle</Button>{' '}
          <Button variant="primary">Religion</Button>{' '}
          <Button variant="success">Tech Fun</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{"height": "300px"}} 
          src={require("../static/slide3.jpeg")}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h2>Best Blogs</h2>
          <p>Lifestyle, Religion and Believe System</p>
          <Button variant="danger">Lifestyle</Button>{' '}
          <Button variant="primary">Religion</Button>{' '}
          <Button variant="success">Tech Fun</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
            </Carousel>
            <div className="container my-4">
                <div className="row mb-2">
                <div className="col-md-6">
                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-primary">Religion</strong>
                        <h3 className="mb-0">Does god exist?</h3>
                        <div className="mb-1 text-muted">Nov 12</div>
                        <p className="card-text mb-auto">May be or may not be🤔. Who gives you guarantee and how. Is there any proof🔍 which usually asked by atheists. What I think🧠 on it ? Here I am not giving you...</p>
                        <Link to="/blog/Does god exist">Continue reading</Link>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <img src={require("../static/thumb1.jpeg")} className="bd-placeholder-img img-fluid" width="200" height="250" alt=""/>
                    </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-success">Life</strong>
                        <h3 className="mb-0">Life is never easy</h3>
                        <div className="mb-1 text-muted">Nov 11</div>
                        <p className="mb-auto">  We never accept this truth and blaming on little things that why this happened with me? or Why I don't get what I want? I think that..</p>
                        <Link to="/blog/Life is never easy">Continue reading</Link>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <img src={require("../static/thumb2.jpeg")} className="bd-placeholder-img img-fluid" width="200" height="250" alt=""/>
                    </div>
                    </div>
                </div>
                </div>
                    </div>
    
            <div className="container my-4">
        <div className="row mb-2">
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary">World</strong>
                <h3 className="mb-0">The Fake Illusion of Dharma</h3>
                <div className="mb-1 text-muted">Nov 12</div>
                <p className="card-text mb-auto">
                I think many of us heard the word "Dharma" in many holy books such as Mahabharata and Ramayana. But what is the meaning of it...
                </p>   
                <Link to="/blog/The fake illusion of dharma">Continue reading</Link>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img src={require("../static/thumb3.jpeg")} className="bd-placeholder-img img-fluid" width="200" height="250" alt=""/>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-success">Life Style</strong>
                <h3 className="mb-0">Conquer your first enemy</h3>
                <div className="mb-1 text-muted">Nov 11</div>
                <p className="mb-auto">One upon a time a little girl is very angry and throwing things here and there. His mom is very tired of this thing because her daughter anger...</p>
                <Link to="/blog/Conquer your first enemy">Continue reading</Link>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img src={require("../static/thumb4.jpeg")} className="img-fluid" width="200" height="250" alt=""/>
              </div>
            </div>
          </div>
        </div>
            </div>
            <footer className="container">
                <p>© 2020–2021 SidBlog, Inc. · <a href="/">Privacy & Terms</a></p>
            </footer>
        </div>
    )
}

export default Home