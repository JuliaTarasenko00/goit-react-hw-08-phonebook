import { ThreeCircles } from 'react-loader-spinner';

const Loader = () => {
  return (
    <ThreeCircles
      height="100"
      width="100"
      ariaLabel="three-circles-rotating"
      wrapperStyle={{ position: 'absolute', top: '50%', left: '50%' }}
      wrapperClass=""
      color="tomato"
      visible={true}
      outerCircleColor=""
      innerCircleColor=""
      middleCircleColor=""
    />
  );
};

export default Loader;
