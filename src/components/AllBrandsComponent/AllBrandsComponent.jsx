import React from 'react'
import clsx from 'clsx'
import TitleComponent from '../TitleComponent/TitleComponent'
import BrandComponent from '../BrandComponent/BrandComponent'
import ButtonComponent from '../ButtonComponent/ButtonComponent'

const AllBrandsComponent = ({isInViewport, brands, visibleCount, handleShowMore, handleShowLess}) => {
  return (
    <div>
        <TitleComponent
          title="100+ thương hiệu boss thích"
          textTransform="uppercase"
          textAlign="center"
          fontSize="4rem"
        />
        <div className="row">
            {isInViewport ? (
            brands.slice(0, visibleCount).map((brand, index) => (
                <div key={index} className={clsx('col l-2-4 m-4 c-0')}>
                <BrandComponent src={brand.src} alt={brand.alt} />
                </div>
            ))
            ) : (
            brands.slice(0, 15).map((brand, index) => (
                <div key={index} className={clsx('col l-2-4 m- c-0')}>
                <BrandComponent src={brand.src} alt={brand.alt} />
                </div>
            ))
            )}
        </div>
        {isInViewport && (
        visibleCount < brands.length ? (
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
            onClick={handleShowMore}
          />
        ) : (
          <ButtonComponent 
            width="200px"
            height="50px"
            title="Ẩn bớt"
            color="#000"
            border="1px solid #000"
            background="#fff"
            borderRadius="15px"
            fontSize="2rem"
            showIcon={false}
            onClick={handleShowLess}
          />
        )
      )}
    </div>
  )
}

export default AllBrandsComponent