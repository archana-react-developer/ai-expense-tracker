import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const { query, expenses } = JSON.parse(event.body);

    const response = await client.responses.create({
      model: "gpt-4.1-mini",
      input: `User question: ${query}

Expense data:
${JSON.stringify(expenses, null, 2)}

Give helpful spending insights.`,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        answer: response.output_text,
      }),
    };
  } catch (error) {
    console.error("Netlify function error:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message || "AI request failed",
      }),
    };
  }
}