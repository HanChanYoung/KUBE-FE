import { CircularProgress} from "@mui/material";
const style = {
    outer : {
        padding: 30,
        display:'flex',
        alignItems:"center",
        justifyContent : "center",
        width:"100%",
        height:"100vh",
    },
    inner : {
        padding: 30,
        textAlign : "center",
        marginTop: "20px",
        marginBottom: "20px",
        fontFamily:"NanumSquareB"
    },
}


function Loading() {
    return ( 
        <div style={style.outer}>
            <div style={style.inner}>
                <div style={{margin:"25x"}}></div>
                <CircularProgress />
                <h4>요청하신 페이지를 불러오는 중입니다!</h4>
            </div>
        </div>
    );
}

export default Loading;