import { Button } from "@mui/material";
import { IMAGE_DOWNLOAD,UPLOAD_IMAGE } from "../../config";
import Header from "../public/Header";
import { useState,} from "react";
import { Buffer } from "buffer";
import Swal from 'sweetalert2'


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
        </div>
    )
}