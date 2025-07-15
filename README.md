# Quiz Game

A responsive, interactive quiz application built with HTML, CSS, and JavaScript. Test your knowledge with engaging questions across various topics!

## Features

- **Interactive Quiz Interface**: Clean, modern design with smooth transitions
- **Progress Tracking**: Visual progress bar and score display
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Immediate Feedback**: Color-coded answers showing correct/incorrect responses
- **Score Calculation**: Real-time scoring with final results
- **Restart Functionality**: Easy quiz restart without page reload

## Demo

The quiz includes 5 sample questions covering:
- Geography (Capital of France)
- Astronomy (Red Planet)
- Earth Sciences (Largest Ocean)
- Programming (Programming Languages)
- Chemistry (Chemical Symbols)

## Installation

1. Clone or download the project files
2. Ensure you have all three files in the same directory:
   - `index.html`
   - `styles.css`
   - `script.js`
3. Open `index.html` in your web browser

## Usage

1. **Start**: Click "Start Quiz" to begin
2. **Answer**: Click on your chosen answer for each question
3. **Progress**: Watch your score and progress bar update
4. **Results**: View your final score and performance message
5. **Restart**: Click "Restart Quiz" to play again

## File Structure

```
quiz-game/
├── index.html      # Main HTML structure
├── styles.css      # Styling and responsive design
├── script.js       # Game logic and interactivity
└── README.md       # This file
```

## Technical Details

### HTML Structure
- **Start Screen**: Welcome message and start button
- **Quiz Screen**: Question display, answer choices, progress bar
- **Result Screen**: Final score and restart option

### CSS Features
- **Responsive Design**: Mobile-first approach with media queries
- **Modern Styling**: Clean UI with hover effects and transitions
- **Color Coding**: Visual feedback for correct/incorrect answers
- **Typography**: Google Fonts (Roboto) for better readability

### JavaScript Functionality
- **Question Management**: Dynamic question loading and progression
- **Answer Validation**: Immediate feedback with color coding
- **Score Tracking**: Real-time score updates
- **Progress Bar**: Visual representation of quiz completion
- **State Management**: Screen transitions and quiz restart

## Customization

### Adding New Questions

To add more questions, edit the `quizQuestions` array in `script.js`:

```javascript
{
  question: "Your question here?",
  answers: [
    { text: "Option 1", correct: false },
    { text: "Option 2", correct: true },
    { text: "Option 3", correct: false },
    { text: "Option 4", correct: false },
  ],
}
```

### Styling Modifications

Key CSS variables for easy customization:
- Primary color: `#e86a33` (orange theme)
- Background: `#f5fef6` (light green)
- Correct answer: `#d4edda` (green)
- Incorrect answer: `#ffcad0` (red)

### Timing Adjustments

Change the answer display duration in `script.js`:
```javascript
setTimeout(() => {
  // Current delay is 1000ms (1 second)
}, 1000);
```

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Fork the repository
2. Create your feature branch
3. Make your changes
4. Test thoroughly on different devices
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Future Enhancements

- [ ] Timer for each question
- [ ] Question categories/difficulty levels
- [ ] High score tracking
- [ ] Sound effects
- [ ] Question randomization
- [ ] Hint system
- [ ] Multiple quiz topics

## Support

For issues or questions, please open an issue in the repository or contact the maintainer.

---

**Enjoy testing your knowledge with Quiz Game!** 🧠✨
