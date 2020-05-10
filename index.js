//react-geolocate

import { useState, useEffect } from "react";

const useGeoLocation = () => {
  const [country, setCountry] = useState(null);
  const [errors, setErrors] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchAPI() {
      setIsLoading(true);
      const res= await fetch("https://api.country.is");

      res.json()
      .then(res => {res && res.country ? setCountry(res.country):null;})
      .catch(err => setErrors(err))
      .finally(() => setIsLoading(false));
    }
    fetchAPI();
  },[]);

  return {country,errors,isLoading}
};

export default useGeoLocation;
