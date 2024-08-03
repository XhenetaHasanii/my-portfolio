
import React from 'react';


const Button = () => {
  const handleOpenResume = () => {
    
    window.open('/XhenetaHasani_CV.pdf', '_blank');
  };
  return (
    <div className='text-white'>
      <button onClick={handleOpenResume} className='shadow-lg shadow-cyan-500/50 hover:shadow-cyan-700'>
        My Resume
      </button>
    </div>
  );
};


export default Button;
