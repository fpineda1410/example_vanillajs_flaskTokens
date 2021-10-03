from flask import Flask, request, jsonify,render_template
from datetime import timedelta
from flask_jwt_extended import JWTManager
from flask_jwt_extended import create_access_token
from flask_cors import CORS

app = Flask(__name__)
app.config["JWT_SECRET_KEY"] = 'EXMPLE'
CORS(app)
JWTManager(app)


@app.route('/', methods=['GET'])
def salute ():
    return 'Hello World'

@app.route('/token', methods=['GET'])
def deliver_token():
    
    expiration = timedelta (hours=80)
    access_token = create_access_token (identity='elbicho',expires_delta=expiration)
    return jsonify (access_token=access_token)

@app.route('/token_test', methods=['POST'])
def test_token():
    body=request.get_json()
    if body is not None:
        print ('flag')
    if (body['access_token']):
        return jsonify('success')
    else:
        return jsonify('ta mamando')
    
@app.route('/access_html', methods=['GET'])
def access_html():
    return render_template('access.html')
    

if __name__ == '__main__':
    app.run(debug=True)