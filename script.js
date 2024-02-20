const balanceMoney = document.getElementById("money");
const graphDays = document.querySelectorAll(".day");
const graphBars = document.querySelectorAll(".bars");
const graphAmounts = document.querySelectorAll(".money");
const daysOfTheWeek = ["mon","tue","wed","thu","fri","sat","sun"];

const renderData = async () => {
    try {
        const response = await fetch("./data.json");
        const data = await response.json();
        const currentDay = new Date().getDay();
        for (let i = 0; i < data.length; i++) {
            graphDays[i].innerText = data[i].day;
            graphBars[i].style.height = Math.round(document.getElementById("spending-graph").clientHeight * (data[i].amount / 80)) + "px";
            graphAmounts[i].innerText = `$${data[i].amount}`;
        }
        graphBars[currentDay].style.backgroundColor = "hsl(186, 34%, 60%)"
    } catch (error) {
        console.log(error)
    }
}

renderData();