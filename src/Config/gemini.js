import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: "AIzaSyBdbULSDpWJOVnQ4kUvjAl5LYWD0QNVJe0",
});

async function runChat(prompt) {
  try {
    const result = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: [{ role: "user", parts: [{ text: prompt }] }],
    });

    // Extract the generated text from the response
    const text = result.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      console.log("No response text found.");
      return;
    }

    console.log("Response for prompt:", text);
    return text;
  } catch (error) {
    console.error("Chat generation error:", error);
    return "❌ Something went wrong.";
  }
}

export default runChat;
