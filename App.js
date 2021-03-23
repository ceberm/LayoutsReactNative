import React, { useState } from 'react';
import { StyleSheet, View, Image, ScrollView, Text } from 'react-native';
import { Picker } from "@react-native-community/picker";

const App = () => {

  const [ value, saveValue] = useState('');

  const getSelection = selected => {
    saveValue(selected);
  }

  return (
    <>
      <View>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={styles.banner}
            source={require('./assets/img/photo-6.jpeg')}
          />
        </View>

        <View style={styles.container}>
          <Text style={styles.title}>Check out this cool Gallery</Text>
          <ScrollView
            horizontal
          >
          <View style={{flexDirection: 'row'}}>
            <Image
              style={styles.imageDimens}
              source={require('./assets/img/photo-1.jpeg')}
            />
          </View>
            <View>
              <Image
                style={styles.imageDimens}
                source={require('./assets/img/photo-2.jpeg')}
              />
            </View>
            <View>
              <Image
                style={styles.imageDimens}
                source={require('./assets/img/photo-3.jpeg')}
              />
            </View>
            <View>
              <Image
                style={styles.imageDimens}
                source={require('./assets/img/photo-4.jpeg')}
              />
            </View>
            <View>
              <Image
                style={styles.imageDimens}
                source={require('./assets/img/photo-5.jpeg')}
              />
            </View>
          </ScrollView>

          <Picker
            selectedValue ={value}
            onValueChange={ selected => getSelection(selected) }
          >
            <Picker.Item label="- Seleccione -" />
            <Picker.Item label="Su San Lee" value="1" />
            <Picker.Item label="Tommy Nguyen" value="2" />
          </Picker>

        </View>

      </View>
    </>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1
  },
  title: {
    fontSize: 33,
    fontWeight: '600',
    marginVertical: 20,
    fontFamily: "SF Pro Display",
    letterSpacing: 1
  },
  container: {
    marginHorizontal: 10
  },
  imageDimens: {
    width: 250,
    height: 300,
    marginRight: 5,
    flexWrap: 'wrap'
  }
});

export default App;
