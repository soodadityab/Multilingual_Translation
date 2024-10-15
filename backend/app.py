from flask import Flask, request, jsonify
from flask_cors import CORS
from backend.translation import transcribe_audio, translate_text
import os
from dotenv import load_dotenv


app = Flask(__name__)
CORS(app)  # Enable Cross-Origin Resource Sharing

load_dotenv()

# Upload route for video file
@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    file_path = os.path.join('uploads', file.filename)
    file.save(file_path)

    # Transcribe the uploaded file
    transcription = transcribe_audio(file_path)
    return jsonify({'transcription': transcription})

# Live mode route for processing audio stream
@app.route('/live', methods=['POST'])
def live_mode():
    data = request.get_json()
    if not data or 'audio_stream' not in data:
        return jsonify({'error': 'No audio stream provided'}), 400

    audio_stream = data['audio_stream']
    transcription = transcribe_audio(audio_stream)
    return jsonify({'transcription': transcription})

# Translation route
@app.route('/translate', methods=['POST'])
def translate():
    data = request.get_json()
    if not data or 'text' not in data or 'target_lang' not in data:
        return jsonify({'error': 'Invalid input'}), 400

    translated_text = translate_text(data['text'], data['target_lang'])
    return jsonify({'translated_text': translated_text})

if __name__ == '__main__':
    app.run(debug=True)
