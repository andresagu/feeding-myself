import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

import * as Google from 'expo-google-app-auth';
import firebase from 'firebase';

class LoginView extends Component {

  onSignIn = (googleUser) => {
    console.log('Google Auth Response', googleUser);
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    var unsubscribe = firebase.auth().onAuthStateChanged(function(firebaseUser) {
      unsubscribe();
      // Check if we are already signed-in Firebase with the correct user.
      if (!this.isUserEqual(googleUser, firebaseUser)) {
        // Build Firebase credential with the Google ID token.
        var credential = firebase.auth.GoogleAuthProvider.credential(
            googleUser.idToken,
            googleUser.accessToken
          );
        // Sign in with credential from the Google user.
        firebase.auth().signInWithCredential(credential)
        .then(function(result) {
          if(result.additionalUserInfo.isNewUser){

            firebase
            .database()
            .ref('/users/'+result.user.uid)
            .set({
              gmail : result.user.email,
              profile_picture : result.additionalUserInfo.profile.picture,
              first_name : result.additionalUserInfo.profile.given_name,
              create_date : Date.now()
            });
          } else {
            firebase
            .database()
            .ref('/users/'+result.user.uid).update({
              last_logged_in : Date.now()
            });

          }

        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
      } else {
        console.log('User already signed-in Firebase.');
      }
    }.bind(this)
  );
  }

isUserEqual = (googleUser, firebaseUser) => {
  if (firebaseUser) {
    var providerData = firebaseUser.providerData;
    for (var i = 0; i < providerData.length; i++) {
      if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()) {
        // We don't need to reauth the Firebase connection.
        return true;
      }
    }
  }
  return false;
}

  signInWithGoogleAsync = async() => {
  try {
    const result = await Google.logInAsync({
      androidClientId: '268583946136-q6n8pf1bopkth5sftsvmcitseglmj00b.apps.googleusercontent.com',
      iosClientId: '268583946136-q6n8pf1bopkth5sftsvmcitseglmj00b.apps.googleusercontent.com',
      scopes: ['profile', 'email'],
    });

    if (result.type === 'success') {
      this.onSignIn(result);
      return result.accessToken;
    } else {
      return { cancelled: true };
    }
  } catch (e) {
    return { error: true };
  }
};

    render() {
        return (
            <View style={styles.container}>
                <Button
                  title = "Sign In"
                  onPress = {() => this.signInWithGoogleAsync()}
                />
            </View>
        );
    };



}
export default LoginView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
