import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import CssBaseline from '@material-ui/core/CssBaseline';
import withBackgroundColors from './decorators/BackgroundColors';

const req = require.context('./stories', true, /\.story\.js$/);

const withCssBaseline = story => (
  <React.Fragment>
    <CssBaseline />
    {story()}
  </React.Fragment>
);

function loadStories() {
  addDecorator(withCssBaseline);
  addDecorator(
    withBackgroundColors([
      { value: '#ffffff', defaultColor: true },
      { value: '#e5e5e5' },
      { value: '#000000' },
    ])
  );
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
