import { GoogleAuthProvider,  signInWithPopup } from "firebase/auth";
import { firebaseAuth } from "./config";


const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async() => {

    try {
        const result = await signInWithPopup( firebaseAuth, googleProvider );
        // const credential = GoogleAuthProvider.credentialFromResult( result );
        const { user, uid, email, displayName } = result.user

        return {
            ok: true,
            user, uid, email, displayName
        }
        
    } catch (error) {
        console.log(error)

        const errorCode = error.code;
        const errorMesagge = errorMesagge;
        
        return{
            ok: false,
            errorMesagge
        }
        
    }
}