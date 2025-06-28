import { useState } from "react";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState(1);
  const tabsData = [
    {
      id: 1,
      tabName: "TAB 1",
      tabTitle: "Content 1",
      tabContent: "Authorize the user data ✅",
    },
    {
      id: 2,
      tabName: "TAB 2",
      tabTitle: "Content 2",
      tabContent: "Redirect user to cart page 🛒",
    },
    {
      id: 3,
      tabName: "TAB 3",
      tabTitle: "Content 3",
      tabContent: "Create new payment for the user 💰",
    },
    {
      id: 4,
      tabName: "TAB 4",
      tabTitle: "Content 4",
      tabContent: "Buy a new product 🛒",
    },
  ];
  return (
    <div className="tab">
      <div className="tab-header">
        <h2>Tabs Component with React</h2>
      </div>
      <ul className="tab-container">
        {tabsData.map((tab) => (
          <li className="tab-container__item" key={tab.id}>
            <button
              className={activeTab === tab.id ? "active" : ""}
              onClick={() => setActiveTab(tab.id)}
            >
              <span>{tab.tabName}</span>
              <span className="tab-indicator"></span>
            </button>
          </li>
        ))}
      </ul>
      <div className="tab-content">
        <div className="tab-content__item">
          <h4 className="tab-content__item__header">
            {tabsData[activeTab - 1].tabTitle}
          </h4>
          <p className="tab-content__item__desc">
            {tabsData[activeTab - 1].tabContent}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;