import axios from "axios"

export const getCoinData = (id) => {
    const coinData = axios
        .get(`https://api.coingecko.com/api/v3/coins/${id}`,
            { crossDomain: true }
        )
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log("ERROR>>>", error);
        });

    if (coinData) return coinData;
    else return;
};




// export const getCoinData = (id) => {
//     const myData = axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
//         .then((res) => {
//             // console.log(res);
//             return res;

//             // Strip the Data in small form


//             // as soon as I get data from API I set my Loader to false
//             // setIsLoading(false);
//         }).catch(err => {
//             console.log(err);
//             // setIsLoading(false);
//         })

//     return myData;
// }