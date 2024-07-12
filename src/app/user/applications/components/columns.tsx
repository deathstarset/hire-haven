"use client";
import { ColumnDef } from "@tanstack/react-table";

export type Application = {
  companyName: string;
  role: string;
  applicationDate: string;
  status: ApplicationStatus;
};

export const columns: ColumnDef<Application>[] = [
  {
    accessorKey: "companyName",
    header: "Company Name",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "applicationDate",
    header: "Application Date",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
];
