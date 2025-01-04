import React from "react";
import "./partials.scss";

// images
import user from "../../assets/icons/user_nav.svg";
import audit from "../../assets/icons/audit.svg";
import dashboard from "../../assets/icons/dashboard.svg";
import decision from "../../assets/icons/decision.svg";
import fees from "../../assets/icons/fees.svg";
import feesP from "../../assets/icons/feesP.svg";
import guarantors from "../../assets/icons/guarantors.svg";
import karma from "../../assets/icons/karma.svg";
import loanR from "../../assets/icons/loanR.svg";
import loans from "../../assets/icons/loans.svg";
import logout from "../../assets/icons/logout.svg";
import organisation from "../../assets/icons/organisation.svg";
import preferences from "../../assets/icons/preferences.svg";
import whitelist from "../../assets/icons/whitelist.svg";
import transactions from "../../assets/icons/transactions.svg";
import systems from "../../assets/icons/systems.svg";
import switchs from "../../assets/icons/switch.svg";
import settlements from "../../assets/icons/settlements.svg";
import services from "../../assets/icons/services.svg";
import serviceA from "../../assets/icons/serviceA.svg";
import savingsP from "../../assets/icons/savingsP.svg";
import savings from "../../assets/icons/savings.svg";
import reports from "../../assets/icons/reports.svg";

// components

import NavCategory from "./NavCategory";
import NavComp from "./NavComp";
const SideNav = () => {
  return (
    <div className="sidenav">
      <div className="sn__group">
        <div className="s__firstnav">
          <NavComp
            label="Switch Organization"
            link="switch-organization"
            icon={switchs}
            isDrop
          />
          <NavComp label="Dashboard" link="dashboard" icon={dashboard} />
        </div>

        <NavCategory
          header="CUSTOMERS"
          navLinks={[
            { label: "Users", link: "", icon: user, isDrop: false },
            {
              label: "Guarantors",
              link: "/guarantors",
              icon: guarantors,
              isDrop: false,
            },
            { label: "Loans", link: "loans", icon: loans, isDrop: false },
            {
              label: "Decision Models",
              link: "decision-models",
              icon: decision,
              isDrop: false,
            },
            { label: "Savings", link: "savings", icon: savings, isDrop: false },
            {
              label: "Loan Requests",
              link: "loan-requests",
              icon: loanR,
              isDrop: false,
            },
            {
              label: "Whitelist",
              link: "whitelist",
              icon: whitelist,
              isDrop: false,
            },
            { label: "Karma", link: "karma", icon: karma, isDrop: false },
          ]}
        />

        <NavCategory
          header="BUSINESSES"
          navLinks={[
            {
              label: "Organization",
              link: "organization",
              icon: organisation,
              isDrop: false,
            },
            {
              label: "Loan Products",
              link: "loan-products",
              icon: loanR,
              isDrop: false,
            },
            {
              label: "Savings Products",
              link: "savings-products",
              icon: savingsP,
              isDrop: false,
            },
            {
              label: "Fees and Charges",
              link: "fees-and-charges",
              icon: fees,
              isDrop: false,
            },
            {
              label: "Transactions",
              link: "transactions",
              icon: transactions,
              isDrop: false,
            },
            {
              label: "Services",
              link: "services",
              icon: services,
              isDrop: false,
            },
            {
              label: "Service Account",
              link: "service-account",
              icon: serviceA,
              isDrop: false,
            },
            {
              label: "Settlements",
              link: "settlements",
              icon: settlements,
              isDrop: false,
            },
            {
              label: "Reports",
              link: "reports",
              icon: reports,
              isDrop: false,
            },
          ]}
        />

        <NavCategory
          header="SETTINGS"
          navLinks={[
            {
              label: "Preferences",
              link: "preferences",
              icon: preferences,
              isDrop: false,
            },
            {
              label: "Fees and Pricing",
              link: "fees-and-pricing",
              icon: feesP,
              isDrop: false,
            },
            {
              label: "Audit Logs",
              link: "audit-logs",
              icon: audit,
              isDrop: false,
            },
            {
              label: "Systems Messages",
              link: "systems-messages",
              icon: systems,
              isDrop: false,
            },
          ]}
        />

        {/* logout */}
        <div className="s__logout">
          <NavComp label="Logout" link="logout" icon={logout} />

          <p className="sl__p">v1.2.0</p>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
