import React from 'react';
import {View, Text, Button} from 'react-native';
const DetailsScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button
        title="go to details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};
export default DetailsScreen;
