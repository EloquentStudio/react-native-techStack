import React, {Component} from 'react'
import {
  View,
  Text,
  TouchableWithoutFeedback,
  LayoutAnimation,
} from 'react-native';

import {connect} from 'react-redux';

import {CardSection} from './utils';
import * as actions from './../redux/actions';

class Library extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  };

  renderDescription() {
    const {expanded, library} = this.props;
    if (expanded){
      return (
        <CardSection>
          <Text>{library.description}</Text>
        </CardSection>
      );
    }
  };

  render() {
    const library = this.props.library;
    return (
      <TouchableWithoutFeedback onPress={()=> {this.props.selectLibrary(library.id)}}>
        <View>
          <CardSection>
            <Text style={styles.titleTextStyle}>{library.title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
};

const styles = {
  titleTextStyle: {
    fontSize: 18,
    paddingLeft: 15,
  }
};
const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;
  return {expanded};
};
export default connect(mapStateToProps, actions)(Library);
