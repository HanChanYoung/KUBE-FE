import {useEffect ,useState} from "react";
import Header from "../component/public/Header";
import {useSelector ,useDispatch} from 'react-redux';
import { useNavigate } from "react-router-dom";
import { Typography ,Select,TextField,MenuItem,FormControl,FormHelperText,Button} from "@mui/material";
import {useDaumPostcodePopup} from 'react-daum-postcode';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../component/boardrsvdpage/calendar.css'
import { SET_RSVD_INFO,SET_RSVD_PAGE } from "../state/slice/BoardRsvdSlice";

export default function BoardRsvdPage(){

    const isLogin=useSelector((state)=>state.loginSlice.isLogin);
    const rsvdPage=useSelector((state)=>state.boardRsvdSlice);
    const navigate=useNavigate();
    const dispatch=useDispatch();
    useEffect(() =>{
        if(!isLogin){
            navigate("/");
        }else{
            // 얘를 리스트 화면으로 넘겨서 누르면 정보받아와서 저장하게 해야됨
            // dispatch(SET_RSVD_PAGE(
            //     {
            //         'id':0,
            //         'categoryName':'TENT',
            //         'boardName':"마운틴이큅먼트 대형타프스크린",
            //         'boardDesc':'정가는 65,00원입니다\n왼쪽 지퍼 헐거워요.\n상태 좋습니다',
            //         'price':35000,
            //         'canRentStartDate':'2023-01-26',
            //         'canRentEndDate':'2023-04-30',
            //         'reservedDate':['2023-01-26','2023-01-27','2023-01-28'],
            //     }
            // ))
        }
    })

    //수령 및 반납 방법 TEST
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

    const date=new Date()
    const isCheck=false
    const disabledDates = [
        new Date('2023-01-26'),
    ];
    //-----------------
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
                                {rsvdPage.categoryName}</Typography>

                            <Typography stlye={{
                                fontSize:"20px"
                            }}>
                                {rsvdPage.boardName}</Typography>

                            <Typography style={{
                                float:"right",
                                fontSize:"28px",
                                fontWeight:"bold",
                                marginTop:"20px"
                            }}>
                                {rsvdPage.price?.toLocaleString('en-US')}원</Typography>
                        </div>
                        <div style={{width:"600px",
                        height:"390px",
                        float:"right",
                        display:"flex",
                        alignItems:"center",}}>
                            <div>
                            {rsvdPage.boardDesc.map((value)=>{
                                return(<Typography style={{fontSize:"18px"}}>{value}</Typography>)
                            })}
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
                                <Typography style={{fontSize:"20px",fontWeight:"bold"}}>수령방법</Typography>
                                <FormControl sx={{ m: 1, minWidth: 150 }}>
                                    <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    value={take}
                                    onChange={(e)=>{handleChange(e)}}
                                    >
                                        <MenuItem value={'직접 수령'}>직접 수령</MenuItem>
                                        <MenuItem value={'픽업 서비스'}>픽업 서비스</MenuItem>
                                    </Select>
                                    <FormHelperText>수령 방법을 선택하세요</FormHelperText>
                                </FormControl>
                                </div>
                            </div>
                            <div style={{width:"50%",display:"flex",justifyContent:"center"}}>
                                <div style={{marginTop:"60px"}}>
                                <Typography style={{fontSize:"20px",fontWeight:"bold"}}>반납방법</Typography>
                                <FormControl sx={{ m: 1, minWidth: 150 }}>
                                    <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    value={give}
                                    onChange={handleChange2}
                                    >
                                        <MenuItem value={'직접 반납'}>직접 반납</MenuItem>
                                        <MenuItem value={'픽업 서비스'}>픽업 서비스</MenuItem>
                                    </Select>
                                    <FormHelperText>반납 방법을 선택하세요</FormHelperText>
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
                            대여 날짜를 선택해주세요</Typography>
                        <Calendar
                        className="re-calendar"
                        selectRange="true"
                        onChange={(value,event)=>{console.log(value,event)}}
                        minDate={new Date(rsvdPage?.canRentStartDate)}
                        maxDate={new Date(rsvdPage?.canRentEndDate)}
                        tileDisabled={({date, view}) =>
                            (view === 'month') && // Block day tiles only
                            disabledDates.some(disabledDate =>
                                date.getFullYear() === disabledDate.getFullYear() &&
                                date.getMonth() === disabledDate.getMonth() &&
                                date.getDate() === disabledDate.getDate()
                        )}
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
                        onClick={()=>{console.log(rsvdPage)}}
                        >예약하기</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}