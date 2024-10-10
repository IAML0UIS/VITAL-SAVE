from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector
import pyttsx3
import threading

app = Flask(__name__)
CORS(app)

# Configura la conexión a la base de datos
def get_db_connection():
    return mysql.connector.connect(
        host='localhost',  
            user='root',  
            password='',  
            database='software_vitalsave' 
    )

# Función para emitir el recordatorio
def emitir_recordatorio(descripcion):
    engine = pyttsx3.init()
    engine.say(f"Recordatorio: {descripcion}")
    engine.runAndWait()

@app.route('/api/recordatorios', methods=['POST'])
def agregar_recordatorio():
    data = request.json  # Obtiene los datos de la solicitud

    # Obtiene los campos necesarios
    fecha = data.get('fecha')
    hora = data.get('hora')
    descripcion = data.get('descripcion')
    estado = data.get('estado', 'pendiente')  # Valor por defecto

    # Conectar a la base de datos y agregar el recordatorio
    conn = get_db_connection()
    cursor = conn.cursor()

    # Inserta el recordatorio en la base de datos
    cursor.execute(
        "INSERT INTO recordatorio (fecha, hora, descripcion, estado) VALUES (%s, %s, %s, %s)",
        (fecha, hora, descripcion, estado)
    )
    conn.commit()

    # Emitir el recordatorio en un hilo separado
    threading.Thread(target=emitir_recordatorio, args=(descripcion,)).start()

    cursor.close()
    conn.close()

    return jsonify({"message": "Recordatorio agregado con éxito"}), 201

if __name__ == '__main__':
    app.run(debug=True)
