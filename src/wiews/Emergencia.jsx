import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

export const Emergencia = () => { // Cambié el nombre a Emergencia
  const videoRef = useRef(null);
  const [emotion, setEmotion] = useState('Cargando...');

  useEffect(() => {
    // Función para iniciar la transmisión de video
    const startVideo = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      } catch (error) {
        console.error('Error accessing camera:', error);
        setEmotion('Error al acceder a la cámara');
      }
    };

    // Llama a la función para iniciar el video
    startVideo();
  }, []);

  useEffect(() => {
    // Función para detectar emociones a través de la API
    const fetchEmotion = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/detectar_emocion');
        setEmotion(response.data.emotion);
      } catch (error) {
        console.error('Error fetching emotion:', error);
        setEmotion('Error al detectar emoción');
      }
    };

    // Establecer un intervalo para llamar a la API cada segundo
    const interval = setInterval(() => {
      fetchEmotion();
    }, 1000);

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="content">
      <h2>Reconocimiento de Emociones en Tiempo Real</h2>
      <video ref={videoRef} style={{ width: '720px', height: '480px' }} autoPlay />
      <h3>Emoción Detectada: {emotion}</h3>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <Emergencia /> {/* Usar el nombre Emergencia aquí */}
    </div>
  );
};

export default App;
