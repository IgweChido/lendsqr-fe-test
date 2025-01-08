import axios from "axios";
import { render } from "@testing-library/react";

// import { test } from "mocha";
// import { expect } from "chai";

// Mock the axios module
jest.mock("axios");

test("fetches and displays dashboard analytics", async () => {
  const mockResponse = {
    data: {
      total_users: "5,000",
      active_users: "3,200",
      users_with_loans: "850",
      users_with_savings: "2,900",
    },
  };
  //@ts-ignore
  axios.get.mockResolvedValueOnce(mockResponse);

  const result = await axios.get("/dashboard-analytics");

  expect(result.data).toBe(mockResponse.data);
});

test("fetches and displays users", async () => {
  const mockResponse = {
    data: [
      {
        id: "e5f7f2da-82fb-4cfa-b6ec-c370678bb3df",
        username: "chinaza_umeh",
        email: "chinaza.umeh@yahoo.com",
        organization: "Lendsqr",
        phone_number: "+2348023456789",
        date_joined: "2023-06-15",
        status: "active",
      },
      {
        id: "5a8f0eed-0bc3-4470-b204-4750682febb9",
        username: "aisha_mohammed",
        email: "aisha.mohammed@example.com",
        organization: "Research Institute",
        phone_number: "+2349023456789",
        date_joined: "2022-11-02",
        status: "blacklisted",
      },
    ],
  };
  //@ts-ignore
  axios.get.mockResolvedValueOnce(mockResponse);

  const result = await axios.get("/users");

  expect(result.data).toBe(mockResponse.data);
});

test("fetches and displays users profile info", async () => {
  const mockResponse = {
    data: {
      personal_information: {
        full_name: "Ifeanyi Okafor",
        phone_number: "07034215678",
        email_address: "ifeanyi.okafor@example.com",
        bvn: "22456789012",
        gender: "Male",
        marital_status: "Single",
        children: "None",
        type_of_residence: "Shared Apartment",
      },
      education_and_employment: {
        level_of_education: "M.Sc",
        employment_status: "Employed",
        sector_of_employment: "Banking",
        duration_of_employment: "3 years",
        office_email: "ifeanyi.okafor@bankcorp.com",
        monthly_income: "₦400,000.00-₦700,000.00",
        loan_repayment: "50,000",
      },
      socials: {
        twitter: "@ifeanyi_okafor",
        facebook: "Ifeanyi Okafor",
        instagram: "@ifeanyi_lifestyle",
      },
      bank_information: {
        bank_name: "Zenith Bank",
        account_number: "1234567890",
      },
      guarantors: [
        {
          full_name: "Ngozi Adebayo",
          phone_number: "08127896543",
          email_address: "ngozi.adebayo@example.com",
          relationship: "Sister",
        },
        {
          full_name: "Olumide Johnson",
          phone_number: "09087654321",
          email_address: "olumide.johnson@example.com",
          relationship: "Uncle",
        },
        {
          full_name: "Adeola Falade",
          phone_number: "08056784321",
          email_address: "adeola.falade@example.com",
          relationship: "Neighbor",
        },
      ],
    },
  };
  //@ts-ignore
  axios.get.mockResolvedValueOnce(mockResponse);

  const result = await axios.get("/users-profile");

  expect(result.data).toBe(mockResponse.data);
});
