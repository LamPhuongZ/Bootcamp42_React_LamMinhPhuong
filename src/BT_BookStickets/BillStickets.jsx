import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function BillStickets() {
  const dispatch = useDispatch();

  const { selectedSeat } = useSelector((state) => state.sticketsReducer);

  // Hàm tính tổng tiền vé
  const handleAmount = (item) => {
    return item.reduce((result, value) => {
      return result += value.price;
    }, 0);
  }

  // Hàm thanh toán
  const handleSelectedSeats = (seat) => {
    dispatch({type: "GHE_DA_DAT", payload: seat})
  }

  // Hàm hủy vé
  const handleSeatCancel = (seat) => {
    dispatch({type: "GHE_BI_HUY", payload: seat})
  }

  return (
    <table className='table text-white table-bordered w-75'>
      <thead>
        <tr>
          <th>Số ghế</th>
          <th>Giá</th>
          <th>Hủy</th>
        </tr>
      </thead>
      <tbody>
        {selectedSeat.map((item) => {
          return (
            <tr key={item.seats}>
              <td>{item.seats}</td>
              <td>{item.price}</td>
              <td>
                <button className='btn btn-danger' onClick={() => handleSeatCancel(item.seats)}>Hủy</button>
              </td>
            </tr>
          )
        }
        )}
        <tr>
          <td>Tổng tiền</td>
          <td className="text-warning">{handleAmount(selectedSeat)}</td>
          <td></td>
        </tr>
      </tbody>
      {/* <div className='text-right'>
        <button className="btn btn-secondary mt-2" onClick={() => handleSelectedSeats(selectedSeat)}>Thanh toán</button>
      </div> */}
    </table>
  )
}

export default BillStickets