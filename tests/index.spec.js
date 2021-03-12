import React from 'react';
import { ChatmeterProgress } from '../src';
import { shallow } from 'enzyme';
import { describe, it } from '@jest/globals';

describe('ChatmeterProgress', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ChatmeterProgress />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should say hello world', () => {
    const wrapper = shallow(<ChatmeterProgress />);
    const divEl = wrapper.text();
    expect(divEl).toBe('Hello World');
  });
});
