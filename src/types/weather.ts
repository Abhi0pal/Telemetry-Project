/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface WeatherData {
  location: string;
  temperature: number;
  condition: string;
  precipitation: number;
  windSpeed: number;
  windDirection: string;
  intensityData: number[];
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
  color: string;
}
