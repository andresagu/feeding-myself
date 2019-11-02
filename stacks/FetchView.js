import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

class FetchView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>FetchView</Text>
            </View>
        );
    }
}
export default FetchView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
