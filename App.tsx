import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './navigation';

export default function App() {
  return (
    <SafeAreaProvider>
      <Navigation></Navigation>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
});
