import Actividy from '../actividy/Activity';
import Listing from '../listing/Listing';
import Top from '../top/Top';
import './Body.scss';

const Body = () => {
  return (
    <>
      <div className="main">
        <Top />
        <div className="main-content">
          <Listing />
          <Actividy />
        </div>
      </div>
    </>
  );
}

export default Body