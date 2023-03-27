import React, { useState } from "react";
import data from "./data.json";
import ShoeDetails from "./ShoeDetails";
import ShoeList from "./ShoeList";

function ShoeShop() {
    // state quản lý sản phẩm đang được chọn để xem chi tiết
    const [selectedShoe, setSelectedShoe] = useState(null);

    const handleGetShoes = (shoe) => {
        setSelectedShoe(shoe);
    };

    return (
        <div>
            <div className="container">
                <h1 className="text-center my-5">SHOE SHOP</h1>
                <ShoeList
                    shoes={data}
                    onSelectedShoes={handleGetShoes}
                />
                <ShoeDetails
                    shoe={selectedShoe}
                    onClose={() => setSelectedShoe(null)}
                />
            </div>
        </div>
    )
}

export default ShoeShop;
