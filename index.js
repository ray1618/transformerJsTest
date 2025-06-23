import { pipeline } from "@huggingface/transformers";

// -- sentiment analysis
// const pipe = await pipeline("sentiment-analysis");

// const out = await pipe("This is normal");
// console.log("test", out);

/*********************
// text generation
// *****/
/*
const pipe = await pipeline(
  "text-generation",
  "unsloth/DeepSeek-R1-0528-Qwen3-8B-GGUF",
);
const messages = [{ role: "user", content: "Who are you?" }];
const out = pipe(messages);
console.log(out);
*/

// text generation part 2
// Initieer de pipeline (bijv. tekstgeneratie met een instructie-model zoals DeepSeek)
// const generator = await pipeline(
//  "text-generation",
//  "Xenova/deepseek-llm-7b-instruct",
//);

// Prompt sturen
//const output = await generator("Vertel een grappige mop over developers.", {
//  max_new_tokens: 60,
//});

//console.log(output[0].generated_text);
////////////////////////////
//
//import { pipeline } from "@huggingface/transformers";

// Create a feature-extraction pipeline
// const extractor = await pipeline(
//  "feature-extraction",
//  "mixedbread-ai/mxbai-embed-xsmall-v1",
//  { device: "webgpu" },
//);

// Compute embeddings
//const texts = ["Hello world!", "This is an example sentence."];
//const embeddings = await extractor(texts, { pooling: "mean", normalize: true });
//console.log(embeddings.tolist());
// [
//   [-0.016986183822155, 0.03228696808218956, -0.0013630966423079371, ... ],
//   [0.09050482511520386, 0.07207386940717697, 0.05762749910354614, ... ],
// ]
//
//
// //////////////////////////////
const transcriber = await pipeline(
  "automatic-speech-recognition",
  "onnx-community/whisper-tiny.en",
  { device: "webgpu" },
);

// Transcribe audio from a URL
//const url =
("https://huggingface.co/datasets/Xenova/transformers.js-docs/resolve/main/jfk.wav");
const url2 = "ray2.m4a";
const output = await transcriber(url2);
console.log(output);
