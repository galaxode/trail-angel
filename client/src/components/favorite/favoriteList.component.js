import React, { Component } from 'react';
import { View, ListView, StyleSheet, Text } from 'react-native';
import Row from '../favorite/favoriteListItem.component';

const styles = StyleSheet.create({
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
});



export default class FavoriteList extends React.Component {
  constructor(props) {
    super(props);

    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      dataSource: this.ds
    };
  }

  componentDidMount() {
    this.props.fetchFavorites('8e3ad55c-1e89-46b3-8608-d7a7a7f545c9')    // todo import the userid from store
      .then((data) => {
        this.setState({
          dataSource: this.ds.cloneWithRows(data.favorites)
        });
      });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.favorites !== undefined) {
      this.setState({
        dataSource: this.ds.cloneWithRows(nextProps.favorites)
      });
    }
  }

  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(data) => <Row {...data}/>}
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
      />
    );
  }
}