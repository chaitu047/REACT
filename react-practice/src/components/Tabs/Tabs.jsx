import React, { createContext, useContext, useState } from "react";
import './index.css';

const TabsContext = createContext();

export default function Tabs({ children }) {

    const [activeTab, setActiveTab] = useState(1);

    return (
        <TabsContext.Provider value={{ activeTab, setActiveTab }}>
            <div className="tabs">
                {children}
            </div>
        </TabsContext.Provider>
    );
}

Tabs.List = function TabsList({ children }) {
    return (
        <div className="tabs-list">
            {children}
        </div>
    );
}

Tabs.Item = function TabItem({ children, tabId }) {
    const { activeTab, setActiveTab } = useContext(TabsContext);
    return (
        <div className={`tab-item ${tabId == activeTab ? 'active' : 'inactive'}`} onClick={() => setActiveTab(tabId)}>
            {children}
        </div>
    )
}

Tabs.Panel = function TabsPanel({ children }) {
    const { activeTab } = useContext(TabsContext);
    return (
            <div className="tabs-panel" id={activeTab}>
                <span>activeTab: {activeTab}</span>
            </div>
    )
}

