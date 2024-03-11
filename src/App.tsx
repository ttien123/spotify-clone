import useRouterElements from './useRouterElements';

function App() {
    const routeElements = useRouterElements();

    return <main>{routeElements}</main>;
}

export default App;
