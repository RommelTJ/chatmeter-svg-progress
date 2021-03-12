import React from 'react';
import { ChatmeterProgress } from '../src';
import { validatedProgress } from '../src/utils';
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

  it('should support progress mode', () => {
    const wrapper = shallow(
      <ChatmeterProgress mode={'progress'} percent={50} />,
    );
    expect(wrapper.text()).toBe('Chatmeter Progress');
  });
});

describe('Utils', () => {
  it('should validate progress', () => {
    const normalProgress = 66;
    const validatedProgressNormal = validatedProgress(normalProgress);
    expect(validatedProgressNormal).toBe(66);
  });

  it('should set negative progress to 0%', () => {
    const negativeProgress = -20;
    const validatedProgressNegative = validatedProgress(negativeProgress);
    expect(validatedProgressNegative).toBe(0);
  });

  it('should set the max progress as 100%', () => {
    const extraProgress = 110;
    const validatedProgressExtra = validatedProgress(extraProgress);
    expect(validatedProgressExtra).toBe(100);
  });
});
