import React, { useState } from 'react'
import { Carousel, Col, Container, Image, Row} from 'react-bootstrap'
// import Image from 'react-bootstrap/Image';
import wallpaper from '../Assets/wallpaper.png'
import '../Styles/mainarea.css';
import wallpaper1 from '../Assets/wallpaper.png'
import wallpaper2 from '../Assets/wallpaper.png'


export const Mainarea = () => {

  return (
    <div>
        <Container fluid>
            <Row>
                <Col><Image src={wallpaper}  height={600}/></Col>
                <Col className='main1'></Col>
            </Row>
        </Container>
    </div>
  )
}
export default Carousel;