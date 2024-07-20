
import { AwaitedReactNode, JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useContext } from "react";
import { UserContext } from "./page";

const text=() => {

    const con = useContext(UserContext);
    return(
        <main>
          <UserContext.Consumer>
            {(test) => <div>test usecontext\\\\\\ {test}</div>}
          </UserContext.Consumer>
          <h1>{con}</h1>
        </main>
    );
}

export default text;