const speakText = (text) => {
  return new Promise((resolve, reject) => {
    const synth = window.speechSynthesis;

    if (synth.speaking) {
      synth.cancel();
    }

    const utterance = new SpeechSynthesisUtterance(text);

    const voices = synth.getVoices();
    
    // Choose a specific voice if you want
    utterance.voice = voices[12];

    utterance.lang = "en-US";

    utterance.onend = () => {
      resolve();
    };

    utterance.onerror = (event) => {
      console.error("SpeechSynthesis error:", event.error);
      reject(event.error);
    };

    synth.speak(utterance);
  });
};

export default speakText;
