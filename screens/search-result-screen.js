import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { YTScraper } from '../services/youtube-search-scraper';


export class ResultScreen extends Component {
    
    static navigationOptions = {
        title: 'Search Results'
    }

    constructor (props) {
        super(props);
        this.state = {
            results: []
        };
    }

    componentDidMount () {
        YTScraper.getPageFromYT('hey there');
    }

    render () {

        let resultView = <View style={{flex: 1, justifyContent: 'center'}}><ActivityIndicator size="small" color="red" /></View>
        
        if(this.state.results !== null && this.state.results.length > 0) {
            resultView = (
                <ScrollView>
                    {this.state.results.map((res, index) => {
                        return (
                            <View key={index}>
                                <Text>Hello</Text>
                            </View>
                        );
                    })}
                </ScrollView>
            )
        }

        else if(this.state.results !== null && this.state.results.length === 0) {
            resultView = (
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: 'grey', fontSize: 30}}>
                        No Results Found
                    </Text>
                </View>
            );
        }

        return resultView;
    }
}


const style = StyleSheet.create({

});