'use client';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
type Props = {children?: React.ReactNode;};

const ProgressProvider = ({ children }: Props) => {
return (
<>
  {children}
  <ProgressBar
    height="3px"
    color="#00B5A4"
    options={{ showSpinner: false, trickleSpeed: 240, speed: 80 }}
    shallowRouting
  />
</>
);};

export default ProgressProvider;