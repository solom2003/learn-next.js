import { useState } from "react";



const Apipage = () => {
    const [data , setdata] = useState()
    const apifun = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
       .then((response) => response.json())
       .then((json) => {
        setdata(json)
       });
    }
    

    return(
        <main>
          <button onClick={apifun}>getapi</button>
          <div>{JSON.stringify(data)}</div>
        </main>
    );
}
export default Apipage;