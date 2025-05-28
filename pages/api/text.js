export default async function handler(req, res) {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: 'Schreibe einen kindgerechten Satz auf Deutsch zu einem Hasen im Wald.' }]
    })
  });
  const data = await response.json();
  res.status(200).json({ suggestion: data.choices[0].message.content });
}