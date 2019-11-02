import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

class FavesView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>FavesView</Text>
            </View>
        );
    }
}
export default FavesView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
