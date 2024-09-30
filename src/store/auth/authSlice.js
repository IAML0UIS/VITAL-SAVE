import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
   name: 'auth',
   initialState: {
    estado: 'No Autenticado',
    uid: null,
    displaName: null,
    email: null,
    photoURL: null,
    errorMessage: null
   },
   reducers: {
      inicioSesion: ( state, actions ) => {

      },
      logout: ( state, payload ) => {
        
      },
      estadoCredenciales: ( state, payload ) => {
        state.estado = 'Autenticado'
      },
   },
})

export const { inicioSesion, logout, estadoCredenciales } = authSlice.actions