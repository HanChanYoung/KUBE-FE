import { useEffect } from "react";
import Header from "../component/public/Header";
import {useSelector} from 'react-redux';
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { fontWeight } from "@mui/system";

export default function BoardRsvdPage(){
    const isLogin=useSelector((state)=>state.loginSlice.isLogin);
    const navigate=useNavigate();
    useEffect(() =>{
        if(!isLogin){
            navigate("/");
        }
    })
    //TEST용 임의 변수들
    const title="마운틴이큅먼트 대형타프스크린";
    const theme="TENT";
    const desc=["dsa dsa dsa", "asd asd as", "dsadsa"]
    const price=32000
    //-----------------
    return(
        <div>
            <Header/>
            <div style={{height:"850px",width:"100%",
            display:"flex",
            flexDirection:"row"}}>
                <div style={{width:"50%",height:"850px",}}>
                    <div style={{width:"734px",
                    height:"650px",
                    float:"right",
                    borderRight:"1px solid #BBBBBB",
                    marginTop:"135px",
                    }}>
                        <div style={{width:"650px",
                        height:"650px",
                        backgroundColor:"black",
                        borderRadius:"20px"}}></div>
                    </div>
                </div>
                <div style={{width:"50%",height:"850px",}}>
                    <div style={{width:"680px",
                        height:"650px",
                        marginTop:"135px",
                        }}>
                        <div style={{width:"600px",
                        height:"140px",
                        float:"right",
                        borderBottom:"1px solid #BBBBBB"}}>
                            <Typography style={{
                                fontSize:"20px",
                                fontWeight:"bold",
                                textDecorationLine:"underline"
                            }}>
                                {theme}</Typography>

                            <Typography stlye={{
                                fontSize:"20px"
                            }}>
                                {title}</Typography>

                            <Typography style={{
                                float:"right",
                                fontSize:"28px",
                                fontWeight:"bold",
                                marginTop:"20px"
                            }}>
                                {price.toLocaleString('en-US')}원</Typography>
                        </div>
                        <div style={{width:"600px",
                        height:"390px",
                        float:"right",
                        display:"flex",
                        alignItems:"center",}}>
                            <div>
                            {desc.map((value)=>{
                                return(<Typography style={{fontSize:"18px"}}>{value}</Typography>)
                            })}
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

{/* ----------------------middle--------------------- */}

            <div style={{height:"850px",
            width:"100%",
            backgroundColor:"grey",
            display:"flex",
            justifyContent:"center"}}>
                <div style={{height:"640px",
                width:"1380px",
                backgroundColor:"white",
                display:"flex",
                justifyContent:"space-between"}}>
                    <div style={{width:"630px",backgroundColor:"red"}}>dsa</div>
                    <div style={{width:"550px",backgroundColor:"red"}}>dsa</div>
                </div>
            </div>
        </div>
    )
}