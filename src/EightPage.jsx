import React from 'react'

const EightPage = () => {
    const videoURL="https://youtu.be/DASf5d427ck";
  return (
    <div style={{display:'flex'}}>
        <h1> Are You Prepared?</h1>
        <video width="600" height="340" controls>
        <source src={videoURL} type="video/mp4" />
        </video>

    </div>
  )
}

export default EightPage