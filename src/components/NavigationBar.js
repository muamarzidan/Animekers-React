import { Navbar, Container, Nav } from "react-bootstrap"

const NavigationBar = () => {
    return (
        <div>
            <Navbar variant="dark">
                <Container>
                    <Navbar.Brand href="/">Nobarin</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#trending">Trending</Nav.Link>
                        <Nav.Link href="#superhero">SuperHero</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>        
        </div>
    )
}

export default NavigationBar