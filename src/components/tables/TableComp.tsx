import React from "react";
import { Table } from "antd";
import type { TableColumnsType } from "antd";
import "./tables.scss";

// images
import dots from "../../assets/icons/three-dots.svg";

// components

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "organization",
    width: 100,
    dataIndex: "name",
    key: "name",
    fixed: "left",
  },
  {
    title: "Username",
    width: 100,
    dataIndex: "age",
    key: "age",
    fixed: "left",
    sorter: true,
  },
  { title: "Email", dataIndex: "address", key: "1" },
  { title: "Phone number", dataIndex: "address", key: "2" },
  { title: "Date joined", dataIndex: "address", key: "3" },
  {
    title: "Status",
    dataIndex: "status",
    key: "4",
    render: (status) => (
      <div className={`status__comp active`}>
        <p>inactive</p>
      </div>
    ),
  },

  {
    // title: "Action",
    key: "operation",
    fixed: "right",
    // width: 100,
    render: () => (
      <div className="table__action">
        <img src={dots} alt="" />
      </div>
    ),
  },
];

const dataSource: DataType[] = [
  { key: "1", name: "Olivia", age: 32, address: "New York Park" },
  { key: "2", name: "Ethan", age: 40, address: "London Park" },
  { key: "1", name: "Olivia", age: 32, address: "New York Park" },
  { key: "2", name: "Ethan", age: 40, address: "London Park" },

  { key: "1", name: "Olivia", age: 32, address: "New York Park" },
  { key: "2", name: "Ethan", age: 40, address: "London Park" },
  { key: "1", name: "Olivia", age: 32, address: "New York Park" },
  { key: "2", name: "Ethan", age: 40, address: "London Park" },
  { key: "1", name: "Olivia", age: 32, address: "New York Park" },
  { key: "2", name: "Ethan", age: 40, address: "London Park" },
  { key: "1", name: "Olivia", age: 32, address: "New York Park" },
  { key: "2", name: "Ethan", age: 40, address: "London Park" },
];
const TableComp = () => {
  return (
    <div>
      <Table<DataType>
        pagination={{
          defaultPageSize: 10,
          total: 100,
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
