import React from 'react';
import { ChatmeterProgress } from '../src';
import {
  validateProgress,
  validateDuration,
  validateThreshold,
  validateFireThreshold,
} from '../src/utils';
import { shallow, mount } from 'enzyme';
import { describe, it, jest } from '@jest/globals';
import { DEFAULT_DURATION } from '../src/interface';
import { act } from 'react-dom/test-utils';

jest.useFakeTimers();

describe('ChatmeterProgress', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ChatmeterProgress />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should be titled chatmeter progress', () => {
    const wrapper = shallow(<ChatmeterProgress />);
    expect(wrapper.text()).toContain('Chatmeter Progress');
  });

  it('should support progress mode', () => {
    const wrapper = shallow(
      <ChatmeterProgress mode={'progress'} percent={50} />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should support timed mode', () => {
    const wrapper = shallow(
      <ChatmeterProgress
        mode={'timed'}
        duration={10}
        revAnimationThreshold={8}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should support timed mode with fire', () => {
    const component = mount(
      <ChatmeterProgress
        mode={'timed'}
        duration={10}
        revAnimationThreshold={8}
        fireAnimationThreshold={15}
      />,
    );
    // Check that the flames don't show up yet.
    expect(component.html().includes('flame')).toBe(false);

    // Wait 15 seconds then check that we have created fire! Ugga ugga!
    act(() => {
      jest.advanceTimersByTime(15000);
    });
    expect(setTimeout).toHaveBeenCalledTimes(16);
    expect(component.props().fireAnimationThreshold).toBe(15);
    expect(component.html().includes('flame')).toBe(true);
  });
});

describe('Utils', () => {
  it('should validate progress', () => {
    const normalProgress = 66;
    const validatedProgressNormal = validateProgress(normalProgress);
    expect(validatedProgressNormal).toBe(66);
  });

  it('should set negative progress to 0%', () => {
    const negativeProgress = -20;
    const validatedProgressNegative = validateProgress(negativeProgress);
    expect(validatedProgressNegative).toBe(0);
  });

  it('should set the max progress as 100%', () => {
    const extraProgress = 110;
    const validatedProgressExtra = validateProgress(extraProgress);
    expect(validatedProgressExtra).toBe(100);
  });

  it('should validate duration', () => {
    const duration = 10;
    const validatedDuration = validateDuration(duration);
    expect(validatedDuration).toBe(10);
  });

  it('should validate undefined duration', () => {
    const duration = undefined;
    const validatedDuration = validateDuration(duration);
    expect(validatedDuration).toBe(DEFAULT_DURATION);
  });

  it('should validate negative duration', () => {
    const duration = -10;
    const validatedDuration = validateDuration(duration);
    expect(validatedDuration).toBe(DEFAULT_DURATION);
  });

  it('should validate threshold', () => {
    const duration = DEFAULT_DURATION;
    const threshold = 3;
    const validatedThreshold = validateThreshold(duration, threshold);
    expect(validatedThreshold).toBe(3);
  });

  it('should return the min of two valid values for threshold', () => {
    const duration = 7;
    const threshold = 18;
    const validatedThreshold = validateThreshold(duration, threshold);
    expect(validatedThreshold).toBe(7);
  });

  it('should sanitize for negative thresholds', () => {
    const duration = 20;
    const threshold = -10;
    const validatedThreshold = validateThreshold(duration, threshold);
    expect(validatedThreshold).toBe(DEFAULT_DURATION);
  });

  it('should validate threshold', () => {
    const fireThreshold = 3;
    const validatedFireThreshold = validateFireThreshold(fireThreshold);
    expect(validatedFireThreshold).toBe(3);
  });

  it('should return a min fireThreshold if a negative value is provided', () => {
    const fireThreshold = -3;
    const validatedFireThreshold = validateFireThreshold(fireThreshold);
    expect(validatedFireThreshold).toBe(DEFAULT_DURATION);
  });

  it('should return a min fireThreshold if an undefined value is provided', () => {
    const fireThreshold = undefined;
    const validatedFireThreshold = validateFireThreshold(fireThreshold);
    expect(validatedFireThreshold).toBe(DEFAULT_DURATION);
  });
});
