import React from 'react'
import '../style/BaiTapBookingTicket.css'
import BillStickets from './BillStickets'
import SeatItem from './SeatItem'

function BookStickets() {
  return (
    <div className="background">
      <div className="content__title">
        <h3>Đặt vé xem phim LP</h3>
      </div>

      {/* Hiển thị màn hình */}
      <div className="container">
        <div className="row">
          <div className="col-8 text-center mt-2">
            <span
              style={{ color: 'white' }}
            >
              Màn hình
            </span>
            <div className='screen'></div>
          </div>
        </div>
      </div>

      {/* Hiển thị danh sách ghế */}
      <div className="row">
        <div className="col-8">
          <SeatItem />
        </div>
        <div className="col-4">
          <div className="content__titleBill">
            <h2>DANH SÁCH GHẾ BẠN CHỌN</h2>
          </div>

          {/* Hiển thị trạng thái ghế */}
          <div className='seat__status'>
            <ul>
              <li>
                <span className='selected__seat'></span> <small>Ghế đã đặt</small>
              </li>
              <li>
                <span className='selecting__seat'></span> <small>Ghế đang chọn</small>
              </li>
              <li>
                <span className='unbooked__seat'></span> <small>Ghế chưa đặt</small>
              </li>
            </ul>
          </div>

          {/* Hiển thị bill */}
          <BillStickets />
        </div>
      </div>

    </div>
  )
}

export default BookStickets