await fetch("https://api.elevenlabs.io/v1/text-to-speech/{voice_id}", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "xi-api-key": "sk_df1ebd2264215d23898f111ca81581e8294e8df198565f8d",
    },
    body: JSON.stringify({
      text: "Bot reply here",
      voice_settings: {
        stability: 0.75,
        similarity_boost: 0.85,
      },
    }),
  });
  