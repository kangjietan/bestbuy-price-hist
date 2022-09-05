import React from "react";

import { Line } from "react-chartjs-2";
import { ChartOptions, ChartData } from "chart.js";

import { BestBuyProduct } from "../../interfaces";
import { useFetchAllItemPricesQuery } from "../../services/item";
import {
  ModalContentContainer,
  ModalContentGraphContainer,
  ModalContentHeader,
  ModalContentImage,
  ModalContentName,
} from "./styles";

interface ProductModalProps {
  handleClose: () => void;
  handleOpen: () => void;
  selectedProduct: BestBuyProduct | { image: ""; sku: 0; name: "" };
}

const ProductModal: React.FC<ProductModalProps> = ({
  handleClose,
  handleOpen,
  selectedProduct,
}) => {
  const {
    data = [],
    error,
    isLoading,
    isError,
  } = useFetchAllItemPricesQuery(selectedProduct.sku);
  const { image, name } = selectedProduct;

  const createDataSet = () => {
    const labels: string[] = [];
    const dataPoints: number[] = [];
    data.forEach((record) => {
      const date = new Date(record.createdAt);
      const dateString = date.toLocaleDateString()
      const dateArr = dateString.split("/")
      dateArr[dateArr.length - 1] = dateArr[dateArr.length - 1].slice(-2)
      labels.push(dateArr.join("/"));
      dataPoints.push(record.price);
    });
    return {
      labels,
      data: dataPoints,
    };
  };

  const graphDataSet: ChartData<"line"> = {
    labels: createDataSet().labels,
    datasets: [
      {
        backgroundColor: "#57BA98",
        borderColor: "#57BA98",
        label: "Price at this Day",
        data: createDataSet().data,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    layout: {
      padding: 10,
    },
  };

  return (
    <ModalContentContainer>
      <ModalContentHeader>
        <ModalContentImage src={image} />
        <ModalContentName>{name}</ModalContentName>
      </ModalContentHeader>
      <ModalContentGraphContainer>
        <Line data={graphDataSet} options={options} />
      </ModalContentGraphContainer>
    </ModalContentContainer>
  );
};

export default ProductModal;
