import React, { useState } from 'react';
import { Select, Grid, Button, Box } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { ReactComponent as Down } from "../../assests/svg/chev-bottom.svg";
import { TextField } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Typography } from '@mui/material';
import dayjs from 'dayjs';
import EventIcon from '@mui/icons-material/Event';
import Paynowbtn from './Paynowbtn'
import { DateIcon } from '../date-icon/date-icon';
import { SimpleDialog } from '../modal/simple-dialog';


const PaynowCardData = [
    {
        id: '0',
        cardNumber: '1234 5231 6547 3214',
        cvnNumber: '4411',
        date: '18/23',
        password: '*********'
    },
    {
        id: '1',
        cardNumber: '1234 5231 6547 5555',
        cvnNumber: '3021',
        date: '19/23',
        password: '*********'
    },
    {
        id: '2',
        cardNumber: '1234 5231 6547 4444',
        cvnNumber: '3033',
        date: '11/23',
        password: '*********'
    },
];

const PayNowCard = (open, onClose,) => {
    // const [startDate, setStartDate] = useState();
    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardChange = (event) => {
        const selectedCardId = event.target.value;
        setSelectedCard(selectedCardId);
        // setStartDate(null);
    };

    // const formatDate = dayjs(startDate).format('MM/YY');

    const getCardDetails = (cardId) => {
        return PaynowCardData.find((card) => card.id === cardId);
    };

    const selectedCardDetails = selectedCard ? getCardDetails(selectedCard) : null;

    return (
        <>
            <SimpleDialog open={open} handleClose={onClose} title="Bill Details"
                titleClass="primary-color font-weight-600 heading-20" paperSx={{ maxWidth: '1251px' }}>
                <Grid container sx={{ p: 1 }}>
                    <label htmlFor="Select" className="font-family-Exo secondary-color margin-top-2">
                        Select Card
                    </label>
                    <Grid container className="justify-space-between margin-top-1">
                        <Grid item xs={12} lg={8}>
                            <Select
                                sx={{
                                    '&:before': {
                                        borderColor: '#C4C4CC',
                                    },
                                    '&:after': {
                                        borderColor: '#C4C4CC',
                                    },
                                    '& .MuiSelect-select': {
                                        padding: '10px',
                                        color: '#6B6B80',
                                    },
                                }}
                                fullWidth
                                variant="standard"
                                IconComponent={Down}
                                value={selectedCard}
                                onChange={handleCardChange}
                            >
                                {PaynowCardData.map((card) => (
                                    <MenuItem key={card.id} value={card.id}>
                                        {`Bank XYZ - Card : ${card.cardNumber}`}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item mt={{ xs: '10px' }}>
                            <Button
                                variant="outlined"
                                sx={{
                                    color: '#6B6B80',
                                    borderColor: '#6B6B80',
                                    px: '15px',
                                    py: '10px',
                                    border: '2px solid #6B6B80',
                                    fontWeight: 400,
                                    fontSize: '16px',
                                    borderRadius: '8px',
                                    textTransform: 'capitalize',
                                    '&:hover': {
                                        borderColor: 'black',
                                        border: '2px solid black',
                                        color: 'black',
                                    },
                                }}
                            >
                                Link New Card
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container className="margin-top-3">
                        <Grid container xs={12} lg={7} className="justify-center">
                            <Grid item xs={10}>
                                <label htmlFor="Card-number" className="secondary-color font-family-Exo">
                                    Card Number
                                </label>
                                <Select
                                    sx={{
                                        mt: '10px',
                                        '&:before': {
                                            borderColor: '#C4C4CC',
                                        },
                                        '&:after': {
                                            borderColor: '#C4C4CC',
                                        },
                                        '& .MuiSelect-select': {
                                            padding: '10px',
                                            color: '#6B6B80',
                                        },
                                    }}
                                    placeholder="Card Number Format"
                                    fullWidth
                                    variant="standard"
                                    IconComponent={Down}
                                    value={selectedCard}
                                    onChange={handleCardChange}
                                >
                                    {selectedCardDetails && (
                                        <MenuItem value={selectedCardDetails.id}>
                                            {selectedCardDetails.cardNumber}
                                        </MenuItem>
                                    )}
                                </Select>
                            </Grid>
                            <Grid container xs={10} className="justify-space-between">
                                <Grid xs={12} lg={5} sx={{ mt: 6.5 }}>
                                    <label htmlFor="Card-number" className="secondary-color font-family-Exo">
                                        CVN Number
                                    </label>
                                    <TextField
                                        sx={styles.field__color}
                                        className="fields"
                                        placeholder='4412'
                                        fullWidth
                                        id="standard-basic"
                                        variant="standard"
                                        value={selectedCardDetails ? selectedCardDetails.cvnNumber : ''}
                                        disabled={!selectedCardDetails}
                                    />
                                </Grid>
                                <Grid xs={12} lg={5} className="margin-top-3">
                                    {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['DatePicker', 'DatePicker']}>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                gap: '10px',
                                                '@media (max-width: 600px)': {
                                                    width: 'auto',
                                                    flexDirection: 'column',
                                                },
                                            }}
                                        > */}
                                    <Typography className="font-family-exo2 secondary-color primary-title">
                                        Expiry Date
                                    </Typography>
                                    <TextField
                                        sx={styles.field__color}
                                        className="fields"
                                        placeholder='MM/YY'
                                        fullWidth
                                        id="standard-basic"
                                        variant="standard"
                                        value={selectedCardDetails ? selectedCardDetails.date : ''}
                                        disabled={!selectedCardDetails}
                                        InputProps={{
                                            endAdornment: (
                                                <div style={{ display: 'flex', justifyContent: 'flex-end', color: '#777777', marginRight: '15px' }}>
                                                    <DateIcon />
                                                </div>
                                            ),
                                        }}
                                    />
                                    {/* </Box>
                                    </DemoContainer>
                                </LocalizationProvider> */}
                                </Grid>
                                <Grid xs={12} sx={{ mt: 6 }}>
                                    <label htmlFor="Card-number" className="secondary-color font-family-Exo">
                                        Password
                                    </label>
                                    <TextField
                                        sx={styles.field__color}
                                        className="fields"
                                        placeholder='*********'
                                        fullWidth
                                        id="standard-basic"
                                        variant="standard"
                                        value={selectedCardDetails ? selectedCardDetails.password : ''}
                                        disabled={!selectedCardDetails}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item mt={{ xs: '10px' }} xs={12} lg={5} className="flex justify-center align-center">
                            <Box
                                sx={{
                                    width: '422px',
                                    height: '247px',
                                    borderRadius: '12px',
                                    border: '2px dashed #A6A6B3',
                                }}
                            ></Box>
                        </Grid>
                    </Grid>
                    <Paynowbtn />
                </Grid>
            </SimpleDialog>
        </>
    );
};

export default PayNowCard;


const styles = {
    field__color: () => ({
        marginTop: '20px',
        "& .MuiInput-underline:after": {
            borderBottomColor: "#2B2B33",
        },
        "& input": {
            paddingLeft: "15px",
            pb: "8px",
        },
        "& .MuiInputBase-root:hover": {
            backgroundColor: "#F0F0F2",
        },
        "& :before": {
            borderBottom: "1.6px solid #C4C4CC !important",
        },
        "&:before": {
            borderColor: "black",
        },
        "&:after": {
            borderColor: "black",
        },
    }),
};