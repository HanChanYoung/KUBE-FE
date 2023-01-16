import React, { useState } from "react";
import { Pagination } from "@mui/material";
import usePagination from "./Pagination";
import { Card } from "./Card";


export default function BoardList (props) {
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
    let [page, setPage] = useState(1);
    const PER_PAGE = 8;

    const count = Math.ceil(products.length / PER_PAGE);
    const _DATA = usePagination(products, PER_PAGE);

    const handleChange = (e, p) => {
        setPage(p);
        _DATA.jump(p);
    };
  

    return (
        <div>
            <div style={{fontFamily:"sans-serif", textAlign:"center"}}>
                <div style={{textAlign:"center"}}>
                    {_DATA.currentData().map(v => {
                        return (
                            props.cate?props.cate===v.category?
                            <Card
                                board_id={v.id}
                                category={v.category}
                                imageurl={"/img" + v.img}
                                desc={v.desc}
                                price={v.price + "원"}
                            />:null
                            :<Card
                            board_id={v.id}
                            category={v.category}
                            imageurl={"/img" + v.img}
                            desc={v.desc}
                            price={v.price + "원"}
                        />
                        );
                    })}
                </div>
                <div>
                <Pagination 
                    style={{
                        margin:"40px",
                        justifyContent:"center",
                        display:"flex",
                    }}
                    count={count}
                    size="large"
                    page={page}
                    shape="rounded"
                    variant="outlined"
                    onChange={handleChange}
                />
                </div>
            </div>
        </div>
    );
}

