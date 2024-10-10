from flask import Flask, Response
import cv2
from emotion_processor.main import EmotionRecognitionSystem
from camera import Camera

app = Flask(__name__)

camera = Camera(0, 1280, 720)
emotion_recognition_system = EmotionRecognitionSystem()

def gen_frames():
    while True:
        ret, frame = camera.read()
        if ret:
            frame = emotion_recognition_system.frame_processing(frame)
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

if __name__ == '__main__':
    app.run(debug=True)
