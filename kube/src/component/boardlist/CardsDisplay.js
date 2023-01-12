import React from "react";
import {Card} from "./Card";

const CardsDisplay = ({ productCard, loading }) => {
    if (loading) {
        return <h2> Loading...</h2>;
    }
    console.log(productCard);

    return (
        <div style={{textAlign:"center"}}>
            {productCard?.map((id) => {
                return (
                    <Card
                        category={id.category}
                        imageurl={"/img" + id.img}
                        desc={id.desc}
                        price={id.price + "원"}
                    />
                );
            })}
        </div>
    );
};

export default CardsDisplay;