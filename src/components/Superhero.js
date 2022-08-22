import { Card, Container, Row, Col, Image} from "react-bootstrap";
import kiminonawaImage from "../assets/image/romance/KimiNoNawa.jpg";
import spiderinrainImage from "../assets/image/romance/SpiderInRain.jpg";
import spiridawayImage from "../assets/image/romance/SpiridAway.jpg";
import spyfamilyImage from "../assets/image/romance/SpyFamily.jpg";
import violetImage from "../assets/image/romance/VioletEvergarden.jpg";
import youlieImage from "../assets/image/romance/YouLieInApril.jpg";



const SuperHero= () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white text-center">TRENDING ANIME MAGIC</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper" id="superhero"> 
                        <Card className="movieImage">
                            <Image src={kiminonawaImage} alt="antman" className="Images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">DUNE</Card.Title>
                                <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional 
                                    content.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={spiderinrainImage} alt="avenger" className="Images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">DUNE</Card.Title>
                                <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional 
                                    content.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={spiridawayImage} alt="batman" className="Images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">DUNE</Card.Title>
                                <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional 
                                    content.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={spyfamilyImage} alt="robinhood" className="Images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">DUNE</Card.Title>
                                <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional 
                                    content.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={violetImage} alt="spiderman" className="Images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">DUNE</Card.Title>
                                <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional 
                                    content.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={youlieImage} alt="superman" className="Images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">DUNE</Card.Title>
                                <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional 
                                    content.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SuperHero