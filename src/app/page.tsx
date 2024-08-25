
"use client";
import Homepage from "@/components/HomePage";
import { ThemeProvider, useTheme } from "next-themes";
import React, { useEffect, useState } from "react";



function Home() {
 
  const [mount,setMount] = useState(false);
  let {resolvedTheme, setTheme} = useTheme();
  useEffect(()=>{
       setMount(true)
       console.log(resolvedTheme)
      setTheme("dark")
      console.log(resolvedTheme)
  })

 if(mount){
  setTheme('dark');
 }

 if(!mount){
  return null;
 }

  return (
     <>
     <div className="bg-slate-950 h-full w-full">
      {/* <ThemeProvider attribute="class"> */}
        <Homepage/>
      {/* </ThemeProvider> */}
     </div>
     
     </>
      

  );
}

export default Home