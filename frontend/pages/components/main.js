import React from 'react'
import Qna from './qna'
import PdfViewer from './pdf-viewer'
import Summary from './summary'

const Main = () => {
  return (
    <div className='bg-[#121416]'>
      <div className='w-[50%] pt-20 pl-16 pr-10'>
        <div className='border p-5 rounded'>
          <PdfViewer />
        </div>
      </div>
      <div className="w-[50%] pt-20 pr-20 pl-10">
        <div className="border p-5 rounded">
          <Summary />
        </div>
      </div>
    </div>
  );
}

export default Main