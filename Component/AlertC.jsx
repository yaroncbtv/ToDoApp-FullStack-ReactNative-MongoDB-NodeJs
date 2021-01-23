import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Snackbar } from 'react-native-paper';

const AlertC = () => {
  const [visible, setVisible] = React.useState(true);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  return (
    <View style={styles.container}>
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'Undo',
          onPress: () => {
            // Do something
          },
        }}>
        Error: All input Must Be Fuild!
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    
  },
});

export default AlertC;