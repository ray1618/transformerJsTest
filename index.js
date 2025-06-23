import { pipeline } from "@huggingface/transformers";

// //////////////////////////////
const transcriber = await pipeline(
  "automatic-speech-recognition",
  "onnx-community/whisper-tiny.en",
  { device: "webgpu" },
);

const msgContainer = document.getElementById("msgTxt");
console.log(msgContainer);
// Transcribe audio from a URL
const url = "ray2.m4a";
msgContainer.innerHTML = "loading...";
const output = await transcriber(url);

msgContainer.innerHTML = output.text;
console.log(output);
