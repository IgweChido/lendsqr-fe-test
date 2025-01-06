import { DatePicker, DatePickerProps, Input, Select } from "antd";
import React from "react";
import ButtonComp from "../button/ButtonComp";

const FilterComp = () => {
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="filter__comp">
      <div className="filter__form">
        <div className="filter__input">
          <label>Organization</label>
          <Select
            placeholder="Select"
            size="large"
            defaultValue="lucy"
            onChange={handleChange}
            options={[
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
              { value: "Yiminghe", label: "yiminghe" },
              { value: "disabled", label: "Disabled", disabled: true },
            ]}
          />
        </div>
        <div className="filter__input">
          <label>Username</label>
          <Input size="large" placeholder="Email" />
        </div>
        <div className="filter__input">
          <label>Email</label>
          <Input size="large" placeholder="Email" />
        </div>
        <div className="filter__input">
          <label>Date</label>
          <DatePicker onChange={onChange} size="large" />
        </div>
        <div className="filter__input">
          <label>Phone Number</label>
          <Input size="large" placeholder="Email" />
        </div>
        <div className="filter__input">
          <label>Status</label>
          <Select
            placeholder="Select"
            size="large"
            defaultValue="lucy"
            onChange={handleChange}
            options={[
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
              { value: "Yiminghe", label: "yiminghe" },
              { value: "disabled", label: "Disabled", disabled: true },
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
          handleClick={() => {}}
        />
        <ButtonComp
          label="Filter"
          width="100%"
          background="#39CDCC"
          borderColor="transparent"
          py="14px"
          color="white"
          handleClick={() => {}}
        />
      </div>
    </div>
  );
};

export default FilterComp;
