import {useEffect ,useState} from "react";
import Header from "../component/public/Header";
import {useSelector ,useDispatch} from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import { Typography ,Select,TextField,MenuItem,FormControl,FormHelperText,Button,CircularProgress} from "@mui/material";
import {useDaumPostcodePopup} from 'react-daum-postcode';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../component/boardrsvdpage/calendar.css'
import { SET_RSVD_INFO,SET_RSVD_PAGE } from "../state/slice/BoardRsvdSlice";
import { CREATE_RSVD, GET_BOARD_PAGE } from "../config";
import { useQuery } from "react-query";
import Swal from 'sweetalert2';

function leftPad(value) {
    if (value >= 10) {
        return value;
    }

    return `0${value}`;
}

function toStringByFormatting(source, delimiter = '-') {
    const year = source.getFullYear();
    const month = leftPad(source.getMonth() + 1);
    const day = leftPad(source.getDate());

    return [year, month, day].join(delimiter);
}

export default function BoardRsvdPage(){
    
    const boardId=useParams();
    const isLogin=useSelector((state)=>state.loginSlice.isLogin);
    const uid=useSelector((state)=>state.loginSlice.uid);
    // const rsvdPage=useSelector((state)=>state.boardRsvdSlice);
    const navigate=useNavigate();
    const dispatch=useDispatch();
    useEffect(() =>{
        if(!isLogin){
            navigate("/");
            Swal.fire({
                toast: true,
                icon: 'error',
                title: '로그인을 먼저 해주세요!',
                animation: false,
                position: 'top',
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: false,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            });
        }else{
            window.scrollTo(0,0);
        }
    })
    //날짜요
    const [rendStartDate,setRendStartDate]=useState('');
    const [rendEndDate,setRendEndDate]=useState('');
    //수령 및 반납 방법 TEST
    const [take, setTake] = useState('직접');
    const [give, setGive] = useState('직접');

    const handleChange = (event) => {
        if(event.target.value=='직접'&&give=='직접'){
            setIsCheck(true);
        }else{
            setIsCheck(false)
        }
        setTake(event.target.value);
    };
    const handleChange2 = (event) => {
        if(event.target.value=='직접'&&take=='직접'){
            setIsCheck(true);
        }else{
            setIsCheck(false)
        }
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
    const [isCheck, setIsCheck] = useState(true);
    //-----------------
    const {isLoading,data,isError,error} = useQuery("BoardPage",()=>GET_BOARD_PAGE(boardId.boardId));

    if(isLoading){
        return <CircularProgress />
    }
    if(isError){
        return  <h2>Oops... {error.message}</h2>
    }
    // // const disabledDates = [
    // //     // new Date('2023-01-26'),
    // // ];
    console.log(data)
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
                        backgroundColor:"#EEEEEE",
                        borderRadius:"20px",
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center"}}>
                            <img src={data.data.imgSrc} alt="상품 이미지" style={{maxWidth:"650px",maxHeight:"650px"}}></img>
                        </div>
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
                                {data.data.categoryName}
                                </Typography>

                            <Typography stlye={{
                                fontSize:"20px"
                            }}>
                                {data.data.boardName}</Typography>

                            <Typography style={{
                                float:"right",
                                fontSize:"28px",
                                fontWeight:"bold",
                                marginTop:"20px"
                            }}>
                                {data.data.price?.toLocaleString('en-US')}원</Typography>
                        </div>
                        <div style={{width:"600px",
                        height:"390px",
                        float:"right",
                        display:"flex",
                        alignItems:"center",}}>
                            <div>
                            {data.data.boardDesc
                            // .map((value)=>{
                            //     return(<Typography style={{fontSize:"18px"}}>{value}</Typography>)
                            // })
                            }
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
                                        <MenuItem value={'직접'}>직접 수령</MenuItem>
                                        <MenuItem value={'서비스'}>픽업 서비스</MenuItem>
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
                                        <MenuItem value={'직접'}>직접 반납</MenuItem>
                                        <MenuItem value={'서비스'}>픽업 서비스</MenuItem>
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
                        onChange={(value)=>{setRendStartDate(toStringByFormatting(value[0]));setRendEndDate(toStringByFormatting(value[1]));}}
                        minDate={new Date(data.data?.rentStartDate)}
                        maxDate={new Date(data.data?.rentEndDate)}
                        tileDisabled={({date, view}) =>
                            (view === 'month') && // Block day tiles only
                            data.disabledDate.some(disabledDate =>
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
                        onClick={()=>{
                            // console.log(data)
                            if(rendStartDate==''||rendEndDate=='')
                            {
                                Swal.fire({
                                    // toast: true,
                                    icon: 'error',
                                    title: '예약 날짜를 입력해주세요.',
                                    animation: false,
                                    position: 'middle',
                                    showConfirmButton: false,
                                    timer: 1500,
                                    timerProgressBar: false,
                                    didOpen: (toast) => {
                                      toast.addEventListener('mouseenter', Swal.stopTimer)
                                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                                    }
                                });
                            }else if(rendStartDate==rendEndDate)
                            {
                                Swal.fire({
                                    // toast: true,
                                    icon: 'error',
                                    title: '예약 시작 날짜와 \n예약 종료 날짜는 \n동일할 수 없습니다.',
                                    animation: false,
                                    position: 'middle',
                                    showConfirmButton: false,
                                    timer: 1500,
                                    timerProgressBar: false,
                                    didOpen: (toast) => {
                                        toast.addEventListener('mouseenter', Swal.stopTimer)
                                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                                    }
                                });
                            }
                            else if(!isCheck && (zonecode==''||addr==''))
                            {
                                Swal.fire({
                                    // toast: true,
                                    icon: 'error',
                                    title: '주소를 입력해주세요.',
                                    animation: false,
                                    position: 'middle',
                                    showConfirmButton: false,
                                    timer: 1500,
                                    timerProgressBar: false,
                                    didOpen: (toast) => {
                                        toast.addEventListener('mouseenter', Swal.stopTimer)
                                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                                    }
                                });
                            }
                            else{
                                CREATE_RSVD(
                                    {
                                        "boardId":boardId.boardId,
                                        "lenderId":`${uid}`,
                                        "delvyOptionCode":`${take}${give}`,
                                        "lenderAddr":`${zonecode} ${addr} ${extraAddr}`,
                                        "rentStartDate":`${rendStartDate}`,
                                        "rentEndDate":`${rendEndDate}`,
                                        "rsvdId": 0,
                                        "rsvdStatusCode": "예약중"
                                    }
                                )
                                Swal.fire({
                                    // toast: true,
                                    icon: 'success',
                                    title: '예약이 완료되었습니다!',
                                    animation: false,
                                    position: 'middle',
                                    showConfirmButton: false,
                                    timer: 1500,
                                    timerProgressBar: false,
                                    didOpen: (toast) => {
                                      toast.addEventListener('mouseenter', Swal.stopTimer)
                                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                                    }
                                });
                                navigate("/");
                            }
                            
                        }}
                        >예약하기</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}