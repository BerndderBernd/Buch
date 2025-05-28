export default async function handler(req, res) {
  const response = await fetch('https://api.replicate.com/v1/predictions', {
    method: 'POST',
    headers: {
      'Authorization': `Token ${process.env.REPLICATE_API_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      version: 'your-model-version-id',
      input: { image: req.body.image }
    })
  });
  const result = await response.json();
  res.status(200).json(result);
}