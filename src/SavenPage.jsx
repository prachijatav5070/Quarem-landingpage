import React from 'react'
import listimg from './images/list.png'
const SavenPage = () => {
  return (
    <>
   
    <div className='sevenpage' >
      <div className="left">
        <img src={listimg}  />
      </div>
      <div className="right" style={{ textAlign: 'center', margin: 'auto' }}>
        <p style={{ fontSize: '25px' }}>...or catch a glimpse of all your leases with the Master Lease List</p>
      </div>
    </div>
    </>
  )
}

export default SavenPage