import React from 'react';
import all from './All';
const Home=()=>{
    return(<div>
        {all.filter(item=>item.id<=11).map(
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
export default Home;