import React from 'react'
import BestProductImages from './BestProductImages'

const BestProducts = () => {
  return (
    <div>
      <div className="text-4xl font-semibold m-20 ">Shop our best products</div>
      <div className=''>
        <div>
          <BestProductImages />
        </div>
      </div>
    </div>
  );
}

export default BestProducts