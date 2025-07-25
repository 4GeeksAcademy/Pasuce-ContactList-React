import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer"
import { Link, useNavigate } from "react-router-dom";
import { crearContacto, editarContacto } from "../services/ servicesAPI";
import { useParams } from "react-router-dom";



export const Formulario = () => {
    const { store, dispatch } = useGlobalReducer();
    const { id } = useParams();
    
    useEffect(() => {
        if (id) {
            const contactoExistente = store.contactos.find(contact => contact.id === parseInt(id));
            if (contactoExistente) {
                setNuevoContacto(contactoExistente);
            }
        }
    }, [id, store.contactos]);


    const [nuevoContacto, setNuevoContacto] = useState({
        nombre: '',
        telefono: '',
        email:''
    });

    const [showAlert, setShowAlert] = useState(false);

    const naviGate = useNavigate();


   
    




    const handleInputChange = (e) => {
        setNuevoContacto({ ...nuevoContacto, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!nuevoContacto.name || !nuevoContacto.address || !nuevoContacto.phone || !nuevoContacto.email) {
            setShowAlert(true);
            setTimeout(() => setShowAlert(false), 2000);
            return;
        }

        if (id) {
           await editarContacto(id, nuevoContacto, dispatch)
           
        } else {
            await crearContacto(nuevoContacto,dispatch);
        }
        naviGate("/")
    }

    
    return (
        <>
            <form onSubmit={handleSubmit} className=" justify-content-center p-4 border rounded bg-light">
                <h4 className="mb-4 text-primary">Nuevo Contacto</h4>

                {showAlert && (
                    <div className="alert alert-danger" role="alert">
                        Todos los campos son obligatorios.
                    </div>

                )}


                <div className="input-group mb-3">
                    <span className="input-group-text">
                        <i className="bi bi-person-fill"></i>
                    </span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nombre Completo"
                        name="name"
                        value={nuevoContacto.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text">
                        <i className="bi bi-geo-alt-fill"></i>
                    </span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Dirección"
                        name="address"
                        value={nuevoContacto.address}
                        onChange={handleInputChange}
                        required
                    />
                </div>


                <div className="input-group mb-3">
                    <span className="input-group-text">
                        <i className="bi bi-telephone-fill"></i>
                    </span>
                    <input
                        type="tel"
                        className="form-control"
                        placeholder="Teléfono"
                        name="phone"
                        value={nuevoContacto.phone}
                        onChange={handleInputChange}
                        required
                    />
                </div>


                <div className="input-group mb-3">
                    <span className="input-group-text">
                        <i className="bi bi-envelope-fill"></i>
                    </span>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Correo electrónico"
                        name="email"
                        value={nuevoContacto.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary w-100">
                    <i className="fa-regular fa-floppy-disk me-2" ></i>Guardar Contacto
                </button>

                <Link to={"/"}>
                <span>Volver a Tarjeta de contactos</span>
                </Link>

                
              

            </form>
        </>
    )
}