import { Box } from "@mui/material";
import TableAction from "../../../components/Table/TableAction";

const handleView = ({row}) => {
  console.log("check handle function: ", row?.original)
}

export const DSO_Col = [
    {
      accessorFn: (row) => row.Id,
      id: "Id",
      cell: (info) => info.getValue(),
      header: () => <span>Client Id</span>,
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.client_name,
      id: "client_name",
      cell: (info) => (info.getValue()),
      header: "Client Name",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.total_invoices,
      id: "total_invoices",
      cell: (info) => info.getValue(),
      header: "Total Invoices",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.dso,
      id: "dso",
      cell: (info) => info.getValue(),
      header: "DSO",
      // isSortable: true,
    },
    {
      accessorFn: (row) => row.avg_delay,
      id: "avg_delay",
      cell: (info) => info.getValue(),
      header: "Avg Delay",
      // isSortable: true,
    },
    {
      id: "Actions",
      cell: (info) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction type="view" onClick={() => handleView(info)} />
        </Box>
      ),
      header: () => <span>Actions</span>,
      isSortable: false,
    },
  ];

  export const DSO_Data =  [
    {
      id: 1,
      Id: "01",
      client_name: 'John Doe',
      total_invoices: 33,
      dso: 20,
      avg_delay: 2,
    },
    {
      id: 2,
      Id: "02",
      client_name: 'John Doe',
      total_invoices: 33,
      dso: 33,
      avg_delay: 3,
    },
    {
      id: 3,
      Id: "03",
      client_name: 'John Doe',
      total_invoices: 33,
      dso: 43,
      avg_delay: 4,
    },
  ];