import { Navigate, Route, Routes } from "react-router"
import { Admin } from "../src/layouts/Admin";
import React from 'react';
import { LoginRegistre, OlvidasteContra } from "./auth/pages";


export const VitalSave = () => {
  return (
    <Routes>
        <Route path="/inicio/*" element={ <Admin /> }/>
        <Route path="/" element={ <Navigate to="inicio/vitalsave" replace/> }/>
        <Route path="/login" element={ <LoginRegistre /> }/>
        <Route path="/olvidaste-contra" element={<OlvidasteContra />} />
    </Routes>
  )
}
