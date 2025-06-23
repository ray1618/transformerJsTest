import { pipeline } from "@huggingface/transformers";

const transcriber = await pipeline(
  "automatic-speech-recognition",
  "onnx-community/whisper-tiny.en",
  { device: "webgpu" },
);

const msgContainer = document.getElementById("msgTxt");

// Transcribe audio from a URL
//const url = "ray2.m4a";
//msgContainer.innerHTML = "loading...";
//const output = await transcriber(url);

// msgContainer.innerHTML = output.text;
// console.log(output);

const opnemenBtn = document.getElementById("opnemenBtn");

async function recordAudio() {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  const mediaRecorder = new MediaRecorder(stream);
  const audioChunks = [];

  mediaRecorder.ondataavailable = (event) => {
    audioChunks.push(event.data);
  };

  mediaRecorder.onstop = async() => {
    msgContainer.innerHTML = "Processing audio...";
    const audioBlob = new Blob(audioChunks, { type: "audio/mpeg" });
    // Create a URL for the audio blob

    const downloadLink = document.createElement("a");
    const audioUrl = URL.createObjectURL(audioBlob);
    downloadLink.href = audioUrl;
    downloadLink.download = "recording.mp3";

    const output = await transcriber(audioUrl);
    msgContainer.innerHTML = output.text;
    console.log(output);
  };

  mediaRecorder.start();
  msgContainer.innerHTML = "Recording...";

  setTimeout(() => {
    mediaRecorder.stop();
  }, 5000); // Record for 5 seconds
}

opnemenBtn.addEventListener("click", recordAudio);

