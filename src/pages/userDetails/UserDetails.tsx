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
import { Guarantor } from "../../types/profile";
import { useParams } from "react-router-dom";
import LoaderComp from "../../components/partials/LoaderComp";

const UserDetails = () => {
  const dispatch = useDispatch<AppDispatch>();
  const profile = useSelector((state: RootState) => state.profile.data);
  const loading_p = useSelector((state: RootState) => state.profile.loading);
  const { id } = useParams();
  console.log("id", id);

  useEffect(() => {
    dispatch(fetchUserProfile(id ?? ""));
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

      {loading_p ? (
        <div className="loading">
          <LoaderComp />
        </div>
      ) : (
        <div>
          <UserProfileComp data={profile} />

          <div className="user__details__info">
            <UserDetailsBackground label="Personal Information">
              <UserDetailsComp
                label="FULL NAME"
                details={profile?.personal_information.full_name}
              />
              <UserDetailsComp
                label="PHONE NUMBER"
                details={profile?.personal_information.phone_number}
              />
              <UserDetailsComp
                label="Email Address"
                details={profile?.personal_information.email_address}
              />
              <UserDetailsComp
                label="Bvn"
                details={profile?.personal_information.bvn}
              />
              <UserDetailsComp
                label="Gender"
                details={profile?.personal_information.gender}
              />
              <UserDetailsComp
                label="Marital status"
                details={profile?.personal_information.marital_status}
              />
              <UserDetailsComp
                label="Children"
                details={profile?.personal_information.children}
              />
              <UserDetailsComp
                label="Type of residence"
                details={profile?.personal_information.type_of_residence}
              />
            </UserDetailsBackground>
            <UserDetailsBackground label="Education and Employment" grid>
              <UserDetailsComp
                label="level of education"
                details={profile?.education_and_employment.level_of_education}
              />
              <UserDetailsComp
                label="employment status"
                details={profile?.education_and_employment.employment_status}
              />
              <UserDetailsComp
                label="sector of employment"
                details={profile?.education_and_employment.sector_of_employment}
              />
              <UserDetailsComp
                label="Duration of employment"
                details={
                  profile?.education_and_employment.duration_of_employment
                }
              />
              <UserDetailsComp
                label="office email"
                details={profile?.education_and_employment.office_email}
              />
              <UserDetailsComp
                label="Monthly income"
                details={profile?.education_and_employment.monthly_income}
              />
              <UserDetailsComp
                label="loan repayment"
                details={profile?.education_and_employment.loan_repayment}
              />
            </UserDetailsBackground>
            <UserDetailsBackground label="Socials">
              <UserDetailsComp
                label="Twitter"
                details={profile?.socials.twitter}
              />
              <UserDetailsComp
                label="Facebook"
                details={profile?.socials.facebook}
              />
              <UserDetailsComp
                label="Instagram"
                details={profile?.socials.instagram}
              />
            </UserDetailsBackground>

            {profile?.guarantors.map((data: Guarantor, index) => (
              <UserDetailsBackground
                last={index == profile?.guarantors.length - 1 ? true : false}
                label={index > 0 ? `` : `Guarantor`}
              >
                <UserDetailsComp label="FULL NAME" details={data.full_name} />
                <UserDetailsComp
                  label="PHONE NUMBER"
                  details={data.phone_number}
                />
                <UserDetailsComp
                  label="Email Address"
                  details={data.email_address}
                />
                <UserDetailsComp
                  label="Relationship"
                  details={data.relationship}
                />
              </UserDetailsBackground>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
