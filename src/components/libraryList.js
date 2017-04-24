import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ListView} from 'react-native';

import Library from './Library.js';

class LibraryList extends Component {
  componentWillMount(){
    // const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    // this.state = {
    //   dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    // };

    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });
    this.libraries = dataSource.cloneWithRows(this.props.libraries )
  };

  renderLibrary(library) {
    return <Library library={library} />
  };

  render() {
    return (
      <ListView
        dataSource={this.libraries}
        renderRow={this.renderLibrary}
      />
    );
  }
};

const mapStateToProps = (state) => {
  return {libraries: state.libraries};
};

export default connect(mapStateToProps)(LibraryList);
