import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';

export default class DetailsScreen extends Component{
    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.getParam('otherParam', 'No Id')
        };
    };
    
    render() {
        const {navigation} = this.props;
        const id = navigation.getParam('itemId', 'No Id');
        const msg = navigation.getParam('otherParam', 'Null');
    
        return(
            <View style={styles.container}>
            <Text>Details Screen</Text>
            <Text>id is: {JSON.stringify(id)} </Text>
            <Text>You have a message: {JSON.stringify(msg)} </Text>
            <Button title="Go Back"
                    onPress={() => {
                        this.props.navigation.goBack()
                    }} />
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