import React from "react";

function ShoeDetails({ shoe, onClose }) {
    if (!shoe) {
        return null;
    }
    return (
        <>
            <div className="modal fade show" style={{ display: "block" }} tabIndex={-1}>
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title text-center">Shoe Details</h4>
                            <button className="btn-close" onClick={onClose} />
                        </div>
                        <div className="modal-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th colspan="3" className="text-center">
                                            <img
                                                src={shoe.image}
                                                alt={shoe.alias}
                                                width="50%"
                                            />
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={{ width: "180px" }}>Name: </td>
                                        <td>{shoe.name}</td>
                                    </tr>
                                    <tr>
                                        <td>Price: </td>
                                        <td>{shoe.price}$</td>
                                    </tr>
                                    <tr>
                                        <td>Description: </td>
                                        <td>{shoe.description}</td>
                                    </tr>
                                    <tr>
                                        <td>Short Description: </td>
                                        <td>{shoe.shortDescription}</td>
                                    </tr>
                                    <tr>
                                        <td>Quantity: </td>
                                        <td>{shoe.quantity}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" onClick={onClose}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal-backdrop fade show" />
        </>
    );
}

export default ShoeDetails;
