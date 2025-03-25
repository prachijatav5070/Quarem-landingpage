import React from 'react'
import image1 from './images/image1.png'
import FirstDiv from './FirstDiv'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

function FirstPage() {
  return (
    <div className='parent'>

    <div className='frontPage'>
        <div className='left'>
      <img src={image1} className='frontpageimg' />
        </div>
        <div className='rightt'>
           <h5 style={{color:"rgb(53, 147, 248)",fontSize:20,fontWeight:350 }} >COMMERCIAL LEASE MANAGEMENT SOFTWARE</h5>
           <h2>Hands-On Lease Management</h2>
           <p style={{textAlign:'left',width:"80%", padding:20, color:'gray',fontSize:18, wordSpacing:3}}>Free your leases from filing cabinets and forgotten folders. Bring them together with Quarem's lease management software where the details can come alive. Easily track the changes, obligations, risks, and opportunities that are normally hidden away within the pages of a lease. </p>
        <button className='btn-fistpage'> REQUEST DEMO 
        <MdOutlineKeyboardDoubleArrowRight style={{fontSize:32}}/>
        </button>
        </div>
    </div>

    <div className='div'>
    <FirstDiv/>
    </div>
    
    </div>
  )
}

export default FirstPage