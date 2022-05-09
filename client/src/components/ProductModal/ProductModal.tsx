import React from "react";
import { BestBuyProduct } from "../../interfaces";
import { Modal } from "./styles";

interface ProductModalProps {
  open: boolean;
  handleClose: () => void;
  handleOpen: () => void;
  selectedProduct: BestBuyProduct;
}

const ProductModal: React.FC<ProductModalProps> = ({
  open,
  handleClose,
  handleOpen,
  selectedProduct,
}) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <div style={{ width: "90%", height: "90%", backgroundColor: "white" }}>
        {JSON.stringify(selectedProduct)}
      </div>
    </Modal>
  );
};

export default ProductModal;
