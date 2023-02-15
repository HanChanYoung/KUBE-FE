import { Button } from "@mui/material";
import Header from "../public/Header";
import { useState,} from "react";
import axios from 'axios'
import { GET_TOKEN } from "../../config";


export default function IndexComponent(){

    const [img,setImg]=useState(null);
    return(
        <div style={{width:"100%"}}>
            <Header></Header>
            <img src="https://objectstorage.kr-central-1.kakaoi.io/v1/eb454a58725f4cf4ba059729077e409b/kube-camp-image/board-image%2F1676436411865"></img>
            <Button
            onClick={()=>{
                GET_TOKEN()
            }}
            >토큰버튼</Button>
        </div>
    )
}