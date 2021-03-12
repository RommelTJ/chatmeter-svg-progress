import React from 'react';
import { ProgressProps, defaultProps } from '../interface';

const ChatmeterProgress: React.FC<ProgressProps> = (props: ProgressProps) => {
  return <div>Hello World</div>;
};

ChatmeterProgress.defaultProps = defaultProps;
ChatmeterProgress.displayName = 'ChatmeterProgress';

export default ChatmeterProgress;
