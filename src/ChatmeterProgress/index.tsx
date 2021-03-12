import React, { useState, useEffect } from 'react';
import { ProgressProps, defaultProps, PROGRESS, TIMED } from '../interface';
import {
  validateProgress,
  validateDuration,
  validateThreshold,
  validateFireThreshold,
} from '../utils';
import ChatmeterSVGDefs from './components/ChatmeterSVGDefs';
import ChatmeterSVGBars from './components/ChatmeterSVGBars';
import ChatmeterSVGFlames from './components/ChatmeterSVGFlames';

const ChatmeterProgress: React.FC<ProgressProps> = (props: ProgressProps) => {
  const {
    mode,
    revAnimationThreshold,
    duration,
    fireAnimationThreshold,
  } = props;

  const [seconds, setSeconds] = useState(0);
  const [timedThresholdReached, setTimedThresholdReached] = useState(false);
  const [fireThresholdReached, setFireThresholdReached] = useState(false);

  const validatedDuration = validateDuration(duration);
  const validatedThreshold = validateThreshold(
    validatedDuration,
    revAnimationThreshold,
  );
  const validatedFireThreshold = validateFireThreshold(fireAnimationThreshold);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (mode == TIMED && revAnimationThreshold) {
      interval = setInterval(() => {
        setSeconds(seconds => {
          const newSeconds = seconds + 1;
          if (newSeconds >= validatedThreshold) setTimedThresholdReached(true);
          if (newSeconds >= validatedFireThreshold)
            setFireThresholdReached(true);
          return newSeconds;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [seconds]);

  // Progress is in percent, so we convert to degrees where 0 = 0% and 180 = 100%.
  const userProgress = props.progress
    ? validateProgress(props.progress)
    : undefined;
  const progress: number = userProgress ? 180 * (userProgress / 100) : 0;

  const renderRevAnimateTransform = () => {
    return (
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="130 150 150"
        to="160 150 150"
        begin="0s"
        dur="0.125s"
        repeatCount="indefinite"
      />
    );
  };

  const renderAnimateTransform = () => {
    if (mode == TIMED && timedThresholdReached)
      return renderRevAnimateTransform();
    return (
      <animateTransform
        attributeName="transform"
        type="rotate"
        from={
          props.mode == PROGRESS
            ? `${progress} 150 150`
            : `${props.from} 150 150`
        }
        to={
          props.mode == PROGRESS ? `${progress} 150 150` : `${props.to} 150 150`
        }
        begin={props.mode == PROGRESS ? '0s' : `${props.begin}s`}
        dur={props.mode == PROGRESS ? '0s' : `${props.duration}s`}
        repeatCount={props.mode == PROGRESS ? 0 : props.repeatCount}
      />
    );
  };

  const renderFlames = () => {
    if (mode !== TIMED || !fireAnimationThreshold || !fireThresholdReached)
      return undefined;
    return <ChatmeterSVGFlames />;
  };

  const renderNeedle = () => {
    if (fireThresholdReached) {
      return (
        <path
          id="Needle"
          d="M124.983247,208.589068 L124.813247,208.649068 L93.2232471,219.559068 C91.2818867,220.162804 89.4825441,221.152612 87.9332471,222.469068 C85.903191,224.415905 84.7547801,227.106364 84.7532111,229.919068 C84.749511,233.399868 86.4791546,236.654033 89.3663745,238.598242 C92.2535945,240.54245 95.9193299,240.921449 99.1432471,239.609068 L99.2032471,239.609068 L99.5532471,239.439068 L225.223247,173.969068 L124.983247,208.589068 Z"
          fill="#E4670D"
          fillRule="nonzero"
          transform="translate(154.988229, 207.174699) rotate(-247.000000) translate(-154.988229, -207.174699) "
        />
      );
    } else {
      return (
        <>
          <path
            id="Needle"
            d="M58.8909951,148.32676 L58.7209951,148.38676 L27.1309951,159.29676 C25.1896347,159.900496 23.3902921,160.890304 21.8409951,162.20676 C19.810939,164.153597 18.6625281,166.844056 18.6609651,169.65676 C18.657259,173.13756 20.3869026,176.391725 23.2741225,178.335934 C26.1613425,180.280142 29.8270779,180.659141 33.0509951,179.34676 L33.1109951,179.34676 L33.4609951,179.17676 L159.130995,113.70676 L58.8909951,148.32676 Z"
            fill="#E4670D"
            fillRule="nonzero"
            transform="translate(88.895980, 146.912391) rotate(-156.000000) translate(-88.895980, -146.912391)"
          />
          {renderAnimateTransform()}
        </>
      );
    }
  };

  return (
    <svg width="300px" height="300px" viewBox="0 0 300 300">
      <title>Chatmeter Progress</title>
      <ChatmeterSVGDefs />
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        {renderNeedle()}
      </g>
      <ChatmeterSVGBars />
      {renderFlames()}
    </svg>
  );
};

ChatmeterProgress.defaultProps = defaultProps;
ChatmeterProgress.displayName = 'ChatmeterProgress';

export default ChatmeterProgress;
