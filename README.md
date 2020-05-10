# REACT hook to get the country of a visitor based on the IP address

## Usage

```javascript
import useGeoLocation from "react-geolocation";

//somewhere in your app/component
const location = useGeoLocation();
console.log(location.country);
```

## Implementation and privacy

This hook is a thin wrapper around the wonderful [Country.is](https://country.is), a browser-friendly and privacy-conscious geolocation API that gets your users' country (and nothing else) from their IP.

Their hosted service does not log requests.
