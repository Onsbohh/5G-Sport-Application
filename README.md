# 5G-Sport-Application

In this project we are continuing a multi-year project 5G Sport.

Instructions to stream:

Download:
  - MediaMTX https://github.com/bluenviron/mediamtx/releases
  - FFmpeg https://www.ffmpeg.org/download.html

Edit streamServer.js:
  - Line 14 change to use ffmpeg.exe location
  - Line 16 "video=" change to use your webcam name. Can be found in windows settings.

Edit Mediamtx.yml:
  - Inside of Mediamtx folder is mediamtx.yml
  - Add to bottom Path settings:
      paths:
        camstream:
           record: yes

Start: 
  - Run mediamtx.exe
  - Run  streamServer.js (node streamServer.js)
  - Run React Application (nmp start)

Now it should work by pressing the Start Stream button. 
