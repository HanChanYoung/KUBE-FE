import React from 'react';
import { FullPage, Slide } from 'react-full-page';
import { Button } from '@mui/material';
import {useNavigate} from 'react-router-dom'

const slides = [
    {id: 1, url: '/img/ABOUT-1.png', color: "black"},
    {id: 2, url: '/img/ABOUT-2.png', color: "white"},
    {id: 3, url: '/img/ABOUT-3.png', color: "black"},
    {id: 4, url: '/img/ABOUT-4.png', color: "black"},
    {id: 5, url: '/img/ABOUT-5.png', color: "white"},
    {id: 6, url: '/img/ABOUT-6.png', color: "black"},
    {id: 7, url: '/img/ABOUT-7.png', color: "black"},
    {id: 8, url: '/img/ABOUT-8.png', color: "black"},
    {id: 9, url: '/img/ABOUT-9.png', color: "black"},
];

export default function LandingPage () {
    const navigate=useNavigate();
    return (
        <FullPage>
            {slides.map(item => (
                <Slide key={item.id}>
                    <div align="center" style={{width: "100%", height:"100%", backgroundColor:"black", position:"relative"}}>
                        <img style={{width: "100%", height:"100%",}} src={item.url}/>
                        <div />
                        <Button style={{color:item.color,fontSize:"32px",
                                    fontWeight:"bold",
                                    fontStyle:"italic",
                                    position: "absolute",
                                    left: "41px",
                                    top: "6px"}}
                                    onClick={()=>{navigate("/")}}>
                        KUBE
                        </Button>
                    </div>
                </Slide>
            ))}
        </FullPage>
    );
}