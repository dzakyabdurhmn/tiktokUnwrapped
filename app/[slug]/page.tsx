// "use client";
// import React from "react";
// import useSWR from "swr";

// const fetcher = (url) => fetch(url).then((res) => res.json());

// export default function App({ params }: { params: { slug: string } }) {
//   const { data, error, isLoading } = useSWR(
//     `https://api.github.com/users/${params.slug}`,
//     fetcher
//   );

//   if (error) return "An error has occurred.";
//   if (isLoading) return "Loading...";
//   return (
//     <div>
//       <h1>{data.name}</h1>
//       <img src={data.avatar_url} alt={data.name} />
//       {/* <p>{data.description}</p> */}
//       {/* <strong>👁 {data.subscribers_count}</strong>{" "}
//       <strong>✨ {data.stargazers_count}</strong>{" "}
//       <strong>🍴 {data.forks_count}</strong> */}
//     </div>
//   );
// }

import React from "react";
import { RemotionRoot } from "../../tailwind/Root";
function page() {
  return (
    <div>
      <RemotionRoot key={1} />
    </div>
  );
}

export default page;
