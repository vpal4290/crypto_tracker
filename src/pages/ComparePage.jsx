import React, { useState, useEffect } from 'react'
import Header from '../components/Common/Header';
import SelectCoins from '../components/Compare/SelectCoins';
import SelectDays from "../components/Coin/SelectDays"
import { coinObject } from '../functions/stripData';
import { getCoinData } from '../functions/getCoinData';
import { getCoinPrices } from '../functions/getCoinPrices';
import { settingChartData } from '../functions/settingChartData';
import Loader from '../components/Common/Loader';
import List from '../components/Dashboard/List';
import CoinInfo from '../components/Coin/CoinInfo';
import LineChart from '../components/Coin/LineChart';
import TogglePriceType from '../components/Coin/PriceType';
import BackToTop from '../components/Common/BackToTop';
import Footer from '../components/Common/Footer';


function ComparePage() {
    const [crypto1, setCrypto1] = useState("bitcoin");
    const [crypto2, setCrypto2] = useState("ethereum");
    const [isLoading, setIsLoading] = useState(true);

    //Make a UseState for setting crypto1 & crypto2 Data
    const [crypto1Data, setCrypto1Data] = useState({});
    const [crypto2Data, setCrypto2Data] = useState({});
    const [priceType, setPriceType] = useState("prices");

    // I have to also call my Select Days component for selection Days
    const [days, setDays] = useState(60);

    // Now make a variable to store ChartData
    const [chartData, setChartData] = useState({});

    useEffect(() => {

        // this is the function runs first when page loads
        getData();
    }, [])

    async function getData() {
        setIsLoading(true);
        const data1 = await getCoinData(crypto1);

        if (data1) {
            coinObject(setCrypto1Data, data1);

            const data2 = await getCoinData(crypto2);
            if (data2) {
                coinObject(setCrypto2Data, data2);

                const prices1 = await getCoinPrices(crypto1, days, priceType);
                const prices2 = await getCoinPrices(crypto2, days, priceType);

                // Now set ChartData for showing data in Chart 
                settingChartData(setChartData, prices1, prices2);

                console.log("Both Prices Fetched", prices1, prices2);
                setIsLoading(false);
            }
        }
    }

    // setDays
    async function handleDaysChange(e) {
        setIsLoading(true);
        setDays(e.target.value);

        // when Days are changed then fetch the prices again
        const prices1 = await getCoinPrices(crypto1, e.target.value, priceType)
        const prices2 = await getCoinPrices(crypto2, e.target.value, priceType)

        // Now set CharData again to Update
        settingChartData(setChartData, prices1, prices2);
        setIsLoading(false);
    }

    // pass below function by props
    const handleCoinChange = async (event, isCoin2) => {
        setIsLoading(true);
        if (isCoin2) {
            setCrypto2(event.target.value);

            const data = await getCoinData(event.target.value);

            //Now strip coinData into small Data
            coinObject(setCrypto2Data, data);
        } else {
            setCrypto1(event.target.value);
            const data = await getCoinData(event.target.value);

            //Now strip coinData into small Data
            coinObject(setCrypto1Data, data);
        }

        const prices1 = await getCoinPrices(crypto1, days, priceType)
        const prices2 = await getCoinPrices(crypto2, days, priceType)

        if (prices1.length > 0 && prices2.length > 0) {
            console.log("BOTH PRICES FETCHED", prices1, prices2);
            setIsLoading(false);
        }
    }

    // add toggle option for chnging the chart for prices, market_cap & total_volume

    // Toggle chart on basis of Button Clicked
    const handlePriceTypeChange = async (event, newType) => {

        setIsLoading(true);
        setPriceType(event.target.value);

        // // Now get charData according to priceType
        const prices1 = await getCoinPrices(crypto1, days, event.target.value)
        const prices2 = await getCoinPrices(crypto2, days, event.target.value)

        settingChartData(setChartData, prices1, prices2);
        setIsLoading(false);
    };

    return (
        <div>
            <BackToTop />
            <Header />
            {isLoading ? <Loader /> :
                <>
                    <div className='coins-days-flex'>
                        <SelectCoins crypto1={crypto1} crypto2={crypto2} handleCoinChange={handleCoinChange} />
                        <SelectDays className="compare-days" days={days} handleDaysChange={handleDaysChange} pTag={false} />
                    </div>

                    <div className="grey-wrapper" style={{ padding: "0 1rem" }}>
                        <List coin={crypto1Data} />
                    </div>
                    <div className="grey-wrapper" style={{ padding: "0 1rem" }}>
                        <List coin={crypto2Data} />
                    </div>

                    <div className="grey-wrapper">
                        <TogglePriceType priceType={priceType} handlePriceTypeChange={handlePriceTypeChange} />
                        <LineChart chartData={chartData} priceType={priceType} multiAxis={true} />
                    </div>

                    <CoinInfo heading={crypto1Data.name} desc={crypto1Data.desc} />
                    <CoinInfo heading={crypto2Data.name} desc={crypto2Data.desc} />
                </>
            }
            <Footer />
        </div>
    )
}

export default ComparePage;