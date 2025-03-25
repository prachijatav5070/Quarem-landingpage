import React from 'react'
import listimg from './images/list.png'
const SavenPage = () => {
  return (
    <div style={{display:'grid', gridTemplateColumns:'auto auto'}}>
        <div className="left">
        <img src={listimg} width={950} />

        </div>
        <div className="right" style={{textAlign:'center', margin:'auto'}}>
            <p style={{fontSize:25}}>...or catch a glimpse of all your leases with the Master Lease List</p>
        </div>
    </div>
  )
}

export default SavenPage