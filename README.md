# REACT-ipgeolocation :earth_africa:
A react hook to get the country of a visitor from their IP address

## Installation

Using `npm`:

```sh
npm install --save react-ipgeolocation
```

Using `yarn`:

```sh
yarn add react-ipgeolocation
```


## Usage

```jsx
import useGeoLocation from "react-ipgeolocation";

//somewhere in your app/component
const location = useGeoLocation();
console.log(location.country);
```

## Implementation and privacy

This hook is a thin wrapper around the wonderful [Country.is](https://country.is), a browser-friendly and privacy-conscious geolocation API that gets your users' country (and nothing else) from their IP.

Their hosted service does not log requests.

## see also

[react-hook-geolocation](https://www.npmjs.com/package/react-hook-geolocation) hook using the geolocation from the browser (the user's operating system will prompt the user to allow location access the first time it is requested)
