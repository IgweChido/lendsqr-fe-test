type UserStatus = "inactive" | "pending" | "blacklisted" | "active";

export interface Users {
  username: string;
  email: string;
  organization: string;
  phoneNumber: string;
  dateJoined: string;
  status: UserStatus;
}
