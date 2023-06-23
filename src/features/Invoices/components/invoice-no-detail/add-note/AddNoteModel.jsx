import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useTheme } from "@emotion/react";
import { Backdrop, Button, Grid, TextField, Typography, Textarea } from "@mui/material";
import CloseIcon from "../../../../../assests/svg/close-circle.png";
import { CheckBox, Maximize } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { TextareaAutosize } from "@material-ui/core";

const AddNoteModel = (props) => {
    //---usestate handlers and themes
    const { open, handleClose, onDeleteClick, emailNote } = props;
    const theme = useTheme();

    return (
        <Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Box sx={Styles.root}>
                    <div style={{ padding: "1rem" }}>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <h3>{emailNote ? 'Email Subject' : 'Add Note'}</h3>
                            <Link onClick={handleClose}>
                                <img src={CloseIcon} alt="close" />
                            </Link>
                        </div>
                        {
                            !emailNote && (
                                <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end", marginTop: "2rem" }}>
                                    <CheckBox />
                                    Send Email Reminder
                                </div>
                            )
                        }
                        <div style={{ textAlign: "center", marginTop: "2rem" }}>
                            <TextareaAutosize
                                minRows={11}
                                placeholder="Write your note"
                                style={Styles.textArea(theme)}
                            ></TextareaAutosize>
                        </div>
                        <div style={{ marginTop: "2rem", textAlign: "end" }}>
                            <Button
                                onClick={onDeleteClick}
                                sx={Styles.buttonError(theme)}
                            >
                               {emailNote ? 'Download Attachment' : 'Add Note'}
                            </Button>
                        </div>
                    </div>

                </Box>
            </Modal >
        </Box >
    );
};

export default AddNoteModel;
//-----------------------------------------------------------------------
// styles
const Styles = {
    root: (theme) => ({
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "600px",
        borderRadius: "8px",
        boxShadow: 24,
        backgroundColor: "#fff",
        height: "400px"
    }),
    buttonError: (theme) => ({
        bgcolor: "#2B2B33",
        color: "#fff",
        "&:hover": { bgcolor: "#2B2B33" },
        px: 2,
        py: 1,
        fontSize: "16px !important",
        textTransform: 'capitalize',
        fontWeight: "400",
        borderRadius: "8px"
    }),
    textArea: (theme) => ({
        backgroundColor: "#F2F2F2",
        width: "100%",
        resize: "none",
        borderRadius: "4px",
        border: "none",
        '&::placeholder' : {
            paddingTop: "8px"
        }
    }),
};