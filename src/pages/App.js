import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import fireApi from 'firebase/fireApi';

import Album from './Album';

class App extends React.Component {
  componentDidMount() {
    fireApi().connectDB('/users', console.log);
  }

  render() {
    const { test } = this.props
    return (
      <React.Fragment>
        <CssBaseline />
        <Album />
      </React.Fragment>
    );
  }
}

export default App;
