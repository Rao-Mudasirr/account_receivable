import React, { useState } from 'react';
import dayjs from 'dayjs';
import { Card, Box, FormControlLabel, Switch } from "@mui/material";
import CustomTable from "../../../../components/Table/CustomTable";
import { styled } from '@mui/material/styles';
import { useTableParams } from "../../../../components/Table/useTableParams";

import { USER_ACCESS_DATA } from ".";
import { useUserAccess } from "./use-user-access-control";
import { Status } from '../../../../components/status/status';
import { GlobalSearchBar } from '../../../../components/global-search-filter/global-search-filter';

export const UserAccessTable = () => {
  const {
    userData,
    tableData,
    updateStatus
  } = useUserAccess();

  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = tableData.filter((data) =>
    Object.values(data).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const Android12Switch = styled(Switch)(({ theme }) => ({
    padding: 8,
    '& .MuiSwitch-track': {
      borderRadius: 22 / 2,
      border: "1px solid black",
      opacity: 1,
      backgroundColor:
        theme.palette.mode === 'black' ? 'gray' : 'white',
      boxSizing: 'border-box',
    },
    '& .MuiSwitch-thumb': {
      boxShadow: 'none',
      backgroundColor: 'black',
      border: "3px solid dark",
      width: 16,
      height: 16,
      margin: 2,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      backgroundColor: 'dark',
    },
  }));

  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  const columns = [
    {
      accessorFn: (row) => row.Id,
      id: "Id",
      cell: (info) => info.getValue(),
      header: () => <span>Id</span>,
    },
    {
      accessorFn: (row) => row.userName,
      id: "userName",
      cell: (info) => info.getValue(),
      header: "User Name",
    },
    {
      accessorFn: (row) => row.role,
      id: "role",
      cell: (info) => info.getValue(),
      header: "Role",
    },
    {
      accessorFn: (row) => row.createdOn,
      id: "createdOn",
      cell: (info) => dayjs(info.getValue()).format("DD MMM, YYYY"),
      header: "Created On",
    },
    {
      accessorFn: (row) =>
        row.status ? (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Status
              title={row.status}
              color={
                row.status === 'Active' ? '#065F46' : row.status === 'Inactive' ? '#FF624E' : '-'
              }
              bgColor={
                row.status === 'Active'
                  ? 'rgba(209, 250, 229, 1)'
                  : row.status === 'Inactive'
                    ? 'rgba(255, 98, 78, 0.12)'
                    : '-'
              }
            />
          </Box>
        ) : (
          '-'
        ),
      id: "status",
      cell: (info) => info.getValue(),
      header: "Status",
    },
    {
      id: "Actions",
      cell: (info) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <FormControlLabel
            control={
              <Android12Switch
                value={info.cell.row.original.status}
                checked={info.cell.row.original.status === 'Active'}
                onChange={(e) => updateStatus(e, info.cell.row.original.id)}
              />
            }
          />
        </Box>
      ),
      header: () => <span>Actions</span>,
      isSortable: false,
    },
  ];

  return (
    <>
      <Card sx={{ p: 1}}>
        <GlobalSearchBar
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <CustomTable
          data={userData}
          columns={columns}
          onPageChange={pageChangeHandler}
          onSortByChange={sortChangeHandler}
          isSuccess={true}
        />
      </Card>
    </>
  );
};
