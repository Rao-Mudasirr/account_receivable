import React, { useRef, useState } from "react";
// import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
// Tantack table
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

// components
import TableSkeleton from "./TableSkeleton";
import NoContentFound from "./NoContentFound";
import IsFetching from "../loaders/IsFetching";

// @mui
import { alpha, styled, useTheme } from "@mui/material/styles";
import {
  Grid,
  TableCell,
  Typography,
  Pagination,
  TableRow,
  TableHead,
  TableContainer,
  TableBody,
  Table,
  Box,
  tableCellClasses,
} from "@mui/material";

// @mui icons
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

// ----------------------------------------------------------------------
// types
// type TTable = {
//   columns;
//   data;
//   isLoading?: boolean;
//   isError?: boolean;
//   isSuccess?: boolean;
//   isFetching?: boolean;
//   isPagination?: boolean;
//   totalPages?: number;
//   maxHeight?: number;
//   minHeight?: number;
//   currentPage?: number;
//   onPageChange?;
//   onSortByChange?;
//   tableContainerSX?;
//   showSerialNo?: boolean;
//   rootSX?;
// };

// ----------------------------------------------------------------------
// constant
const EMPTY_ARRAY = [];

// ----------------------------------------------------------------------
// component
const CustomTable = (props) => {
  const {
    columns,
    data,
    isFetching = false,
    isLoading = false,
    isError = false,
    isSuccess = false,
    totalPages = 1,
    currentPage = 1,
    onPageChange,
    onSortByChange,
    isPagination = true,
    tableContainerSX = {},
    rootSX = {},
    showSerialNo = false,
  } = props;

  const [rowSelection, setRowSelection] = React.useState({});
  const theme = useTheme();
  // Handling sort using useRef
  const refSortData = (() => {
    const sortDataMap = {};
    for (const colData of columns) {
      if (colData.isSortable) sortDataMap[colData?.id] = 0;
    }
    return sortDataMap;
  })();

  const sortRef = useRef(refSortData);

  const handleSortBy = (colId) => {
    sortRef.current[colId]++;

    if (sortRef.current[colId] % 2 === 1)
      onSortByChange({ id: colId, sortOrder: 1 });
    else onSortByChange({ id: colId, sortOrder: -1 });
  };

  let columnsData = columns;

  if (showSerialNo)
    columnsData = [
      {
        accessorFn: (row) => row,
        id: "Id",
        cell: (info) => Number(info?.row?.id) + 1,
        header: "Id",
        isSortable: false,
      },
      ...columns,
    ];

  const table = useReactTable({
    data: data ?? EMPTY_ARRAY,
    columns: columnsData,
    state: {
      rowSelection,
    },
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
  });

  const isSorted = (colId) => {
    return sortRef.current[colId] % 2 === 1;
  };

  if (isLoading) return <TableSkeleton />;

  return (
    <Grid container sx={{ position: "relative", ...rootSX}}>
      <IsFetching isFetching={isFetching} />
      <Grid xs={12} item>
        {/* Table Container */}
        <Box sx={{ overflowX: "auto" }}>
          <TableContainer sx={styles.tableContainer(tableContainerSX, theme)}>
            <Table stickyHeader>
              <TableHead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <StyledTableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <StyledTableCell key={header.id}>
                        <Box
                          onClick={() =>
                            header.column.columnDef.isSortable &&
                            handleSortBy(header?.id)
                          }
                          sx={styles.cell}
                        >
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                          {header.column.columnDef.isSortable &&
                            !isSorted(header.id) && <KeyboardArrowDownIcon />}
                          {header.column.columnDef.isSortable &&
                            isSorted(header.id) && <KeyboardArrowUpIcon />}
                        </Box>
                      </StyledTableCell>
                    ))}
                  </StyledTableRow>
                ))}
              </TableHead>

              {isSuccess && table.getRowModel().rows.length > 0 && (
                <TableBody>
                  {table.getRowModel().rows?.map((row) => (
                    <StyledTableRow key={row?.id}>
                      {row.getVisibleCells().map((cell) => (
                        <StyledTableCell key={cell?.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </StyledTableCell>
                      ))}
                    </StyledTableRow>
                  ))}
                </TableBody>
              )}
            </Table>
            {(isError || table.getRowModel().rows.length === 0) && (
              <Grid container sx={styles.error}>
                <Grid item width={200}>
                  <NoContentFound />
                </Grid>
              </Grid>
            )}
          </TableContainer>
        </Box>

        {/* Pagination */}
        <Grid container>
          <Grid xs={12} item>
            {isSuccess && Boolean(table?.getRowModel()?.rows?.length) && (
              <Box sx={styles.currentPageBox}>
                {isPagination && (
                  <Box sx={{ marginRight: "auto" }}>
                    {/* <Pagination
                      sx={styles.pagination}
                      showFirstButton
                      showLastButton
                      hidePrevButton
                      hideNextButton
                      size="small"
                      variant="outlined"
                      shape="rounded"
                      count={totalPages}
                      page={currentPage}
                      onChange={(e, page) => {
                        onPageChange(page);
                      }}
                    /> */}
                    <div className="pagination-style">
                      <Stack spacing={2}>
                        <Pagination count={10} />
                      </Stack>
                    </div>
                  </Box>
                )}
                     {isPagination && (
                        <Typography className="pagination-style" sx={styles.currentPage(theme)} component={"span"}>
                          Showing {currentPage} of {totalPages}
                        </Typography>
                      )}
              </Box>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CustomTable;

// ----------------------------------------------------------------------
// STYLED COMPONENTS
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "unset",
    color: "#6B6B80",
    textAlign: "left",
    fontFamily: "Montserrat, Public Sans, sans-serif",
    fontWeight: 600,
    backgroundImage: "unset",
    textTransform: "capitalize",
    fontSize: 16,
    whiteSpace: "nowrap",
    borderBottom: "none",
    cursor: "pointer",
    zIndex: "1",
  },
  [`&.${tableCellClasses.root}`]: {
    boxShadow: "unset !important",
  },

  [`&.${tableCellClasses.body}`]: {
    fontSize: "16px",
    color: "#40404D",
    fontFamily: "Montserrat, Public Sans, sans-serif",
    fontWeight: 400,
    textAlign: "left",
    borderBottom: "1px solid #BEBEBE",
    whiteSpace: "pre-wrap",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  // "&:nth-of-type(even)": {
  //   backgroundColor:
  //     theme.palette.mode === "light"
  //       ? alpha("#18938D", 0.12)
  //       : "#454F5B",
  // },

  // hide last border
  " &:last-child th": {
    backgroundColor:
      theme.palette.mode === "light"
        ? alpha("#BEBEBE", 0.12)
        : "#454F5B",
    backdropFilter: " blur(20px)",

    // border: 0,
  },
  // "&:first-of-type": {
  //   boxShadow: "unset",
  // },
}));

// ----------------------------------------------------------------------
// styles

const styles = {
  tableContainer: (tableContainerSX, theme) => ({
    "&::-webkit-scrollbar": {
      width: 5,
      height: 4,
    },

    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#BEBEBE",
      borderRadius: 2,
    },
    maxHeight: 560,
    mt: theme.palette.mode === "dark" ? 0.5 : 0,
    backgroundColor:
      theme.palette.mode === "light" ? "#fff" : "#212B36",
    ...tableContainerSX,
  }),
  cell: {
    display: "flex",
    justifyContent: "left",
  },
  currentPageBox: {
    display: "flex",
    my: "15px",
    px: "25px",
    alignItems: "center",
  },
  currentPage: (theme) => ({
    color: "#637381",
    fontSize: "12px",
    fontFamily: "Montserrat, Public Sans, sans-serif",
  }),
  error: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  pagination: (theme) => ({
    ".Mui-selected": {
      backgroundColor: `${"#6B6B80"} !important`,
      color: "#FFFFFF",
    },
  }),
};
