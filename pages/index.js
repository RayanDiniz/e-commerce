import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Button,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Media
} from 'reactstrap';

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <Navbar color="primary" dark expand="md">
                <NavbarBrand href="/">Celke</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="https://celke.com.br/">Site Celke</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Options
                </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Option 1
                  </DropdownItem>
                                <DropdownItem>
                                    Option 2
                  </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Reset
                  </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <NavbarText>Simple Text</NavbarText>
                </Collapse>
            </Navbar>

            
            <Media left href="#">
                <Media object data-src="https://th.bing.com/th/id/OIP.q9gSgF4Aa0uHsFTTLWuv7AHaEK?pid=Api&rs=1" alt="Generic placeholder image" />
            </Media>
            <h1>Home</h1>
            
            <Button color="danger">Danger!</Button>
        </>
    );
};