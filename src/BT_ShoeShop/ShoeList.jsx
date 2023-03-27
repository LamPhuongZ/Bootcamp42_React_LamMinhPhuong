import React from 'react'
import ShoeItem from './ShoeItem';

function ShoeList({ shoes, onSelectedShoes }) {
    const handleSelectedShoes = (shoe) => {
        onSelectedShoes(shoe);
    }

    return (
        <div className='row'>
            {shoes.map((shoe) => {
                return (
                    <div key={shoe.id} className='col-sm-4'>
                        <ShoeItem 
                            shoe={shoe}
                            onSelectedShoes={handleSelectedShoes}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default ShoeList