# Otto - Subscription Tracker

Otto is a modern, privacy-focused subscription tracking application built with Next.js. It helps you keep track of your monthly recurring expenses, visualize your budget, and ensure you never lose sight of where your money is going.

## ✨ Features

- **Subscription Management**: Easily add, edit, and remove monthly subscriptions.
- **Budget Overview**: Input your monthly salary to see how much of your income goes towards subscriptions.
- **Real-Time Calculations**: Instantly see your total monthly costs and remaining balance.
- **Privacy First**: All data is persisted locally in your browser's Local Storage. No data leaves your device.
- **Modern UI**: A sleek, dark-mode design built with Tailwind CSS v4 and polished animations.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/mofodox/Otto.git
    cd otto
    ```

2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  Run the development server:
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

- `app/`: Next.js App Router pages and layouts.
- `components/`: Reusable UI components (SubscriptionTracker, Modal, SubscriptionForm).
- `hooks/`: Custom React hooks (e.g., `useLocalStorage` for data persistence).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
