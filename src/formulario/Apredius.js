import React, {useState} from "react";

export default function Apredius() {
    const [txtema, setTxtema] = useState('');
    const [txtcod, setTxtcod] = useState('');
    const [txtusu, setTxtusu] = useState('');
    const [txtnom, setTxtnom] = useState('');
    const [txtdir, setTxtdir] = useState('');

    const cambioema = (e) => setTxtema(e.target.value);
    const cambiocod = (e) => setTxtcod(e.target.value);
    const cambiousu = (e) => setTxtusu(e.target.value);
    const cambionom = (e) => setTxtnom(e.target.value);
    const cambiodir = (e) => setTxtdir(e.target.value);

    const validardatos = (e) => {
        if (txtema.length === 0)
            alert("ERROR: este campo es obligatorio." )
        else if (txtcod.length === 0)
            alert("ERROR: este campo es obligatorio." )
        else if (txtusu.length === 0)
            alert("ERROR: este campo es obligatorio." )  
        else if (txtnom.length === 0)
            alert("ERROR: este campo es obligatorio." )
        else if (txtdir.length === 0)
            alert("ERROR: este campo es obligatorio." )
        else if (txtema !== 'jlrosales@uninorte.edu.co' || txtusu !== 'jorge')
            alert("ERROR: Usuario no valido." )
        else 
            alert("INFO: Continue con el proceso.")
    }


    return (
        <div class='container-fluid mb-3 p-3 apredius'>
            <h2>Asociar Predio</h2>

            <form onSubmit={validardatos}>
                
                
                    <div className="form-floating mb-3">
                        <input onChange={cambiocod} type="number" className="form-control" id="txtcod" name='txtcod' value={txtcod} required minlength="1" maxlength="10" />
                        <label for="txtcod">Codigo</label>
                    </div>
                
                    <div className="form-floating mb-3">
                        <input onChange={cambiousu} type="text" className="form-control" id="txtusu" name='txtusu' value={txtusu} required minlength="1" maxlength="20"/>
                        <label for="txtusu">Usuario</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input onChange={cambionom} type="text" className="form-control" id="txtnom" name='txtnom' value={txtnom} required minlength="1" maxlength="10" />
                        <label for="txtnom">Nombre</label>
                    </div>   

                    <div className="form-floating mb-3">
                        <input onChange={cambiodir} type="text" className="form-control" id="txtdir" name='txtdir' value={txtdir} required minlength="1" maxlength="10" />
                        <label for="txtdir">Direccion</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input onChange={cambioema} type="email" className="form-control" id="txtema" name='txtema' value={txtema} required minlength="8" maxlength="40"/>
                        <label for="txtema">Correo Electronico</label>
                    </div>

                    <div className="form-floating mb-3">
                        <div className='row'></div>
                            <div className='col-7'></div>
                        <div className='col'></div>
                        <input type="submit" value= 'Registrar' className="btn btn-info" />
                        
                    </div>
            </form>
        </div>
     );
}