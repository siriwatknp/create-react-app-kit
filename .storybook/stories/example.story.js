import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import Button from '@material-ui/core/Button';

storiesOf('Example', module).add('Button', () => (
  <Button color={'primary'} variant={'outlined'}>
    {text('text', 'Button')}
  </Button>
));
