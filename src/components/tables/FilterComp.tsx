import { DatePicker, DatePickerProps, Input, Select } from "antd";
import React, { useCallback, useRef } from "react";
import ButtonComp from "../button/ButtonComp";
import { Users } from "../../types/users";
import ClickOutsideRef from "../../utils/clickOutsideRef";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  filterObject: Users;
  setFilterObject: React.Dispatch<React.SetStateAction<Users>>;
  handleFilter: (type?: string) => void;
}
const FilterComp = ({
  open,
  setOpen,
  filterObject,
  setFilterObject,
  handleFilter,
}: Props) => {
  const ref = useRef(null);
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
    handleInputChange("date_joined", dateString);
  };

  const handleInputChange = useCallback((field: keyof Users, value: any) => {
    setFilterObject((prevData) => ({ ...prevData, [field]: value }));

    // console.log("filter object",)
  }, []);

  ClickOutsideRef(ref, setOpen);
  return (
    <div className="filter__background">
      <div className="filter__comp">
        <div className="filter__form">
          <div className="filter__input">
            <label>Organization</label>
            <Select
              placeholder="Select"
              size="large"
              defaultValue={filterObject.organization}
              id="organization"
              onChange={(value) => handleInputChange("organization", value)}
              options={[
                { value: "lendsqr", label: "Lendsqr" },
                { value: "research institute", label: "Research Institute" },
                { value: "agrobiz", label: "AgroBiz" },
                { value: "freelance media", label: "Freelance Media" },
                { value: "bankcorp", label: "BankCorp" },
              ]}
            />
          </div>
          <div className="filter__input">
            <label>Username</label>
            <Input
              size="large"
              placeholder="User"
              defaultValue={filterObject.username}
              onChange={(e) => handleInputChange("username", e.target.value)}
            />
          </div>
          <div className="filter__input">
            <label>Email</label>
            <Input
              size="large"
              placeholder="Email"
              defaultValue={filterObject.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
            />
          </div>
          <div className="filter__input">
            <label>Date</label>
            <DatePicker onChange={onChange} size="large" />
          </div>
          <div className="filter__input">
            <label>Phone Number</label>
            <Input
              size="large"
              placeholder="Phone Number"
              defaultValue={filterObject.phone_number}
              onChange={(e) =>
                handleInputChange("phone_number", e.target.value)
              }
            />
          </div>
          <div className="filter__input">
            <label>Status</label>
            <Select
              placeholder="Select"
              size="large"
              defaultValue={filterObject.status}
              id="status"
              onChange={(value) => handleInputChange("status", value)}
              options={[
                { value: "inactive", label: "Inactive" },
                { value: "pending", label: "Pending" },
                { value: "blacklisted", label: "Blacklisted" },
                { value: "active", label: "Active" },
              ]}
            />
          </div>
        </div>
        {/* buttons */}
        <div className="filter__buttons">
          <ButtonComp
            label="Reset"
            width="100%"
            background="white"
            borderColor="#545F7D"
            py="14px"
            color="#545F7D"
            handleClick={() => {
              setFilterObject({
                username: "",
                email: "",
                organization: "",
                phone_number: "",
                date_joined: "",
                status: "",
              });
              handleFilter("reset");
              setOpen(false);
            }}
          />
          <ButtonComp
            label="Filter"
            width="100%"
            background="#39CDCC"
            borderColor="transparent"
            py="14px"
            color="white"
            handleClick={() => {
              handleFilter();
              setOpen(false);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterComp;
