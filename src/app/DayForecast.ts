import { WeatherSummary } from "./WeatherSummary";

export class DayForecast {
    day: Date[] = [];
    temperature: number[] = [];
    precipitation: number[] = [];
    cloudcover: number[] = [];
    summary: WeatherSummary | null = null;

    constructor(){}
}