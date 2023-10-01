import './Listing.scss';

// icons and images
import { BsArrowRightShort } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';
import { plants } from '../../utils/plants';
import { users } from '../../utils/users';


const Listing = () => {
  return(
    <>
      <div className="listing">
        <div className="heading">
          <h1>My Listings</h1>
          <button className="btn">
            See All 
            <BsArrowRightShort className="icon" />
          </button>
        </div>

        <section className="container">
          {plants.map((item) => (
            <div className="single-item" key={item.id}>
              <AiFillHeart className="icon" />
              <img src={item.img} alt="houseplant" />
              <h3>{item.name}</h3>
            </div>
          ))}
        </section>

        <section className="sellers">
          <div className="sellers-top">
            <div className="heading"> 
              <h3>Top Sellers</h3>
              <button className="btn">
                See All 
                <BsArrowRightShort className="icon" />
              </button>
            </div>

            <div className="card">
              <div className="card-users">
                {users.map((user) => (
                  <img src={user.img} alt={user.name} key={user.id} />
                ))}
              </div>
              <div className="card-text">
                <span>14.556 Plant Sold</span> <br />
                <small>21 sellers <span className='date'>7 Days</span></small>
              </div>
            </div>
          </div>

          <div className="sellers-feature">
            <div className="heading"> 
              <h3>Feature Sellers</h3>
              <button className="btn">
                See All 
                <BsArrowRightShort className="icon" />
              </button>
            </div>

            <div className="card">
              <div className="card-users">
                {users.map((user) => (
                  <img src={user.img} alt={user.name} key={user.id} />
                ))}
              </div>
              <div className="card-text">
                <span>28,556 Plant Sold</span> <br />
                <small>27 sellers <span className='date'>31 Days</span></small>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Listing