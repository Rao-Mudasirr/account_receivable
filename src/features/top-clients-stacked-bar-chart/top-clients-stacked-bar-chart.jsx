import { Box, Grid } from '@mui/material';
import TempImage from "../../assests/images/layout/header/dropdown-menu/change-password.png";
import { AppTooltip } from '../../components/app-tooltip/app-tooltip';

const calculateTotal = (value, data, total) => {
    const sum = data.reduce((partialSum, val) => partialSum + val, 0);
    return (value / sum) * total;
}
export const TopClientsStackedBarChart = () => {

    return (
        <>
            <Grid container >
                <Grid className='no-scrollbar' item xs={12} height={254} sx={{ overflowY: 'auto' }}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(item => <Grid key={item} container className='flex align-center justify-space-between' spacing={2}>
                        <Grid item md={2} sm={2.5} xs={3.5} className='flex align-center'>
                            <Box>
                                <img width={24} height={24} src={TempImage} alt='Client Name' className='border-radius-rounded' />
                            </Box>
                            <Box sx={{ ml: '8px' }} className="secondary-color tertiary-title">Client Name</Box>
                        </Grid>
                        <Grid item md={9} sm={8} xs={7}>
                            <Grid container className='lined-bg' sx={{ borderRadius: '12px', py: '10px' }}>
                                {
                                    [44, 55, 41].map((item, i) => <AppTooltip key={item} className="font-family-Exo" message={`£${item}`} arrow={false} fontSize='12px'>
                                        <Grid item className='flex justify-center tertiary-title' sx={{ p: '5px', bgcolor: i === 0 ? '#70D69E' : i === 1 ? '#FFD494' : '#FF9898', color: i === 0 ? '#009544' : i === 1 ? '#D89103' : '#FF4F4F', borderRadius: i === 0 ? '12px 0 0 12px' : i === 2 ? '0 12px 12px 0' : '0' }} xs={calculateTotal(item, [44, 55, 41], 12)}>
                                            {calculateTotal(item, [44, 55, 41], 100).toFixed(2)}
                                        </Grid>
                                    </AppTooltip>
                                    )
                                }
                            </Grid>
                        </Grid>
                        <Grid className='tertiary-title link-color font-weight-600 end-text' md={1} item sm={1.5} xs={1.5}>
                            £{[44, 55, 41].reduce((partialSum, val) => partialSum + val, 0)}
                        </Grid>
                    </Grid>)

                    }
                </Grid>
                <Grid item className='flex justify-center margin-top-1 ' xs={12}>
                    {
                        [{name:'Paid',color:'#74E4A7'}, {name:'Due',color:'#FFD494'}, {name:'Overdue',color:'#FF9898'}].map(item => <div key={item.name} className='flex align-center margin-right-0 margin-left-0'>
                            <Box sx={{ width: "16px", height: "16px", background: item.color, borderRadius: "4px", mr: '5px' }}></Box>
                            <Box className="secondary-color tertiary-title">{item.name}</Box>
                        </div>)
                    }

                </Grid>
            </Grid>
        </>
    )
}
