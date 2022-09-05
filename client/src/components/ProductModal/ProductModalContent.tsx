import React from "react";

import { Line } from "react-chartjs-2";
import { ChartOptions, ChartData } from "chart.js";
import Zoom from "@mui/material/Zoom";

import { BestBuyProduct } from "../../interfaces";
import {
  useFetchAllItemPricesQuery,
  useFetchAllItemsQuery,
} from "../../services/item";
import {
  ModalContentAnchor,
  ModalContentCloseButtonContainer,
  ModalContentCloseLeftLine,
  ModalContentCloseRightLine,
  ModalContentContainer,
  ModalContentGraphContainer,
  ModalContentHeader,
  ModalContentHeaderContainer,
  ModalContentImage,
  ModalContentName,
} from "./styles";

interface ProductModalProps {
  handleClose: () => void;
  handleOpen: () => void;
  selectedProduct: BestBuyProduct | { image: ""; sku: 0; name: ""; url: "" };
  open: boolean;
}

const ProductModal: React.FC<ProductModalProps> = ({
  handleClose,
  handleOpen,
  selectedProduct,
  open,
}) => {
  const {
    data = [],
    error,
    isLoading,
    isError,
  } = useFetchAllItemPricesQuery(selectedProduct.sku);
  const { image, name } = selectedProduct;

  const { data: list = [] } = useFetchAllItemsQuery();

  const product = list.find((element) => element.sku === selectedProduct.sku);

  const createDataSet = () => {
    const labels: string[] = [];
    const dataPoints: number[] = [];
    data.forEach((record) => {
      const date = new Date(record.createdAt);
      const dateString = date.toLocaleDateString();
      const dateArr = dateString.split("/");
      dateArr[dateArr.length - 1] = dateArr[dateArr.length - 1].slice(-2);
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
    <Zoom in={open} style={{ transitionDelay: open ? "150ms" : "0ms" }}>
      <ModalContentContainer maxWidth="xl">
        <ModalContentHeaderContainer>
          <ModalContentHeader>
            <ModalContentAnchor href={selectedProduct.url} target="_blank">
              <ModalContentImage src={image} />
            </ModalContentAnchor>
            <ModalContentAnchor href={selectedProduct.url} target="_blank">
              <ModalContentName>{name}</ModalContentName>
            </ModalContentAnchor>
          </ModalContentHeader>
          <ModalContentCloseButtonContainer onClick={handleClose}>
            <ModalContentCloseLeftLine></ModalContentCloseLeftLine>
            <ModalContentCloseRightLine></ModalContentCloseRightLine>
          </ModalContentCloseButtonContainer>
        </ModalContentHeaderContainer>
        <ModalContentGraphContainer>
          <Line data={graphDataSet} options={options} />
        </ModalContentGraphContainer>
        <ModalContentGraphContainer>
          <div>{product?.historicalHighPrice}</div>
        </ModalContentGraphContainer>
      </ModalContentContainer>
    </Zoom>
  );
};

export default ProductModal;
