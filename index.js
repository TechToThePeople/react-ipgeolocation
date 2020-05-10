//react-geolocate

import { useState, useEffect } from "react";

const useGeoLocation = () => {
  const [country, setCountry] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchAPI() {
      setIsLoading(true);
      await fetch("https://api.country.is")
      .then (res => {
        if (!res.ok) { throw Error(res.statusText);return null; }
        return res.json()
      })
      .then(res => {if (res && res.country) setCountry(res.country);})
      .catch(err => setError(err))
      .finally(() => setIsLoading(false));
    }
    fetchAPI();
  },[]);

  return {country,error,isLoading}
};

export default useGeoLocation;
