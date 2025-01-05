import React, { useEffect } from "react";
import "./userDetails.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/slices";
import { AppDispatch } from "../../store/store";
import { fetchUserProfile } from "../../store/slices/profileReducer";

// components
import UserProfileComp from "../../components/userDetails/UserProfileComp";
import UserDetailsBackground from "../../components/userDetails/UserDetailsBackground";
import UserDetailsComp from "../../components/userDetails/UserDetailsComp";
import BackButton from "../../components/button/BackButton";
import ButtonComp from "../../components/button/ButtonComp";

const UserDetails = () => {
  const dispatch = useDispatch<AppDispatch>();
  const profile = useSelector((state: RootState) => state.profile.data);

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  console.log("profile", profile);
  return (
    <div>
      {/* back button */}
      <BackButton label="Back to Users" />

      {/* header */}
      <div className="userd__headers">
        <p className="uh__p">User Details</p>
        {/* buttons */}
        <div className="uh__buttons">
          {/* button */}
          <ButtonComp
            label="Blacklist User"
            width="170px"
            background="white"
            borderColor="#E4033B"
            py="12px"
            color="#E4033B"
            handleClick={() => {}}
          />
          {/* button */}
          <ButtonComp
            label="Activate User"
            width="170px"
            background="white"
            borderColor="#39CDCC"
            py="12px"
            color="#39CDCC"
            handleClick={() => {}}
          />
        </div>
      </div>

      <UserProfileComp />

      <div className="user__details__info">
        <UserDetailsBackground label="Personal Information">
          <UserDetailsComp label="FULL NAME" details="Grace Effiom" />
          <UserDetailsComp label="PHONE NUMBER" details="Grace Effiom" />
          <UserDetailsComp label="Email Address" details="Grace Effiom" />
          <UserDetailsComp label="Bvn" details="Grace Effiom" />
          <UserDetailsComp label="Gender" details="Grace Effiom" />
          <UserDetailsComp label="Marital status" details="Grace Effiom" />
          <UserDetailsComp label="Children" details="Grace Effiom" />
          <UserDetailsComp label="Type of residence" details="Grace Effiom" />
        </UserDetailsBackground>
        <UserDetailsBackground label="Education and Employment" grid>
          <UserDetailsComp label="level of education" details="Grace Effiom" />
          <UserDetailsComp label="employment status" details="Grace Effiom" />
          <UserDetailsComp
            label="sector of employment"
            details="Grace Effiom"
          />
          <UserDetailsComp
            label="Duration of employment"
            details="Grace Effiom"
          />
          <UserDetailsComp label="office email" details="Grace Effiom" />
          <UserDetailsComp label="Monthly income" details="Grace Effiom" />
          <UserDetailsComp label="loan repayment" details="Grace Effiom" />
        </UserDetailsBackground>
        <UserDetailsBackground label="Socials">
          <UserDetailsComp label="Twitter" details="Grace Effiom" />
          <UserDetailsComp label="Facebook" details="Grace Effiom" />
          <UserDetailsComp label="Instagram" details="Grace Effiom" />
        </UserDetailsBackground>
        <UserDetailsBackground label="Guarantor">
          <UserDetailsComp label="FULL NAME" details="Grace Effiom" />
          <UserDetailsComp label="PHONE NUMBER" details="Grace Effiom" />
          <UserDetailsComp label="Email Address" details="Grace Effiom" />
          <UserDetailsComp label="Relationship" details="Grace Effiom" />
        </UserDetailsBackground>
        <UserDetailsBackground label="">
          <UserDetailsComp label="FULL NAME" details="Grace Effiom" />
          <UserDetailsComp label="PHONE NUMBER" details="Grace Effiom" />
          <UserDetailsComp label="Email Address" details="Grace Effiom" />
          <UserDetailsComp label="Relationship" details="Grace Effiom" />
        </UserDetailsBackground>
      </div>
    </div>
  );
};

export default UserDetails;
