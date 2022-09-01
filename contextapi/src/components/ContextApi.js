import React, { createContext } from "react";
const contextData = createContext();
const DataProvider = contextData.Provider;
const DataConsumer = contextData.Consumer;

export default contextData;
export { DataProvider, DataConsumer };
