import React from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import {apiConfig} from './apiConfig';


export default class ResultsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    return fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiConfig.apiKey}&query=burger&maxReadyTime=30&number=30&offset=0`
    )
    .then((response) => response.json())
    .then(response => {
        this.setState(
          {
            isLoading: false,
            dataSource: response.results,
          },
          function() {}
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.dataSource}
      renderItem={({ item }) => {
        if (!item.title) {
          return;
        }

        return (
          <ListItem
            title={`${item.title}`}
            titleStyle = {{textAlign: 'auto', marginLeft: 10}}
            subtitle={`item key ${item.id}`}
            subtitleStyle = {{textAlign: 'auto', marginLeft: 10}}
            containerStyle={{ backgroundColor: 'white' }}
            leftAvatar={{ source: {uri:item.image}, rounded: true, size: "medium" }}
            topDivider
          />
        );
      }}
          keyExtractor={({ id }, index) => id}
        />
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
