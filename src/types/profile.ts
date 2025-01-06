interface Personal_Information {
  full_name: string;
  phone_number: string;
  email_address: string;
  bvn: string;
  gender: string;
  marital_status: string;
  children: string;
  type_of_residence: string;
}

interface Education_And_Employment {
  level_of_education: string;
  employment_status: string;
  sector_of_employment: string;
  duration_of_employment: string;
  office_email: string;
  monthly_income: string;
  loan_repayment: string;
}

interface Socials {
  twitter: string;
  facebook: string;
  instagram: string;
}

interface Bank_Information {
  bank_name: string;
  account_number: string;
}

export interface Guarantor {
  full_name: string;
  phone_number: string;
  email_address: string;
  relationship: string;
}

export interface UserProfile {
  personal_information: Personal_Information;
  education_and_employment: Education_And_Employment;
  socials: Socials;
  bank_information: Bank_Information;
  guarantors: Guarantor[];
}
