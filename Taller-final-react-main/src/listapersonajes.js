import React from "react";


const Listarpersonajes = ({Nombre, Descripcion,Precio,img}) => (
    
    
    <>
    
    <center>

    
    
    <div className="col-md-4" >
        <div className="card"  class="text-light bg-dark" style={{width: '18rem'}}>
        <br></br>
        <img src={img} className="card-img-top" alt="..." />
        <br></br>
            <div className="card-body">
                <p className="card-text">{Nombre ? Nombre : "name not found"}</p>
                <p className="card-text">{Descripcion}</p>
                <p className="card-text">{Precio}</p>
                <br></br>
                
            </div>
        </div>
    </div>
    </center>
    </>
);

export default Listarpersonajes;