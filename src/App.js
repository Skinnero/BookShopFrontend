import Routing from "./routing/Routing.js"
import {MainBody} from "./styles/global.style";
import {UserProvider} from "./context/UserContext";

function App() {
    return (
        <MainBody>
            <UserProvider>
                <Routing/>
            </UserProvider>
        </MainBody>
    );
}

export default App;
