import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from 'react-bootstrap/Carousel';
import "./topic.css" 

const Topic = ({topic}) => {
  console.log(topic)
    return (<Carousel>

        <Carousel.Item interval={10000}>
  
        <div style={{background: "black", height: "400px"}}> 
          <Carousel.Caption>
            <h3>{topic.title}</h3>
            <p>Welcome to {topic.title} where all things GCSE chemistry are made exciting. Scroll to find out more!</p>
          </Carousel.Caption>
          </div>
        </Carousel.Item>

        <Carousel.Item interval={10000}>
        <div style={{background: "black", height: "400px"}}> 
          <Carousel.Caption>
            <h3>{topic.header}</h3>
          </Carousel.Caption>
          </div>
        </Carousel.Item>

        <Carousel.Item interval={10000}>
        <div style={{background: "black", height: "400px"}}>
          <Carousel.Caption>
            <p>{topic.paragraph}</p>
          </Carousel.Caption>
          </div>
        </Carousel.Item>

        <Carousel.Item interval={10000}>
        <div style={{background: "black", height: "400px"}}>
          <Carousel.Caption>
            <p>{topic.paragraph2}</p>
          </Carousel.Caption>
          </div>
        </Carousel.Item>

        <Carousel.Item interval={10000}>
        <div style={{background: "black", height: "400px"}}>
          <Carousel.Caption>
            <p>{topic.paragraph3}</p>
          </Carousel.Caption>
          </div>
        </Carousel.Item>
        
        <Carousel.Item interval={10000}>
        <div style={{background: "black", height: "400px"}}>
          <Carousel.Caption>
            <p>{topic.paragraph4}</p>
          </Carousel.Caption>
          </div>
        </Carousel.Item>

        <Carousel.Item interval={10000}>
        <div style={{background: "black", height: "400px"}}>
          <Carousel.Caption>
            <h1>You have now completed learning about {topic.title}. Now, onto the next module!</h1>
          </Carousel.Caption>
          </div>
        </Carousel.Item>

      </Carousel>)


}

export default Topic