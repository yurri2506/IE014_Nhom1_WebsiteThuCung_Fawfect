import React from 'react'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import CardComponent from '../CardComponent/CardComponent'
import TitleComponent from '../TitleComponent/TitleComponent'

const BestSellingComponent = ({products}) => {
  return (
    <div>
        <TitleComponent
          title="Sản phẩm bán chạy"
          textTransform="uppercase"
          textAlign="center"
          fontSize="4rem"
        />
        <div className='row'>
            {products.map((product, index) => (
                <div key={index} className='col l-3 m-4 c-6'>
                    <CardComponent {...product} />
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
        />
    </div>
  )
}

export default BestSellingComponent