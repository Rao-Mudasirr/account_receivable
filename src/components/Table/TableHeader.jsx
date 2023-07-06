import React from 'react';
import { GlobalSearchBar } from '../../components/global-search-filter/global-search-filter';
import { useUserAccess } from "../../features/user-management/components/user-access-control/use-user-access-control";
import { forwardRef, useImperativeHandle, useState } from "react";
// @mui
import {
  Box,
  InputAdornment,
  MenuItem,
  Stack,
  TextField,
  Typography,
  alpha,
} from "@mui/material";

// @mui icons
import SearchIcon from "@mui/icons-material/Search";
import TableAction from "./TableAction";
import Add_role from '../../features/user-management/components/roles-and-right/Add_Update_cards/Add_Update_cards/Add_role';

// ----------------------------------------------------------------------
// Variables
let timer;

const getDefaultParams = ({ searchKey, selectFilters }) => {
  const defaultParams = { [searchKey]: "" };
  selectFilters.forEach(({ key }) => {
    defaultParams[key] = "";
  });
  return defaultParams;
};

// ----------------------------------------------------------------------

const TableHeader = forwardRef(function TableHeader(
  {
    title = "Table Title",
    searchLabel = "Search",
    searchKey = "search",
    showSelectFilters = false,
    hideSearch = false,
    selectFilters = [],
    selectSize = "small",
    searchSize = "small",
    showAddBtn = false,
    showDeleteBtn = false,
    // share btn
    showShareBtn = false,
    // print btn
    showPrintBtn = false,
    showDiagramBtn = false,
    debounceTimeout = 500,
    disabled = false,
    onDelete = () => { },
    onAdd = () => { },
    onShare = () => { },
    onPrint = () => { },
    onChanged = () => { },
    onDiagramBtn = () => { },
  },
  ref
) {
  const [params, setParams] = useState(
    getDefaultParams({ searchKey, selectFilters })
  );

  // Add the functions to the ref
  useImperativeHandle(ref, () => {
    return {
      onCleared() {
        onClear();
      },
    };
  });

  function changeHandler({ target: { name, value } }) {
    if (disabled) return;

    setParams((oldParams) => {
      const updatedParams = { ...oldParams, [name]: value };

      // Pass filled values to the callback
      let filteredParams = {};
      for (let param in updatedParams) {
        const paramValue = updatedParams[param];
        if (paramValue.trim() !== "" || param === searchKey)
          filteredParams[param] = paramValue;
      }

      // Use debounce if search is updated
      if (name === searchKey) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          onChanged(filteredParams);
        }, debounceTimeout);
      } else {
        onChanged(filteredParams);
      }

      return updatedParams;
    });
  }

  function onClear() {
    const defaultParams = getDefaultParams({ searchKey, selectFilters });
    setParams(defaultParams);
    onChanged({});
  }

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

  return (
    <Stack sx={styles.rootBoxStyles}>
      {/* Title and Searchbar */}
      <Stack
        sx={(theme) =>
          styles.headerStackStyles({ theme, showAddBtn, showSelectFilters })
        }
      >
        {/* <Typography component="p" variant="body1" fontWeight="600">
          {title}
        </Typography> */}
        {!hideSearch && (
          <div style={{ marginBottom: '10px' }}>
            <GlobalSearchBar
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        )}
      </Stack>

      {/* Select Fields */}
      {showSelectFilters && (
        <Stack sx={styles.selectStackStyles}>
          {selectFilters.map(({ key, label, options = [] }) => (
            <div style={{ marginBottom: '10px' }}>
              <GlobalSearchBar
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
          ))}
        </Stack>
      )}

      {/* Delete Button */}
      {showDeleteBtn && (
        <TableAction disabled={disabled} onClicked={onDelete} type="delete" />
      )}
      {/* Add Button */}
      {showAddBtn && (
        <Box onClick={onAdd} sx={{ px: 1.6, py:0.5, borderRadius: 2, bgcolor: "#2B2B33", color: "#fff", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }}>
          <Typography variant="subtitle" sx={{ fontSize: "12px",fontFamily:'Exo 2', mr:'5px'}}>Add</Typography>
          <TableAction disabled={disabled} type="add" />
        </Box>
      )}



      {/* Share Button */}
      {showShareBtn && (
        <TableAction
          disabled={disabled}
          onClicked={onShare}
          type="headerShare"
        />
      )}

      {/* Print Button */}
      {showPrintBtn && (
        <TableAction disabled={disabled} onClicked={onPrint} type="print" />
      )}

      {/* Diagram Button */}
      {showDiagramBtn && (
        <TableAction disabled={disabled} onClicked={onAdd} type="diagram" />
      )}
    </Stack>
  );
});

TableHeader.displayName = "TableHeader";

export default TableHeader;

// ----------------------------------------------------------------------
// Styles

const styles = {
  rootBoxStyles: (theme) => ({
    flexDirection: { xs: "column", sm: "row" },
    flexWrap: "wrap",
    backgroundColor: alpha("#fff", 0.8),
    padding: theme.spacing(1, 1.8),
    alignItems: "center",
    // gap changing
    gap: theme.spacing(0.5),
    borderRadius: `8px 8px 0 0`,
  }),
  headerStackStyles: ({ theme, showAddBtn, showSelectFilters }) => ({
    color: "#fff",
    flexDirection: { xs: "column", sm: "row" },
    flexWrap: "wrap",
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "space-between",
    gap: theme.spacing(2),
    ...(!showAddBtn && !showSelectFilters && { width: "100%" }),
    ...((showAddBtn || showSelectFilters) && {
      marginRight: { xs: 0, sm: "auto" },
    }),
  }),
  searchStyles: (theme) => ({
    width: { xs: "100%", sm: "auto" },
    backgroundColor:
      theme.palette.mode === "light"
        ? "#fff"
        : "#212B36",
    border: "unset",
    boxShadow: "unset",
    borderRadius: "4px",
  }),
  selectStackStyles: (theme) => ({
    flexDirection: "row",
    flexWrap: "wrap",
    gap: theme.spacing(2),
    width: { xs: "100%", sm: "auto" },
  }),
  selectFieldStyles: (theme) => ({
    width: { xs: "100%", sm: "min(100vw, 200px)" },
    backgroundColor:
      theme.palette.mode === "light"
        ? "#fff"
        : "#212B36",
    borderRadius: "4px",
  }),
  addBtnStyles: (theme) => ({
    width: "1.6rem",
    height: "1.6rem",
    "&, &:hover": {
      backgroundColor: "#fff",
    },
  }),
  addBtnIconStyles: (theme) => ({
    color: "#F6830F",
  }),
  deleteBtnStyles: (theme) => ({
    width: "1.6rem",
    height: "1.6rem",
    "&, &:hover": {
      backgroundColor: "#DC3545",
    },
  }),
  deleteBtnIconStyles: (theme) => ({
    color: "#fff",
  }),
};
