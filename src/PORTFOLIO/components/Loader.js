import React from 'react'
import "./css/Animation.css"
const Loader = () => {
  return (
    <div className='animation'>
        <div className='con'>
            <div className="spinner text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
            </div>
    
            <div className="spinner text-success" role="status">
            <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
            </div>
   

</div>
    </div>
  )
}

export default Loader