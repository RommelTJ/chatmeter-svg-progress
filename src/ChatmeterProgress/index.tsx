import React from 'react';
import { ProgressProps, defaultProps } from '../interface';

const ChatmeterProgress: React.FC<ProgressProps> = (props: ProgressProps) => {
  return (
    <svg width="300px" height="300px" viewBox="0 0 300 300">
      <title>Chatmeter Progress</title>
      <defs>
        <linearGradient
          x1="61.2218064%"
          y1="45.4857754%"
          x2="-189.036108%"
          y2="89.4496267%"
          id="linearGradient-1"
        >
          <stop stopColor="#16365B" offset="0%" />
          <stop stopColor="#16365B" stopOpacity="0.1" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="162.673729%"
          y1="25.8979885%"
          x2="-278.27306%"
          y2="115.014368%"
          id="linearGradient-2"
        >
          <stop stopColor="#16365B" offset="0%" />
          <stop stopColor="#16365B" stopOpacity="0.1" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="216.032141%"
          y1="5.80605312%"
          x2="-149.704183%"
          y2="107.967881%"
          id="linearGradient-3"
        >
          <stop stopColor="#16365B" offset="0%" />
          <stop stopColor="#16365B" stopOpacity="0.1" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="325.353138%"
          y1="-32.2323462%"
          x2="-143.462461%"
          y2="109.083144%"
          id="linearGradient-4"
        >
          <stop stopColor="#16365B" offset="0%" />
          <stop stopColor="#16365B" stopOpacity="0.1" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="616.631353%"
          y1="-91.2613%"
          x2="-239.875432%"
          y2="122.384847%"
          id="linearGradient-5"
        >
          <stop stopColor="#16365B" offset="0%" />
          <stop stopColor="#16365B" stopOpacity="0.1" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="1278.73885%"
          y1="-197.268908%"
          x2="-451.537478%"
          y2="150.210084%"
          id="linearGradient-6"
        >
          <stop stopColor="#16365B" offset="0%" />
          <stop stopColor="#16365B" stopOpacity="0.1" offset="100%" />
        </linearGradient>
      </defs>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <path
          id="Needle"
          d="M58.8909951,148.32676 L58.7209951,148.38676 L27.1309951,159.29676 C25.1896347,159.900496 23.3902921,160.890304 21.8409951,162.20676 C19.810939,164.153597 18.6625281,166.844056 18.6609651,169.65676 C18.657259,173.13756 20.3869026,176.391725 23.2741225,178.335934 C26.1613425,180.280142 29.8270779,180.659141 33.0509951,179.34676 L33.1109951,179.34676 L33.4609951,179.17676 L159.130995,113.70676 L58.8909951,148.32676 Z"
          fill="#E4670D"
          fillRule="nonzero"
          transform="translate(88.895980, 146.912391) rotate(-156.000000) translate(-88.895980, -146.912391)"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          from={`${props.from} 150 150`}
          to={`${props.to} 150 150`}
          begin={`${props.begin}s`}
          dur={`${props.duration}s`}
          repeatCount={props.repeatCount}
        />
      </g>
      <g>
        <path
          d="M195.14,63.19 L162.25,116.67 L162.25,116.67 C177.443192,124.147995 190.331427,135.595374 199.55,149.8 L261.12,105.51 C243.761035,85.2286255 220.812806,70.5094828 195.14,63.19 Z"
          fill="url(#linearGradient-1)"
          fillRule="nonzero"
        />
        <path
          d="M157.99,58 C149.642736,58.011491 141.314255,58.7914492 133.11,60.33 L126.11,107.27 L126.11,107.27 C136.162534,107.806247 146.061319,109.971079 155.42,113.68 L181.36,60.05 C173.643381,58.696388 165.824435,58.0105156 157.99,58 Z"
          fill="url(#linearGradient-2)"
          fillRule="nonzero"
        />
        <path
          d="M91.84,111.78 C100.79359,108.847388 110.139364,107.286387 119.56,107.15 L120.79,63.21 C108.489406,66.7079437 96.7485952,71.9369312 85.92,78.74 L91.84,111.78 Z"
          fill="url(#linearGradient-3)"
          fillRule="nonzero"
        />
        <path
          d="M60.44,99.41 L71.54,121.26 L71.54,121.26 C75.46259,118.802669 79.5641142,116.643269 83.81,114.8 L75.29,86.14 C70.0258203,90.1986546 65.0628117,94.6336125 60.44,99.41 L60.44,99.41 Z"
          fill="url(#linearGradient-4)"
          fillRule="nonzero"
        />
        <path
          d="M46.71,116.06 L58.96,130.67 L58.96,130.67 C61.03,128.83 63.17,127.08 65.39,125.44 L53.2,107.44 C50.93,110.22 48.78,113.11 46.71,116.06 Z"
          fill="url(#linearGradient-5)"
          fillRule="nonzero"
        />
        <path
          d="M39,128.42 L50.54,139.18 C51.42,138.18 52.33,137.18 53.26,136.18 L41.02,124.9 C40.33,126.06 39.64,127.23 39,128.42 Z"
          fill="url(#linearGradient-6)"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
};

ChatmeterProgress.defaultProps = defaultProps;
ChatmeterProgress.displayName = 'ChatmeterProgress';

export default ChatmeterProgress;
