//react-geolocate

import { useState, useEffect } from "react";

const useGeoLocation = (options = {}) => {
  const [country, setCountry] = useState(options.country);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const api = options.api || "https://api.country.is";

  useEffect(() => {
    if (country || country === false) return;
    let isCancelled = false;
    const controller = new AbortController();

    async function fetchAPI() {
      setIsLoading(true);
      await fetch(api, { signal: controller.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error(res.statusText);
          }
          return res.json();
        })
        .then((res) => {
          if (res && res.country && !isCancelled) setCountry(res.country);
        })
        .catch((err) => {
          if (!isCancelled) setError(err);
        })
        .finally(() => {
          if (!isCancelled) setIsLoading(false);
        });
    }
    fetchAPI();
    return () => {
      isCancelled = true;
      controller.abort();
    };
  }, []);

  return { country, error, isLoading };
};

export default useGeoLocation;
