import { motion, MotionProps } from 'framer-motion';
import React, { HTMLAttributes, Ref } from 'react';

const MotionWrapper = React.forwardRef(
  (
    { children, ...rest }: MotionProps & HTMLAttributes<HTMLDivElement>,
    ref: Ref<HTMLDivElement>,
  ) => (
    <motion.div ref={ref} {...rest}>
      {children}
    </motion.div>
  ),
);

export default MotionWrapper;
