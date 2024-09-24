import React, { useState } from "react";

// Tabs Component
const Tabs = ({ data }) => {
  const [activeTab, setActiveTab] = useState(0);

  const changeTabOnClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs-body">
      <TabHeader
        data={data}
        click={changeTabOnClick}
        activeId={activeTab}
      />
      <TabContent
        data={data}
        activeId={activeTab}
      />
    </div>
  );
};

// TabHeader Component
const TabHeader = ({ data, click, activeId }) => {
  const tabs = data.map((item, index) => (
    <li className={activeId === index ? "active" : ""} key={index}>
      <a onClick={() => click(index)}>
        <img src={item.icon} alt={item.name} className="tab-icon" />
        <span>{item.name}</span>
      </a>
    </li>
  ));

  return <ul className="tabs-header">{tabs}</ul>;
};

// TabContent Component
const TabContent = ({ data, activeId }) => {
  const content = data.map((item, index) => (
    <div
      className={"tabs-textItem " + (activeId === index ? "show" : "")}
      key={index}
    >
      <div className="tab-content">
        <img src={item.image} alt={item.name} className="tab-image" />
        <div className="tab-text">
        <h5 className="tab-position">{item.position}</h5>
          <p>{item.text}</p>
        </div>
      </div>
    </div>
  ));

  return <div className="tabs-content">{content}</div>;
};

export default Tabs;
