import { Navigate, Route, Routes } from "react-router"
import { Admin } from "../src/layouts/Admin";
import React, { useEffect } from 'react';
import { LoginRegistre, OlvidasteContra } from "./auth/pages";
import { useDispatch, useSelector } from "react-redux";
import { CheckingAuth } from "./ui";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "./firebase/config";
import { login, logout } from "./store/auth/authSlice";



export const VitalSave = () => {
  
  const { status } = useSelector( state => state.auth);

  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged( firebaseAuth, async ( user ) => {
      if( !user ) return useDispatch( logout() );

      const {displayName, email, photoURL, uid } = user;
      dispatch(login({displayName, email, photoURL, uid}))
      

    })
    
  }, [])
  

  if( status === 'checking') {
    return <CheckingAuth />
  }



  return (
    <Routes>
      {/* {
        (status === 'authenticated') 
        ?    
        :   
      } */}
        <Route path="/login" element={ <LoginRegistre /> }/>
        <Route path="/inicio/*" element={ <Admin /> }/>
        {/* <Route path="*" element={ <Medicamentos /> }/> */}
        <Route path="/*" element={ <Navigate to="/login" replace/> }/>
       
        <Route path="/olvidaste-contra" element={<OlvidasteContra />} />
    </Routes>
  )
}
