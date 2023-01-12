import { useEffect, useState } from "react";
// import axios from "axios";
import CardsDisplay from "./CardsDisplay";
import { Pagination } from "@mui/material";

export default function ProductsList() {
    const products = [
        {   
            id: 1,
            category:"Tent",
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
            category:"Package",
            desc: "풀세트",
            price: "108,000",
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
            category:"Package",
            desc: "풀세트",
            price: "108,000",
            img: "/image-package1.png"
        },
        {   
            id: 8,
            category:"Package",
            desc: "풀세트",
            price: "108,000",
            img: "/image-package1.png"
        },
    ];

    const [loading, setLoading] = useState(false);
    let [productCard, setproductCard] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage] = useState(10);

    // const PER_PAGE = 4;
    // const count = Math.ceil(products.length / PER_PAGE);
    // const _DATA = usePagination(products, PER_PAGE);

    
    useEffect(()=> {
        const getProductDetails = async () => {
            setLoading(true);
            // const dataFromServer = await axios.get(
            //     `https://api.themoviedb.org/3/movie/popular?api_key=e11085cff59023d052e3a69484d6cd19&page=${currentPage}`
            // );
            // const responeFromServer = dataFromServer.data.results;
            // console.log(responeFromServer);
            setproductCard(products);
            setLoading(false);
        };
        getProductDetails();
    }, [currentPage]);

    // Get currCards
    const indexOfLastCard = currentPage * cardsPerPage;

    // const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    // const currentCards = productCard.slice(indexOfFirstCard, indexOfLastCard);

    // Change page
    // const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleChange = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <div>
            <div style={{fontFamily:"sans-serif", textAlign:"center"}}>
                <CardsDisplay productCard={productCard} loading={loading} />
                <Pagination style={{
                    margin:"40px",
                    justifyContent:"center",
                    display:"flex",
                    }}
                    count={5} page={currentPage} onChange={handleChange} size="large"/>
            </div>
        </div>
    )
}