import React, { Component } from "react";

import { StyleSheet, Text, View, Image, SectionList } from "react-native";

import BookItem from "./BookItem";
import NYT from "./NYT";

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      sections: [],
      isLoadingBooks: false
    };
  }

  componentDidMount() {
    this._refreshData();
  }

  _addKeysToBooks = books => {
    // Takes the API response from the NYTimes,
    // and adds a key property to the object
    // for rendering purposes
    return books.map(book => {
      return Object.assign(book, { key: book.title });
    });
  };

  _refreshData = () => {
    this.setState({
      isLoadingBooks: true
    });
    Promise
      .all([
        NYT.fetchBooks("hardcover-fiction"),
        NYT.fetchBooks("hardcover-nonfiction")
      ])
      .then(results => {
        if (results.length !== 2) {
          console.error("Unexpected results");
        }

        this.setState({
          isLoadingBooks: false,
          sections: [
            {
              title: "Hardcover Fiction",
              data: this._addKeysToBooks(results[0])
            },
            {
              title: "Hardcover NonFiction",
              data: this._addKeysToBooks(results[1])
            }
          ]
        });
      })
      .catch( e => {
        this.setState({
          isLoadingBooks: false
        })
      });
  };

  _renderItem = ({ item }) => {
    return (
      <BookItem
        coverURL={item.book_image}
        title={item.key}
        author={item.author}
      />
    );
  };

  _renderHeader = ({ section }) => {
    return (
      <Text style={styles.headingText}>
        {section.title}
      </Text>
    );
  };

  _loadMoreData = () => {
    console.log('more');
    this.setState( curState => {
      return {
        sections : [...curState.sections,{
          title: 'mySection'+new Date().getTime(),
          data: [
            
          ]
        }]
      };
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          onRefresh={this._refreshData}
          refreshing={this.state.isLoadingBooks}
          sections={this.state.sections}
          renderItem={this._renderItem}
          renderSectionHeader={this._renderHeader}
          onEndReached={this._loadMoreData}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 22 },
  headingText: {
    fontSize: 24,
    alignSelf: "center",
    backgroundColor: "#FFF",
    fontWeight: "bold",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 2,
    paddingBottom: 2
  }
});

styles.container.paddingTop = 100;
console.log(styles)
export default BookList;
