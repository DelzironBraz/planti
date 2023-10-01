import './Activity.scss';

//icons
import { BsArrowRightShort } from 'react-icons/bs';
import { users } from '../../utils/users';

const Activity = () => {
  return (
    <>
      <div className="activity">
        <div className="heading">
          <h3>Resent Activity</h3>
          <button className="btn">
            See All
            <BsArrowRightShort className="icon" />
          </button>
        </div>

        <section className="container">
          {users.map((user) => (
            <div className="single" key={user.id}>
              <img src={user.img} alt="" />
              <div className="customer-details">
                <span className="name">Hello {user.name}</span>
                <small>Ordered a new plant</small>
              </div>
              <div className="duration">
                2 min ago
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}

export default Activity