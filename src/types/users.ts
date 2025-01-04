type UserStatus = "inactive" | "pending" | "blacklisted" | "active";

interface Users {
  username: string;
  email: string;
  organization: string;
  phoneNumber: string;
  dateJoined: string;
  status: UserStatus;
}
