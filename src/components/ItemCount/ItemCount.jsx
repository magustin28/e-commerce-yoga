import PropTypes from "prop-types";

const ItemCount = ({ quantity, incrementar, decrementar, agregarCarrito, isInStock }) => {
  return isInStock ? (
    <div className="d-flex justify-content-center">
      <div className="col-6 mt-4">
        <div className="d-flex justify-content-around align-items-center border border-secondary-subtle rounded bg-light my-3">
          <i className="bi bi-dash text-primary fs-4" onClick={decrementar}></i>
          <p className="mb-0 fs-5">{quantity}</p>
          <i className="bi bi-plus text-primary fs-4" onClick={incrementar}></i>
        </div>
        <button className="rounded w-100 btn btn btn-outline-primary bg-light" onClick={agregarCarrito}>
          Agregar al carrito
        </button>
      </div>
    </div>
  ) : (
    <div className="d-flex justify-content-center">
      <p className="col-6 py-1 mt-5 mb-0 fs-5 text-center border border-light-subtle rounded-3 bg-warning text-dark">Producto Sin Stock</p>
    </div>
  );
};

ItemCount.prototype = {
  quantity: PropTypes.number.isRequired,
  incrementar: PropTypes.function,
  decrementar: PropTypes.function,
  agregarCarrito: PropTypes.function,
  isInStock: PropTypes.bool.isRequired,
};

export default ItemCount;
