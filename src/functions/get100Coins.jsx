import axios from "axios"

export const get100Coins = () => {
    const coins = axios
        .get(
            'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en',
            { crossDomain: true }
        )
        .then((response) => {
            if (response.status == 200) {
                return response.data;
            }
        })
        .catch((error) => {
            console.log("ERROR>>>", error);
        });

    if (coins) return coins;
    else return;
};