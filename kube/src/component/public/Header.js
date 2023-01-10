import {Button} from "@mui/material"
import {useNavigate} from 'react-router-dom'
import KaKaoLogin from "./header/KakaoLogin";
import KakaoLogined from "./header/KakaoLogined";

export default function Header(){
    var isLogin=false;

    const navigate=useNavigate();
    
    return(
        <div style={{paddingBottom:"100px"}}>
            <div style={{width:"100%",
                        height:"100px",
                        position:"fixed",
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center",
                        }}>
                <div style={{width:"95%",
                            height:"100px",
                            display:"flex",
                            justifyContent:"space-between",
                            alignItems:"center",
                            }}>
                    <Button style={{color:"black",fontSize:"36px",
                                    fontWeight:"1000",
                                    fontStyle:"italic",}}
                                    onClick={()=>{navigate("/")}}>
                    KUBE
                    </Button>
                    <div style={{
                            width:"300px",
                            height:"100px",
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