import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';

export default class ModalScreen extends Component{
    render() {
        return(
            <View style={styles.container} >
            <Text>Found Me!</Text>
            <Button onPress={() => this.props.navigation.goBack()}
                    title="Go Back"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});