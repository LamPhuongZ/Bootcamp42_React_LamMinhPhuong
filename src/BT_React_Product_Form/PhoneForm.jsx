import React, { useEffect, useState } from 'react'

function PhoneForm({ phone, onSubmit, onReset }) {
  // state quản lý gia trị các input trong form
  const [values, setValues] = useState({
    id: "",
    name: "",
    type: "",
    description: "",
    image: "",
    price: ""
  });

  useEffect(() => {
    setValues(phone);
  }, [phone]);

  const handleChange = (evt) => {
    const { value, name } = evt.target;

    setValues({
      // ...values copy lại giá trị ban đầu của state
      ...values,
      [name]: value
    })
  };

  // Hàm submit
  const handleSubmit = (evt) => {
    // Chặn hành vi submit mặc định của form
    evt.preventDefault();

    // Gọi prop onSubmit và truyền vào object values
    onSubmit(values);

    // Gọi hàm handleResetForm để reset giá trị trên các input
    handleResetForm();
  }

  // Hàm reset các input
  const handleResetForm = () => {
    setValues({
      id: "",
      name: "",
      type: "",
      description: "",
      image: "",
      price: ""
    });
    onReset();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input type="text" className='form-control' placeholder='Name' name='name' value={values.name} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <input type="text" className='form-control' placeholder='Type' name='type' value={values.type} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <input type="text" className='form-control' placeholder='Description' name='description' value={values.description} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <input type="text" className='form-control' placeholder='Image Link' name='image' value={values.image} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <input type="text" className='form-control' placeholder='Price' name='price' value={values.price} onChange={handleChange} />
        </div>

        <button type='submit' className='btn btn-success me-2'>Submit</button>
        <button type='button' className='btn btn-secondary' onClick={handleResetForm}>Reset</button>
      </form>
    </div>
  )
}

export default PhoneForm