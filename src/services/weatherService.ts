/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { WeatherData } from "../types/weather";

export const WeatherService = {
  getMockWeatherData(): WeatherData {
    return {
      location: "San Francisco, CA",
      temperature: 68,
      condition: "Partly Cloudy",
      precipitation: 12,
      windSpeed: 14,
      windDirection: "NW",
      intensityData: [15, 25, 45, 80, 95, 70, 40, 20, 10, 5],
    };
  },
};
