import React from 'react';
import { Card } from "@mui/material";
import CustomTable from "../../../../components/Table/CustomTable";
import TableHeader from "../../../../components/Table/TableHeader";
import { useTableParams } from "../../../../components/Table/useTableParams";

import { ROLE_RIGHTS_DATA, columns } from ".";
import { useRolesRights } from "./use-roles-andright";

export const RolesRightsTable = () => {
  const {
    open,
    setOpen,
    handleOpen,
    handleClose,
    theme,
    // router,
    tableHeaderRef,
  } = useRolesRights();

  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  return (
    <>
      <Card sx={{ p: 1 }}>
        <TableHeader
          ref={tableHeaderRef}
          // showSelectFilters
          // disabled={isLoading}
          title="Health & Safety"
          searchKey="search"
          showAddBtn
          onAdd={()=> alert("Delete")}
          onChanged={headerChangeHandler}
          // selectFilters={SELECT_FILTERS}
        />
        <CustomTable
          data={ROLE_RIGHTS_DATA}
          columns={columns}
          // showSerialNo
          onPageChange={pageChangeHandler}
          onSortByChange={sortChangeHandler}
          isSuccess={true}
          isPagination={true}
        />
      </Card>
    </>
  );
};
