#!/bin/bash

# First draft of starting react and flask together...
#TODO : add cleverness

echo Starting Flask

export FLASK_APP=flask_player/flask_player.py

python -m flask run &


echo Starting React

cd pi_player
npm start &
cd ..