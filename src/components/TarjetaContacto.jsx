import { useEffect, useState } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer"
import { Link, useNavigate } from "react-router-dom"
import { eliminarContacto } from "../services/ servicesAPI"



export const TarjetaContacto = () => {
    const { store, dispatch } = useGlobalReducer()

    const [mostrarModal, setMostrarModal] = useState(false);
    const [contactoSeleccionado, setContactoSeleccionado] = useState(null);
    const navigate = useNavigate();

    return (


        <div className="container-fluid">
            <div className="row g-4 flex-column align-items-center">

                {store.contactos.map((contacto) => (
                    <div key={contacto.id} className="d-flex justify-content-center">

                        <div className="card shadow-sm" style={{ width: "100%", maxWidth: "600px", minHeight: "150px" }}>

                            <div className="position-absolute top-0 end-0 p-2 d-flex gap-2">
                                <Link to={`/editar/${contacto.id}`}>
                                    <button className="btn btn-sm btn-outline-primary" >
                                        <i className="bi bi-pencil"></i>
                                    </button>
                                </Link>
                                <button className="btn btn-sm btn-outline-danger" data-bs-toggle="modal" data-bs-target={`#modalEliminar-${contacto.id}`} >
                                    <i className="bi bi-trash"></i>
                                </button>
                            </div>

                            <div className="d-flex flex-wrap align-items-center p-3">
                                <img
                                    src="https://static.vecteezy.com/system/resources/previews/014/400/144/original/contact-icon-free-vector.jpg"
                                    alt="Foto contacto"
                                    className="rounded-circle border me-3"
                                    style={{
                                        width: "100px",
                                        height: "100px",
                                        objectFit: "cover"
                                    }}
                                />
                                <div style={{ minWidth: "0" }}>
                                    <h6 className="mb-1 fw-bold text-dark"> <i className="bi bi-person-fill"> </i> {contacto.name}</h6>
                                    <p className="mb-0 small"> <i className="bi bi-geo-alt-fill"> </i> {contacto.address}</p>
                                    <p className="mb-0 small"> <i className="bi bi-telephone-fill"> </i> {contacto.phone}</p>
                                    <p className="mb-0 small text-muted"> <i className="bi bi-envelope-fill"> </i> {contacto.email}</p>
                                </div>

                            </div>
                        </div>

                        <div className="modal fade"
                            id={`modalEliminar-${contacto.id}`}
                            tabIndex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>

                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title  text-danger fs-5"
                                            id="exampleModalLabel">¿Confirmas que quieres eliminar?</h1>
                                        <button type="button"
                                            className="btn-close"
                                            data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>

                                    <div className="modal-body">
                                        <p>
                                            Se eliminará el contacto <strong>{contacto.name}</strong>
                                        </p>
                                    </div>

                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => { eliminarContacto(contacto.id, dispatch) }}>Eliminar </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                ))

                }
            </div>
        </div>
    )

} 