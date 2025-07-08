import React from "react";
import Tabs from "./Tabs";

const tabList = [{id:1, value:'tab1'},{id:2, value:'tab2'},{id:3, value:'tab3'}]

export default function TabApp() {
    return (
        <Tabs>
            <Tabs.List>
            {tabList.map((item) => {
                return <Tabs.Item tabId={item.id}>
                    <span>{item.value}</span>
                </Tabs.Item>
            })}
            </Tabs.List>
            <Tabs.Panel />
        </Tabs>
    )
}