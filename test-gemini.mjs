import { generateText } from "ai";
import { google } from "@ai-sdk/google";

async function main() {
  try {
    const result = await generateText({
      model: google("gemini-1.5-flash"),
      prompt: "Hello",
    });
    console.log("Success:", result.text);
  } catch (error) {
    console.error("API Error occurred:");
    console.error(error);
  }
}

main();
