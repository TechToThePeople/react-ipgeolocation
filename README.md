# REACT-ipgeolocation :earth_africa:
A react hook to get the country of a visitor from their IP address

## Installation

Using `npm`:

```sh
npm install --save react-geolocation
```

Using `yarn`:

```sh
yarn add react-geolocation
```


## Usage

```jsx
import useGeoLocation from "react-geolocation";

//somewhere in your app/component
const location = useGeoLocation();
console.log(location.country);
```

## Implementation and privacy

This hook is a thin wrapper around the wonderful [Country.is](https://country.is), a browser-friendly and privacy-conscious geolocation API that gets your users' country (and nothing else) from their IP.

Their hosted service does not log requests.
