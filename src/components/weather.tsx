import React, {useState} from 'react';




interface WeatherResponse {
    name: string;
    main: {
        temp: number;
    };
    weather: {
        description: string;      
    }[];
}

const apiKey = '4e4a0408c455a282738fb1605744c44c';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

const Weather: React.FC = () => [
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState('');
    const [error, setError] = useState('');

    const getWeather = async (city: string) => {
        try{
            const response = await fetch(`${baseUrl}?q-${city}&appid-${apiKey}&units-metric`);
            const data: WeatherResponse = await response.json();

            if (response.ok) {
                setWeatherData(data);
                setError('');
            } else {
                setError('Please enter a valid city');
                setWeatherData(null)
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setError('Error fetching data');
        }
    };

    return (
        <div>
            <h1>Weather App</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter a city"
                    value={city} onChange={(e) => setCity(e.target.value)} />
                <button type="submit">Get Weather</button>
            </form>
            {weatherData && (
                <div>
                    <h2>Current weather in {weatherData.name}</h2>
                    <p>{weatherData.main.temp}degrees, {weatherData.weather[0].description}</p>
                </div>
            )}

            {error &&<p>{error}</p>}
        </div>
    );
];

export default Weather;

