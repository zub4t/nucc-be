import React from 'react';
import Gallery from 'react-photo-gallery';
import {eventos_gallery_data} from "../events-data.js";
import {eventos_gallery_small_data} from "../events-data.js";
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import EventRenderer from "../components/EventRenderer";
import EventsBannerSmall from "../components/EventsBannerSmall";
import EventsBanner from "../components/EventsBanner";
import DivulgacaoContainer from "../styled-components/DivulgacaoContainer";

function Divulgacao() {

  return (
      <DivulgacaoContainer>
          <Navbar expand="lg" fixed={"top"}>
              <Navbar.Brand href="/">
                  <img src="/img/logo.svg" width="60"
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
          <div className="container-sm mt-lg-5 pt-5">
              {window.innerHeight > 800
                  ? <Gallery photos={eventos_gallery_data} renderImage={EventRenderer}/>
                  :  <Gallery photos={eventos_gallery_small_data} renderImage={EventRenderer}/>}

          </div>
      </DivulgacaoContainer>
  );
}

export default Divulgacao;
