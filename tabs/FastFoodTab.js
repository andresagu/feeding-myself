import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

class FastFoodTab extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>FastFoodTab</Text>
            </View>
        );
    }
}
export default FastFoodTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
