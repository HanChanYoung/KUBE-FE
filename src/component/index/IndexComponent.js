import { Button } from "@mui/material";
import { GET_BOARD_LIST, IMAGE_DOWNLOAD,UPLOAD_IMAGE ,GET_BOARD_PAGE} from "../../config";
import Header from "../public/Header";
import { useState,} from "react";
import { Buffer } from "buffer";
import Swal from 'sweetalert2'
import axios from 'axios'


export default function IndexComponent(){

    const [img,setImg]=useState(null);
    return(
        <div style={{width:"100%"}}>
            <Header></Header>
            <Button
            onClick={async()=>{
                const data= await IMAGE_DOWNLOAD();
                const imgSrc=URL.createObjectURL(data)
                console.log(imgSrc)
                setImg(imgSrc);                
            }}
            >download</Button>
            <img src={img} alt="img" />
            <Button
            onClick={()=>{
                UPLOAD_IMAGE();
            }}
            >upload</Button>
            <Button
            onClick={async ()=>{
                console.log("눌름");
                console.log(GET_BOARD_LIST());
                console.log("종료")
            }}
            >THSISTEST</Button>
            <Button
            onClick={async ()=>{
                console.log("눌름");
                console.log(GET_BOARD_PAGE(24));
                console.log("종료")
            }}
            >THSISTEST24</Button>
            <Button
            onClick={async ()=>{
                console.log("눌름");
                console.log(GET_BOARD_PAGE(24));
                console.log("종료")
            }}
            >{process.env.REACT_APP_API_URL}</Button>
        </div>
    )
}