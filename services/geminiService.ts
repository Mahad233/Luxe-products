
import { GoogleGenAI, Type } from "@google/genai";
import { Product } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getAIStylistResponse = async (prompt: string, context: Product[]) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Context: You are Luxe Products' AI Stylist. Your tone is sophisticated, knowledgeable, and helpful. 
      Available Products: ${JSON.stringify(context.map(p => ({ name: p.name, brand: p.brand, category: p.category })))}
      User Inquiry: ${prompt}`,
      config: {
        systemInstruction: "You are a world-class luxury stylist. Recommend specific products from the list when relevant. Keep responses concise but elegant."
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I apologize, my refined senses are momentarily clouded. How else may I assist your luxury journey?";
  }
};

export const generateLuxeImage = async (prompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: `A high-end, studio-lit luxury lifestyle photography of: ${prompt}. Cinematic lighting, 8k resolution, elegant composition.` }]
      },
      config: {
        imageConfig: {
          aspectRatio: "1:1",
        }
      }
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
  } catch (error) {
    console.error("Image Gen Error:", error);
    return null;
  }
};
