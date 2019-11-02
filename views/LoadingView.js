import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator
} from "react-native";
import firebase from 'firebase'


class LoadingView extends Component {

  componentDidMount(){
    this.loggedIn();
  }

  loggedIn = () => {

    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.props.navigation.navigate('DashboardView');
      }
      else{
        this.props.navigation.navigate('LoginView');
      }

    });
  }

    render() {
        return (
            <View style={styles.container}>
              <ActivityIndicator size='large'/>
            </View>
        );
    }
}
export default LoadingView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
