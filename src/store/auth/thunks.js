import { singInWithGoogle } from "../../firebase/provider"
import { estadoCredenciales } from "./authSlice"


export const estadoAutenticado = ( email, password ) => {
    return async ( dispatch ) => {
        dispatch( estadoCredenciales() )
    }
}

export const startInicioSesionGoogle = () => {
    return async ( dispatch ) => {
        dispatch( estadoCredenciales() )

        const result = await singInWithGoogle();
        console.log({result})
    
    }
}
