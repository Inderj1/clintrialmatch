import { CohereClient } from "cohere-ai";

export async function sendToCohere(prompt) {
  console.log("Initializing CohereClient with provided API key...");
  const config = useRuntimeConfig();
  const cohere = new CohereClient({ token: config.cohereApiKey });
  console.log(
    "CohereClient initialized. Preparing to send chatStream request..."
  );

  if (!prompt || typeof prompt !== "string") {
    console.error("Invalid prompt provided:", prompt);
    throw new Error("Invalid prompt provided. Expected a non-empty string.");
  }

  try {
    const chatStream = await cohere.chatStream({
      chatHistory: [], // No placeholder chat history
      message: prompt,
      connectors: [{ id: "web-search" }],
    });

    console.log("chatStream request sent successfully. Awaiting responses...");

    let botResponse = "";
    for await (const message of chatStream) {
      console.log("Received message from chatStream:", message);
      if (message.eventType === "text-generation") {
        botResponse += message.text;
      } else {
        console.log("Non text-generation event received:", message.eventType);
      }
    }

    console.log(
      "Completed reading chatStream. Final bot response:",
      botResponse.trim()
    );
    return botResponse.trim();
  } catch (error) {
    console.error("Error communicating with the Cohere API:", error);
    throw error;
  }
}
