import axios from "axios";
import { useState, useEffect } from "react";
const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const fetch = async (url) => {
    await axios
      .get(url)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err.data));
  };
  useEffect(() => {
    fetch(url);
  }, [url]);
  return [data];
};

export default useFetchData;
