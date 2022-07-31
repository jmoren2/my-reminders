
import { Navbar, Nav } from 'react-bootstrap'

interface NavProps {
    date: string
}

const NavBar = ({date}: NavProps): JSX.Element => {
    
    return (
        <>
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                            <Navbar.Brand href="/">Reminders</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <Nav.Link href="/New">New</Nav.Link>
                                </Nav>
                                <div style={{color: 'white'}}>
                                    {date}
                                </div>
                            </Navbar.Collapse>
                        </Navbar>
                        <br />
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavBar;