import * as React from "react";
import {BrowserRouter as Router, Link} from "react-router-dom";
import { eventos_page_data } from "../events-data";
import {Nav, Navbar} from "react-bootstrap";
import StyledLink from '../styled-components/StyledLink';
import EventPageContainer from "../styled-components/EventPageContainer";
import {EventosNavBar} from "../components/EventosNavBar";

const EventPage = props => {

    let event = eventos_page_data[props.match.params.id];

    return(
        <EventPageContainer>
            <Navbar expand="lg" fixed={"top"}>
                <Navbar.Brand href="/">
                    <img src="/img/logo.svg" width="60"
                         height="60"
                         className="d-inline-block align-top" alt="" />
                </Navbar.Brand>
                <Navbar aria-controls="basic-navbar-nav"/>
                <Navbar className=" ml-auto">
                    <Nav>
                        <Nav.Item><Link className="nav-link" to="/"><i className="fas fa-home"></i></Link></Nav.Item>
                        <Nav.Item><Link className="nav-link" to="/divulgacao">Divulgação</Link></Nav.Item>
                    </Nav>
                </Navbar>
            </Navbar>
            <div className="container-fluid mt-lg-5 pt-5">
                <div className="row justify-content-center">
                    <div className="col-2">
                        <StyledLink to="/divulgacao" className="h1 text-dark" onHover={e => e.preventDefault()}>←</StyledLink>
                    </div>
                    <div className="col-8 text-right">
                        <h1>{event.title} </h1>
                    </div>
                </div>
                    {window.innerHeight > 700
                        ?<div className="row justify-content-center mt-4 mb-5">
                            <div className="col-6">
                                <p className="pt-5" dangerouslySetInnerHTML={ { __html: event.description} }></p>
                                <p className="mb-0"><b>Hora:</b> {event.hora}</p>
                                <p className="mb-0"><b>Data:</b> {event.data}</p>
                                <p className="mb-0"><b>Local:</b> {event.local}</p>
                            </div>
                            <div className="col-3">
                                <img className="w-100"
                                    src={event.img}
                                />
                            </div>
                        </div>
                        :<div className="row justify-content-center pb-5">
                            <div className="text-center pr-4 pl-4">
                                    <img className="w-100"
                                         src={event.img}
                                    />
                                    <p className="pt-5" dangerouslySetInnerHTML={ { __html: event.description} }></p>
                                    <p className="mb-0"><b>Hora:</b> {event.hora}</p>
                                    <p className="mb-0"><b>Data:</b> {event.data}</p>
                                    <p className="mb-0"><b>Local:</b> {event.local}</p>
                            </div>
                        </div>
                    }
            </div>
        </EventPageContainer>
    )
}

export default EventPage;