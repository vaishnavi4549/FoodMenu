import React from 'react';
import './navbar.css';
import all from './All';
const Breakfast=()=>{
    return(
        <div>
                {all.filter(item=>item.id<=3).map(
                  ({id,src,title,des})=>{
                      return( 
                        <div className="card">
                      <div className="image">
                       <img key={id} src={src}  alt="user"/>
                       </div>
                       <div className="description">
                       <p><h2>{title}</h2>{des}</p>
                       </div>
                       </div>
                      );
                  }
                )}
        </div>
    );
}
export default Breakfast;