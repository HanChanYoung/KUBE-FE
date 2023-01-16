import React, {Component} from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

const items = [
    // {id: 1, url: '/img/ABOUT.png'},
    // {id: 2, url: '/img/ABOUT-2.png'},
    // {id: 3, url: '/img/ABOUT-3.png'},
    // {id: 4, url: '/img/ABOUT-4.png'},
    // {id: 5, url: '/img/ABOUT-5.png'},
    {id: 1, url: '/img/test.png',bgcolor:"white"},
    {id: 2, url: '/img/test2.png',bgcolor:"black"},
];

export default class ImageSlider extends Component {
    render() {

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:true,
            autoplay:true,
            autoplaySpeed: 2500
        };

        return (
            <div>
                <Slider {...settings}>
                    {items.map(item => {
                        return(
                            <div align="center" style={{width:"100%",height:"340px"}}>
                                <div style={{backgroundColor:item.bgcolor}}>
                                    <img style={{position: "relative",
                                                    width: "1455px",
                                                    Height: "340px",}}
                                            src={item.url}/>
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        );



    }
}