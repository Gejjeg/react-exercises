import {createRoot} from "react-dom/client"
import { Hello } from "./hello"

const root = createRoot(document.querySelector("#root"))

root.render(<Hello />)