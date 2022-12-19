import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {Nav, Navbar } from 'react-bootstrap';
import styled from "styled-components";

const Styles = styled.div`
    .navbar{
        transition: 750ms ease;
    }  

`;

export const EventosNavBar = () => {

    let listener = null
    const [scrollState, setScrollState] = useState("top")

    useEffect(() => {
        listener = document.addEventListener("scroll", e => {
            var scrolled = document.scrollingElement.scrollTop
            if (scrolled >= 100) {
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
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item><Link className="nav-link" to="/"><i className="fas fa-home"></i></Link></Nav.Item>
                        <Nav.Item><Link className="nav-link" to="/divulgacao">Divulgação</Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
    )
};