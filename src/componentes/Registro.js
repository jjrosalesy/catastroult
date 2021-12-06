import react from "react";

const Registro = () => {
    return ( 
        <>
  <main>
    <div className="container">
      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
              <div className="d-flex justify-content-center py-4">
                <a
                  href="index.html"
                  className="logo d-flex align-items-center w-auto"
                >
                  <img src="assets/img/logo.png" alt />
                  <span className="d-none d-lg-block">Catastro Norte de Santander</span>
                </a>
              </div>
              {/* End Logo */}
              <div className="card mb-3">
                <div className="card-body">
                  <div className="pt-4 pb-2">
                    <h5 className="card-title text-center pb-0 fs-4">
                      Crea tu cuenta
                    </h5>
                    <p className="text-center small">
                      Para crear una cuenta ingresa tu informacion personal
                    </p>
                  </div>
                  <form className="row g-3 needs-validation" noValidate>
                    <div className="col-12">
                      <label htmlFor="yourName" className="form-label">
                        Tu nombre
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="yourName"
                        required
                      />
                      <div className="invalid-feedback">
                        Por favor, entra tu nombre!
                      </div>
                    </div>
                    <div className="col-12">
                      <label htmlFor="yourEmail" className="form-label">
                        Tu Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="yourEmail"
                        required
                      />
                      <div className="invalid-feedback">
                        Ingresa un Email verdadero!
                      </div>
                    </div>
                    <div className="col-12">
                      <label htmlFor="yourUsername" className="form-label">
                        Usuario
                      </label>
                      <div className="input-group has-validation">
                        <span
                          className="input-group-text"
                          id="inputGroupPrepend"
                        >
                          @
                        </span>
                        <input
                          type="text"
                          name="username"
                          className="form-control"
                          id="yourUsername"
                          required
                        />
                        <div className="invalid-feedback">
                          Escoge un nombre de usuario
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <label htmlFor="yourPassword" className="form-label">
                        Contraseña
                      </label>
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        id="yourPassword"
                        required
                      />
                      <div className="invalid-feedback">
                        Por favor ingresa tu Contraseña!
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          name="terms"
                          type="checkbox"
                          defaultValue
                          id="acceptTerms"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="acceptTerms"
                        >
                          Acepto los {" "}
                          <a href="#">terminos y condiciones</a>
                        </label>
                        <div className="invalid-feedback">
                          Debes aceptar los terminos y condiciones.
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100" type="submit">
                        Crea una cuenta
                      </button>
                    </div>
                    <div className="col-12">
                      <p className="small mb-0">
                        No tienes una cuenta?{" "}
                        <a href="Login.js">Log in</a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
              <div className="credits">
                {/* All the links in the footer should remain intact. */}
                {/* You can delete the links only if you purchased the pro version. */}
                {/* Licensing information: https://bootstrapmade.com/license/ */}
                {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ */}
                Diseñado para{" "}
                <a href="https://www.uninorte.edu.co/web/educacion-continuada/misiontic2022">Mision TIC Ciclo 4</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
  {/* End #main */}
  <a
    href="#"
    className="back-to-top d-flex align-items-center justify-content-center"
  >
    <i className="bi bi-arrow-up-short" />
  </a>
</>
    );
}
 
export default Registro;
