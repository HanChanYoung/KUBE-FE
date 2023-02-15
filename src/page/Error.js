import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
const style = {
    outer : {
        padding: 30,
        backgroundColor: '#F5F5F5',
        display:'flex',
        alignItems:"center",
        justifyContent : "center",
        width:"100%",
        height:"100vh",
    },
    inner : {
        padding: 30,
        backgroundColor: '#F5F5F5',
        textAlign : "center",
        marginTop: "20px",
        marginBottom: "20px",
        fontFamily:"NanumSquareB"
    },
}


function Error() {
    return ( 
        <div style={style.outer}>
            <div style={style.inner}>
                <SentimentVeryDissatisfiedIcon sx={{ fontSize: 200 }}/>  
                <div style={{margin:"25x"}}></div>
                <h1 style={{margin:"5px"}}>에러 발생!</h1>
                <h4>"요청한 페이지를 찾을 수 없습니다!"</h4>
            </div>
        </div>
    );
}

export default Error;