import GitHubCalendar from 'react-github-calendar';
import Image from "next/image";
import { arrayBuffer } from 'stream/consumers';
import { useState } from 'react';

export default function Home() {

  // const [details, setDetails] = useState({
  //   username: "ntacv",
  //   description: "",
  //   language: "",
  //   dateStart: 2020,
  //   dateEnd: 2022,
  //   monthText: true,
  
  // });

  const username: string = "ntacv";

  const noDetails: boolean = true;

  // array of range values
  const range = (start, end, reverse=0) => {
  var arrayRange = Array(end - start + 1).fill().map((_, idx) => start + idx)
  if (reverse) return arrayRange.reverse()
    return arrayRange
  }
  const years = range(2019, new Date().getFullYear(), 1);

  if (noDetails){

  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">Hello world 
      <br/>{years.map((year) => (year.toString()+", "))}
        </p>
      

{years.map((yearLoop) => (
<GitHubCalendar username={username} year={yearLoop} colorScheme='dark'/>
       ))}
      </div>

    </main>
  );
}
 