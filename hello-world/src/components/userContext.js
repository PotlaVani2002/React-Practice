import React from 'react';
 
// const UserContext = React.createContext("Hello WOrld");   ---Providing Default value

const UserContext = React.createContext();
const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
export default UserContext;
