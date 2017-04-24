import React, {Component} from 'react';
import {View, Text} from 'react-native'
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import firebase from 'firebase';

import reducers from './redux/reducers';
import LibraryList from './components/libraryList.js';
import {Header} from './components/utils';

class TechStack extends Component{
  render(){
    return (
      <Provider store={createStore(reducers)}>
        <View style={{flex:1}}>
          <Header headerText='TechStack' />
          <LibraryList />
        </View>
      </Provider>
  );
  }
}

export default TechStack;
