import { createContext } from "react";
const Usercontext = createContext();
const UserProvider = Usercontext.Provider;
const UserConsumer = Usercontext.Consumer;

export default Usercontext;
export { UserProvider, UserConsumer };
