import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {Nav, Navbar } from 'react-bootstrap';
import styled from "styled-components";

const Styles = styled.div`
    .navbar{
        transition: 750ms ease;
    }

    .navbar-brand, .navbar-nav, .nav-link {
        color:white !important;

        &:hover {
            color:white;
        }

        a {
            color:white;
            text-decoration:none;
        }
    }
    
  .navbar-toggle {
      display:none
      }
}
   

`;

export const NavigationBar = () => {

    let listener = null
    const [scrollState, setScrollState] = useState("top")

    useEffect(() => {
        listener = document.addEventListener("scroll", e => {
            var scrolled = document.scrollingElement.scrollTop
            if ( (scrolled >= 740 && window.innerHeight>740) ||
                (scrolled >= 250 && window.innerHeight>300)) {
                if (scrollState !== "amir") {
                    setScrollState("amir")
                }
            } else {
                if (scrollState !== "top") {
                    setScrollState("top")
                }
            }
        })
        return () => {
            document.removeEventListener("scroll", listener)
        }
    }, [scrollState])


    return (
        <Styles>
            <Navbar expand="lg" fixed={"top"} style={{backgroundColor: scrollState === "top" ? "transparent" : "#282828"}}>
                <Navbar.Brand href="/">
                    <img src="img/logo.svg" width="60"
                         height="60"
                         className="d-inline-block align-top" alt="" />
                </Navbar.Brand>
                
                <Navbar className=" ml-auto">
                    <Nav>
                        <Nav.Item><Link className="nav-link" to="/"><i className="fas fa-home"></i></Link></Nav.Item>
                        <Nav.Item><Link className="nav-link" to="/divulgacao">Divulgação</Link></Nav.Item>
                    </Nav>
                </Navbar>
            </Navbar>
        </Styles>
    )
};