
import './App.css'
import { Application } from './components/Application/Application'
import { Skills } from './components/Skills/Skills'
import { Counter } from './components/Counter/Counter'
import { MuiMode } from './components/Mui/MuiMode'
import { AppProviders } from './providers/AppProviders'

function App() {
    return (
        <>
            {/* <Application /> */}
            {/* <Skills/> */}
            {/* <Counter /> */}
            <AppProviders>
                <MuiMode />
            </AppProviders>
        </>
    )
}

export default App
