import React from "react";
import { SimpleDialog } from "../modal/simple-dialog";
import { Grid, TextField,Button, Select, MenuItem, Typography, InputAdornment } from "@mui/material";
import './transaction.scss'

const TransactionModel = ({ openModel, handleClose, titelValue, nameValue, amountValue, paymentDateValue, categoryValue }) => {
  const isNegative = titelValue.includes("-");
  const fontColorClass = isNegative ? '#FF0000' : '#48995D';

  const VatIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill="#777777"/>
<path d="M8.56976 16.0201C8.37976 16.0201 8.18977 15.9501 8.03977 15.8001C7.74977 15.5101 7.74977 15.0301 8.03977 14.7401L14.5898 8.19016C14.8798 7.90016 15.3598 7.90016 15.6498 8.19016C15.9398 8.48016 15.9398 8.96015 15.6498 9.25015L9.09976 15.8001C8.94976 15.9501 8.75976 16.0201 8.56976 16.0201Z" fill="#777777"/>
<path d="M8.98001 11.1084C7.89001 11.1084 7 10.2184 7 9.12845C7 8.03845 7.89001 7.14844 8.98001 7.14844C10.07 7.14844 10.96 8.03845 10.96 9.12845C10.96 10.2184 10.07 11.1084 8.98001 11.1084ZM8.98001 8.65845C8.72001 8.65845 8.5 8.86846 8.5 9.13846C8.5 9.40846 8.71001 9.61844 8.98001 9.61844C9.25001 9.61844 9.45999 9.40846 9.45999 9.13846C9.45999 8.86846 9.24001 8.65845 8.98001 8.65845Z" fill="#777777"/>
<path d="M15.52 16.8389C14.43 16.8389 13.54 15.9489 13.54 14.8589C13.54 13.7689 14.43 12.8789 15.52 12.8789C16.61 12.8789 17.5 13.7689 17.5 14.8589C17.5 15.9489 16.61 16.8389 15.52 16.8389ZM15.52 14.3889C15.26 14.3889 15.04 14.5989 15.04 14.8689C15.04 15.1389 15.25 15.3489 15.52 15.3489C15.79 15.3489 16 15.1389 16 14.8689C16 14.5989 15.79 14.3889 15.52 14.3889Z" fill="#777777"/>
</svg>

  )

  return (
      <SimpleDialog
        open={openModel}
        handleClose={handleClose}
        title="Expense Report"
        titleClass="adduser_header primary-color font-weight-600 secondary-heading"
        paperSx={{maxWidth: "788px"}}
      >
        <Typography color={fontColorClass} className="font-family-Exo font-weight-600 secondary-heading margin-bottom-1">{titelValue}</Typography>
      <form className="edituser_form">
        <Grid container spacing={4}>
              <Grid
                item
                xs={12}
                md={6}
                className="edituser-textfield_bold"
              >
                <label className="input_label">
                  
                  Name
                </label>
                <TextField
                  sx={Styles.field_color}
                  name="name"
                  variant="standard"
                  value={nameValue}
                  placeholder="Name"
                  inputProps={{
                    className: "font-family-Exo"
                  }}
                />
              </Grid>

              <Grid
                item
                xs={12}
                md={6}
                className="edituser-textfield_bold"
              >
                <label className="input_label">
                  
                  Amount
                </label>
                <TextField
                  sx={Styles.field_color}
                  name="amount"
                  variant="standard"
                  value={amountValue}
                  placeholder="Amount"
                  inputProps={{
                    className: "font-family-Exo",
                    color:{fontColorClass}
                  }}
                />
              </Grid>

              <Grid
                item
                xs={12}
                md={6}
                className="edituser-textfield_bold"
              >
                <label className="input_label">
                  
                  Issue Date
                </label>
                <TextField
                  sx={Styles.field_color}
                  name="issueDate"
                  variant="standard"
                  inputProps={{
                    className: "font-family-Exo"
                  }}
                  placeholder="Issue Date"
                />
              </Grid>

              <Grid
                item
                xs={12}
                md={6}
                className="edituser-textfield_bold"
              >
                <label className="input_label">
                  VAT
                </label>
                <TextField
                  sx={Styles.field_color}
                  name="VAT"
                  variant="standard"
                  placeholder="VAT"
                  type="number"
                  inputProps={{
                    className: "font-family-Exo",
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        {VatIcon}
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid
                item
                xs={12}
                md={6}
                className="edituser-textfield_bold"
              >
                <label className="input_label">
                  
                  Payment Date
                </label>
                <TextField
                  sx={Styles.field_color}
                  name="paymentDate"
                  variant="standard"
                  value={paymentDateValue}
                  inputProps={{
                    className: "font-family-Exo"
                  }}
                  placeholder="Payment Date"
                />
              </Grid>

              <Grid
                item
                xs={12}
                md={6}
                className="edituser-textfield_bold"
              >
                <label className="input_label">
                  
                  Expacted Date
                </label>
                <TextField
                  sx={Styles.field_color}
                  name="expactedDate"
                  variant="standard"
                  inputProps={{
                    className: "font-family-Exo"
                  }}
                  placeholder="Expacted Date"
                />
              </Grid>

              <Grid
                item
                xs={12}
                md={6}
                className="edituser-textfield_bold"
              >
                <label className="input_label">
                  
                  Category
                </label>
                <Select
                  sx={{...Styles.field_color, width: "100%"}}
                  name="category"
                  variant="standard"
                  inputProps={{
                    className: "font-family-Exo",
                  }}
                  placeholder="Email"
                  value={1}
                >
                  <MenuItem value={1}>
                  {categoryValue}
                  </MenuItem>
                  <MenuItem value={2}>
                  Client 2
                  </MenuItem>
                </Select>
              </Grid>

              <Grid
                item
                xs={12}
                md={6}
                className="edituser-textfield_bold"
              >
                <label className="input_label">
                  
                  Note
                </label>
                <TextField
                  sx={Styles.field_color}
                  name="note"
                  variant="standard"
                  inputProps={{
                    className: "font-family-Exo"
                  }}
                  placeholder="Add Note"
                />
              </Grid>

            </Grid>
            <Grid className="useredit_btn">
              <Button
              variant="outlined"
              >
                Clear
              </Button>
              <Button variant="contained" type="submit">
                Update
              </Button>
            </Grid>
            </form>
      </SimpleDialog>
  );
};

export default TransactionModel;

const Styles = {
  field_color: (theme) => ({
    "& .MuiInput-underline:after": {
      borderBottomColor: "#2B2B33",
    },
    "& .Mui-error:after": {
      borderBottomColor: "#d32f2f",
    },
    "& .Mui-error:before": {
      borderBottomColor: "#d32f2f !important",
    },
    "& .MuiInputBase-input": {
      paddingLeft: "15px",
      pb: "10px",
    },
    "& .MuiInputBase-root:hover": {
      backgroundColor: "#F0F0F2",
    },
    "& .MuiSelect-select:hover": {
      backgroundColor: "#F0F0F2",
    },

    "& :before": {
      borderBottom: "1.6px solid #C4C4CC !important",
    },
    // "&:before": {
    //   borderBottom: "1.6px solid #C4C4CC !important",
    // },
    "&:after": {
      borderColor: "#2B2B33",
    },
  }),
};