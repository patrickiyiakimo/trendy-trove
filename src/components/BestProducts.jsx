import React from 'react'
import SimpleSlider from './SimpleSlider';
// import BestProductImages from './BestProductImages'

const BestProducts = () => {
  return (
    <div>
      <div className="pb-10 md:text-4xl text-2xl text-center font-semibold mt-10 md:m-20 ">Shop our best products</div>
      <div className=''>
        <div>
          <SimpleSlider />
        </div>
      </div>
    </div>
  );
}

export default BestProducts