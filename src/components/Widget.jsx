import React from 'react'
import "./widget.scss";


const Widget = ({title,list,search,scrolbarContent}) => {
  return (
    <div className='widget'>
        <div className="color">
            <h2 className="headers">{title}</h2>
        </div>
        <div className="body">
            <div className="search">{search}</div>
            <div className="scroll">{scrolbarContent}</div>
            <h5 className="list">{list}</h5>
        </div>
    </div>
  )
}

export default Widget