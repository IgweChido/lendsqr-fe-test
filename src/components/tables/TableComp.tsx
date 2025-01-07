import React, { useState } from "react";
import { Dropdown, Table } from "antd";
import type { TableColumnsType } from "antd";
import "./tables.scss";

// images
import dots from "../../assets/icons/three-dots.svg";
import eye from "../../assets/icons/drop-one.svg";
import blacklist from "../../assets/icons/drop-two.svg";
import activate from "../../assets/icons/drop-three.svg";
import filter from "../../assets/icons/filter.svg";

// types
import { Users } from "../../types/users";
import { useNavigate } from "react-router-dom";
import FilterComp from "./FilterComp";

// components

interface DataType extends Users {}

interface Props {
  data: Users[];
}
const TableComp = ({ data }: Props) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
  const [filterObject, setFilterObject] = useState<Users>({
    username: "",
    email: "",
    organization: "",
    phone_number: "",
    date_joined: "",
    status: "",
  });

  const [filteredData, setFilteredData] = useState<Users[]>(data);

  const handleFilterData = (type?: string) => {
    if (type == "reset") {
      setFilteredData(data);
    } else {
      const filtered = data.filter(
        (x) =>
          x.username.toLowerCase() == filterObject.username ||
          x.email.toLowerCase() == filterObject.email ||
          x.organization.toLowerCase() == filterObject.organization ||
          x.date_joined.toLowerCase() == filterObject.date_joined ||
          x.status.toLowerCase() == filterObject.status
      );

      setFilteredData(filtered);
    }
  };

  console.log("filterobject", filterObject);

  const items = [
    {
      key: "1",
      label: (
        <div className="table__dropdown">
          <img src={eye} alt=""></img>
          <p>View Details</p>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div className="table__dropdown">
          <img src={blacklist} alt=""></img>
          <p>Blacklist User</p>
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div className="table__dropdown">
          <img src={activate} alt=""></img>
          <p>Activate User</p>
        </div>
      ),
    },
  ];

  const handleMenuClick = (key: any, row: any) => {
    if (key === "1") {
      console.log(`users/${row?.id}`);
      navigate(`/users/${row?.id}`);
    } else if (key === "2") {
    } else if (key === "3") {
    }
  };

  const columns: TableColumnsType<DataType> = [
    {
      title: (
        <div className="table__title">
          <p>organization</p>
          <img src={filter} alt="" onClick={() => setOpen(true)}></img>
        </div>
      ),
      // width: 100,
      dataIndex: "organization",
      key: "organization",
      // fixed: "left",
    },
    {
      title: (
        <div className="table__title">
          <p>username</p>
          <img src={filter} alt="" onClick={() => setOpen(true)}></img>
        </div>
      ),
      // width: 100,
      dataIndex: "username",
      key: "username",
      // fixed: "left",
      // sorter: true,
    },
    {
      title: (
        <div className="table__title">
          <p>email</p>
          <img src={filter} alt="" onClick={() => setOpen(true)}></img>
        </div>
      ),
      dataIndex: "email",
      key: "email",
    },
    {
      title: (
        <div className="table__title">
          <p>phone number</p>
          <img src={filter} alt="" onClick={() => setOpen(true)}></img>
        </div>
      ),
      dataIndex: "phone_number",
      key: "phone_number",
    },
    {
      title: (
        <div className="table__title">
          <p>date joined</p>
          <img src={filter} alt="" onClick={() => setOpen(true)}></img>
        </div>
      ),
      dataIndex: "date_joined",
      key: "date_joined",
    },
    {
      title: (
        <div className="table__title">
          <p>status</p>
          <img src={filter} alt="" onClick={() => setOpen(true)}></img>
        </div>
      ),
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <div
          className={
            status == "active"
              ? `status__comp active`
              : status == "pending"
              ? `status__comp pending`
              : status == "blacklisted"
              ? `status__comp blacklisted`
              : `status__comp inactive`
          }
        >
          <p>{status}</p>
        </div>
      ),
    },

    {
      // title: "Action",
      key: "operation",
      fixed: "right",
      // width: 100,
      render: (row) => (
        <Dropdown
          className="cursor cursor-pointer "
          menu={{
            items: items.map((item) => ({
              ...item,
              onClick: () => handleMenuClick(item.key, row), // Passing row details
            })),
          }}
          trigger={["click"]}
        >
          <div className="table__action">
            <img src={dots} alt="" />
          </div>
        </Dropdown>
      ),
    },
  ];
  const dataSource: DataType[] = filteredData;
  return (
    <div className="table">
      <Table<DataType>
        pagination={{
          defaultPageSize: 10,
          total: data?.length,
          showTotal: (total, range) =>
            `${range[0]}-${range[1]} of ${total} items`,

          showSizeChanger: true,
          pageSizeOptions: ["10", "15", "20", "30"],
        }}
        columns={columns}
        dataSource={dataSource}
        scroll={{ x: "max-content" }}
      />

      {open && (
        <FilterComp
          open={open}
          setOpen={setOpen}
          filterObject={filterObject}
          setFilterObject={setFilterObject}
          handleFilter={handleFilterData}
        />
      )}
    </div>
  );
};

export default TableComp;
