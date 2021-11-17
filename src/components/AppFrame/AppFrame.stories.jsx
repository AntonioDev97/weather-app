import AppFrame from "./AppFrame";
import { BrowserRouter as Router } from "react-router-dom";

export default {
    title: 'AppFrame',
    component: AppFrame,
}

export const AppFrameExample = () => (
    <Router>
        <AppFrame>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et totam incidunt fuga quasi, assumenda quos tempora ab quae ipsa temporibus id placeat reprehenderit vel iure aliquid quia quisquam dolorem error.
        </AppFrame>
    </Router>
)