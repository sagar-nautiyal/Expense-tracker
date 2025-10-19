# 💰 React Expense Tracker

A modern, real-time expense tracking application built with React and Firebase. Keep track of your income and expenses with an intuitive interface and live data synchronization.

## 🌟 Features

- **Real-time Data Sync**: Automatically syncs expenses across all devices using Firebase Firestore
- **Income & Expense Tracking**: Add, edit, and delete income and expense transactions
- **Live Balance Calculation**: Automatically calculates total balance, income, and expenses
- **Interactive UI**: Hover effects and smooth animations for better user experience
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Data Persistence**: All data is stored securely in Firebase Cloud Firestore

## 🚀 Technologies Used

- **React 18** - Frontend framework
- **Firebase v9** - Backend and database
- **CSS Modules** - Component-scoped styling
- **React Toastify** - User notifications
- **React Hooks** - State management (useReducer, useState, useEffect)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd expense_tracker_react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Firebase**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Firestore Database
   - Copy your Firebase configuration

4. **Configure environment variables (REQUIRED)**
   ```bash
   # Copy the example file
   cp .env.example .env.local
   
   # Edit .env.local with your actual Firebase credentials
   # This step is MANDATORY - the app will not work without these environment variables
   ```

5. **Start the development server**
   ```bash
   npm start
   ```

The app will open at `http://localhost:3000`

## ⚙️ Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable Firestore Database
4. Go to Project Settings > General > Your apps
5. Add a web app and copy the configuration
6. Create a `.env.local` file with your configuration:

```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

## 🎯 Usage

### Adding Transactions

1. **Income**: Enter a positive amount (e.g., +1000 for salary)
2. **Expense**: Enter a negative amount (e.g., -50 for groceries)
3. Add a description and click "Add Transaction"

### Managing Transactions

- **Edit**: Hover over a transaction and click the edit icon
- **Delete**: Hover over a transaction and click the delete icon
- **View Balance**: Your current balance is displayed at the top

### Transaction Categories

- **Green transactions**: Positive amounts (income)
- **Red transactions**: Negative amounts (expenses)

## 📁 Project Structure

```
src/
├── components/
│   ├── ExpenseForm/          # Add/Edit transaction form
│   ├── ExpenseInfo/          # Balance and summary display
│   ├── ExpenseList/          # List of all transactions
│   └── Transaction/          # Individual transaction item
├── images/                   # UI icons (edit, delete)
├── App.js                    # Main application component
├── firebaseInit.js          # Firebase configuration
└── index.js                 # Application entry point
```

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## 🎨 Components Overview

### ExpenseForm
- Handles adding new transactions
- Manages editing existing transactions
- Form validation and state management

### ExpenseInfo
- Displays current balance
- Shows total income and expenses
- Real-time calculations

### ExpenseList
- Renders list of all transactions
- Provides edit/delete functionality
- Responsive transaction display

### Transaction
- Individual transaction component
- Interactive hover effects
- Edit and delete controls

## 🔒 Security Considerations

- **CRITICAL**: All Firebase credentials are now stored in environment variables only
- **NO HARDCODED SECRETS**: The application will not start without proper `.env.local` configuration
- Firebase configuration requires all environment variables to be present
- Firestore security rules should be configured for production
- Input validation is implemented on the frontend
- Never commit `.env.local` or any file containing actual credentials to version control

## 🚀 Deployment

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts
4. Add environment variables in Vercel dashboard

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify
3. Configure environment variables in Netlify settings

## 🔄 Real-time Features

The application uses Firebase's `onSnapshot` listener to provide real-time updates:

- Transactions sync instantly across all connected devices
- No manual refresh needed
- Automatic error handling and retry logic

## 📱 Responsive Design

- Mobile-first design approach
- Flexible layouts that adapt to different screen sizes
- Touch-friendly interface elements

## 🛠️ Future Enhancements

- User authentication and personal accounts
- Transaction categories and filtering
- Data export functionality
- Budget planning and alerts
- Charts and analytics
- Dark/Light theme toggle

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Known Issues

- Ensure Firebase project has Firestore enabled
- Check environment variables if Firebase connection fails
- Clear browser cache if experiencing data sync issues

## 💡 Tips

- Use negative amounts for expenses and positive for income
- Transactions are automatically sorted by creation date
- All amounts are displayed with 2 decimal places
- The balance reflects the sum of all transactions

---

Built with ❤️ using React and Firebase