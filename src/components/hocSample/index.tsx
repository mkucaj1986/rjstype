import * as React from 'react';

const SampleHoc = <P extends object>(
  WrappedComponent: React.ComponentType<P>
): React.ComponentType<P> => {
  // colors
  const colors = ['red', 'blue', 'pink', 'orange'];

  // Random Color
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  // Wrapped Component Random Class
  const colorClass = randomColor + '-text';

  return (props: P) => {
    return (
      <React.Fragment>
        <div className={colorClass} style={{ color: randomColor }}>
          <WrappedComponent {...props} />
        </div>
      </React.Fragment>
    );
  };
};

export default SampleHoc;
