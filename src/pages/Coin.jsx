import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Common/Header';
import Loader from '../components/Common/Loader';
import { coinObject } from '../functions/stripData';
import List from '../components/Dashboard/List';
import CoinInfo from '../components/Coin/CoinInfo';
import { getCoinData } from '../functions/getCoinData';
import { getCoinPrices } from '../functions/getCoinPrices';
import LineChart from '../components/Coin/LineChart';
import { convertDate } from '../functions/convertDate';
import BackToTop from '../components/Common/BackToTop'
import SelectDays from '../components/Coin/SelectDays';
import { settingChartData } from '../functions/settingChartData';
import TogglePriceType from '../components/Coin/PriceType';
import Footer from '../components/Common/Footer';

function CoinPage() {
    // Here whatever I write in a URL from App.js in Coin Component that will be Destructured here as [id] from useParams() object.

    const { id } = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [coinData, setCoinData] = useState();  //to store data of a particular Coin

    const [chartData, setChartData] = useState({});  // to store data for x-axis & y-axis

    const [days, setDays] = useState(60);

    const [priceType, setPriceType] = useState('prices');  // to make toggle button for chart

    // Now make API call for a particular Coin by {id}
    useEffect(() => {
        if (id) {

            getData();  // call getData() to set data to coinData variable
        }
    }, [id])

    //Now I am shifting my API call inside async function
    async function getData() {

        const data = await getCoinData(id);

        //Now strip coinData into small Data
        if (data) {
            coinObject(setCoinData, data);

            const prices = await getCoinPrices(id, days, priceType);
            // console.log(prices);
            if (prices.length > 0) {
                // console.log("WOHOOOO");

                // set chartData
                settingChartData(setChartData, prices)

                setIsLoading(false);
            }
        }
    }

    // Now change days dynamically
    const handleDaysChange = async (event) => {
        setIsLoading(true);
        setDays(event.target.value);
        const prices = await getCoinPrices(id, event.target.value, priceType);

        if (prices.length > 0) {
            settingChartData(setChartData, prices);
            setIsLoading(false);
        }
    };


    // Toggle chart on basis of Button Clicked
    const handlePriceTypeChange = async (event, newType) => {

        setIsLoading(true);
        setPriceType(event.target.value);

        // // Now get charData according to priceType
        const prices = await getCoinPrices(id, days, event.target.value);

        console.log(prices);
        if (prices.length > 0) {
            settingChartData(setChartData, prices);
            setIsLoading(false);
        }
    };


    return (
        <div>
            <BackToTop />
            <Header />
            {isLoading ? <Loader /> : (
                <>
                    <div className="grey-wrapper" style={{ padding: "0 1rem" }}>
                        <List coin={coinData} />
                    </div>
                    <div className="grey-wrapper">
                        <SelectDays days={days} handleDaysChange={handleDaysChange} />
                        <TogglePriceType priceType={priceType} handlePriceTypeChange={handlePriceTypeChange} />
                        <LineChart chartData={chartData} priceType={priceType} />
                    </div>
                    <CoinInfo heading={coinData.name} desc={coinData.desc} />
                </>
            )}
            <Footer />
        </div>
    )
}

export default CoinPage