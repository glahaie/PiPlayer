#! /usr/bin/python

# Small app to play radio streams in VLC

from flask import Flask, request
from flask_restful import Resource, Api
import vlc

# TODO : move in a class of its own
vlc_instance = vlc.Instance()
vlc_player = vlc_instance.media_player_new(
    "http://2QMTL0.akacast.akamaistream.net:80/7/953/177387/v1/rc.akacast.akamaistream.net/2QMTL0")

app = Flask(__name__)
api = Api(app)


class FlaskPlayer(Resource):

    def put(self, todo_id):

    	print("todo_id = " + todo_id)
    	if todo_id == "play":
    		self.__play()
    	elif todo_id == "stop":
    		self.__stop()

    def __play(self):
    	"""Starts Radio-canada
    	"""

    	print("Entering play()")
    	vlc_player.play()
    	return {radio_station: "radio-canada première"}

    def __stop(self):
    	"""Stops Radio-canada
    	"""
    	vlc_player.stop()
    	return {}

api.add_resource(FlaskPlayer, '/<string:todo_id>')

if __name__ == '__main__':
    app.run(debug=True)
