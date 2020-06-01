import * as React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Button,
  ImageBackground,
  TextInput,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import ImageSlider from 'react-native-image-slider';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const dataList = [{key: '1'}, {key: '2'}, {key: '3'}];
const numColumns = 3;
const WIDTH = Dimensions.get('window').width;
const HomeScreen = ({navigation}) => {
  return (
    <ImageBackground
      source={require('./src/components/img/bg.jpg')}
      style={styles.container}>
      <Image
        style={{
          width: 130,
          height: 40,
          marginTop: 12,
        }}
        source={require('./logo.png')}
        resizeMode="contain"
      />
      <View style={styles.overlaycontainer}>
        <Text style={styles.desc}>Login/SignUp Using</Text>

        <View style={styles.fixToText}>
          <Button title=" Facebook  " color="#4267B2" />

          <Button title=" Google  " color="#E44034" />
        </View>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            backgroundColor: '#fff',
            marginLeft: 15,
            marginRight: 15,
          }}
          placeholder="Enter Your Mobile Number!"
          textAlign="center"
        />
        <View style={{margin: 25}}>
          <Button
            title=" Skip To GetLook Home  "
            color="#25AAE1"
            onPress={() => navigation.navigate('Details')}
          />
        </View>
      </View>
    </ImageBackground>
  );
};
const DetailsScreen = () => {
  return (
    <View style={{flex: 1, borderRadius: 10}}>
      <View style={styles.header}>
        <Image
          style={{
            width: 130,
            height: 40,
            marginTop: 12,
          }}
          source={require('./logo.png')}
          resizeMode="contain"
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          fontWeight: 'bold',
          backgroundColor: '#fff',
        }}
        placeholder="Search For Salon and Services"
        textAlign="center"
      />
      <ImageSlider
        autoPlayWithInterval={3000}
        images={[
          'https://image.freepik.com/free-photo/female-hairdresser-woman-smiling-looking-mirror-beauty-salon_176420-4487.jpg',
          'https://image.freepik.com/free-photo/attractive-woman-getting-face-beauty-procedures-spa-salon_1098-18097.jpg',
          'https://image.freepik.com/free-photo/hairstylist-making-curls-young-woman_23-2148113063.jpg',
        ]}
      />
      <Text
        style={{
          textAlign: 'center',
          paddingTop: 10,
          paddingBottom: 10,
          //   backgroundColor: '#000',
          color: '#000',
          borderColor: '#000',
          borderWidth: 0.3,
          fontWeight: 'bold',
          marginTop: 3,
        }}>
        Shop by Category
      </Text>

      <View style={styles.category}>
        <Image
          style={{
            width: 150,
            height: 100,
            margin: 3,
          }}
          source={{
            uri:
              'https://image.freepik.com/free-photo/beautiful-young-woman-spa-salon_155003-898.jpg',
          }}
          resizeMode="contain"
        />
        <Image
          style={{
            width: 150,
            height: 100,
            margin: 3,
          }}
          source={{
            uri:
              'https://image.freepik.com/free-photo/young-woman-with-purifying-mask-her-face_144962-3543.jpg',
          }}
          resizeMode="contain"
        />
        <Image
          style={{
            width: 150,
            height: 100,
            margin: 5,
          }}
          source={{
            uri:
              'https://img.freepik.com/free-photo/make-up-artist-applying-eyeshadow-woman_23-2148332525.jpg?size=626&ext=jpg',
          }}
          resizeMode="contain"
        />
      </View>

      <View style={{marginTop: 300}}>
        <Text></Text>
      </View>
    </View>
  );
};
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlaycontainer: {
    flex: 1,

    justifyContent: 'center',
    marginTop: 610,
    backgroundColor: 'rgba(54,47,47,0.8)',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  button: {},
  desc: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    marginTop: -10,
  },
  header: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#a8adac',
  },
  container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  itemStyle: {
    // backgroundColor: '#3232ff',

    justifyContent: 'center',
    height: 100,
    flex: 1,
    margin: 1,
    height: WIDTH / numColumns,
  },
  itemText: {
    color: '#fff',
    fontSize: 20,
  },
  category: {
    flexDirection: 'row',
  },
});

export default App;
