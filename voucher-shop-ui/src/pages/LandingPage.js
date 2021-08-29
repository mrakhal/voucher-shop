import React from 'react';
import {Container,Row,Col} from "reactstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Banner1 from "../assets/img/background/Banner1.gif"

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    printBanner = () => {
        return(
            <Col md="12">
                <Carousel showArrows={true} showThumbs={false} dynamicHeight={true}>
                    <div>
                        <img src={Banner1} />
                    </div>
                </Carousel>
            </Col>
        )
    }

    render() { 
        return ( 
        <Container fluid className="p-0">
            <Row>
                {this.printBanner()}
            </Row>
        </Container> 
        );
    }
}
 
export default LandingPage;