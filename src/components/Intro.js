import { Col, Container, Row, Button } from 'react-bootstrap';

const Intro = () => {
    return (
        <div className="intro">
        <Container className="text-white text-center d-flex justify-content-center align-items-center">
          <Row>
            <Col>
            <div className="title">Nobar Anime With NOBARIN</div>
            <div className="title">HTN FREE</div>
            <div className="introButton mt-4 text-center">
                <Button variant="dark" href="#magic">Lihat Semua List</Button>
            </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
}

export default Intro