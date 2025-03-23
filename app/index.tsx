import { View, Text } from 'react-native';
import { API_URL } from '../constants/config';

export default function HomeScreen() {
  return (
    <View>
      <Text>La API está en: {API_URL}</Text>
    </View>
  );
}
