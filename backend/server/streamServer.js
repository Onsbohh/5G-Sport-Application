import express from 'express';
import { spawn } from "child_process";

import cors from "cors";

const app = express();
app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
let ffmpegProcess = null;

app.post('/start-stream', (req, res) => {
  if (ffmpegProcess) {
    return res.status(400).send('Stream already running');
  }

  // Ffmpeg location argument needs to be changed based on where ffmpeg is located
  // Also the video input device name needs to be changed based on the system
  ffmpegProcess = spawn('C:\\Users\\nuutt\\Downloads\\ffmpeg-2025-12-18-git-78c75d546a-essentials_build\\ffmpeg-2025-12-18-git-78c75d546a-essentials_build\\bin\\ffmpeg.exe', [
    '-f', 'dshow',
    '-i', 'video=Integrated Camera',
    '-pix_fmt', 'yuv420p',
    '-preset', 'veryfast',
    '-tune', 'zerolatency',
    '-c:v', 'libx264',
    '-b:v', '2500k',
    '-maxrate', '2500k',
    '-bufsize', '5000k',
    '-f', 'rtsp',
    'rtsp://localhost:8554/camstream'
  ]);

  ffmpegProcess.stderr.on('data', (data) => {
    console.error(`FFmpeg stderr: ${data}`);
  });

  ffmpegProcess.on('close', (code) => {
    console.log(`FFmpeg process exited with code ${code}`);
    ffmpegProcess = null;
  });
    res.send('Stream started');
});

app.get('/stop-stream', (req, res) => {
  if (!ffmpegProcess) {
    return res.status(400).send('No stream running');
  }

  ffmpegProcess.kill('SIGINT');
  ffmpegProcess = null;
  res.send('Stream stopped');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Stream server running on port ${PORT}`);
});
