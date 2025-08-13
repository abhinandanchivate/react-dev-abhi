import React from "react";
import { Route, Routes } from "react-router-dom";
import ProfileForm from "../components/forms/CreateProfile";

const ProfileRouter = () => {
  return (
    <Routes>
      {/* Create profile */}
      <Route path="/create" element={<ProfileForm />} />

      {/* Edit profile */}
      <Route path="/edit" element={<ProfileForm />} />
    </Routes>
  );
};

export default ProfileRouter;
