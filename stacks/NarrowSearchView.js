import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

class NarrowSearchView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>NarrowSearchView</Text>
            </View>
        );
    }
}
export default NarrowSearchView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
