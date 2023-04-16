import React from 'react'
import { useDispatch, useSelector } from 'react-redux'



function SeatItem() {
  const dispatch = useDispatch();

  const { seatListAll, selectedSeat } = useSelector((state) => state.sticketsReducer);

  // const handleTest = (row, seats) => {
  //   dispatch({
  //     type: "GHE_DANG_CHON",
  //     row, seats
  //   })
  // }

  return (
    <div>
      <div className='seatItem'>
        {seatListAll.map((item) => {
          return (
            <div key={item.seatListAll} className='row'>
              <span className='rowNumber'>{item.row}</span>
              {item.seatsList.map((seat) => {
                if (!item.row) {
                  return (
                    <div className='rowNumber'>
                      <span className='text-center'>{seat.seats}</span>
                    </div>
                  )
                }

                // Tìm ra các ghế được chọn
                const choosedSeat = selectedSeat.find((item) => {
                  return item.seats === seat.seats;
                })

                return (
                  <button
                    key={seat.seats}
                    className={seat.booked ? 'seats selected__seat' : choosedSeat ? 'seats selecting__seat' : 'seats'}
                    onClick={() =>
                      dispatch({
                        type: "GHE_DANG_CHON",
                        payload: seat,
                      })
                    }
                    disabled={seat.booked}
                  >
                    <span className='text-center'>{seat.seats}</span>
                  </button>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SeatItem