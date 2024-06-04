import './index.css';

import * as ReactDOM from 'react-dom/client';
import App from './App';

const rootDiv = document.querySelector("#root");
const root = ReactDOM.createRoot(rootDiv);
root.render(<App />);