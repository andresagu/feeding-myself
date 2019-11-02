import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

class AutoCompleteTab extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>AutoCompleteTab</Text>
            </View>
        );
    }
}
export default AutoCompleteTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
