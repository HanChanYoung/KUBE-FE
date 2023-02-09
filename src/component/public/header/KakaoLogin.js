import { Button } from "@mui/material"

export default function KaKaoLogin(){
    const {Kakao}=window;
    return(
        <Button onClick={()=>{
            console.log("Logined");
            Kakao.Auth.authorize({
                redirectUri: 'https://camp.kube.p-e.kr/login',
                scope: 'profile_nickname,profile_image,account_email',
            });
        }}> 
            <img src="/img/kakao_login_medium.png" alt="login"/>
        </Button>
    )
}