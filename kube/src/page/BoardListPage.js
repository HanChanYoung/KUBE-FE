// import * as React from 'react';
import { useState, useEffect, useMemo } from "react";
import Header from "../component/public/Header";
import { Button, Modal, Box ,CircularProgress} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ImageSlider from '../component/boardlist/ImageSlider';
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import { GET_BOARD_LIST } from "../config";
import axios from 'axios'


export default function BoardListPage () {
    const products = [
        {   
            id: 1,
            category:"TENT / TARP",
            desc: "원터치 텐트",
            price: "27,000",
            img: "/image-tent1.png"
        },
        {   
            id: 2,
            category:"PACKAGE",
            desc: "풀세트",
            price: "108,000",
            img: "/image-PACKAGE1.png"
        },
        {   
            id: 3,
            category:"Bedding / Seasonal items",
            desc: "Bedding / Seasonal items",
            price: "10,000",
            img: "/image-PACKAGE1.png"
        },
        {   
            id: 4,
            category:"PACKAGE",
            desc: "풀세트",
            price: "108,000",
            img: "/image-PACKAGE1.png"
        },
        {   
            id: 5,
            category:"PACKAGE",
            desc: "풀세트",
            price: "108,000",
            img: "/image-PACKAGE1.png"
        },
        {   
            id: 6,
            category:"PACKAGE",
            desc: "풀세트",
            price: "108,000",
            img: "/image-PACKAGE1.png"
        },
        {   
            id: 7,
            category:"Chair / Table Furniture",
            desc: "풀세트",
            price: "108,000",
            img: "/image-PACKAGE1.png"
        },
        {   
            id: 8,
            category:"PACKAGE",
            desc: "풀세트",
            price: "10,000",
            img: "/image-tent1.png"
        },
        {   
            id: 9,
            category:"Brazier / Burner Others",
            desc: "원터치 텐트",
            price: "27,000",
            img: "/image-tent1.png"
        },
        {   
            id: 10,
            category:"Tent",
            desc: "원터치 텐트",
            price: "27,000",
            img: "/image-tent1.png"
        },
        {   
            id: 11,
            category:"PACKAGE",
            desc: "풀세트",
            price: "108,000",
            img: "/image-PACKAGE1.png"
        },
        {   
            id: 12,
            category:"PACKAGE",
            desc: "풀세트",
            price: "108,000",
            img: "/image-PACKAGE1.png"
        },
        {   
            id: 13,
            category:"Coppel / Ice box Tableware",
            desc: "풀세트",
            price: "108,000",
            img: "/image-PACKAGE1.png"
        },
        {   
            id: 14,
            category:"PACKAGE",
            desc: "풀세트",
            price: "108,000",
            img: "/image-PACKAGE1.png"
        },
        {   
            id: 15,
            category:"TENT / TARP",
            desc: "원터치 텐트",
            price: "27,000",
            img: "/image-tent1.png"
        },
        {   
            id: 16,
            category:"PACKAGE",
            desc: "풀세트",
            price: "108,000",
            img: "/image-PACKAGE1.png"
        },
        {   
            id: 17,
            category:"PACKAGE",
            desc: "풀세트",
            price: "108,000",
            img: "/image-PACKAGE1.png"
        },
        {   
            id: 18,
            category:"PACKAGE",
            desc: "풀세트",
            price: "10,000",
            img: "/image-tent1.png"
        },
        {   
            id: 19,
            category:"TENT / TARP",
            desc: "원터치 텐트",
            price: "27,000",
            img: "/image-tent1.png"
        },
    ];

    const [boards, setBoards] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterCompleted, setFilterCompleted] = useState("");

    const [currentPage, setCurrentPage] = useState(1);
    const [totalBoards, setTotalBoards] = useState(0);
    const boardsPerPage = 8;


    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [cate, setCate] = useState(null);
    const navigate = useNavigate();

    useEffect(async () => {
        const { data } = await axios.get(`/api/posts`);
        setBoards(data);
    }, []);
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalBoards / boardsPerPage); i++) {
        pageNumbers.push(i);
    }

    const boardsData = useMemo(() => {
        let computedBoard = boards;

        if (searchTerm) {
            computedBoard = computedBoard.filter(
                // board =>
                // board.title.toLowerCase().includes(searchTerm.toLowerCase())
                board =>
                board.boardName.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (filterCompleted === "true") {
            computedBoard = computedBoard.filter(
                board =>
                filterCompleted === "true" && board.completed === true
            )
        }

        if (filterCompleted === "false") {
            computedBoard = computedBoard.filter(
                board =>
                filterCompleted === "false" && board.completed === false
            )
        }

        if (cate === "PACKAGE") {
            computedBoard = computedBoard.filter(
                board =>
                cate === "PACKAGE" && board.categoryName === "PACKAGE"
            );
        }

        if (cate === "TENT / TARP") {
            computedBoard = computedBoard.filter(
                board =>
                cate === "TENT / TARP" && board.categoryName === "TENT / TARP"
            );
        }

        if (cate === "Bedding / Seasonal items") {
            computedBoard = computedBoard.filter(
                board =>
                cate === "Bedding / Seasonal items" && board.categoryName === "Bedding / Seasonal items"
            );
        }

        if (cate === "Chair / Table Furniture") {
            computedBoard = computedBoard.filter(
                board =>
                cate === "Chair / Table Furniture" && board.categoryName === "Chair / Table Furniture"
            );
        }

        if (cate === "Brazier / Burner Others") {
            computedBoard = computedBoard.filter(
                board =>
                cate === "Brazier / Burner Others" && board.categoryName === "Brazier / Burner Others"
            );
        }

        if (cate === "Coppel / Ice box Tableware") {
            computedBoard = computedBoard.filter(
                board =>
                cate === "Coppel / Ice box Tableware" && board.categoryName === "Coppel / Ice box Tableware"
            );
        }

        setTotalBoards(computedBoard.length);

        //Current Page slice
        return computedBoard.slice(
            (currentPage - 1) * boardsPerPage,
            (currentPage - 1) * boardsPerPage + boardsPerPage
        );
    }, [boards, currentPage, searchTerm, filterCompleted, cate]);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const resetFilter = () => {
        setSearchTerm("");
        setFilterCompleted("");
        setCurrentPage(1);
        setCate(null);
    };
    
    return (
        <div style={{width:"100%"}}>
            <Header />
            <div>
                <div>
                    <div style={{height:"400px",
                                overflow:"hidden"}}>
                        <ImageSlider />
                    </div>
                    <div style={{width:"100%",
                                height:"160px",
                                display:"flex",
                                justifyContent:"center",
                                alignItems:"center",}}>                     
                        <div style={{width:"85%",
                                    justifyContent:"space-between",
                                    display:"flex",
                                    alignItems:"center",
                                    padding:"20px",}}>
                            <Button onClick={() => {
                                        setCate('PACKAGE');
                                        setCurrentPage(1);
                                    }}
                                    style={{color:"white",fontSize:"16px",
                                            width:"180px", height:"85px",
                                            borderRadius: "16px", padding:"5px",
                                            background:"#202225"}}>PACKAGE</Button>
                            <Button onClick={() => {
                                        setCate('TENT / TARP');
                                        setCurrentPage(1);
                                    }}
                                    style={{color:"white",fontSize:"16px",
                                            width:"180px", height:"85px",
                                            borderRadius: "16px",
                                            background:"#202225"}}>TENT / TARP</Button>
                            <Button onClick={() => {
                                        setCate('Bedding / Seasonal items');
                                        setCurrentPage(1);
                                    }}
                                    style={{color:"white",fontSize:"16px",
                                            width:"180px", height:"85px",
                                            borderRadius: "16px",
                                            background:"#202225"}}>
                            Bedding /
                            Seasonal items</Button>
                            <Button onClick={() => {
                                        setCate('Chair / Table Furniture');
                                        setCurrentPage(1);
                                    }}
                                    style={{color:"white",fontSize:"16px",
                                            width:"180px", height:"85px",
                                            borderRadius: "16px",
                                            background:"#202225"}}>
                            Chair / Table Furniture</Button>
                            <Button onClick={() => {
                                        setCate('Brazier / Burner Others');
                                        setCurrentPage(1);
                                    }}
                                    style={{color:"white",fontSize:"16px",
                                            width:"180px", height:"85px",
                                            borderRadius: "16px",
                                            background:"#202225"}}>
                            Brazier /
                            Others</Button>
                            <Button onClick={() => {
                                        setCate('Coppel / Ice box Tableware');
                                        setCurrentPage(1);
                                    }}
                                    style={{color:"white",fontSize:"16px",
                                            width:"180px", height:"85px",
                                            borderRadius: "16px",
                                            background:"#202225"}}>
                            Coppel /
                            Tableware</Button>
                        </div>
                    </div>
                    <div style={{width:"100%",height:"56px"}}>
                        <div style={{float:"right",
                                    marginRight:"55px",
                                    fontSize:"20px"}}>
                            <TextField id="standard-search" type="search" variant="standard"
                                placeholder="검색어를 입력하세요."
                                value={searchTerm}
                                onChange={(e) => {
                                    setSearchTerm(e.target.value);
                                    setCurrentPage(1);
                                }}
                                />
                            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
                            <SearchIcon />
                            </IconButton>
                        </div>
                    </div>
                    <div style={{width:"100%",height:"56px"}}>
                        <Button onClick={resetFilter}
                                style={{color:"black",fontSize:"20px",
                                        width:"141px", height:"56px",
                                        float:"right", marginRight:"30px"
                                        }}>Reset</Button>
                    </div>

    {/* ---------- BoardList ---------- */}
                    <div style={{width:"1500px",margin:"auto"}}>
                        <div style={{fontFamily:"sans-serif", textAlign:"center"}}>
                            <div style={{textAlign:"center"}}>
                                {products.map((v) => {
                                    return (
                                        cate?cate===v.categoryName?
                                        <div key={v.boardId} style={{ maxWidth:"50%", display:"inline-block"}}>
                                            <div onClick={() => {navigate(`/brp/${v.boardId}`)}} 
                                            style={{margin:"20px",
                                                        width:"300px", height:"300px",
                                                        overflow:"hidden",
                                                        borderRadius:"20px",
                                                        transition:"0.5s",
                                                        animation:"ease-in-out",
                                                        backgroundColor:"#EEEEEE",
                                                        textAlign:"center",
                                                        display:"table",}}>
                                            <div style={{overflow:"hidden",
                                                            display:"table-cell",
                                                            verticalAlign:"middle"}}>
                                                <img style={{
                                                    maxWidth:"250px", maxHeight:"250px"}} 
                                                    src={`${v.imgSrc}`} alt="" />
                                            </div>
                                            </div>
                                            <div style={{margin:"10px", marginTop:"20px", marginBottom:"80px",}}>
                                                <div style={{
                                                            marginLeft:"35px",
                                                            textDecorationLine:"underline",
                                                            fontWeight:"700",
                                                            fontSize:"20px",
                                                            display:"flex",
                                                            alignItems:"center"
                                                            }}>
                                                <div>{`${v.categoryName}`}</div>
                                                </div>
                                                <div style={{
                                                            margin:"15px",
                                                            marginLeft:"35px",
                                                            fontWeight:"400",
                                                            fontSize:"18px",
                                                            display:"flex",
                                                            alignItems:"center"
                                                            }}>
                                                <div>{`${v.boardName}`}</div>
                                                </div>
                                                <div style={{
                                                            margin:"15px",
                                                            marginLeft:"35px",
                                                            fontWeight:"700",
                                                            fontSize:"20px",
                                                            display:"flex",
                                                            alignItems:"center"
                                                            }}>
                                                    <div>{`${v.price.toLocaleString('en-US')}`}</div>
                                                </div>
                                            </div>
                                        </div>:null
                                        :
                                        <div key={v.boardId} style={{ maxWidth:"50%", display:"inline-block"}}>
                                            <div onClick={() => {navigate(`/brp/${v.boardId}`)}}
                                                style={{margin:"20px",
                                                        width:"300px", height:"300px",
                                                        overflow:"hidden",
                                                        borderRadius:"20px",
                                                        transition:"0.5s",
                                                        animation:"ease-in-out",
                                                        backgroundColor:"#EEEEEE",
                                                        textAlign:"center",
                                                        display:"table",}}>
                                            <div style={{overflow:"hidden",
                                                            display:"table-cell",
                                                            verticalAlign:"middle"}}>
                                                <img style={{
                                                    maxWidth:"250px", maxHeight:"250px"}} 
                                                    src={`${v.imgSrc}`} alt="" />
                                            </div>
                                            </div>
                                            <div style={{margin:"10px", marginTop:"20px", marginBottom:"80px",}}>
                                                <div style={{
                                                            marginLeft:"35px",
                                                            textDecorationLine:"underline",
                                                            fontWeight:"700",
                                                            fontSize:"20px",
                                                            display:"flex",
                                                            alignItems:"center"
                                                            }}>
                                                <div>{`${v.categoryName}`}</div>
                                                </div>
                                                <div style={{
                                                            margin:"15px",
                                                            marginLeft:"35px",
                                                            fontWeight:"400",
                                                            fontSize:"18px",
                                                            display:"flex",
                                                            alignItems:"center"
                                                            }}>
                                                <div>{`${v.boardName}`}</div>
                                                </div>
                                                <div style={{
                                                            margin:"15px",
                                                            marginLeft:"35px",
                                                            fontWeight:"700",
                                                            fontSize:"20px",
                                                            display:"flex",
                                                            alignItems:"center"
                                                            }}>
                                                    <div>{`${v.price.toLocaleString('en-US')}`}</div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

    {/* ---------- Pagination bar ---------- */}
                            <div>
                            <nav>
                                <ul style={{
                                        listStyle:"none",
                                        paddingLeft:"0px",
                                        justifyContent:"center",
                                        display:"flex",
                                }}>
                                    {pageNumbers.map((number) => (
                                        <li key={number}>
                                        <Button onClick={() => paginate(number)}
                                                variant="outlined"
                                                style={{
                                                    color:"black",
                                                    borderColor:"gray",
                                                    width:"30px",
                                                    height:"30px",
                                                    margin:"10px",
                                                }}>
                                            {number}
                                        </Button>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                            {/* <Pagination 
                                style={{
                                    margin:"40px",
                                    justifyContent:"center",
                                    display:"flex",
                                }}
                                count={boardsPerPage}
                                size="large"
                                page={pageNumbers}
                                shape="rounded"
                                variant="outlined"
                                onChange={handleChange}
                            /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}