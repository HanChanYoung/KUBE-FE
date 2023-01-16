// import * as React from 'react';
import { useState, useEffect, useMemo } from "react";
import Header from "../component/public/Header";
import { Button, Modal, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

import ImageSlider from '../component/boardlist/ImageSlider';

import NativeSelect from "@mui/material/NativeSelect";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";

export default function BoardListPage () {
    const products = [
        {   
            id: 1,
            category:"Tent / Tarp",
            desc: "원터치 텐트",
            price: "27,000",
            img: "/image-tent1.png"
        },
        {   
            id: 2,
            category:"Package",
            desc: "풀세트",
            price: "108,000",
            img: "/image-package1.png"
        },
        {   
            id: 3,
            category:"Bedding",
            desc: "Bedding",
            price: "10,000",
            img: "/image-package1.png"
        },
        {   
            id: 4,
            category:"Package",
            desc: "풀세트",
            price: "108,000",
            img: "/image-package1.png"
        },
        {   
            id: 5,
            category:"Package",
            desc: "풀세트",
            price: "108,000",
            img: "/image-package1.png"
        },
        {   
            id: 6,
            category:"Package",
            desc: "풀세트",
            price: "108,000",
            img: "/image-package1.png"
        },
        {   
            id: 7,
            category:"Chair / Table",
            desc: "풀세트",
            price: "108,000",
            img: "/image-package1.png"
        },
        {   
            id: 8,
            category:"Package",
            desc: "풀세트",
            price: "10,000",
            img: "/image-tent1.png"
        },
        {   
            id: 9,
            category:"Brazier / Burner",
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
            category:"Package",
            desc: "풀세트",
            price: "108,000",
            img: "/image-package1.png"
        },
        {   
            id: 12,
            category:"Package",
            desc: "풀세트",
            price: "108,000",
            img: "/image-package1.png"
        },
        {   
            id: 13,
            category:"Coppel / Ice box",
            desc: "풀세트",
            price: "108,000",
            img: "/image-package1.png"
        },
        {   
            id: 14,
            category:"Package",
            desc: "풀세트",
            price: "108,000",
            img: "/image-package1.png"
        },
        {   
            id: 15,
            category:"Tent / Tarp",
            desc: "원터치 텐트",
            price: "27,000",
            img: "/image-tent1.png"
        },
        {   
            id: 16,
            category:"Package",
            desc: "풀세트",
            price: "108,000",
            img: "/image-package1.png"
        },
        {   
            id: 17,
            category:"Package",
            desc: "풀세트",
            price: "108,000",
            img: "/image-package1.png"
        },
        {   
            id: 18,
            category:"Package",
            desc: "풀세트",
            price: "10,000",
            img: "/image-tent1.png"
        },
        {   
            id: 19,
            category:"Tent / Tarp",
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

    useEffect(() => {
        setBoards(products);
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
                board.desc.toLowerCase().includes(searchTerm.toLowerCase())
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

        if (cate === "Package") {
            computedBoard = computedBoard.filter(
                board =>
                cate === "Package" && board.category === "Package"
            );
        }

        if (cate === "Tent / Tarp") {
            computedBoard = computedBoard.filter(
                board =>
                cate === "Tent / Tarp" && board.category === "Tent / Tarp"
            );
        }

        if (cate === "Bedding") {
            computedBoard = computedBoard.filter(
                board =>
                cate === "Bedding" && board.category === "Bedding"
            );
        }

        if (cate === "Chair / Table") {
            computedBoard = computedBoard.filter(
                board =>
                cate === "Chair / Table" && board.category === "Chair / Table"
            );
        }

        if (cate === "Brazier / Burner") {
            computedBoard = computedBoard.filter(
                board =>
                cate === "Brazier / Burner" && board.category === "Brazier / Burner"
            );
        }

        if (cate === "Coppel / Ice box") {
            computedBoard = computedBoard.filter(
                board =>
                cate === "Coppel / Ice box" && board.category === "Coppel / Ice box"
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
                    <div style={{height:"360px",
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
                                        setCate('Package');
                                        setCurrentPage(1);
                                    }}
                                    style={{color:"white",fontSize:"16px",
                                            width:"180px", height:"85px",
                                            borderRadius: "16px", padding:"5px",
                                            background:"#202225"}}>PACKAGE</Button>
                            <Button onClick={() => {
                                        setCate('Tent / Tarp');
                                        setCurrentPage(1);
                                    }}
                                    style={{color:"white",fontSize:"16px",
                                            width:"180px", height:"85px",
                                            borderRadius: "16px",
                                            background:"#202225"}}>Tent / Tarp</Button>
                            <Button onClick={() => {
                                        setCate('Bedding');
                                        setCurrentPage(1);
                                    }}
                                    style={{color:"white",fontSize:"16px",
                                            width:"180px", height:"85px",
                                            borderRadius: "16px",
                                            background:"#202225"}}>
                            Bedding
                            Seasonal items</Button>
                            <Button onClick={() => {
                                        setCate('Chair / Table');
                                        setCurrentPage(1);
                                    }}
                                    style={{color:"white",fontSize:"16px",
                                            width:"180px", height:"85px",
                                            borderRadius: "16px",
                                            background:"#202225"}}>
                            Chair / Table
                            Furniture</Button>
                            <Button onClick={() => {
                                        setCate('Brazier / Burner');
                                        setCurrentPage(1);
                                    }}
                                    style={{color:"white",fontSize:"16px",
                                            width:"180px", height:"85px",
                                            borderRadius: "16px",
                                            background:"#202225"}}>
                            Brazier / Burner
                            Others</Button>
                            <Button onClick={() => {
                                        setCate('Coppel / Ice box');
                                        setCurrentPage(1);
                                    }}
                                    style={{color:"white",fontSize:"16px",
                                            width:"180px", height:"85px",
                                            borderRadius: "16px",
                                            background:"#202225"}}>
                            Coppel / Ice box
                            Tableware</Button>
                        </div>
                    </div>
                    <div style={{width:"100%",height:"56px"}}>
                        <Button onClick={resetFilter}
                                style={{color:"black",fontSize:"20px",
                                        width:"141px", height:"56px",
                                        float:"right", marginRight:"30px"
                                        }}>Reset</Button>
                        <Button onClick={handleOpen}
                                style={{color:"black",fontSize:"20px",
                                        width:"141px", height:"56px",
                                        float:"right", marginRight:"30px"
                                        }}>세부검색</Button>
                        <Modal open={open} onClose={handleClose}>
                            <Box style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: 800,
                                bgcolor: 'background.paper',
                                boxShadow: 24,
                                p: 4,
                                backgroundColor:"white"
                            }}>
                                {/* <SearchBar /> */}
                                <div style={{ margin: 20, padding: 20 }}>
                                    <Box
                                        component="form"
                                        sx={{
                                        "& .MuiTextField-root": { m: 1, width: "40ch" },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        {" "}
                                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                                        <NativeSelect
                                            defaultValue={"none"}
                                            inputProps={{
                                            name: "category",
                                            id: "uncontrolled-native",
                                            }}
                                        >
                                            <option value={"none"}>통합검색</option>
                                            <option value={"package"}>Package</option>
                                            <option value={"tent"}>Tent / Tarp</option>
                                            <option value={"bedding"}>Bedding / Seasonal items</option>
                                            <option value={"chair"}>Chair / Table</option>
                                            <option value={"brazier"}>Brazier / Burner</option>
                                            <option value={"coppel"}>Coppel / Ice box</option>
                                        </NativeSelect>
                                        </FormControl>
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
                                    </Box>
                                </div>
                            </Box>
                        </Modal>
                    </div>

    {/* ---------- BoardList ---------- */}
                    <div>
                        <div style={{fontFamily:"sans-serif", textAlign:"center"}}>
                            <div style={{textAlign:"center"}}>
                                {boardsData.map((v) => {
                                    return (
                                        cate?cate===v.category?
                                        <div key={v.id} style={{ maxWidth:"50%", display:"inline-block"}}>
                                            <div style={{margin:"20px",
                                                        width:"300px", height:"300px",
                                                        overflow:"hidden",
                                                        borderRadius:"20px",
                                                        transition:"0.5s",
                                                        animation:"ease-in-out",
                                                        backgroundColor:"#EBEBF5",
                                                        textAlign:"center",
                                                        display:"table",}}>
                                            <div style={{overflow:"hidden",
                                                            display:"table-cell",
                                                            verticalAlign:"middle"}}>
                                                <img style={{
                                                    maxWidth:"250px", maxHeight:"250px"}} 
                                                    src={"/img"+`${v.img}`} alt="" />
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
                                                <div>{`${v.category}`}</div>
                                                </div>
                                                <div style={{
                                                            margin:"15px",
                                                            marginLeft:"35px",
                                                            fontWeight:"400",
                                                            fontSize:"18px",
                                                            display:"flex",
                                                            alignItems:"center"
                                                            }}>
                                                <div>{`${v.desc}`}</div>
                                                </div>
                                                <div style={{
                                                            margin:"15px",
                                                            marginLeft:"35px",
                                                            fontWeight:"700",
                                                            fontSize:"20px",
                                                            display:"flex",
                                                            alignItems:"center"
                                                            }}>
                                                    <div>{`${v.price}`}</div>
                                                </div>
                                            </div>
                                        </div>:null
                                        :
                                        <div key={v.id} style={{ maxWidth:"50%", display:"inline-block"}}>
                                            <div onClick={() => {navigate(`/brp/${v.id}`)}}
                                                style={{margin:"20px",
                                                        width:"300px", height:"300px",
                                                        overflow:"hidden",
                                                        borderRadius:"20px",
                                                        transition:"0.5s",
                                                        animation:"ease-in-out",
                                                        backgroundColor:"#EBEBF5",
                                                        textAlign:"center",
                                                        display:"table",}}>
                                            <div style={{overflow:"hidden",
                                                            display:"table-cell",
                                                            verticalAlign:"middle"}}>
                                                <img style={{
                                                    maxWidth:"250px", maxHeight:"250px"}} 
                                                    src={"/img"+`${v.img}`} alt="" />
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
                                                <div>{`${v.category}`}</div>
                                                </div>
                                                <div style={{
                                                            margin:"15px",
                                                            marginLeft:"35px",
                                                            fontWeight:"400",
                                                            fontSize:"18px",
                                                            display:"flex",
                                                            alignItems:"center"
                                                            }}>
                                                <div>{`${v.desc}`}</div>
                                                </div>
                                                <div style={{
                                                            margin:"15px",
                                                            marginLeft:"35px",
                                                            fontWeight:"700",
                                                            fontSize:"20px",
                                                            display:"flex",
                                                            alignItems:"center"
                                                            }}>
                                                    <div>{`${v.price}`}</div>
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