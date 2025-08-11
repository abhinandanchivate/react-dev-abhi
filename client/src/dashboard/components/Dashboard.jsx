import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Dashboard = () => {
  //Req:1 :  user from authReducer
  //Req2 : render the data
  // dispatch
  const dispatch = useDispatch();
  // selector ==> user ==> authReducer
  const { user } = useSelector((state) => state.authReducer);

  return (
    <>
      <section class="container">
        <h1 class="large text-primary">Dashboard</h1>
        <p class="lead">
          <i class="fas fa-user"></i> Welcome {user.name}
        </p>
      </section>
    </>
  );
};

export default Dashboard;
