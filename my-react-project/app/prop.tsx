import styles from "./page.module.css"

const prop = (props:{name: string; age:number; isStudent:any;}) => {
    return(
      <main className={styles.styleProps}>
          <h2>Name: {props.name}</h2>
          <h2>Name: {props.age}</h2>
          <h2>student: {props.isStudent ? "yes" : "no"}</h2>
      </main>
   );
}
export default prop;