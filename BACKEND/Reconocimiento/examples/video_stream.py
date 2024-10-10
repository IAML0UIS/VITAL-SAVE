from flask import Flask, Response, jsonify
from flask_cors import CORS
import os
import sys
import cv2

# Asegúrate de que el módulo emotion_processor y camera están disponibles
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))
from emotion_processor.main import EmotionRecognitionSystem
from camera import Camera

app = Flask(__name__)
CORS(app)

camera = Camera(0, 1280, 720)
emotion_recognition_system = EmotionRecognitionSystem()

def gen_frames():
    while True:
        ret, frame = camera.read()
        if ret:
            # Procesar el marco para detectar emociones
            emotions = emotion_recognition_system.detect_emotion(frame)
            # Dibujar las emociones en el marco si es necesario
            cv2.putText(frame, emotions, (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 0, 0), 2)

            ret, buffer = cv2.imencode('.jpg', frame)
            frame = buffer.tobytes()
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')
        else:
            break
    camera.release()

@app.route('/video_feed')
def video_feed():
    return Response(gen_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

@app.route('/api/detectar_emocion', methods=['GET'])
def detectar_emocion():
    ret, frame = camera.read()
    if not ret:
        return jsonify({'error': 'No se pudo acceder a la cámara. Verifique si la cámara está conectada y disponible.'}), 500
    
    try:    
        # Procesar el marco para detectar emociones
        emotions = emotion_recognition_system.detect_emotion(frame)
        return jsonify({'emotion': emotions})
    except Exception as e:
        return jsonify({'error': f'Error al procesar la imagen: {str(e)}'}), 500

if __name__ == '__main__':
    app.run(debug=True)
