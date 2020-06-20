import {
  Wrapper,
  Country,
  CountryInfo,
} from "https://deno.land/x/novelcovid_wrapper/mod.ts";

const wrapper = new Wrapper();

/**
 * Get all affected countries data
 * Return and object of type Countries like { data: [Country] }
 */
wrapper
  .countries()
  .then((data) => console.log(data));

/**
 * Get all affected countries ordered data (order by country, cases, todayCases, deaths, todayDeaths, ...)
 * Return and object of type Countries like { data: [Country] }
 */
wrapper
  .countries({ sort: "country" })
  .then((data) => console.log(data));

/**
 * Get yesterday data of affected countries
 * Return and object of type Countries like { data: [Country] }
 */
wrapper
  .countries({ yesterday: true })
  .then((data) => console.log(data));

/**
 * Get data of continents
 * Return and object of type Countries like { data: [Country] }
 * the data can be ordered sending { sort: 'continent' }
 */
wrapper
  .continents()
  .then((data) => console.log(data));

/**
 * Get data of one country
 */
wrapper
  .country("cn")
  .then((data: Country) => console.log(data));
