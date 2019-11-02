import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

class IngredientsView extends Component {

  constructor(props) {
    super(props);
    this.state = { dataSource: [] };
  }
    render() {
        return (
            <View style={styles.container}>
                <Text>What's in your fridge?</Text>

                //This view will contain the top input section - just for encapulsation
                <View style = {styles.inputWrapper}>
                  <TextInput style={styles.text} />
                </View>

                //Implementing the list view for ingredients using a FlatList for now
                <View style = {styles.listWrapper}>


                </View>
            </View>
        );
    }
}
export default IngredientsView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputWrapper: {

    },
    listWrapper: {

    },
    text:{

    }



});
