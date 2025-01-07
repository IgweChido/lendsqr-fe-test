import React from "react";
import { Dropdown, Table } from "antd";
import type { TableColumnsType } from "antd";
import "./tables.scss";

// images
import dots from "../../assets/icons/three-dots.svg";
import eye from "../../assets/icons/drop-one.svg";
import blacklist from "../../assets/icons/drop-two.svg";
import activate from "../../assets/icons/drop-three.svg";

// types
import { Users } from "../../types/users";
import { useNavigate } from "react-router-dom";

// components

interface DataType extends Users {}

interface Props {
  data: Users[];
}
const TableComp = ({ data }: Props) => {
  const navigate = useNavigate();

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
      title: "organization",
      // width: 100,
      dataIndex: "organization",
      key: "organization",
      // fixed: "left",
    },
    {
      title: "Username",
      // width: 100,
      dataIndex: "username",
      key: "username",
      // fixed: "left",
      sorter: true,
    },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Phone number", dataIndex: "phone_number", key: "phone_number" },
    { title: "Date joined", dataIndex: "date_joined", key: "date_joined" },
    {
      title: "Status",
      dataIndex: "status",
      key: "4",
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
  const dataSource: DataType[] = data;
  return (
    <div>
      <Table<DataType>
        pagination={{
          defaultPageSize: 10,
          total: data?.length,
          showTotal: (total, range) =>
            `${range[0]}-${range[1]} of ${total} items`,
          // current: page + 1,
          showSizeChanger: true,
          pageSizeOptions: ["10", "15", "20", "30"],
          // onChange: (page, pageSize) => {
          //   handlePageChange(page - 1)
          //   handlePerRowsChange(pageSize, page - 1)
          //   console.log('page', page - 1)
          //   console.log('pageSize', pageSize)
          // },
        }}
        columns={columns}
        dataSource={dataSource}
        scroll={{ x: "max-content" }}
      />
    </div>
  );
};

export default TableComp;

// import { createStyles } from 'antd-style';

// const useStyle = createStyles(({ css, token }) => {
//   const { antCls } = token;
//   return {
//     customTable: css`
//       ${antCls}-table {
//         ${antCls}-table-container {
//           ${antCls}-table-body,
//           ${antCls}-table-content {
//             scrollbar-width: thin;
//             scrollbar-color: #eaeaea transparent;
//             scrollbar-gutter: stable;
//           }
//         }
//       }
//     `,
//   };
// });
