import React from 'react';
import Video from "./index"
import renderer from 'react-test-renderer';

test('Link changes the class when hovered', () => {
    const component = renderer.create(
        <Video src="video.mp4" type="mp4" controls />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    tree.props.onStart();

    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    tree.props.onMouseLeave();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});