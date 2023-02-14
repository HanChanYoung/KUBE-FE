import Header from "../component/public/Header";
import {useEffect ,useState,useRef} from "react";
import {useSelector ,useDispatch} from 'react-redux';
import { useNavigate } from "react-router-dom";
import { Typography ,Select,TextField,MenuItem,FormControl,FormHelperText,Button,Menu,Tooltip} from "@mui/material";
import {useDaumPostcodePopup} from 'react-daum-postcode';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../component/boardrsvdpage/calendar.css'
import imageCompression from 'browser-image-compression';
import { CREATE_BOARD_PAGE, IMAGE_DOWNLOAD, UPLOAD_IMAGE } from "../config";
import Swal from 'sweetalert2'

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

export default function BoardCreatePage(){
    const isLogin=useSelector((state)=>state.loginSlice.isLogin);
    const uid=useSelector((state)=>state.loginSlice.uid);
    const navigate=useNavigate();
    //보관
    const [take, setTake] = useState('직접');
    //수령
    const [give, setGive] = useState('직접');
    
    const [isCheck, setIsCheck] = useState(true);

    const [title,setTitle]=useState('');

    const [desc,setDesc]=useState('');

    const [price,setPrice]=useState('');

    const [category, setCategory] = useState('카테고리를 선택해주세요.')

    const [rendStartDate, setRendStartDate] = useState('')

    const [rendEndDate, setRendEndDate] = useState('')

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
    const [zonecode, setZonecode] = useState('');
    const [addr, setAddr] = useState('');
    const [extraAddr, setExtraAddr] = useState('');
    
    const onCompletePost = data => {
        setAddr(data.address)
        setZonecode(data.zonecode)
    }; 
    const open = useDaumPostcodePopup();
    const handleClick = () => {
        open({ onComplete: onCompletePost });
    };

    useEffect(() =>{
        if(!isLogin){
            navigate("/");
            }
        }
    )
    //For menu
    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = Boolean(anchorEl);
    const handleClickMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    //For Image
    const fileInput = useRef(null);

    const handleButtonClick = e => {
        fileInput.current.click();
    };
    const options = { 
        maxSizeMB: 2, 
        maxWidthOrHeight: 650
    }
    const handleChangeImage =async e => {
        console.log(e.target.files[0]);
        // "/storeImage/userID+생성날짜(시간)"
            const compressedFile = await imageCompression(e.target.files[0], options);
            encodeFileToBase64(compressedFile);
        }

    const [imageSrc, setImageSrc] = useState('');

    const encodeFileToBase64 = (fileBlob) => {
        const reader = new FileReader();
        reader.readAsDataURL(fileBlob);
        return new Promise((resolve) => {
                reader.onload = () => {
                    setImageSrc(reader.result);
                    resolve();
                };
            });
    };
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
                        <div
                        onClick={handleButtonClick}
                        style={{width:"650px",
                        height:"650px",
                        backgroundColor:"#E7E7E7",
                        borderRadius:"20px",
                        alignItems:"center",
                        justifyContent:"center",
                        display:"flex",
                        fontSize:"24px"}}>
                            {imageSrc ? <img 
                            style={{maxwidth:"650px",maxheight:"650px"}}
                            src={imageSrc} alt="preview-img" />
                            :
                            "사진을 등록해주세요!"}
                        </div>
                        <input type="file"
                            ref={fileInput}
                            onChange={handleChangeImage}
                            style={{ display: "none" }} />
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
                        borderBottom:"1px solid #BBBBBB",
                        flexDirection:"column"}}>
                            <div style={{width:"600px"}}>
                            <Button
                            onClick={handleClickMenu}
                            style={{color:"black",
                            height:"20px"}}>
                                <Typography style={{
                                    fontSize:"20px",
                                    fontWeight:"bold",
                                    textDecorationLine:"underline",
                                }}>
                                    {category}</Typography>
                            </Button>
                            </div>
                            <Menu
                                anchorEl={anchorEl}
                                id="account-menu"
                                open={openMenu}
                                onClose={handleClose}
                                onClick={handleClose}
                                PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                    },
                                    '&:before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                    },
                                },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <MenuItem onClick={()=>setCategory("PACKAGE")}>
                                    PACKAGE
                                </MenuItem>
                                <MenuItem onClick={()=>setCategory("TENT / TARP")}>
                                    TENT / TARP
                                </MenuItem>
                                <MenuItem onClick={()=>setCategory("Bedding / Seasonal items")}>
                                    Bedding / Seasonal items
                                </MenuItem>
                                <MenuItem onClick={()=>setCategory("Chair / Table Furniture")}>
                                    Chair / Table Furniture
                                </MenuItem>
                                <MenuItem onClick={()=>setCategory("Brazier / Burner Others")}>
                                    Brazier / Burner Others
                                </MenuItem>
                                <MenuItem onClick={()=>setCategory("Coppel / Ice box Tableware")}>
                                    Coppel / Ice box Tableware
                                </MenuItem>
                                
                            </Menu>
                            <TextField 
                            placeholder="제공할 상품의 제목을 입력해주세요"
                            variant="standard"
                            onChange={(e)=>setTitle(e.target.value)}
                            value={title}
                            InputProps={{
                                disableUnderline:true,
                                style:{marginTop:"8px",
                                width:"450px",
                                color:"black",}
                            }}></TextField>
                            <Tooltip title="쉼표 없이 숫자만 적어주세요">
                                <TextField 
                                placeholder="가격 입력"
                                variant="standard"
                                onChange={(e)=>setPrice(e.target.value)}
                                value={price}
                                InputProps={{
                                    disableUnderline:true,
                                    style:{
                                    width:"150px",
                                    color:"black",
                                    float:"right",
                                    fontSize:"28px",
                                    fontWeight:"bold",
                                    marginTop:"50px",}
                                }}></TextField>
                            </Tooltip>
                            {/* <Typography style={{
                                float:"right",
                                fontSize:"28px",
                                fontWeight:"bold",
                                marginTop:"20px"
                            }}>
                                가격 입력</Typography> */}
                        </div>
                        <div style={{width:"600px",
                        height:"390px",
                        float:"right",
                        display:"flex",
                        alignItems:"center"}}>
                            <TextField
                            variant="standard"
                            multiline="true"
                            placeholder="제공할 제품의 상세 내용을 입력해 주세요
                            
                            (예시)
                            정가는 56,000원입니다.
                            상태 좋습니다~"
                            onChange={(e)=>setDesc(e.target.value)}
                            value={desc}
                            InputProps={{
                                disableUnderline:true,
                                style:{height:"390px",
                                        width:"600px"}}}>
                            </TextField>
                            
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
                                        <MenuItem value={'직접'}>직접 보관</MenuItem>
                                        <MenuItem value={'픽업'}>픽업 서비스</MenuItem>
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
                                        <MenuItem value={'직접'}>직접 수령</MenuItem>
                                        <MenuItem value={'픽업'}>픽업 서비스</MenuItem>
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
                        minDate={new Date()}
                        onChange={(value)=>{setRendStartDate(toStringByFormatting(value[0]));setRendEndDate(toStringByFormatting(value[1]));}}
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
                            var url;
                            switch(category){
                                case "PACKAGE":
                                    url="/img/default/image-Package-1.png"
                                    break;
                                case "TENT / TARP":
                                    url="/img/default/image-Tent-1.png"
                                    break;
                                case "Bedding / Seasonal items":
                                    url="/img/default/image-Bedding-1.png"
                                    break;
                                case "Chair / Table Furniture":
                                    url="/img/default/image-Chair-1.png"
                                    break;
                                case "Brazier / Burner Others":
                                    url="/img/default/image-Brazier-1.png"
                                    break;
                                case "Coppel / Ice box Tableware":
                                    url="/img/default/image-Coppel-1.png"
                                    break;
                            }
                            if(title==''||desc==''||price==''||category=='카테고리를 선택해주세요.'||rendStartDate==''||rendEndDate=='')
                            {
                                var check=''
                                switch(true){
                                    case category=='카테고리를 선택해주세요.':
                                        check='카테고리를 선택해주세요.'
                                        break;
                                    case title=='':
                                        check='게시글 제목을 입력해주세요.'
                                        break;
                                    case price=='':
                                        check='가격을 입력해주세요.'
                                        break;
                                    case desc=='':
                                        check='게시글 설명을 입력해주세요.'
                                        break;
                                    case rendStartDate=='':
                                        check='대여 가능 시작 날짜를 선택해주세요.'
                                        break;
                                    case rendEndDate=='':
                                        check='대여 가능 종료 날짜를 선택해주세요.'
                                        break;
                                }
                                Swal.fire({
                                    // toast: true,
                                    icon: 'error',
                                    title: `${check}`,
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
                            else if(rendStartDate==rendEndDate)
                            {
                                Swal.fire({
                                    // toast: true,
                                    icon: 'error',
                                    title: '대여 시작 날짜와 \n대여 종료 날짜는 \n동일할 수 없습니다.',
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
                            }else
                            {
                                CREATE_BOARD_PAGE({
                                    "boardId":0,
                                    "providerId":`${uid}`,
                                    "boardName":`${title}`,
                                    "boardDesc":`${desc}`,
                                    "categoryName":`${category}`,
                                    "price":parseInt(price),
                                    "delvyStatusCode":`${take}${give}`,
                                    "boardAddr":`${zonecode} ${addr} ${extraAddr}`,
                                    "rentStartDate":`${rendStartDate}`,
                                    "rentEndDate":`${rendEndDate}`,
                                    "imgSrc":url,
                                })                                
                                Swal.fire({
                                    // toast: true,
                                    icon: 'success',
                                    title: '보관 신청이 완료되었습니다!',
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
                        >보관신청하기</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}