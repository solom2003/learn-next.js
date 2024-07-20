import Jsondata from "./Testjson.json";
import style from "../page.module.css";

const Jsonpage = () => {
    return(
        <main>
           {Jsondata.map(fatch => {
            return(
                <div className={style.json}>
                  <h2>the name is: {fatch.name}</h2>
                  <h2>the salary is: {fatch.salary}</h2>
                  <h2>the age is: {fatch.age}</h2>
                  <h2>the number is: {fatch.id}</h2>
                </div>
            )
           })}
        </main>
    );
};

export default Jsonpage;