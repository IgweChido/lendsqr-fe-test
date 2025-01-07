type UserStatus = "inactive" | "pending" | "blacklisted" | "active" | "";

export interface Users {
  username: string;
  email: string;
  organization: string;
  phone_number: string;
  date_joined: string;
  status: UserStatus;
}

// export interface TableFilter{
//   organization: string
//   userna
// }
