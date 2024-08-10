import { Nav, Navbar } from "react-bootstrap";
import './Task.css'


const NavBar: React.FC = () => {

    return (
        <Navbar  expand="lg" className="NavBar">
            <Nav className="me-auto">
                <Nav.Link className="NavItem" href="/">Home</Nav.Link>
                <Nav.Link className="NavItem" href="/post">Task</Nav.Link>

            </Nav>
        </Navbar>
    );
};

export default NavBar;