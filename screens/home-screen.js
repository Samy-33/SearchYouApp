import React, { Component } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';

export class HomeScreen extends Component {
    constructor (props) {
        super(props);

        this.state = {
            isInputViewVisible: false,
            queryText: ''
        };
    }
    
    static navigationOptions = {
        title: 'Youtube Clone'
    }

    handleStartPress = () => {
        this.setState({...this.state, isInputViewVisible: true});
    }

    render () {

        let youtubeLogo = require('../assets/img/youtube-logo.png');

        let homeView = (
            <View>
                <Text> Welcome to First iOS App using react native.</Text>
                <Text> Press the button below to begin </Text>
                <Button title="Start" onPress={this.handleStartPress} />
            </View>
        );

        if(this.state.isInputViewVisible) {
            homeView = (
                <View>
                    <View><Text> Enter Search Query</Text></View>
                    <TextInput 
                        style={style.textInput}
                        onChangeText={(text) => this.setState({...this.state, queryText: text})}
                        value={this.state.queryText}
                    />
                    <Button title="Get Videos" onPress={() => this.props.navigation.navigate('Results', {
                        queryText: this.state.queryText
                    })} />
                </View>
            );
        }


        return (
            <View style={style.rootView}>
                 <View style={style.containerView}>
                    <Image style={style.logo} source={youtubeLogo} />
                    {homeView}
                </View>
            </View>
        );
    }
}


const style = StyleSheet.create({
    rootView: {
        height: '100%',
        width: '100%'
    },
    containerView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        resizeMode: 'contain',
        height: 100,
        width: 160
    },
    textInput: {
        height: 50,
        width: 300,
        marginTop: 10,
        marginBottom: 10,
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        color: 'grey'
    }
});