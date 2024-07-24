import React, { useRef, useState, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { Button, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { navbarBrand, navs } from "../../config/config";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import logoImage from "../Images/logo.png";
import "../NavBar/NavBar.css";
import { NAVBAR_COLLAPSE_function } from "../../store/action";
import { useDispatch } from "react-redux";

function NavBar() {
  const navigate = useNavigate();

  const navRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(true);

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const handleResize = () => {
      if (!isCollapsed) {
        setIsCollapsed(window.innerWidth > 992);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isCollapsed]);

  useEffect(() => {   
    dispatch(NAVBAR_COLLAPSE_function(isCollapsed));
  }, [isCollapsed, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchQuery}`);
    setSearchQuery("");
    setIsCollapsed(true);
  };

  const handleNavClick = () => {
    setIsCollapsed(true);
  };

  const isSearchButtonDisabled = searchQuery.trim() === "";

  return (
    <>
      <Navbar
        ref={navRef}
        className="navbar"
        variant="dark"
        expand="lg"
        fixed="top"
        expanded={!isCollapsed}
      >
        <Navbar.Brand className="nav-brand" href="/">
          <img src={logoImage} alt="Logo" className="logo" />
          {navbarBrand}
        </Navbar.Brand>
        {isCollapsed && (
          <Navbar.Toggle
            className="border-0"
            aria-controls="basic-navbar-nav"
            onClick={() => {setIsCollapsed(!isCollapsed)}}
          />
        )}

        {!isCollapsed && (
          <IoCloseOutline
            size={40}
            className="close-btn"
            onClick={() => {setIsCollapsed(!isCollapsed)}}
          />
        )}

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav mr-auto">
            {navs.map((navItem) => (
                navItem.page === "/power-bi" ? (
                  <Button
                    key={uuidv4()}
                    className="nav-item"
                    href = {navItem.page} 
                    onClick={handleNavClick}
                  >
                    {navItem.nav}
                  </Button>
                ) : (
                  <DropdownButton
                    key={uuidv4()}
                    title={navItem.nav}
                    // variant="link"
                    id={`dropdown-button-nav-${navItem.nav}`}
                    className="nav-item"
                  >
                    {navItem.list.map((listItem) => (
                      <LinkContainer to={listItem.page} key={uuidv4()}>
                        <Dropdown.Item onClick={() => handleNavClick()}>{listItem.nav}</Dropdown.Item>
                      </LinkContainer>
                    ))}
                  </DropdownButton>
                )
              ))}
          </Nav>
          <Form className="search-form" onSubmit={handleSubmit}>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <FormControl
              type="text"
              placeholder="Nhập"
              className="form-input form-control-lg mt-lg-2 mt-md-2 mt-sm-2 mt-xl-0"
              value={searchQuery}
              onChange={handleInputChange}
            />
            <Button
              className="search-btn mt-lg-2 ml-2 mt-md-2 mt-sm-2 mt-xl-0"
              onClick={handleSubmit}
              disabled={isSearchButtonDisabled}
            >
              Tìm
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;
