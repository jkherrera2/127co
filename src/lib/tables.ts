export interface Table {
  headers: string[];
  primaryKey: string;
  department: string;
  name: string;
}

const Tables: Record<string, Table> = {
  Item: {
    headers: [
      "Item_Id",
      "Item_Type",
      "Item_Location",
      "Item_LastUpdated",
      "Item_Status",
      "Supplier_Id",
      "Loaned_To",
    ],
    department: "supplies",
    primaryKey: "Item_Id",
    name: "Item",
  },
  Supplier: {
    headers: [
      "Supplier_Id",
      "Supplier_Name",
      "Supplier_Address",
      "Supplier_ContactNumber",
      "Supplier_ContactEmail",
    ],
    department: "supplies",
    primaryKey: "Supplier_Id",
    name: "Supplier",
  },

  Item_Transaction: {
    headers: [
      "Transaction_Id",
      "Transaction_Type",
      "Transaction_Datetime",
      "Transaction_Maker",

      "Item_Id",
      "Supplier_Id",
    ],
    department: "supplies",
    primaryKey: "Transaction_Id",
    name: "Item Transaction",
  },

  Request: {
    headers: ["Request_ID", "Employee_ID", "Request_Type", "Request_Status"],
    department: "cooperative",
    primaryKey: "Request_ID",
    name: "Request",
  },

  Membership: {
    headers: [
      "Member_ID",
      "Request_ID",
      "Member_Status",
      "Member_Position",
      "Member_DateElected",
      "Member_Dividend",
      "Member_MeetAttended",
    ],
    department: "cooperative",
    primaryKey: "Member_ID",
    name: "Membership",
  },

  CM_Payout: {
    headers: [
      "CMTransaction_ID",
      "Member_ID",
      "Transaction_Date",
      "Transaction_Time",
      "Amount",
    ],
    department: "cooperative",
    primaryKey: "CMTransaction_ID",
    name: "Member Payouts",
  },

  SavingsAccounts: {
    headers: [
      "Savings_ID",
      "Request_ID",
      "Savings_Amount",
      "Savings_InterestRate",
      "Savings_PreviousInterest",
    ],
    department: "cooperative",
    primaryKey: "Savings_ID",
    name: "Savings Accounts",
  },

  CS_Transaction: {
    headers: [
      "CSTransaction_ID",
      "Savings_ID",
      "Transaction_Type",
      "Transaction_Date",
      "Transaction_Time",
      "Amount",
    ],
    department: "cooperative",
    primaryKey: "CSTransaction_ID",
    name: "Savings Transactions",
  },

  LoanRecords: {
    headers: [
      "Loan_ID",
      "Request_ID",
      "Loan_TotalAmount",
      "Loan_AmountPaid",
      "Loan_AmountPayable",
      "Loan_InterestRate",
      "Loan_MonthlyInterest",
      "Loan_CumulativeInterest",
      "Loan_Date",
      "Loan_Time",
      "Loan_Status",
      "Loan_Deadline",
    ],
    department: "cooperative",
    primaryKey: "Loan_ID",
    name: "Loan Records",
  },

  CL_Transaction: {
    headers: [
      "CLTransaction_ID",
      "Loan_ID",
      "Transaction_Type",
      "Transaction_Date",
      "Transaction_Time",
      "Amount",
    ],
    department: "cooperative",
    primaryKey: "CLTransaction_ID",
    name: "Loan Transactions",
  },

  Salary: {
    headers: [
      "Salary_Id",
      "Employee_Id",
      "Salary_Date",
      "Salary_Net",
      "Salary_Gross",
      "Salary_Added",
      "Salary_Deducted",
    ],
    department: "finance",
    primaryKey: "Salary_Id",
    name: "Salary"
  },

  Budget: {
    headers: [
      "Budget_Id",
      "Budget_Name",
      "Budget_Category",
      "Budget_Amount",
      "Item_Id",
      "Project_Id",
    ],
    department: "finance",
    primaryKey: "Budget_Id",
    name: "Budget"
  },

  Expenditure: {
    headers: [
      "Expense_Id",
      "Expense_Name",
      "Expense_Date",
      "Expense_Amount",
      "CT_Id",
      "Expense_Project_Status",
      "Salary_Id",
    ],
    department: "finance",
    primaryKey: "Expense_Id",
    name: "Expenditure"
  },

  Contract_Transaction: {
    headers: [
      "CT_Id",
      "CT_Date",
      "CT_Total_Amount",
      "CT_Payment",
      "CT_Balance",
      "CT_Total_Paid",
      "CT_Payment_Type",
      "Project_Id",
    ],
    department: "finance",
    primaryKey: "CT_Id",
    name: "Contract Transactions"
  },
  
};

export default Tables;
