import { useForm } from "../../variables/useForm";
import { NavLink } from "react-router-dom";


const ingresar = {
    email: '',
    password: ''
  }
  

export const Login = () => {

    const { email, password, onInputChange } = useForm(ingresar);

    const onSubmitLogin = (e) => {
        e.preventDefault();
        console.log({email, password})
      };

  return (
    <>
        <div className="container-form">
          <form className="sign-in"  onSubmit={ onSubmitLogin }>
            <h2>Iniciar Sesión</h2>
            <div className="social-networks">
              <ion-icon name="logo-facebook" />
              <ion-icon name="logo-twitter" />
              <ion-icon name="logo-instagram" />
              <ion-icon name="logo-google" />
            </div>
            <span>Use su correo y contraseña</span>
            <div className="container-input">
              <ion-icon name="mail-outline" />
              <input 
                type="text" 
                placeholder="Email"
                name="email"
                value={ email }
                onChange={ onInputChange } />
            </div>
            <div className="container-input">
              <ion-icon name="lock-closed-outline" />
              <input 
                type="password" 
                placeholder="Password"
                name="password"
                value={ password }
                onChange={ onInputChange } />
            </div>
            <NavLink className="password-reset-link">¿Olvidaste tu contraseña?</NavLink>
            <button className="button">INICIAR SESIÓN</button>
          </form>
        </div>
    </>
  )
}
