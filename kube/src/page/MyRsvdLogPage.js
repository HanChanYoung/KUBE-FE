
import Header from "../component/public/Header";
import { Button } from "@mui/material";

export default function MyRsvdLogPage(){
    return(
        <div>
            <Header/>
            <div style={{height:"850px",width:"100%"}}>
                <div style={{
                    width:"70%",
                    height:"850px",
                    margin:"auto",
                }}>
                    <div style={{
                        height:"110px",}}>
                        <Button 
                            style={{
                                fontSize:24,
                                fontWeight:700,
                                color:"black",
                                margin:"30px",
                                borderRadius:"10px",
                                float:"left"}}
                            >
                        제공내역</Button>
                        <Button 
                            style={{
                                fontSize:24,
                                fontWeight:700,
                                color:"black",
                                margin:"30px",
                                borderRadius:"10px",
                                float:"right"}}
                            >
                        대여내역</Button>
                    </div>
                    <div style={{
                        backgroundColor:"#FFD5D2",
                        height:"110px"
                    }}>
                        <Button variant="outlined"
                            style={{
                            margin:"20px",
                            color:"black",
                            border:"1px solid #BBBBBB",
                            borderRadius:"10px",
                            fontSize:"16px"}}
                        >최근 1개월</Button>
                        <Button variant="outlined"
                            style={{
                            margin:"20px",
                            color:"black",
                            border:"1px solid #BBBBBB",
                            borderRadius:"10px",
                            fontSize:"16px"}}
                        >최근 1개월</Button>
                        <Button variant="outlined"
                            style={{
                            margin:"20px",
                            color:"black",
                            border:"1px solid #BBBBBB",
                            borderRadius:"10px",
                            fontSize:"16px"}}
                        >최근 1개월</Button>
                    </div>

                    <div style={{
                        backgroundColor:"black",
                        height:"80%"
                    }}>

                    </div>

                </div>

            </div>
        </div>
    );
}