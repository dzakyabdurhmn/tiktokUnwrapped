// "use client";
// import React from "react";
// import useSWR from "swr";

// const fetcher = (url: any) => fetch(url).then((res) => res.json());

// export default function App({ params }: { params: { slug: string } }) {
//   const { data, error, isLoading } = useSWR(
//     `https://api.github.com/users/${params.slug}`,
//     fetcher
//   );

//   if (error) return "An error has occurred.";
//   if (isLoading) return "Loading...";
//   return (
//     <div>
//       <h1>{data.name || "Titok users"}</h1>
//       <img src={data.avatar_url} alt={data.name} />
//       {/* <p>{data.description}</p> */}
//       {/* <strong>👁 {data.subscribers_count}</strong>{" "}
//       <strong>✨ {data.stargazers_count}</strong>{" "}
//       <strong>🍴 {data.forks_count}</strong> */}
//     </div>
//   );
// }

// "use client";
// import { Composition } from "remotion";
// import { MyComposition, myCompSchema } from "../../tailwind/Composition";
// // import "./style.css";

// function RemotionRoot() {
//   return (
//     <div>
//       {/* @ts-ignore */}
//       <Composition
//         id="MyComp"
//         component={MyComposition}
//         durationInFrames={240}
//         fps={30}
//         width={1280}
//         height={720}
//         schema={myCompSchema}
//         defaultProps={{
//           titleText: "Welcome to Remotion with Tailwind CSS",
//           titleColor: "#000000",
//           logoColor: "#00bfff",
//         }}
//       />
//     </div>
//   );
// }

// export default RemotionRoot;

import React from "react";
import { RemotionRoot } from "../../tailwind/Root";

function page() {
  return (
    <div>
      <RemotionRoot />
    </div>
  );
}

export default page;
