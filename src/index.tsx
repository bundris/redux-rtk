import { render } from "react-dom";
import { App } from "./app/components/App/App";
import { initializeAPI } from "./app/api";
import { Provider } from "react-redux";
import { store } from "./app/store";
initializeAPI();

const rootElement = document.getElementById("root");

render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);
