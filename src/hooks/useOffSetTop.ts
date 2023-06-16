import { useScroll } from 'framer-motion';
import { useState, useEffect } from 'react';

// ----------------------------------------------------------------------

type ReturnType = boolean;

interface UseScrollOptions extends Omit<ScrollOptions, 'container' | 'target'> {
  container?: React.RefObject<HTMLElement>;
  target?: React.RefObject<HTMLElement>;
}

export default function useOffSetTop(options?: any, top = 100): ReturnType {
  const { scrollY } = useScroll(options);

  const [value, setValue] = useState(false);

  useEffect(
    () =>
      scrollY.on('change', (scrollHeight) => {
        if (scrollHeight > top) {
          setValue(true);
        } else {
          setValue(false);
        }
      }),
    [scrollY, top],
  );

  return value;
}

// Usage
// const offset = useOffSetTop(100);

// Or
// const offset = useOffSetTop(100, {
//   container: ref,
// });
