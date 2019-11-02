import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";
import firebase from 'firebase';
import axios from 'axios';


class DashboardView extends Component {

  getCurrentUser = () => {
    var user = firebase.auth().currentUser;
    if (user) {
      // User is signed in
      console.log("THIS IS THE USER PROFILE");
      console.log(user);
      return user
    } else {
      // No user is signed in.
      console.log("An Error occured: No user found");
    }

  };

    render() {
        return (
            <View style={styles.container}>
                <Text>DashboardView</Text>
                <Button title = "Get Current User" onPress = {() => this.getCurrentUser()}/>
                <Text>Welcome User </Text>
                <Button title = "Sign Out" onPress = {() => firebase.auth().signOut()} />
            </View>
        );
    }
}
export default DashboardView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
