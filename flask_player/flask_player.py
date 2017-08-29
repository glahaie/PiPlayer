from flask import Flask, request
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)

class FlaskPlayer(Resource):
	def put(self):
		radio_station = request.form['data']
		return {radio_station : radio_station}

api.add_resource(FlaskPlayer, '/play')		

if __name__ == '__main__':
    app.run(debug=True)