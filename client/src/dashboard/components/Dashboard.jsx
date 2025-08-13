import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUserProfile } from "../../profile/services/profile.service";
import { Link } from "react-router-dom";
import { getCurrentUserProfileAction } from "../../profile/redux/profileAction";

const Dashboard = () => {
  //Req:1 :  user from authReducer
  //Req2 : render the data
  // dispatch
  const dispatch = useDispatch();
  // selector ==> user ==> authReducer
  const { user } = useSelector((state) => state.authReducer);
  // profile object
  const { currentProfile } = useSelector((state) => state.profileReducer);

  useEffect(() => {
    dispatch(getCurrentUserProfileAction());
  }, [dispatch]);

  return (
    <>
      <section class="container">
        <h1 class="large text-primary">Dashboard</h1>
        <p class="lead">
          <i class="fas fa-user"></i> Welcome {user?.name}
        </p>
        {currentProfile ? (
          <>
            {/* <DashboardActions />
            <Experience experience={currentProfile?.experience ?? []} />
            <Education education={currentProfile?.education ?? []} /> */}
            <>user profile</>
            <Link to="/profile/edit" className="btn btn-primary my-1">
              Edit Profile
            </Link>
            <div className="my-2">
              <button className="btn btn-danger" onClick={() => dispatch()}>
                <i className="fas fa-user-minus" /> Delete My Account
              </button>
            </div>
            <Link to="/profile/edit" className="btn btn-primary my-1">
              Edit Profile
            </Link>
          </>
        ) : (
          <>
            <p>You have not yet set up a profile, please add some info</p>
            <Link to="/profile/create" className="btn btn-primary my-1">
              Create Profile
            </Link>
          </>
        )}{" "}
      </section>
    </>
  );
};

export default Dashboard;
