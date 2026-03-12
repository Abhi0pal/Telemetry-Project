/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { WeatherData } from "../types/weather";
import { WeatherService } from "../services/weatherService";

export const useWeather = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const data = WeatherService.getMockWeatherData();
    setWeather(data);
    setLoading(false);
  }, []);

  return { weather, loading };
};
