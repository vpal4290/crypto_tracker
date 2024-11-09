import { convertDate } from "./convertDate"

export const settingChartData = (setChartData, prices, prices2) => {
    if (prices2) {
        // when I pass both price and price2 then 2-y-axises will be shown by below data
        setChartData(
            {
                labels: prices.map(price => convertDate(price[0])),
                datasets: [
                    {
                        label: 'crypto1',
                        data: prices.map(price => (price[1])),
                        borderColor: "#3a80e9",
                        borderWidth: 2,
                        fill: false,    // fill the graph with below borderColor if fill: true
                        tension: 0.23,  // to show curved edges of graph
                        backgroundColor: "rgba(58,128,233,0.1)",
                        pointRadius: 0,  // Point radius of every point of (x,y) on graph
                        yAxisID: "crypto1"

                    },
                    {
                        label: 'crypto2',
                        data: prices2.map(price => (price[1])),
                        borderColor: "#61c96f",
                        borderWidth: 2,
                        fill: false,    // fill the graph with below borderColor if fill: true
                        tension: 0.23,  // to show curved edges of graph
                        backgroundColor: "rgba(58,128,233,0.1)",
                        pointRadius: 0,  // Point radius of every point of (x,y) on graph
                        yAxisID: "crypto2"
                    },
                ]
            }
        )
    } else {

        // If I pass only one y-axis then this data is stored to chart for Dashboard coin page
        setChartData(
            {
                labels: prices.map(price => convertDate(price[0])),
                datasets: [
                    {
                        label: 'Dataset 1',
                        data: prices.map(price => (price[1])),
                        borderColor: "#3a80e9",
                        borderWidth: 2,
                        fill: true,    // fill the graph with below borderColor
                        tension: 0.23,  // to show curved edges of graph
                        backgroundColor: "rgba(58,128,233,0.1)",
                        pointRadius: 0,  // Point radius of every point of (x,y) on graph
                        yAxisID: "crypto1"
                    },
                ]
            }
        )
    }
}