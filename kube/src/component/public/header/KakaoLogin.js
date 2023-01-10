import { Button } from "@mui/material"

export default function KaKaoLogin(){
    return(
        <Button onClick={()=>{console.log("Clicked")}}> 
            <img src="/img/kakao_login_medium.png" alt="login"/>
        </Button>
    )
}