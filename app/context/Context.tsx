import React, { Component, createContext, ReactNode } from "react";
// Assuming AsyncStorage and StoreData are correctly typed or you have their types
// For example, if AsyncStorage is from '@react-native-async-storage/async-storage'
import AsyncStorage from "@react-native-async-storage/async-storage";

// Define an interface for the sessionArray state
interface SessionArrayState {
  cellphone: string;
  name: string;
  email: string;
  destination: string;
  departureTime: string;
  destinationArrivalTime: string;
  selectedDriver: object; // Consider defining a more specific type if possible
  location: string;
  timeRequested: string;
  paymentMethod: string;
  tripFee: string;
  tip: string;
  firstTimeLogin: boolean;
  totalAmount: string;
  isloggedIn: boolean;
  userToken: string | null;
  AcceptedTCs: boolean;
  driveruuid: string;
  useruuid: string;
  activeRequest: any; // Consider defining a more specific type
  driverArrived: boolean;
  isPlaying: boolean;
  totalDriversOnline: number | null;
  windowWidth: number | null;
  windowHeight: number | null;
  personalDriver: any; // Consider defining a more specific type
}

// Define an interface for the context provider's state
interface ContextState {
  sessionArray: SessionArrayState;
}

// Define types for the actions
type Action =
  | { type: "SAVE_PERSONAL_DRIVER"; personalDriver: any }
  | { type: "WINDOW_WIDTH"; windowWidth: number }
  | { type: "SAVE_TOTAL_DRIVERS_ONLINE"; totalDriversOnline: number }
  | { type: "SAVE_ISPLAYING"; isPlaying: boolean }
  | { type: "SAVE_DRIVERARRIVED"; driverArrived: boolean }
  | { type: "SAVE_ACTIVEREQUEST"; activeRequest: any }
  | { type: "SAVE_USERUUID"; useruuid: string }
  | { type: "SAVE_DRIVERUUID"; driveruuid: string }
  | { type: "SAVE_TOTALAMOUNT"; totalAmount: string }
  | { type: "SAVE_DRIVER"; selectedDriver: object } // Define specific type if possible
  | { type: "AcceptedTCs" }
  | { type: "SET_FIRST_TIME" }
  | { type: "SAVE_EMAIL"; payload: string }
  | { type: "SAVE_CELL"; cellphone: string }
  | { type: "SAVE_PICKUPLOCATION"; location: string }
  | { type: "SAVE_DESTINATION"; destination: string }
  | { type: "SIGN_IN"; userToken: string }
  | { type: "SIGN_OUT" }
  | { type: "RESTORE_TOKEN"; userToken: string | null }
  | {
      type: "ADD_TO_CART";
      payload: {
        paymentMethod: string;
        tripFee: string;
        tip: string;
        totalAmount: string;
      };
    };

// Define the shape of the context value
interface ContextValue {
  state: SessionArrayState;
  dispatch: (action: Action) => void;
}

// Create context with a default value (can be undefined if you handle it carefully)
// Or provide a sensible default that matches ContextValue structure
const defaultContextValue: ContextValue = {
  state: {
    cellphone: "",
    name: "",
    email: "",
    destination: "",
    departureTime: "",
    destinationArrivalTime: "",
    selectedDriver: {},
    location: "",
    timeRequested: "",
    paymentMethod: "",
    tripFee: "",
    tip: "",
    firstTimeLogin: true,
    totalAmount: "",
    isloggedIn: false,
    userToken: null,
    AcceptedTCs: false,
    driveruuid: "",
    useruuid: "",
    activeRequest: null,
    driverArrived: false,
    isPlaying: false,
    totalDriversOnline: null,
    windowWidth: null,
    windowHeight: null,
    personalDriver: null,
  },
  dispatch: () => {}, // No-op default dispatch
};

const { Provider, Consumer } = createContext<ContextValue>(defaultContextValue);

interface ContextProviderProps {
  children: ReactNode;
}

// Helper function for AsyncStorage (assuming StoreData was similar)
// You might have your own StoreData function. This is just an example.
const storeDataAsync = async (key: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error("Error saving data to AsyncStorage", e);
  }
};

const retrieveDataAsync = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error("Error retrieving data from AsyncStorage", e);
    return null;
  }
};


class ContextProvider extends Component<ContextProviderProps, ContextState> {
  state: ContextState = {
    sessionArray: {
      cellphone: "",
      name: "",
      email: "",
      destination: "",
      departureTime: "",
      destinationArrivalTime: "",
      selectedDriver: {},
      location: "",
      timeRequested: "",
      paymentMethod: "",
      tripFee: "",
      tip: "",
      firstTimeLogin: true,
      totalAmount: "",
      isloggedIn: false,
      userToken: null,
      AcceptedTCs: false,
      driveruuid: "",
      useruuid: "",
      activeRequest: null,
      driverArrived: false,
      isPlaying: false,
      totalDriversOnline: null,
      windowWidth: null,
      windowHeight: null,
      personalDriver: null,
    },
  };

  componentDidMount() {
    const restoreSession = async () => {
      try {
        const userToken = await AsyncStorage.getItem("accessToken"); // AsyncStorage.getItem returns string | null
        console.log('userToken', userToken);
        // Potentially restore other items from AsyncStorage here if needed
        // const isPlaying = await retrieveDataAsync("isPlaying");
        // if (isPlaying !== null) {
        //   this.dispatch({ type: "SAVE_ISPLAYING", isPlaying: isPlaying });
        // }
        this.dispatch({ type: "RESTORE_TOKEN", userToken: userToken });
      } catch (e) {
        console.error("Failed to restore session:", e);
      }
    };

    restoreSession();
  }

  // The StoreData function from your original code, adapted slightly for consistent usage
  // It seems like you were passing (key, value) rather than just value
  StoreData = async (key: string, value: any) => {
    try {
      // If value is not a string, you might want to stringify it, depending on how you retrieve it.
      // For simplicity with AsyncStorage, it's often best to store strings.
      const stringValue = typeof value === 'string' ? value : JSON.stringify(value);
      await AsyncStorage.setItem(key, stringValue);
    } catch (e) {
      console.error("AsyncStorage saving error:", e);
    }
  };


  dispatch = (action: Action) => {
    switch (action.type) {
      case "SAVE_PERSONAL_DRIVER":
        this.setState(
          (prevState) => ({
            sessionArray: {
              ...prevState.sessionArray,
              personalDriver: action.personalDriver,
            },
          }),
          () => this.StoreData("PersonalDriver", action.personalDriver)
        );
        break;
      case "WINDOW_WIDTH":
        this.setState((prevState) => ({
          sessionArray: {
            ...prevState.sessionArray,
            windowWidth: action.windowWidth,
          },
        }));
        break;
      case "SAVE_TOTAL_DRIVERS_ONLINE":
        this.setState((prevState) => ({
          sessionArray: {
            ...prevState.sessionArray,
            totalDriversOnline: action.totalDriversOnline,
          },
        }));
        break;
      case "SAVE_ISPLAYING":
        this.setState(
          (prevState) => ({
            sessionArray: {
              ...prevState.sessionArray,
              isPlaying: action.isPlaying,
            },
          }),
          () => this.StoreData("isPlaying", action.isPlaying)
        );
        break;
      case "SAVE_DRIVERARRIVED":
        this.setState(
          (prevState) => ({
            sessionArray: {
              ...prevState.sessionArray,
              driverArrived: action.driverArrived,
            },
          }),
          () => this.StoreData("driverArrived", action.driverArrived)
        );
        break;
      case "SAVE_ACTIVEREQUEST":
        this.setState(
          (prevState) => ({
            sessionArray: {
              ...prevState.sessionArray,
              activeRequest: action.activeRequest,
            },
          }),
          () => this.StoreData("activeRequest", action.activeRequest)
        );
        break;
      case "SAVE_USERUUID":
        this.setState(
          (prevState) => ({
            sessionArray: {
              ...prevState.sessionArray,
              useruuid: action.useruuid,
            },
          }),
          () => this.StoreData("useruuid", action.useruuid)
        );
        break;
      case "SAVE_DRIVERUUID":
        this.setState((prevState) => ({
          sessionArray: {
            ...prevState.sessionArray,
            driveruuid: action.driveruuid,
          },
        }));
        break;
      case "SAVE_TOTALAMOUNT":
        this.setState(
          (prevState) => ({
            sessionArray: {
              ...prevState.sessionArray,
              totalAmount: action.totalAmount,
            },
          }),
          () => this.StoreData("totalAmount", action.totalAmount)
        );
        break;
      case "SAVE_DRIVER":
        this.setState(
          (prevState) => ({
            sessionArray: {
              ...prevState.sessionArray,
              selectedDriver: action.selectedDriver,
            },
          }),
          () => this.StoreData("selectedDriver", action.selectedDriver)
        );
        break;
      case "AcceptedTCs":
        this.setState((prevState) => ({
          sessionArray: {
            ...prevState.sessionArray,
            AcceptedTCs: true,
          },
        }));
        // Note: You weren't persisting this change with StoreData
        break;
      case "SET_FIRST_TIME":
        this.setState((prevState) => ({
          sessionArray: {
            ...prevState.sessionArray,
            firstTimeLogin: false,
          },
        }));
        // Note: You weren't persisting this change with StoreData
        break;
      case "SAVE_EMAIL":
        this.setState((prevState) => ({
          sessionArray: {
            ...prevState.sessionArray,
            email: action.payload, // Corrected to action.payload as per your JS
          },
        }));
        // Note: You weren't persisting this change with StoreData
        break;
      case "SAVE_CELL":
        this.setState(
          (prevState) => ({
            sessionArray: {
              ...prevState.sessionArray,
              cellphone: action.cellphone,
            },
          }),
          () => this.StoreData("cellphone", action.cellphone)
        );
        break;
      case "SAVE_PICKUPLOCATION":
        this.setState(
          (prevState) => ({
            sessionArray: {
              ...prevState.sessionArray,
              location: action.location,
            },
          }),
          () => this.StoreData("location", action.location)
        );
        break;
      case "SAVE_DESTINATION":
        this.setState(
          (prevState) => ({
            sessionArray: {
              ...prevState.sessionArray,
              destination: action.destination,
            },
          }),
          () => this.StoreData("destination", action.destination)
        );
        break;
      case "SIGN_IN":
        this.setState(
          (prevState) => ({
            sessionArray: {
              ...prevState.sessionArray,
              isloggedIn: true,
              userToken: action.userToken,
            },
          }),
          () => this.StoreData("accessToken", action.userToken) // Persisting accessToken
        );
        break;
      case "SIGN_OUT":
        this.setState((prevState) => ({
          sessionArray: {
            ...prevState.sessionArray,
            isloggedIn: false,
            userToken: null,
          },
        }),
        () => AsyncStorage.removeItem("accessToken") // Clear token on sign out
        );
        break;
      case "RESTORE_TOKEN":
        this.setState((prevState) => ({
          sessionArray: {
            ...prevState.sessionArray,
            userToken: action.userToken,
            isloggedIn: !!action.userToken, // Set loggedIn based on token presence
          },
        }));
        break;
      case "ADD_TO_CART":
        this.setState((prevState) => ({
          sessionArray: {
            ...prevState.sessionArray,
            timeRequested: new Date()
              .toISOString()
              .replace(/T/, " ")
              .replace(/\..+/, ""),
            paymentMethod: action.payload.paymentMethod,
            tripFee: action.payload.tripFee,
            tip: action.payload.tip,
            totalAmount: action.payload.totalAmount,
          },
        }));
        // Note: You weren't persisting these cart details with StoreData
        break;
      default:
        // Exhaustive check for action types (helps catch unhandled actions at compile time)
        // const exhaustiveCheck: never = action;
        // return exhaustiveCheck;
        return this.state; // Or simply break if no default handling is needed
    }
  };

  render() {
    return (
      <Provider
        value={{
          state: this.state.sessionArray,
          dispatch: this.dispatch,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

// Renaming Context to ContextProvider for clarity
export { Consumer as ContextConsumer, ContextProvider };

