import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from 'react-bootstrap/Carousel';

const Topic = ({topic}) => {
  console.log(topic)
    return (<Carousel>

        <Carousel.Item>
        <div style={{background: "black", height: "400px"}}> 
          <Carousel.Caption>
            <h3>{topic.title}</h3>
            <p>{topic.header}</p>
          </Carousel.Caption>
          </div>
        </Carousel.Item>

        <Carousel.Item>
        <div style={{background: "black", height: "400px"}}>
          <Carousel.Caption>
            <p>{topic.paragraph}</p>
          </Carousel.Caption>
          </div>
        </Carousel.Item>

        <Carousel.Item>
        <div style={{background: "black", height: "400px"}}>
          <Carousel.Caption>
            <p>{topic.paragraph2}</p>
          </Carousel.Caption>
          </div>
        </Carousel.Item>

        <Carousel.Item>
        <div style={{background: "black", height: "400px"}}>
          <Carousel.Caption>
            <p>{topic.paragraph3}</p>
          </Carousel.Caption>
          </div>
        </Carousel.Item>
        

      </Carousel>)
}

export default Topic