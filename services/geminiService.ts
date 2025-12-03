import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateResponse = async (userMessage: string): Promise<string> => {
  if (!apiKey) {
    return "I'm currently in demo mode without an API key. Please contact Kivion directly for assistance!";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: `You are the AI Assistant for Kivion Projects Innovations, a Zambian technology company. 
        Your goal is to help potential clients (Startups, SMEs, NGOs in Africa) understand how Kivion's web-based systems can solve their problems.
        
        Kivion offers:
        - Financial tools, Sales tracking, Booking platforms, CRM, HR management, Stock management, POS, Membership systems, School systems.
        - Custom web development and automation.
        
        Key Value Propositions:
        - Affordable for African markets.
        - Solves poor record keeping and manual operations.
        - Mobile-friendly and scalable.
        
        Partnership Program:
        - Individuals can refer clients and earn dividends. Kivion handles the tech.
        
        Keep answers professional, concise, and persuasive. Encourage them to book a consultation.`,
      },
    });
    
    return response.text || "I apologize, I couldn't generate a response at the moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the server. Please try again later or contact our team directly.";
  }
};