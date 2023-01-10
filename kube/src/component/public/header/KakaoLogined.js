import { Button } from "@mui/material"

export default function KakaoLogined(){
    
    return(
        <Button onClick={()=>{console.log("Clicked")}}> 
            <img src="/img/profile.png" style={{backgroundColor:"black",borderRadius:"100px"}}/>
        </Button>
    )
}