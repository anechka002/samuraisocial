import './App.css';
import { personsForDialogs } from './data/data';
import SideDialogs from './layout/dialogs/sideDialogs/SideDialogs';
import { Header } from "./layout/header/Header";

function App() {

    return (
        <div className='container'>
            <Header/>
            <main>
                <SideDialogs persons={personsForDialogs}/>
            </main>
        </div>
    )
}

export default App
