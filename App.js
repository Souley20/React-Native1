import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { StyleSheet } from 'react-native';

import Navigation from "navigation/Navigation";

import { AppStateProvider } from './app/state/AppContext';

export default function App() {
  return (
    <AppStateProvider>
      <Navigation />
    </AppStateProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
