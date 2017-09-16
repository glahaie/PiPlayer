#! /usr/bin/python

# Small app to play radio streams in VLC

from flask import Flask, request
from flask_restful import Resource, Api, reqparse
from flask_cors import CORS
import vlc
import sqlite3

#TODO - move somewhere not hardcoded
db_location = "/home/guillaumel/Workspace/PiPlayer/radio_library/radio.db"

# TODO : move in a class of its ownflas
vlc_instance = vlc.Instance()
vlc_player = vlc_instance.media_player_new()

app = Flask(__name__)
api = Api(app)
cors = CORS(app)

class RadioLibrary(Resource):

    def __init__(self, cors_support=True):
        #TODO - move to get - otherwise might not be up to date
        self.conn = sqlite3.connect(db_location)
        self.cursor = self.conn.cursor()
        self.cursor.execute("SELECT ID, NAME FROM RADIO")
        self.library = self.cursor.fetchall()
        self.stuff = [{"id" : l[0], "name" : l[1]} for l in self.library]

    def get(self):
        return self.stuff

class FlaskPlayer(Resource):

    def __init__(self):
        self.conn = sqlite3.connect(db_location)
        self.cursor = self.conn.cursor()

    def post(self, action):
        if action == "play":
            self.__play()
        elif action == "stop":
            self.__stop()

    def __play(self):
        """Starts requested stream. If no stream is requested, play the old one.
        """

        stream = self.__fetch_stream()
        print("reaching __play")
        #Just in case
        vlc_player.stop()

        #check data
        if stream is not None:
            self.__update_media(stream)

        vlc_player.play()
        return {}

    def __fetch_stream(self):
        stream = None
        if request.get_json() is not None: 
            stream = str(request.get_json()['stream'])
        return stream

    def __stop(self):
        """Stops Radio-canada
        """
        vlc_player.stop()
        return {}

    def __update_media(self, stream):
        """ Changes the media to play in vlc.
        """
        self.cursor.execute("SELECT URL FROM RADIO WHERE ID=?", stream)
        media_url = self.cursor.fetchone()[0]
        media = vlc_instance.media_new(media_url)
        vlc_player.set_media(media)
        





api.add_resource(FlaskPlayer, '/player/<string:action>')
api.add_resource(RadioLibrary, '/library')

if __name__ == '__main__':
    app.run(debug=True)

