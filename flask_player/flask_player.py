#! /usr/bin/python

# Small app to play radio streams in VLC

from flask import Flask, request
from flask_restful import Resource, Api
import vlc
import sqlite3

db_location = "../radio_library/radio.db"

conn = sqlite3.connect(db_location)
c = conn.cursor()
c.execute("SELECT URL FROM RADIO WHERE ID=1")
result = c.fetchone()
radio_canada = result[0]

# TODO : move in a class of its own
vlc_instance = vlc.Instance()
vlc_player = vlc_instance.media_player_new(radio_canada)

app = Flask(__name__)
api = Api(app)


class FlaskPlayer(Resource):

    def put(self, action):

    	if action == "play":
    		self.__play()
    	elif action == "stop":
    		self.__stop()

    def __play(self):
    	"""Starts Radio-canada
    	"""

    	vlc_player.play()
    	return {radio_station: "radio-canada première"}

    def __stop(self):
    	"""Stops Radio-canada
    	"""
    	vlc_player.stop()
    	return {}

api.add_resource(FlaskPlayer, '/player/<string:action>')

if __name__ == '__main__':
    app.run(debug=True)
