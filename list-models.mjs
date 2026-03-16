async function fetchModels() {
  const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
  if (!apiKey) throw new Error("API Key missing");
  const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
  const data = await res.json();
  if (data.models) {
    console.log("Available models:");
    data.models.filter(m => m.supportedGenerationMethods.includes("generateContent")).forEach(m => console.log(m.name));
  } else {
    console.error("Error fetching models:", data);
  }
}
fetchModels().catch(console.error);
