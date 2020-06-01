import React from 'react';
import {View, Text, Button} from 'react-native';
const SettingsScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>SettingsScreen </Text>
      <Button
        title="go to details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};
export default SettingsScreen;
