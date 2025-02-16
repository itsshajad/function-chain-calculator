# Function Chain Calculator App

## Overview
This is a web application that allows users to execute a chain of 5 mathematical functions, where the output (y) of each function serves as the input (x) for the next function. The UI is designed to visually represent this chaining process.

## Features
- **Function Chain UI**: Displays 5 function cards in a fixed order, connected visually.
- **Editable Equations**: Users can modify the mathematical equations for each function.
- **Input & Output Handling**: Users provide an initial value, and the final output is displayed after applying all functions sequentially.
- **Real-Time Calculation**: Results update automatically when equations or input values change.
- **Validation**: Supports only basic arithmetic operations (+, -, *, /, ^).
- **Fixed Execution Order**: The chain follows a predefined sequence (1 → 2 → 4 → 5 → 3).
- **Pixel-Perfect UI**: The design closely follows the given Figma layout.
- **No External Libraries for Flow UI**: The chain representation is built without third-party libraries.

## Technologies Used
- **Frontend**: React.js with TypeScript
- **Styling**: Vanilla CSS

## Installation & Setup
1. **Clone the repository:**
   ```sh
   git clone https://github.com/itsshajad/function-chain-calculator.git
   cd function-chain-calculator
   ```
2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```
3. **Run the development server:**
   ```sh
   npm start
   # or
   yarn start
   ```
4. **Open in browser:**
   Navigate to `http://localhost:3000/`.

## Deployment
The application is deployed at:
🔗 [Live Preview](https://function-chain-calculator-7h1lf01t5-itsshajads-projects.vercel.app/)

## Repository
🔗 [GitHub Repo](https://github.com/itsshajad/function-chain-calculator.git)

## Project Structure
```
📂 function-chain-calculator
│── 📁 src
│   ├── 📁 components  # Reusable UI components
│   ├── App.tsx       # Main application entry point
│   ├── index.tsx      # React DOM rendering
│── 📄 package.json    # Dependencies and scripts
│── 📄 README.md       # Documentation
```

## How It Works
1. **Input Initial Value**: User enters a starting number.
2. **Modify Function Equations**: Users can update the equations for each function.
3. **Automatic Calculation**: The system processes functions in order and updates the final result.
4. **Final Output Displayed**: The processed value appears at the end of the chain.

**Godspeed! 🚀**