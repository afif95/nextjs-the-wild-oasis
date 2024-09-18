// import { useState } from "react";
// import Counter from "@/app/_components/Counter";

import { Suspense } from "react";
import CabinList from "@/app/_components/CabinList";
import Spinner from "@/app/_components/Spinner";
import Filter from "@/app/_components/Filter";
import ReservationReminder from "../_components/ReservationReminder";

// opting out of data cache & full route cache; making page dynamic; only works on production build
// export const revalidate = 0;

// page remains static, revalidating data cache & full route cache, after 1 hour 2nd user reloading the page will get the new data
export const revalidate = 3600;

export const metadata = {
  title: "Cabins",
};

// export default function Page() {
//   // const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   // const data = await res.json();

//   // this is a RSC (React Server Component)
//   // output will be in the terminal
//   // console.log(data);
//   // importing a component that needs useState. It only works in a Client Component but none of its parents are marked with "use client", so they're Server Components by default.
//   // useState(23);

//   return (
//     <div>
//       <h1>Cabins Page</h1>
//       {/* <ul>
//         {data.map((user) => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>

//       <Counter users={data} /> */}
//     </div>
//   );
// }

export default function Page({ searchParams }) {
  // searchParams is used to pass data from client component to server component; only available in page.js; makes the page dynamic and 'revalidate' useless
  // console.log(searchParams);

  const filter = searchParams?.capacity ?? "all";

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>

      <div className="flex justify-end mb-8">
        <Filter />
      </div>

      {/* Suspense needs to wrap around the component which does the asynchronous work */}
      {/* all page navigations are wrapped in transitions, unique key enables rerendering again by resetting the suspense boundary*/}
      <Suspense fallback={<Spinner />} key={filter}>
        <CabinList filter={filter} />
        <ReservationReminder />
      </Suspense>
    </div>
  );
}
