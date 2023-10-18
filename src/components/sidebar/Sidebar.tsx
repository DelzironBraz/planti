import './Sidebar.scss';

// Icons
import { ImLeaf } from 'react-icons/im';
import { IoMdSpeedometer } from 'react-icons/io';
import { MdDeliveryDining, MdOutlineExplore, MdOutlinePermContactCalendar } from 'react-icons/md';
import { BsTrophy } from 'react-icons/bs';
import { AiOutlinePieChart, AiOutlineCreditCard, AiOutlineQuestionCircle } from 'react-icons/ai';
import { BiTrendingUp } from 'react-icons/bi';
import { useState } from 'react';

const Sidebar = () => {
  const [isCollapse, setIsCollapse] = useState(true);

  const handleIsCollapse = () => {
    setIsCollapse(!isCollapse)
  }

  const sidebarClasses = `sidebar ${isCollapse ? 'collapse' : ''}`;

  return (
    <>
      <div className={sidebarClasses}>
        <button className="logo" onClick={handleIsCollapse}>
          <ImLeaf className="leaf" />
          <h2>Planti.</h2>
        </button>

        <div className="menu">
          <h3 className="title">Quick menu</h3>
          <ul className="menu-list">
            <li className="menu-list-item">
              <a href="#" className="menu-list-item-link">
                <IoMdSpeedometer className="icon" />
                <span className="menu-list-item-text">
                  Dashboard
                </span>
              </a>
            </li>
            <li className="menu-list-item">
              <a href="#" className="menu-list-item-link">
                <MdDeliveryDining className="icon" />
                <span className="menu-list-item-text">
                  My Orders
                </span>
              </a>
            </li>
            <li className="menu-list-item">
              <a href="#" className="menu-list-item-link">
                <MdOutlineExplore className="icon" />
                <span className="menu-list-item-text">
                  Explore
                </span>
              </a>
            </li>
            <li className="menu-list-item">
              <a href="#" className="menu-list-item-link">
                <BsTrophy className="icon" />
                <span className="menu-list-item-text">
                  Products
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div className="settings">
          <h3 className="title">Settings</h3>
          <ul className="settings-list">
            <li className="settings-list-item">
              <a href="#" className="settings-list-item-link">
                <AiOutlinePieChart className="icon" />
                <span className="settings-list-item-text">
                  Charts
                </span>
              </a>
            </li>
            <li className="settings-list-item">
              <a href="#" className="settings-list-item-link">
                <BiTrendingUp className="icon" />
                <span className="settings-list-item-text">
                  Trends
                </span>
              </a>
            </li>
            <li className="settings-list-item">
              <a href="#" className="settings-list-item-link">
                <MdOutlinePermContactCalendar className="icon" />
                <span className="settings-list-item-text">
                  Contact
                </span>
              </a>
            </li>
            <li className="settings-list-item">
              <a href="#" className="settings-list-item-link">
                <AiOutlineCreditCard className="icon" />
                <span className="settings-list-item-text">
                  Billing
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div className="card">
          <AiOutlineQuestionCircle className="icon" />
          <div className="card-content">
            <div className="circle1"></div>
            <div className="circle2"></div>

            <h3>Help Center</h3>
            <p>Having trouble in Planti, please contact us from for more questions</p>
            <button className="btn">Go to Help Center</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar