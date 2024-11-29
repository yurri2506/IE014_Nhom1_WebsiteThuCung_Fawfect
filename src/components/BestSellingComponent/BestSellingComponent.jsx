import React from "react";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import CardComponent from "../CardComponent/CardComponent";
import TitleComponent from "../TitleComponent/TitleComponent";

const BestSellingComponent = ({ products, isInMobile }) => {
  return (
    <div>
      <TitleComponent
        title="Sản phẩm bán chạy"
        textTransform="uppercase"
        textAlign="center"
        fontSize="4rem"
      />
      <div style={isInMobile ? { margin: "0 4px" } : undefined} className="row">
        {products.map((product, index) => (
          <div key={index} className="col l-3 m-4 c-6">
            <CardComponent
              src={`data:image/png;base64,${product.product_images[0] || ""}`}
              alt="ảnh sản phẩm"
              name={product.product_title}
              oldPrice={product.product_price}
              newPrice={(
                product?.product_price *
                (1 - product?.product_percent_discount / 100)
              ).toLocaleString()}
              start={product.rating}
              percent={product?.product_percent_discount}
            />
          </div>
        ))}
      </div>
      <ButtonComponent
        width="200px"
        height="50px"
        title="Xem thêm"
        color="#000"
        border="1px solid #000"
        background="#fff"
        borderRadius="15px"
        fontSize="2rem"
        showIcon={false}
      />
    </div>
  );
};

export default BestSellingComponent;
