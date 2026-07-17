# AI Diagnoser 🏥

An intelligent healthcare chatbot application that uses machine learning to diagnose diseases based on user-reported symptoms. AI Diagnoser provides a conversational interface where users can describe their symptoms and receive potential diagnoses powered by AI.

## Project Overview

AI Diagnoser is a web-based symptom diagnostic assistant that leverages Google Cloud's AI Platform to provide disease predictions based on symptom inputs. The application features a modern chat interface, interactive mapping capabilities, and a comprehensive symptom dataset for accurate disease classification.

### Key Features

- **Conversational AI Chat Interface**: Intuitive chatbot for symptom inquiry and diagnosis
- **Symptom Recognition**: Supports 132+ medical symptoms for comprehensive diagnosis
- **Machine Learning Integration**: Uses Google Cloud AI Platform for predictions
- **Real-time Chat Display**: Dynamic chat messages with agent and user interactions
- **Interactive Maps**: Integrated Google Maps for location-based health services
- **Responsive Design**: Modern UI with dark theme and smooth animations
- **User-Friendly Input**: Simple comma-separated symptom input system

### Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend**: Google Cloud AI Platform (Vertex AI)
- **Machine Learning**: Pre-trained classification model for disease diagnosis
- **APIs**: Google Maps Embedded API
- **Styling**: Custom CSS with modern dark theme
- **Data**: CSV-based training dataset with 132 medical symptoms

## Supported Symptoms

The application recognizes the following 132 symptoms across multiple categories:

**Respiratory & ENT**: cough, continuous_sneezing, throat_irritation, runny_nose, congestion, sinus_pressure, phlegm

**Digestive**: stomach_pain, acidity, ulcers_on_tongue, vomiting, indigestion, diarrhoea, constipation, nausea, loss_of_appetite

**Cardiovascular**: chest_pain, fast_heart_rate, palpitations

**Neurological**: headache, dizziness, loss_of_smell, stiff_neck, altered_sensorium, weakness_of_one_body_side

**Dermatological**: skin_rash, itching, nodal_skin_eruptions, blackheads, pus_filled_pimples, blister, red_sore_around_nose

**And 80+ more symptoms** including fever, fatigue, joint pain, muscle weakness, and more.

## Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for Google Cloud API calls
- No installation required

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/Sanelemthembu1/AI-Diagnoser.git
   cd AI-Diagnoser
   ```

2. Navigate to the project directory

   ```bash
   cd src/html
   ```

3. Open the application in your browser

   ```bash
   # Option 1: Direct file opening
   open index.html
   
   # Option 2: Using a local server (Python)
   python -m http.server 8000
   # Then visit http://localhost:8000/src/html/
   
   # Option 3: Using Node.js http-server
   npx http-server
   # Then visit http://localhost:8080/src/html/
   ```

## Usage

1. **Open the Application**: Launch `index.html` in your web browser
2. **Start Chatting**: Click on the chat input field and type your symptoms
3. **Input Format**: Enter symptoms as comma-separated values
   - Example: `cough, high_fever, throat_irritation`
4. **View Diagnosis**: The AI will process your symptoms and provide diagnosis predictions
5. **Interactive Map**: Click the floating "+" button to view healthcare locations on the map

## Project Structure

```
AI-Diagnoser/
├── src/
│   ├── datasets/
│   │   └── Training.csv          # Training data with 132 symptoms and disease labels
│   ├── html/
│   │   ├── index.html            # Main chatbot interface
│   │   └── map.html              # Map integration page
│   ├── modules/
│   │   └── scripts.js            # Core chatbot and AI logic
│   └── styles/
│       ├── styles.css            # Application styling
│       └── pics/                 # Image assets (AI icon, user avatar)
└── README.md
```

## File Descriptions

### Core Files

**`src/html/index.html`**
- Main application interface
- Chat display area
- User input controls
- Floating action button for map display

**`src/modules/scripts.js`**
- Symptom keyword definitions (132 symptoms)
- User input processing and JSON conversion
- Google Cloud AI Platform API integration
- Chat message handling and UI updates
- Map toggle functionality

**`src/styles/styles.css`**
- Dark theme UI styling
- Chat bubble animations
- Responsive container layout
- Floating button styling
- Map iframe styling

**`src/datasets/Training.csv`**
- Training dataset for the ML model
- 132 medical symptom columns
- Binary (0/1) symptom indicators
- Disease classification labels

## API Integration

The application communicates with Google Cloud AI Platform:

```javascript
// Endpoint: Google Cloud Vertex AI
https://us-central1-aiplatform.googleapis.com/v1/projects/{PROJECT_ID}/locations/us-central1/endpoints/{ENDPOINT_ID}:predict
```

**Request Format**: Binary vector of 132 symptoms (0 or 1)
**Response**: Disease prediction with confidence scores

## How It Works

1. **Symptom Input**: User enters symptoms as comma-separated text
2. **Text Processing**: Symptoms are matched against the keyword array
3. **Vector Conversion**: Matched symptoms are converted to binary vector (1 = present, 0 = absent)
4. **AI Prediction**: Vector is sent to Google Cloud AI Platform
5. **Result Display**: Diagnosis response is displayed in the chat interface

## Configuration

### Adding New Symptoms

To add new symptoms to the recognition system, update the `key_words` array in `src/modules/scripts.js`:

```javascript
const key_words = [
    "existing_symptom",
    "new_symptom",  // Add here
    // ... more symptoms
];
```

### Updating API Endpoint

Replace the endpoint in `sendDataToServer()` function with your own Google Cloud AI Platform endpoint:

```javascript
fetch('YOUR_CUSTOM_ENDPOINT_URL', {
    // ... rest of config
})
```

## Limitations & Disclaimers

⚠️ **Important**: This application is for educational and informational purposes only.

- **Not a Medical Tool**: AI Diagnoser is not a replacement for professional medical advice
- **Educational Use**: Designed to demonstrate AI/ML capabilities in healthcare
- **Accuracy**: Predictions are based on training data and may not be 100% accurate
- **Consultation Required**: Always consult with healthcare professionals for actual diagnosis
- **Data Privacy**: Ensure compliance with HIPAA and other healthcare regulations

## Future Enhancements

- [ ] Real-time confidence scores for predictions
- [ ] Multiple diagnosis suggestions with percentages
- [ ] Symptom severity levels
- [ ] Integration with verified medical databases
- [ ] Multi-language support
- [ ] User history and symptom tracking
- [ ] Telemedicine referral system
- [ ] Offline capability with local model
- [ ] Mobile app version
- [ ] Advanced filtering and refinement options

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is currently unlicensed. See the LICENSE file for details.

## Support & Issues

- **Report Issues**: [Create an issue](https://github.com/Sanelemthembu1/AI-Diagnoser/issues)
- **Feature Requests**: Submit enhancement ideas via issues
- **Questions**: Start a discussion or contact the maintainer

## Acknowledgments

- Google Cloud AI Platform for prediction infrastructure
- Google Maps for location services
- Medical symptom dataset contributors
- Community feedback and suggestions

## Status

⚠️ **Project Status**: Archived
This project is currently archived and maintained for reference purposes. For active healthcare AI solutions, consider exploring production-grade alternatives.

---

**Disclaimer**: AI Diagnoser is an educational project. Always seek professional medical advice for actual health concerns. This tool should never be used as a substitute for qualified medical professionals.

Created with ❤️ for healthcare AI education
