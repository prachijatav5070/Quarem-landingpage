import React from 'react';

const EightPage = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' ,justifyContent:'center', gap:'30px'}}>
      <h1 style={{color:'blue', textAlign:'center', fontSize:60}}>Are You Prepared?</h1>
      <iframe
        width="800"
        height="400"
        src="https://www.youtube.com/embed/DASf5d427ck"
        title="YouTube Video"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default EightPage;
