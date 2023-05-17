import React, { useEffect } from 'react';
import * as faceapi from 'face-api.js';

const Video = () => {

 

  const startVideo = () => {
    const video = document.getElementById('video');
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: false,
      })
      .then((stream) => {
        video.srcObject = stream;
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
 faceapi.nets.faceExpressionNet.loadFromUri('/models');
 faceapi.nets.faceLandmark68Net.loadFromUri('/models');
 faceapi.nets.faceRecognitionNet.loadFromUri('/models');
    startVideo();
  }, []);

  return (
    <div>
      <video id='video' width='720' height='560' autoPlay muted></video>
    </div>
  );
};

export default Video;
