import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import InputScreen from "./screens/InputScreen";
import ViewScreen from "./screens/ViewScreen";


const initial_state = {
  text: ""
}

const store = createStore(
  (state = initial_state, { type, payload }) => {
    switch (type) {
      case "SET_TEXT": {
        return {
          text: payload,
        }
      }
      default: return state
    }
  }
)

const BottomNavigator = createBottomTabNavigator({
  Input: {
    screen: InputScreen
  },

  Viewscrn: {
    screen: ViewScreen
  }
},

  {
    // default configs for this navigator
    initialRouteName: "Input",
  }
)

const AppContainer = createAppContainer(BottomNavigator)
export default function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
