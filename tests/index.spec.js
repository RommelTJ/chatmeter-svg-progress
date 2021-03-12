import React from 'react';
import { ChatmeterProgress } from '../src';
import { shallow } from 'enzyme';
import { describe, it } from '@jest/globals';

describe('ChatmeterProgress', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ChatmeterProgress />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should be titled chatmeter progress', () => {
    const wrapper = shallow(<ChatmeterProgress />);
    expect(wrapper.text()).toBe('Chatmeter Progress');
  });
});
