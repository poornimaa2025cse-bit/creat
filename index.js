// Mock Weather Data
const weatherData = [
    { city: "New York", temperature: 15, condition: "Cloudy" },
    { city: "London", temperature: 10, condition: "Rainy" },
    { city: "Tokyo", temperature: 20, condition: "Sunny" },
    { city: "Mumbai", temperature: 32, condition: "Humid" },
    { city: "Sydney", temperature: 25, condition: "Windy" }
];

function searchWeather() {
    const input = document.getElementById("cityInput").value.trim();
    const display = document.getElementById("weatherDisplay");

    // Clear previous content
    display.innerHTML = "";

    if (input === "") {
        display.innerHTML = "<p>Please enter a city name.</p>";
        return;
    }

    // Search mock data
    const result = weatherData.find(
        (item) => item.city.toLowerCase() === input.toLowerCase()
    );

    if (!result) {
        display.innerHTML = "<p>No weather data found for this city.</p>";
        return;
    }

    // Create weather card
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <h2>${result.city}</h2>
        <div class="temp">${result.temperature}°C</div>
        <div class="details">${result.condition}</div>
    `;

    display.appendChild(card);
}