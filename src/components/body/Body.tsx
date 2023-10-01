import Listing from '../listing/Listing';
import Top from '../top/Top';
import './Body.scss';

const Body = () => {
  return(
    <>
      <div className="main">
        <Top />
        <div className="main-footer">
            <Listing />
        </div>
      </div>
    </>
  );
}

export default Body