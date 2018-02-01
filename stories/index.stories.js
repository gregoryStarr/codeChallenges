import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Video from '../src/components/video'
import VideoControls from '../src/components/video/controls'
import '../src/components/video/style.css'
import { Button, Welcome } from '@storybook/react/demo';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('VideoPlayer', module)
    .add('unstyled', () => <Video type="video/mp4" src="http://starrit.io/assets/video/lightingFX.mp4" controls></Video>)
    .add('styled + controls', () => <Video type="video/mp4" className="Video" src="http://starrit.io/assets/video/lightingFX.mp4" controls></Video>)
    .add('styled + custom controls', () => <Video type="video/mp4" className="Video" src="http://starrit.io/assets/video/lightingFX.mp4">
        <VideoControls />
    </Video>)

