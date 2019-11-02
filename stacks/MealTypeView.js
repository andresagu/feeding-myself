import React, { Component } from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  TouchableOpacity
} from "react-native";

import Constants from 'expo-constants';

function Separator() {
  return <View style={styles.separator} />;
}


class MealTypeView extends Component {

onPress = () => {
  console.log("pressed");
  this.props.navigation.navigate('TimeView');

};

    render() {
        return (
 <SafeAreaView style={styles.container}>
 <View style = {styles.header}>
        <Text style={styles.title}>
          Select Meal Type
        </Text>
        <Separator />
      </View>
      <View style = {[styles.rows,{backgroundColor:'orange'}]}>
        <View style={styles.fixToText}>
          <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}
       >
         <Text> Bfast </Text>
       </TouchableOpacity>
          <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}
       >
         <Text> Snacks </Text>
       </TouchableOpacity>
        </View>
      </View>
      <View style = {[styles.rows,{backgroundColor:'skyblue'}]}>
        <View style={styles.fixToText}>
          <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}
       >
         <Text> Lunch </Text>
       </TouchableOpacity>
          <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}
       >
         <Text> Brunch </Text>
       </TouchableOpacity>
      </View>
      </View>
      <View style = {[styles.rows,{backgroundColor:'lightgreen'}]}>
        <View style={styles.fixToText}>
          <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}
       >
         <Text> Dinner </Text>
       </TouchableOpacity>
          <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}
       >
         <Text> Dessert </Text>
       </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
        );
    }
}
export default MealTypeView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 0,

  },
  header: {
    flex:1,
    justifyContent: "center",
    alignContent: 'center',
    marginTop: 10

  },
  title: {
    flex: 2,
    textAlign: 'center',
    marginVertical: 8,
  },

  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  separator: {
    marginVertical: 0,
    borderBottomColor: 'red',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  button: {
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    height:100,
    width:100
  },
  rows: {
    flex: 4,
    justifyContent:'center'

  }
});
