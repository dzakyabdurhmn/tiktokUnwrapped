"use client";
import React, { useState, useEffect } from "react";

function param({ params }: { params: { slug: string } }) {
  return params.slug;
}

async function fetchData() {
  const a = "https://www.tiktok.com/@";
  const b = a + param;
  try {
    const response = await fetch(
      "https://scraper-api.smartproxy.com/v2/scrape",
      {
        method: "POST",
        body: JSON.stringify({
          target: "tiktok_profile",
          url: b,
          locale: "en-us",
          geo: "United States",
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Basic UzAwMDAxMzk4MzQ6UFcxZDM5M2EzMDFlN2I5ZmU0YTcwMmYwZDZjYzMzYzlmMDk=",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

function Page() {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    // @ts-ignore
    fetchData().then((data) => setApiData(data));
  }, []);

  return <div>{apiData ? JSON.stringify(apiData) : "Loading..."}</div>;
}

export default Page;
// {
//   apiData ? JSON.stringify(apiData) : "Loading...";
// }
