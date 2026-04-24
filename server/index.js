import "dotenv/config";
import express from "express";
import cors from "cors";
import OpenAI from "openai";

const app = express();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
  }),
);
app.use(express.json());

app.post("/api/ask-ai", async (req, res) => {
  try {
    const { query, expenses } = req.body;

    if (!process.env.OPENAI_API_KEY) {
      return res.status(500).json({ error: "Missing OPENAI_API_KEY in .env" });
    }

    const response = await client.responses.create({
      model: "gpt-4.1-mini",
      input: `User question: ${query}

Expense data:
${JSON.stringify(expenses, null, 2)}

Give helpful spending insights.`,
    });

    res.json({ answer: response.output_text });
  } catch (error) {
    console.error("OPENAI ERROR:", error);
    
     if (error.status === 429) {
    return res.status(429).json({
      error: "AI quota exceeded. Please try again later.",
    });
  } 
    res.status(500).json({
      error: error.message,
      status: error.status,
      code: error.code,
      type: error.type,
    });
  }
});

app.listen(5001, () => {
  console.log("Server running on http://localhost:5001");
});
