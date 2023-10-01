import './Top.scss';

// icons
import { BiSearchAlt } from 'react-icons/bi';
import { TbMessageCircle2 } from 'react-icons/tb';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { AiOutlineArrowRight } from 'react-icons/ai';

// images and videos
import admin from '../../assets/user.jpg';
import video from '../../assets/leaves.mp4';
import houseplant1 from '../../assets/houseplant1.png';

const Top = () => {
  return(
    <>
      <div className="top">
        <header className="header">
          <div className="title">
            <h1>Welcome to Planti.</h1>
            <p>Hello World, Welcome back!</p>
          </div>

          <div className="search-bar">
          <input type="text" placeholder='Search Dashboard'/>
          <BiSearchAlt className="icon" />
        </div>

        <div className="admin">
          <TbMessageCircle2 className="icon" />
          <IoMdNotificationsOutline className="icon" />
          <div className="img-user">
            <img src={admin} alt="admin-img" />
          </div>
        </div>
        </header>

        <section className="card">
          <div className="card-right">
            <h1>Create and sell extraordinary products</h1>
            <p>The world's fast growing industry today are natural made products!</p>

            <div className="buttons">
              <button className="btn">Explore More</button>
              <button className="btn transparent">Top Sellers</button>
            </div>

            <div className="video">
              <video src={video} autoPlay loop muted></video>
            </div>
          </div>

          <div className="card-left">
            <div className="main">
              <div className="text">
                <h1>My Stat</h1>

                <div className="order">
                  <span>
                    Today <br />
                    <small>4 Orders</small>
                  </span>
                  <span>
                    This Month <br />
                    <small>127 Orders</small>
                  </span>
                </div>

                <span className="link">
                  Go to my orders
                  <AiOutlineArrowRight className="icon" />
                </span>
              </div>

              <div className="img">
                <img src={houseplant1} alt="image" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Top