import Masonry from 'react-masonry-css';
import { Pin } from './';

const breakpointObj = {
  default: 4,
  3000: 6,
  2000: 5,
  1200: 3,
  1000: 2,
  500: 1,
};

const MasonryLayout = ({ pins }) => {
  return (
    <Masonry className="flex animtate-slide-fwd" breakpointCols={breakpointObj}>
      {pins?.map((pin) => (
        <Pin {...{ key: pin?._id, pin }} />
      ))}
    </Masonry>
  );
};

export default MasonryLayout;
