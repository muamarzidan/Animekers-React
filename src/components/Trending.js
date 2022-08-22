import { Card, Container, Row, Col, Image} from "react-bootstrap";
import JujutsuKaisen from "../assets/image/fight/jujutsu.jpg";
import MaoGakuin from "../assets/image/fight/mao.jpg";
import MobPsyco from "../assets/image/fight/mob.jpg";
import NanatsuNo from "../assets/image/fight/nanatsu.jpg";
import KimetsuNo from "../assets/image/fight/kimetsu.jpg";
import AttackOn from "../assets/image/fight/attackon.jpg";



const Trending= () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-black text-center">TRENDING ANIME MAGIC</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper" id="trending">
                        <Card className="movieImage">
                            <Image src={JujutsuKaisen} alt="JK" className="Images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Jujutsu Kaisen</Card.Title>
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
                            <Image src={MaoGakuin} alt="MG" className="Images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Mao Gakuin</Card.Title>
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
                            <Image src={MobPsyco} alt="MP" className="Images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Mob Psyco</Card.Title>
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
                            <Image src={NanatsuNo} alt="NNT" className="Images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Nanatsu No Taizai</Card.Title>
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
                            <Image src={KimetsuNo} alt="KNY" className="Images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Kimetsu No Yaiba</Card.Title>
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
                            <Image src={AttackOn} alt="AOT" className="Images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Attck On Titan</Card.Title>
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

export default Trending