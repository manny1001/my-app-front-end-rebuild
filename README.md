# YoChauffeur - Expo Mobile Application

## Description

YoChauffeur is a mobile application built with React Native and Expo. It appears to be designed as a platform for a chauffeur or ride-hailing service, featuring phone authentication, terms and conditions acceptance, and a suite of custom UI components. The application leverages GraphQL for API communication and React Context for global state management.

## Features

*   **Phone Number Authentication:** Secure user login using phone numbers (`app/screens/PhoneAuth.tsx`).
*   **Terms and Conditions:** Flow for users to accept terms before using the app (`app/screens/TermsAndConditions.tsx`).
*   **Custom UI Components:** A collection of reusable components including:
    *   `BigButton` (`components/Buttons.tsx`)
    *   `Loader` and `LoadingContent` (`components/Loader.tsx`)
    *   `Input` (a styled `TextInput` from `react-native-paper`) (`components/TextInput.tsx`)
    *   `Header` (`components/Header.tsx`)
    *   `PhoneAuthImage` (`components/PhoneAuthImage.tsx`)
    *   `HeadingText` (`components/HeadingText.tsx`)
*   **Responsive Design:** Utilizes `react-native-responsive-screen` and `react-native-responsive-fontsize` for adapting UI to different screen sizes (as seen in `app/styles/index.tsx`).
*   **Global State Management:** Employs React Context API (`app/context/Context.tsx`) for managing application-wide state such as user session, ride details, UI states, and persists some data using `AsyncStorage`.
*   **GraphQL Integration:** Communicates with a backend via GraphQL using Apollo Client (inferred from `useMutation` in `PhoneAuth.tsx` and queries in `app/utilites/Queries.tsx`).
*   **Lazy Loading:** Some components and screens are lazy-loaded for potentially improved initial performance (e.g., `InputField`, `PhoneAuth` in `app/constants/index.tsx`).

## Tech Stack

*   **Framework:** React Native with Expo
*   **Language:** TypeScript
*   **Navigation:** React Navigation (`@react-navigation/stack` as seen in `app/constants/index.tsx`)
*   **API Client:** Apollo Client (for GraphQL)
*   **UI Libraries:**
    *   React Native Paper (for components like `TextInput`)
*   **Responsive UI:**
    *   `react-native-responsive-screen`
    *   `react-native-responsive-fontsize`
*   **Local Storage:** `@react-native-async-storage/async-storage`
*   **Styling:** StyleSheet API, with global styles defined in `app/styles/index.tsx`.

## Project Structure

The project is organized as follows:

*   **`app/`**: Core application logic and screens.
    *   `constants/`: Centralized exports for modules, components (some lazy-loaded), GraphQL queries, and utility functions.
    *   `context/`: Global state management using React Context (`Context.tsx`).
    *   `screens/`: Screen components representing different views of the app (e.g., `PhoneAuth.tsx`, `TermsAndConditions.tsx`).
    *   `styles/`: Global stylesheet (`index.tsx`).
    *   `utilites/`: Contains utility functions, including GraphQL query definitions (`Queries.tsx`).
*   **`assets/`**: (Inferred) Likely for static assets like images, fonts, GIFs (e.g., commented-out GIF in `Loader.tsx`).
*   **`components/`**: Reusable UI components used throughout the application.

## Getting Started

### Prerequisites

*   Node.js (LTS version recommended)
*   Yarn or npm
*   Expo CLI: `npm install -g expo-cli`
*   Expo Go app on your mobile device (for testing on a physical device) or an Android/iOS emulator/simulator.

### Installation

1.  Clone the repository:
    ```bash
    git clone <your-repository-url>
    cd expo-test-app
    ```

2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Application

1.  Start the Expo development server:
    ```bash
    npx expo start
    # or
    yarn expo start
    ```

2.  Once the Metro Bundler is running, you can:
    *   Scan the QR code with the Expo Go app on your iOS or Android device.
    *   Press `a` to open on an Android emulator or connected device.
    *   Press `i` to open on an iOS simulator.
    *   Press `w` to open in a web browser (if web support is configured).

## Key Components & Logic

*   **`app/context/Context.tsx`**: Manages a comprehensive global state including user authentication, session details, driver information, active requests, and UI preferences. It also handles persistence of some state to `AsyncStorage`.
*   **`app/screens/PhoneAuth.tsx`**: Handles user authentication via phone number, utilizing the `USER_LOGIN` GraphQL mutation.
*   **`app/screens/TermsAndConditions.tsx`**: Presents terms for user acceptance before proceeding.
*   **`components/Buttons.tsx` (`BigButton`)**: A primary, reusable button component with customizable styles.
*   **`components/TextInput.tsx` (`Input`)**: A styled text input component built upon `react-native-paper`'s `TextInput`.
*   **`app/constants/index.tsx`**: Acts as a central barrel file, exporting various modules, GraphQL queries (from `app/utilites/Queries.tsx`), lazy-loaded components, and navigation utilities. This helps in organizing imports across the project.

## Styling

Global styles are defined in `app/styles/index.tsx` using React Native's `StyleSheet`. The application employs `react-native-responsive-screen` and `react-native-responsive-fontsize` to ensure UI elements adapt to different screen sizes and resolutions.

## API Communication

The application uses GraphQL for backend communication, with Apollo Client managing requests and caching. GraphQL queries and mutations are primarily defined in `app/utilites/Queries.tsx` and are re-exported via `app/constants/index.tsx` for easy access throughout the application.

---

This README provides a comprehensive overview of your project. You can further enhance it by adding sections like "Backend Setup" (if you have control over it), "Deployment Instructions," or links to "API Documentation" as the project matures.
