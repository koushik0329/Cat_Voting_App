# 🐱 Cat Voting App

A simple, single-page React application that allows users to browse random cat images and cast an "Up" or "Down" vote for each one. Votes are persisted via [TheCatAPI](https://thecatapi.com/). Built using React 18, TypeScript, Vite, Zustand, and Tailwind CSS.

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **Vite** for fast builds and dev server
- **Tailwind CSS** for styling
- **Zustand** for state management
- **Axios** for API requests
- **React Toastify** for notifications

## 📁 Project Structure

```

cat-voting-app/
├── public/
├── src/
│ ├── components/
│ ├── api/
│ ├── store/
│ ├── App.tsx
│ └── main.tsx
├── .env
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
├── package.json
└── tsconfig.json

```

## 🔐 Environment Variables

Create a `.env` file in the root of the project with the following:

```env
VITE_API_KEY=your_thecatapi_key_here
```

> ⚠️ Do not commit your `.env` file to version control.

## 🧪 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/cat-voting-app.git
cd cat-voting-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file

```bash
touch .env
```

Add your TheCatAPI key:

```env
VITE_API_KEY=your_thecatapi_key_here
```

### 4. Run the development server

```bash
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173)

## 🚀 Build for Production

```bash
npm run build
```

## ✅ Lint the Code

```bash
npm run lint
```

## 📦 Preview Production Build

```bash
npm run preview
```
