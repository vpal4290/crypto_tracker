import React, { useState } from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import Grid from '../Grid';
import './styles.css'
import List from '../List'

export default function TabsComponent({ coins }) {
    const [value, setValue] = useState('grid');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // to Change the Theme of any MUI TabsComponent
    const theme = createTheme({
        palette: {
            primary: {
                main: "#3a80e9",
            },
        },
    });

    const style = {
        color: "var(--white)",
        width: "50vw",
        fontSize: "1.2rem",
        fontWeight: 600,
        fontFamily: "Inter",
        textTransform: "capitalize"
    }

    return (
        <ThemeProvider theme={theme}>
            <TabContext value={value}>
                <div>
                    <TabList onChange={handleChange} variant="fullWidth" >
                        <Tab label="Grid" value="grid" sx={style} />
                        <Tab label="List" value="list" sx={style} />

                    </TabList>
                </div>
                <TabPanel value="grid">
                    <div className='grid-flex'>
                        {coins.map((coin, index) => {
                            return (
                                <Grid coin={coin} key={index} />
                            )
                        })}
                    </div>
                </TabPanel>
                <TabPanel value="list">
                    <table className='list-table'>
                        {coins.map((coin, index) => {
                            return (
                                <List coin={coin} />
                            )
                        })}
                    </table>
                </TabPanel>
            </TabContext>
        </ThemeProvider>
    );
}


// to see how coins.map() works
// <div key={index + 1}>
//     <img src={coin.image} alt="Coin Image" />
//     <p>{index + 1}.{coin.name}</p>
// </div>