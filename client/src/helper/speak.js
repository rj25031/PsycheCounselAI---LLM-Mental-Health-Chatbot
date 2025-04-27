const speakText = (text, voiceGender = 'female') => {
  return new Promise((resolve, reject) => {
    const synth = window.speechSynthesis;
    if (synth.speaking) {
      synth.cancel();
    }

    // pick a voice matching gender keyword or fallback
    const voices = synth.getVoices();
    const selectedVoice =
      voices.find(v => v.name.toLowerCase().includes(voiceGender)) ||
      voices.find(v => v.default) ||
      voices[0];

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.voice = selectedVoice;

    utterance.onend = () => {
      resolve();
    };

    utterance.onerror = (event) => {
      console.error('SpeechSynthesis error:', event.error);
      reject(event.error);
    };

    synth.speak(utterance);
  });
};


export default speakText;
