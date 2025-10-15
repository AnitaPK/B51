import React from "react";

const DeleteProductModal = ({ show, onHide, confirmDelete }) => {
  if (!show) return null;

  return (
    <div className="modal show fade d-block" tabIndex="-1">
      <div className="modal-dialog modal-sm">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Confirm Delete</h5>
            <button type="button" className="btn-close" onClick={onHide}></button>
          </div>
          <div className="modal-body">
            Are you sure you want to delete this product?
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onHide}>Cancel</button>
            <button className="btn btn-danger" onClick={confirmDelete}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteProductModal;
