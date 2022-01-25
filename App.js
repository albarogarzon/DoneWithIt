import {
  useDeviceOrientation,
  useDimensions,
} from '@react-native-community/hooks';
import {
  StyleSheet,
  SafeAreaView,
  Button,
  Alert,
  Platform,
  StatusBar,
  View,
  Text,
  ImageBackground,
  Image,
} from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreeen from './app/screens/ViewImageScreen';


export default function App() {
  console.log(useDeviceOrientation());
  const { landscape } = useDeviceOrientation();
  const handlePress = () => {
    console.log('Text Press');
  };

  return <WelcomeScreen/>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});
