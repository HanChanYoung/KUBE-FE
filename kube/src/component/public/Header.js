import {Button} from "@mui/material"
import {useNavigate} from 'react-router-dom'
import KaKaoLogin from "./header/KakaoLogin";
import KakaoLogined from "./header/KakaoLogined";
import {useSelector} from 'react-redux';

export default function Header(){

    const isLogin=useSelector((state)=>state.loginSlice.isLogin);
    const navigate=useNavigate();
    return(
        <div style={{paddingBottom:"100px"}}>
            <div style={{width:"100%",
                        height:"80px",
                        position:"fixed",
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center",
                        }}>
                <div style={{width:"95%",
                            height:"80px",
                            display:"flex",
                            justifyContent:"space-between",
                            alignItems:"center",
                            }}>
                    <Button style={{color:"black",fontSize:"32px",
                                    fontWeight:"bold",
                                    fontStyle:"italic",}}
                                    onClick={()=>{navigate("/")}}>
                    KUBE
                    </Button>
                    <div style={{
                            width:"250px",
                            height:"80px",
                            display:"flex",
                            justifyContent:"space-between",
                            alignItems:"center",
                    }}>
                        <Button style={{color:"black",fontSize:"16px"}}>GUIDE</Button>
                        <Button style={{color:"black",fontSize:"16px"}}>ABOUT</Button>                        
                        <div align="center" style={{width:"100px"}}>
                        {isLogin?
                        <KakaoLogined/>
                        :
                        <KaKaoLogin/>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}