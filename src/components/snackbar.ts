import Snackbar from 'react-native-snackbar';

export default function snackbar(message: any) {
  return Snackbar.show({
    text: message,
    duration: Snackbar.LENGTH_SHORT,
    backgroundColor: '#18468C',
    textColor: '#fff',
    action: {
      text: 'Cancel',
      textColor: '#F68B29',
      onPress: () => Snackbar.dismiss,
    },
  });
}
