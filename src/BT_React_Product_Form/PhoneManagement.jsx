import React, { useState, useEffect } from 'react'
import PhoneForm from './PhoneForm'
import Search from './Search'
import PhoneList from './PhoneList'
import axios from "axios";


function PhoneManagement() {
  // state quản lý danh sách phone
  const [phones, setPhones] = useState([]);
  // state quản lý danh sách phone được chọn
  const [selectedPhone, setSelectedPhone] = useState({});
  // state quản lý giá trị tìm kiếm
  const [searchByName, setSearchByName] = useState("");

  // Viết hàm call API để lấy danh sách phone
  const fetchPhones = async () => {
    try {
      const response = await axios.get("https://63f11fda5703e063fa532dfb.mockapi.io/api/phones",
        {
          params: {
            name: searchByName || undefined,
          },
        });
      setPhones(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Viết hàm xử lý nhận vào object phone, thêm vào state phones
  const handleSubmit = async (phone) => {
    const { id, ...payload } = phone;

    try {
      if (id) {
        // Cập nhật 
        await axios.put(`https://63f11fda5703e063fa532dfb.mockapi.io/api/phones/${id}`, payload);
      } else {
        // Thêm mới
        await axios.post("https://63f11fda5703e063fa532dfb.mockapi.io/api/phones", payload);
      }

      // Gọi hàm fetchPhones sau khi call API create/update
      fetchPhones();
    } catch (error) {
      console.log(error);
    }
  };

  // Viết hàm xử lý nhận vào object phone, xóa phone có id bằng phoneId khỏi state phones
  const handleDelete = async (phoneId) => {
    try {
      await axios.delete(`https://63f11fda5703e063fa532dfb.mockapi.io/api/phones/${phoneId}`);

      // Sau khi xóa thành công, dữ liệu mới thay đổi ở phía server
      // Cần gọi lại hàm fectPhones để gọi API lấy danh sách phones mới nhất và set lại cho state phones
      fetchPhones();
    } catch (error) {
      console.log(error);
    }
  };

  // Viết hàm xử lý nhận vào object phone, và lưu vào state selectedPhone
  const handleSelectedPhone = (phone) => {
    setSelectedPhone(phone);
  };

  // Viết hàm xử lý nhận vào giá trị searchString
  const handleSearch = (searchString) => {
    setSearchByName(searchString);

    // ?: Khi state searchByName thay đổi, ta muốn gọi lại hàm fetchPhones
    // => Đưa state searchByName vào array của useEffect
  }

  useEffect(() => {
    fetchPhones();
  }, [searchByName]);

  return (
    <div>
      <div className="container-fluid">
        <h1 className="text-center text-primary">Phone management</h1>

        <div className="card">
          <div className="card-header bg-dark text-white">Phone Form</div>
          <div className="card-body">
            <PhoneForm
              phone={selectedPhone}
              onSubmit={handleSubmit}
              onReset={() => handleSelectedPhone({})}
            />
          </div>
        </div>

        <div className="mt-4">
          <Search onSearch={handleSearch} />
        </div>

        <div className="mt-4">
          <PhoneList
            phones={phones}
            onDeletePhone={handleDelete}
            onSelectedPhone={handleSelectedPhone}
          />
        </div>
      </div>
    </div>
  )
}

export default PhoneManagement