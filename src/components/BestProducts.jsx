import React from 'react'
import SimpleSlider from './SimpleSlider';
// import BestProductImages from './BestProductImages'

const BestProducts = () => {
  return (
    <div>
      <div className="text-4xl font-semibold m-20 ">Shop our best products</div>
      <div className=''>
        <div>
          <SimpleSlider />
          {/* <BestProductImages /> */}
        </div>
      </div>
    </div>
  );
}

export default BestProducts