import { of } from 'rxjs';

const accuWeatherAppKey = 'JlhMcyABFv2LGFxIAxJaUGfjZEmqwcql';

const foo = {
    "Headline": {
        "EffectiveDate": "2020-09-28T07:00:00-03:00",
        "EffectiveEpochDate": 1601287200,
        "Severity": 7,
        "Text": "Very warm Monday",
        "Category": "heat",
        "EndDate": "2020-09-28T19:00:00-03:00",
        "EndEpochDate": 1601330400,
        "MobileLink": "http://m.accuweather.com/en/br/sao-tome/42994/extended-weather-forecast/42994?lang=en-us",
        "Link": "http://www.accuweather.com/en/br/sao-tome/42994/daily-weather-forecast/42994?lang=en-us"
    },
    "DailyForecasts": [
        {
            "Date": "2020-09-25T07:00:00-03:00",
            "EpochDate": 1601028000,
            "Temperature": {
                "Minimum": {
                    "Value": 67,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 90,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Day": {
                "Icon": 4,
                "IconPhrase": "Intermittent clouds",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 38,
                "IconPhrase": "Mostly cloudy",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://m.accuweather.com/en/br/sao-tome/42994/daily-weather-forecast/42994?day=1&lang=en-us",
            "Link": "http://www.accuweather.com/en/br/sao-tome/42994/daily-weather-forecast/42994?day=1&lang=en-us"
        },
        {
            "Date": "2020-09-26T07:00:00-03:00",
            "EpochDate": 1601114400,
            "Temperature": {
                "Minimum": {
                    "Value": 62,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 90,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Day": {
                "Icon": 4,
                "IconPhrase": "Intermittent clouds",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 38,
                "IconPhrase": "Mostly cloudy",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://m.accuweather.com/en/br/sao-tome/42994/daily-weather-forecast/42994?day=2&lang=en-us",
            "Link": "http://www.accuweather.com/en/br/sao-tome/42994/daily-weather-forecast/42994?day=2&lang=en-us"
        },
        {
            "Date": "2020-09-27T07:00:00-03:00",
            "EpochDate": 1601200800,
            "Temperature": {
                "Minimum": {
                    "Value": 64,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 92,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Day": {
                "Icon": 4,
                "IconPhrase": "Intermittent clouds",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 38,
                "IconPhrase": "Mostly cloudy",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://m.accuweather.com/en/br/sao-tome/42994/daily-weather-forecast/42994?day=3&lang=en-us",
            "Link": "http://www.accuweather.com/en/br/sao-tome/42994/daily-weather-forecast/42994?day=3&lang=en-us"
        },
        {
            "Date": "2020-09-28T07:00:00-03:00",
            "EpochDate": 1601287200,
            "Temperature": {
                "Minimum": {
                    "Value": 66,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 94,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Day": {
                "Icon": 2,
                "IconPhrase": "Mostly sunny",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 38,
                "IconPhrase": "Mostly cloudy",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://m.accuweather.com/en/br/sao-tome/42994/daily-weather-forecast/42994?day=4&lang=en-us",
            "Link": "http://www.accuweather.com/en/br/sao-tome/42994/daily-weather-forecast/42994?day=4&lang=en-us"
        },
        {
            "Date": "2020-09-29T07:00:00-03:00",
            "EpochDate": 1601373600,
            "Temperature": {
                "Minimum": {
                    "Value": 68,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 93,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Day": {
                "Icon": 2,
                "IconPhrase": "Mostly sunny",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 35,
                "IconPhrase": "Partly cloudy",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://m.accuweather.com/en/br/sao-tome/42994/daily-weather-forecast/42994?day=5&lang=en-us",
            "Link": "http://www.accuweather.com/en/br/sao-tome/42994/daily-weather-forecast/42994?day=5&lang=en-us"
        }
    ]
}

export const getForecast = (zipcode, days) => of(foo.DailyForecasts);
