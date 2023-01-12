import Header from "../component/public/Header";
import {useEffect ,useState} from "react";
import {useSelector ,useDispatch} from 'react-redux';
import { useNavigate } from "react-router-dom";
import { Typography ,Select,TextField,MenuItem,FormControl,FormHelperText,Button} from "@mui/material";
import {useDaumPostcodePopup} from 'react-daum-postcode';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../component/boardrsvdpage/calendar.css'

export default function BoardCreatePage(){
    const isLogin=useSelector((state)=>state.loginSlice.isLogin);
    const navigate=useNavigate();

    const [take, setTake] = useState('');
    const [give, setGive] = useState('');

    const handleChange = (event) => {
        setTake(event.target.value);
    };
    const handleChange2 = (event) => {
        setGive(event.target.value);
    };

    //주소 API
    const [addr, setAddr] = useState('');
    const [zonecode, setZonecode] = useState('');
    const [extraAddr, setExtraAddr] = useState('');
    
    const onCompletePost = data => {
        setAddr(data.address)
        setZonecode(data.zonecode)
    }; 
    const open = useDaumPostcodePopup();
    const handleClick = () => {
        open({ onComplete: onCompletePost });
    };
    const isCheck=false

    useEffect(() =>{
        if(!isLogin){
            navigate("/");
    }}
    )
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
                                여기 카테고리 버튼</Typography>

                            <Typography stlye={{
                                fontSize:"20px"
                            }}>
                                여기 제목</Typography>

                            <Typography style={{
                                float:"right",
                                fontSize:"28px",
                                fontWeight:"bold",
                                marginTop:"20px"
                            }}>
                                여기 돈 입력 받음</Typography>
                        </div>
                        <div style={{width:"600px",
                        height:"390px",
                        float:"right",
                        display:"flex",
                        alignItems:"center",}}>
                            <div>
                            여기 내용 입력 받음
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

{/* ----------------------middle--------------------- */}

            <div style={{
            width:"100%",
            display:"flex",
            justifyContent:"center"}}>
                <div style={{height:"640px",
                width:"1380px",
                display:"flex",
                justifyContent:"space-between"}}>
                    <div style={{width:"630px",backgroundColor:"white"}}>
                        <div style={{height:"240px",
                        flexDirection:"row",
                        display:"flex"}}>
                            <div style={{width:"50%",display:"flex",justifyContent:"center"}}>
                                <div style={{marginTop:"60px"}}>
                                <Typography style={{fontSize:"20px",fontWeight:"bold"}}>보관방법</Typography>
                                <FormControl sx={{ m: 1, minWidth: 150 }}>
                                    <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    value={take}
                                    onChange={(e)=>{handleChange(e)}}
                                    >
                                        <MenuItem value={'직접 수령'}>직접 보관</MenuItem>
                                        <MenuItem value={'픽업 서비스'}>픽업 서비스</MenuItem>
                                    </Select>
                                    <FormHelperText>보관 방법을 선택하세요</FormHelperText>
                                </FormControl>
                                </div>
                            </div>
                            <div style={{width:"50%",display:"flex",justifyContent:"center"}}>
                                <div style={{marginTop:"60px"}}>
                                <Typography style={{fontSize:"20px",fontWeight:"bold"}}>수령방법</Typography>
                                <FormControl sx={{ m: 1, minWidth: 150 }}>
                                    <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    value={give}
                                    onChange={handleChange2}
                                    >
                                        <MenuItem value={'직접 반납'}>직접 수령</MenuItem>
                                        <MenuItem value={'픽업 서비스'}>픽업 서비스</MenuItem>
                                    </Select>
                                    <FormHelperText>수령 방법을 선택하세요</FormHelperText>
                                </FormControl>
                                </div>
                            </div>
                        </div>
                        <div style={{height:"400px",
                        width:"100%",
                        display: "flex",
                        alignContent:"center",
                        flexDirection:"column",
                        visibility:isCheck?"hidden":null}}>
                            <div style={{marginBottom:"50px",marginLeft:"70px"}}>
                                <Typography style={{fontWeight:"bold",fontSize:"20px"}}>주소</Typography>
                            </div>
                            <div style={{width:"520px",
                            position:"relative",
                            height:"200px",
                            display: "flex",
                            flexDirection:"column",
                            marginLeft:"50px",
                            justifyContent:"space-between"}}>
                                <Button 
                                onClick={handleClick}
                                variant="outlined" 
                                style={{position:"absolute",
                                borderRadius:"10px",
                                width:"90px",
                                height:"30px",
                                left:"430px",
                                color:"black",
                                zIndex:"1",
                                border:"1px solid #BBBBBB",
                                fontWeight:"bold",
                                fontSize:"12px"}}>우편번호</Button>
                                <TextField
                                value={zonecode}
                                helperText="우편 번호"
                                variant="standard"
                                InputProps={{
                                    readOnly: true,
                                }}
                                placeholder="우편 번호를 검색하세요" />
                                <TextField
                                value={addr}
                                helperText="주소"
                                variant="standard"
                                InputProps={{
                                    readOnly: true,
                                }}
                                placeholder="우편 번호 검색 후, 자동입력 됩니다" />
                                <TextField
                                value={extraAddr}
                                onChange={(e) =>setExtraAddr(e.target.value)}
                                helperText="상세 주소"
                                variant="standard"
                                placeholder="건물, 아파트, 동/호수 입력" />
                            </div>
                        </div>
                    </div>

                    {/* ------------------------------------------- */}
                    <div style={{width:"600px",
                    backgroundColor:"white",
                    marginTop:"60px",
                    alignItems:"center",
                    display:"flex",
                    flexDirection:"column",}}>
                        <Typography style={{fontWeight:"bold",
                        fontSize:"20px",
                        marginBottom:"30px"}}>
                            보관 날짜를 선택해주세요</Typography>
                        <Calendar
                        className="re-calendar"
                        selectRange="true"
                        onChange={(value,event)=>{console.log(value,event)}}
                        view="month"
                        showNavigation="false"
                        />
                        <Button variant="outlined"
                        style={{marginTop:"50px",
                        color:"black",
                        width:"150px",
                        height:"50px",
                        border:"1px solid #BBBBBB",
                        borderRadius:"10px",
                        fontSize:"16px"}}
                        onClick={()=>{}}
                        >보관신청하기</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}