import TableAction from "../../../../components/Table/TableAction";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

export const Uncategorized_Col = [
  {
    accessorFn: (row) => row.sr,
    id: "sr",
    cell: (info) => info.getValue(),
    header: "Sr.#",
    // isSortable: true,
  },
  {
    accessorFn: (row) => row.name,
    id: "name",
    cell: (info) => info.getValue(),
    header: "Name",
    // isSortable: true,
  },
  {
    accessorFn: (row) => row.category,
    id: "category",
    cell: (info) => <Box className="yellow-color">{info.getValue()}</Box>,
    header: "Category",
    // isSortable: true,
  },
  {
    accessorFn: (row) => row.payment_extended_date,
    id: "payment_extended_date",
    cell: (info) => info.getValue(),
    header: "Payment Extended Date",
    // isSortable: true,
  },
  {
    accessorFn: (row) => row.amount,
    id: "amount",
    cell: (info) => (
      <Box className="error-color cursor-pointer" sx={{textDecoration: "underline"}}>{info.getValue()}</Box>
    ),
    header: "Amount(incl. tex)",
    // isSortable: true,
  },
];

export const Uncategorized_Data = [
  {
    id: 1,
    sr: "01",
    name: "Test 1",
    category: "Uncategorized",
    payment_extended_date: "19 Apr, 2023",
    amount: "-£ 15,000",
  },
];
