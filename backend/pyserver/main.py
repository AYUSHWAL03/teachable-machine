from Flask import flask,request
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/preprocess-data',methods=['GET', 'POST'])
def preprocessing_func():
    if request.method == 'POST':
        file = request.files['csvfile']
        filename = file.filename
        filepath = os.path.join('userInput/files',filename)
        file.save(filepath)
        

if __name__ == '__main__':
    app.run(debug=True)