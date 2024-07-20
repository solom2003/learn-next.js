"use client" 
import React from "react";
import styles from "./page.module.css";
import Text from "./text"
import { useEffect, useState } from "react";
import Prop from "./prop"
import Jsonpage from "./jsondata/Jsonpage";
import Apipage from "./Api/Apipage";

export const UserContext = React.createContext<String>();

export default function Home() {
  
  const test = "hallo:";
  const [sun , setsun]  = useState(0);
  const [so , setso] = useState("");

  useEffect(() => {
    document.title = `count: ${sun}`
  })

  const car = ()=> {
    setso("bmw")
  }

  const up = ()=> {
    setsun(sun +1)
  }

  const dowan = ()=> {
    setsun(sun +1)
  }

  const zero = ()=> {
    setsun(0);
  }

  return (
    <main className={styles.body}>
        <p>name car is:{so}</p>
        <button onClick={car}>test</button>
        <p>{sun}</p>
        <button onClick={up}>click_up</button>
        <button onClick={zero}>click_0</button>
        <button onClick={dowan}>click_plus</button>

        
      <UserContext.Provider value={test}>
         <Text/>
      </UserContext.Provider>
      <Prop name="abdo solom." age={20} isStudent={true}/>
      <Prop name="ahmed ali." age={22} isStudent={true}/>
      <Prop name="omr seed." age={25} isStudent={false}/>
      ==================================================
      <Jsonpage/>
      +++++++++++++++++++++++++++
      <Apipage/>
    </main>
  );
}
