import {createRoot} from "react-dom/client";
import { Hello } from "./hello";
import { Greeting } from "./greeting";
import { Sum } from "./sum";

const root = createRoot(document.querySelector("#root"));

root.render(<Hello />);
root.render(<Greeting />);
root.render(<Sum />)