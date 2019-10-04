import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import Collection from './collection';
import Category from './category';
import Revenue from './revenue1day';
import Revenue1Month from './revenue1month';
class Home extends Component {
  render() {
    return (
      <ScrollView style={{backgroundColor: '#E3F3FB', flex: 1}}>
        <Collection />
        <Category />
        <Revenue />
        <Revenue1Month />
      </ScrollView>
    );
  }
}
export default Home;
