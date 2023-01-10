import { Button } from "@mui/material"

export default function KaKaoLogin(){
    const {Kakao}=window;
    return(
        <Button onClick={()=>{
            console.log("Logined");
            Kakao.Auth.authorize({
                redirectUri: 'http://localhost:3000/login',
            });
        }}> 
            <img src="/img/kakao_login_medium.png" alt="login"/>
        </Button>
    )
}