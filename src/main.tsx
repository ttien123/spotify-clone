import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'src/App';
import GlobalStyles from './components/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <GlobalStyles>
                <ConfigProvider
                    theme={{
                        components: {
                            Layout: {
                                bodyBg: 'transparent',
                                headerBg: '#121212',
                                footerBg: 'transparent',
                            },
                        },
                    }}
                >
                    <App />
                </ConfigProvider>
            </GlobalStyles>
        </BrowserRouter>
    </React.StrictMode>,
);
