---
nav:
  title: Components
  path: /components
---

## ChatmeterProgress

Standard Mode with Default Props:

```tsx
import React from 'react';
import { ChatmeterProgress } from 'chatmeter-svg-progress';

export default () => <ChatmeterProgress />;
```

Standard Mode with Props:

Props:

- mode='standard'
- duration={1}
- begin={0}
- repeatCount={3}
- from={0}
- to={160}

```tsx
import React from 'react';
import { ChatmeterProgress } from 'chatmeter-svg-progress';

export default () => {
  return (
    <ChatmeterProgress
      mode="standard"
      duration={1}
      begin={0}
      repeatCount={3}
      from={0}
      to={160}
    />
  );
};
```
