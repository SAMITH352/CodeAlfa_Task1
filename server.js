const express = require('express');
const cors = require('cors');
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(cors());
app.use(express.json());

// 🔐 Insert your Azure Translator credentials
const AZURE_TRANSLATOR_KEY = 'PASTE_YOUR_AZURE_TRANSLATOR_KEY_HERE';
const AZURE_ENDPOINT = 'https://api.cognitive.microsofttranslator.com';
const AZURE_REGION = 'PASTE_YOUR_RESOURCE_REGION_HERE'; // e.g. eastus

app.post('/translate', async (req, res) => {
  const { text, source, target } = req.body;

  try {
    const response = await axios({
      baseURL: AZURE_ENDPOINT,
      url: '/translate',
      method: 'post',
      params: {
        'api-version': '3.0',
        from: source,
        to: target
      },
      headers: {
        'Ocp-Apim-Subscription-Key': AZURE_TRANSLATOR_KEY,
        'Ocp-Apim-Subscription-Region': AZURE_REGION,
        'Content-Type': 'application/json',
        'X-ClientTraceId': uuidv4()
      },
      data: [{ text }]
    });

    res.json({
      translatedText: response.data[0].translations[0].text
    });

  } catch (error) {
    res.status(500).json({ error: 'Translation failed' });
  }
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
