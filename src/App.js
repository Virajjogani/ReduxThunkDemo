import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import User from "./Component/User";
import { useAction, userAction } from "./Redux/action/userAction";


function App() {

  const dispatch = useDispatch()
  const userList = useSelector(state => state.userList)
  console.log("🚀 ~ file: App.js:11 ~ App ~ userList", userList)
  const { loading, user, error } = userList

  useEffect(() => {
    dispatch(userAction())
  }, [dispatch])


  return (
    <div className="App">
      <h1>Redux Thunk Tutorial</h1>
      {loading ? (
        <h2>Loading ....</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <User users={user} />
      )}
    </div>
  );
}

export default App;
