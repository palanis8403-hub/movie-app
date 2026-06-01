# Movies App

A React + Express fullstack movies listing app.

## Project Structure

```
movies-app/
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── App.css
│   └── index.js
├── server/
│   ├── server.js
│   ├── package.json
│   └── movies_metadata.json  ← Add your file here!
└── package.json
```

## Setup Instructions

### Step 1 — Add your data file
Copy your `movies_metadata.json` into the `server/` folder.

### Step 2 — Install & run the backend
```bash
cd server
npm install
node server.js
```

### Step 3 — Install & run the frontend (new terminal)
```bash
cd movies-app
npm install
npm start
```

### Step 4 — Open browser
Go to: http://localhost:3000

## Features
- Movies grid on the home page
- Click any movie card to view full details
- Back button to return to the list
- Data loaded from your movies_metadata.json via API
