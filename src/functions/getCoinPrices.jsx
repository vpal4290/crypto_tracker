import axios from "axios";

export const getCoinPrices = (id, days, priceType) => {
    const prices = axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`)
        .then(response => {
            // console.log("Prices", res.data.prices);

            // return res.data[priceType];
            if (priceType == "market_caps") {
                return response.data.market_caps;
            } else if (priceType == "total_volumes") {
                return response.data.total_volumes;
            } else {
                return response.data.prices;
            }
            // setIsLoading(false);
        })
        .catch(err => {
            console.log(err);
            // setIsLoading(false);
        })
    return prices;
}

// Now get info for making chart for crypto coin