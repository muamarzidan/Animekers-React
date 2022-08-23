import { Navbar, Container, Nav } from "react-bootstrap"

const NavigationBar = () => {
    return (
        <div>
            <Navbar variant="dark">
                <Container>
                    <Navbar.Brand href="/">Nobarin</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#magic">Fight</Nav.Link>
                        <Nav.Link href="#romance">Romance</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>        
        </div>
    )
}

export default NavigationBar