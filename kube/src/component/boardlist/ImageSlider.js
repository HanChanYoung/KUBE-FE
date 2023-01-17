import React, {Component} from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const items = [
    {id: 1, url: '/img/banner-1.png',bgcolor:"white"},
    {id: 2, url: '/img/banner-2.png',bgcolor:"black"},
    {id: 3, url: '/img/banner-3.png',bgcolor:"white"},
    {id: 4, url: '/img/banner-4.png',bgcolor:"white"},
    {id: 5, url: '/img/banner-5.png',bgcolor:"black"},
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
            autoplaySpeed: 3500
        };

        return (
            <div>
                <Slider {...settings}>
                    {items.map(item => {
                        return(
                            <div align="center" style={{width:"100%",height:"380px"}}>
                                <div style={{backgroundColor:item.bgcolor}}>
                                    <img style={{position: "relative",
                                                    width: "100%",
                                                    Height: "380px",}}
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