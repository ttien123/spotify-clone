import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'src/App';
import GlobalStyles from './components/GlobalStyles';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <GlobalStyles>
            <App />
        </GlobalStyles>
    </React.StrictMode>,
);
