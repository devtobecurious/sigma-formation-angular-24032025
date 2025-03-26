export interface WeatherData {
    latitude: number
    longitude: number
    current: {
        temperature_2m: number
        wind_speed_10m: number,
        weather_code: number
    }
}