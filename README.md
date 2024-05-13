County Data Lookup API
============

County Data is a simple tool for getting data about US counties. It returns information such as population, area, and more based on the county name provided.

![Build Status](https://img.shields.io/badge/build-passing-green)
![Code Climate](https://img.shields.io/badge/maintainability-B-purple)

This is a Javascript Wrapper for the [County Data Lookup API](https://apiverve.com/marketplace/api/countydata)

---

## Installation
	npm install @apiverve/countydata --save

---

## Configuration

Before using the countydata API client, you have to setup your account and obtain your API Key.  
You can get it by signing up at [https://apiverve.com](https://apiverve.com)

---

## Usage

The County Data Lookup API documentation is found here: [https://docs.apiverve.com/api/countydata](https://docs.apiverve.com/api/countydata).  
You can find parameters, example responses, and status codes documented here.

### Setup

```
var countydataAPI = require('@apiverve/countydata');
var api = new countydataAPI({
    api_key: [YOUR_API_KEY],
    secure: true //(Optional, defaults to true)
});
```

---


### Perform Request
Using the API client, you can perform requests to the API.

###### Define Query

```
var query = {
  state: "MO",
  county: "Jackson"
};
```

###### Simple Request (using Callback)

```
api.execute(query, function (error, data) {
    if (error) {
        return console.error(error);
    } else {
        console.log(data);
    }
});
```

###### Example Response

```
{
  "status": "ok",
  "error": null,
  "data": {
    "name": "jackson county",
    "state": "MO",
    "age": {
      "85+": 0.019971238003388282
    },
    "male": 339932,
    "female": 363079,
    "deaths": {
      "suicides": 106.71428571428571,
      "firearm suicides": 55.095238095238095,
      "homicides": 115.42857142857143,
      "vehicle": 93
    },
    "avg_income": 47054,
    "health": {
      "poorHealth": 20.588989742,
      "physicallyUnhealthyDays": 4.247736361,
      "mentallyUnhealthyDays": 4.8111015035,
      "lowBirthweightPercent": 9.1518749808,
      "smokersPercent": 20.957241772,
      "obesityPercent": 31.5,
      "foodEnvIndex": 7.5,
      "physicallyInactivePercent": 23.2,
      "excessiveDrinkingPercent": 18.940103365,
      "Teen Birth Rate": 31.109351559,
      "% Uninsured": 12.486314662,
      "% With Annual Mammogram": 45,
      "% Vaccinated": 51,
      "% Children in Poverty": 19.6,
      "80th Percentile Income": 108296,
      "20th Percentile Income": 23275,
      "Violent Crime Rate": 941.43198334,
      "Average Daily PM2.5": 9.1,
      "% Severe Housing Problems": 15.347550638,
      "% Drive Alone to Work": 83.470246386
    },
    "landAreaKM2": 1565.601892,
    "areaKM2": 1596.319707,
    "longitude": -94.347496655033936,
    "latitude": 39.016701918102484,
    "zipCodes": [
      "64137",
      "64111",
      "64053",
      "64055",
      "64064",
      "64029",
      "64106",
      "64108",
      "64034",
      "64118",
      "64136",
      "64139",
      "64125",
      "64030",
      "64014",
      "64066",
      "64080",
      "64123",
      "64131",
      "64145",
      "64128",
      "64121",
      "64170",
      "64050",
      "64057",
      "64133",
      "64109",
      "64130",
      "64134",
      "64129",
      "64158",
      "64163",
      "64070",
      "64102",
      "64105",
      "64086",
      "64101",
      "64124",
      "64157",
      "64088",
      "64061",
      "64051",
      "64002",
      "64081",
      "64013",
      "64016",
      "64112",
      "64114",
      "64110",
      "64152",
      "64127",
      "64147",
      "64120",
      "64146",
      "64199",
      "64058",
      "64054",
      "64074",
      "64119",
      "64138",
      "64149",
      "64156",
      "64132",
      "64171",
      "64148",
      "64141",
      "64999",
      "64052",
      "64015",
      "64063",
      "64075",
      "64056",
      "64082",
      "64113",
      "64155",
      "64126",
      "64197",
      "64065",
      "64198"
    ],
    "lifeExpectancy": 77.19,
    "education": {
      "bachelors+": 31.6,
      "lessThanHighSchool": 9.4,
      "highSchool": 28.3,
      "someCollege": 30.7
    },
    "povertyRate": 13.7,
    "costOfLiving": {
      "living_wage": 14.55,
      "food_costs": 3246,
      "medical_costs": 2681,
      "housing_costs": 8136,
      "tax_costs": 6263
    }
  }
}
```

---

## Customer Support

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact).

---

## Updates
Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the mailboxlayer website, API, and services is subject to the [APIVerve Terms & Conditions](https://apiverve.com/terms) and all legal documents and agreements.

---

## License
Licensed under the The MIT License (MIT)

Copyright (&copy;) 2024 APIVerve, and Evlar LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.