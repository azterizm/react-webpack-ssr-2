import { hydrate } from "react-dom";
import App from "./components/App";

declare global {
  interface Window {
    APP_STATE: {
      initialText: string
    }
  }
}

hydrate(<App {...window.APP_STATE} />, document.getElementById('app'))
