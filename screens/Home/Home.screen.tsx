import { Text } from '@/components';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text variant="h1" weight="bold" style={styles.heading}>
        Welcome
      </Text>
      <Text variant="body" style={styles.subtext}>
        This is a clean React Native app with reusable Text component.
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    marginBottom: 12,
  },
  subtext: {
    color: '#666',
    textAlign: 'center',
  },
});

export default HomeScreen;
