import React, {useState} from 'react';
import Sobre from '../components/Sobre';
import Carousel from 'react-bootstrap/Carousel'
import EventsBanner from "../components/EventsBanner";
import Map from "../components/Map";
import Update from "../components/Update";
import UpdateSmall from "../components/UpdateSmall";
import EventsBannerSmall from "../components/EventsBannerSmall";


const MainPage = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }

    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect} className="carousel-custom" controls={false}>
                <Carousel.Item id="carousel-img1">
                </Carousel.Item>
                <Carousel.Item id="carousel-img2">
                </Carousel.Item>
                <Carousel.Item id="carousel-img3">
                </Carousel.Item>
            </Carousel>
            <Sobre/>
            {window.innerWidth < 500 ? <EventsBannerSmall />: <EventsBanner/>}
            {window.innerWidth < 500 ? <UpdateSmall/>: <Update/>}
            <Map />
        </div>
    );

}

export default MainPage;
