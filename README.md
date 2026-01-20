# Azure Translator App

A simple web-based language translation tool powered by Microsoft Azure Translator API.

## Description

This application provides a user-friendly interface for translating text between multiple languages using Azure's Cognitive Services Translator API. It consists of a frontend built with HTML, CSS, and JavaScript, and a backend server built with Node.js and Express.

## Features

- Translate text between multiple languages (English, Spanish, French, German, Hindi)
- Simple and intuitive web interface
- RESTful API endpoint for translations
- CORS enabled for cross-origin requests

## Prerequisites

- Node.js (version 14 or higher)
- Microsoft Azure account with Translator service enabled
- Azure Translator API key and region

## Installation

1. Clone or download the project files.
2. Navigate to the project directory.
3. Install dependencies:
   ```
   npm install
   ```

## Setup

1. Create an Azure Translator resource in the Azure portal.
2. Obtain your API key and region from the Azure portal.
3. Open `server.js` and replace the placeholder values:
   - `PASTE_YOUR_AZURE_TRANSLATOR_KEY_HERE` with your actual API key
   - `PASTE_YOUR_RESOURCE_REGION_HERE` with your Azure region (e.g., 'eastus')

## Usage

1. Start the server:
   ```
   npm start
   ```
2. Open your web browser and navigate to `http://localhost:3000`.
3. Enter the text you want to translate in the textarea.
4. Select the source and target languages from the dropdown menus.
5. Click the "Translate" button to get the translation.

## API Endpoint

### POST /translate

Translates text from one language to another.

**Request Body:**
```json
{
  "text": "Hello, world!",
  "source": "en",
  "target": "es"
}
```

**Response:**
```json
{
  "translatedText": "¡Hola, mundo!"
}
```

**Supported Languages:**
- English (en)
- Spanish (es)
- French (fr)
- German (de)
- Hindi (hi)

## Technologies Used

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **API Integration:** Axios
- **Azure Services:** Microsoft Translator API

## License

This project is for educational purposes. Please ensure compliance with Azure's terms of service and usage policies.

## Contributing

Feel free to submit issues and enhancement requests.</content>
<parameter name="filePath">c:\Users\samit\Downloads\Code_Alpha projects\azure-translator-app\README.md