import React from 'react'

function PhoneList({ phones, onDeletePhone, onSelectedPhone }) {
  return (
    <table className='table container'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Description</th>
          <th>Image</th>
          <th>Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {phones.map((phone) => {
          return (
            <tr key={phone.id}>
              <td width="100px">{phone.name}</td>
              <td>{phone.type}</td>
              <td width="500px">{phone.description}</td>
              <td>
                <img src={phone.image} alt={phone.name} width="100px" height="100px" />
              </td>
              <td>{Intl.NumberFormat("vn-VN").format(phone.price)}</td>
              <td>
                <button className='btn btn-warning me-2' onClick={() => onSelectedPhone(phone)}>Edit</button>
                <button className='btn btn-danger' onClick={() => onDeletePhone(phone.id)}>Delete</button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default PhoneList