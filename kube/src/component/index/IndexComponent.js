import { Button } from "@mui/material";
import { IMAGE_DOWNLOAD } from "../../config";
import Header from "../public/Header";
import { useState,} from "react";
import { Buffer } from "buffer";


export default function IndexComponent(){

    const [img,setImg]=useState('');
    return(
        <div style={{width:"100%"}}>
            <Header></Header>
            <Button
            onClick={()=>{
                const data=IMAGE_DOWNLOAD();
                let base64ImageString = Buffer.from(data).toString('base64')
                setImg(base64ImageString);
            }}
            >test</Button>
            <img src={`data:image/jpeg;base64,${img}`} />
        </div>
    )
}