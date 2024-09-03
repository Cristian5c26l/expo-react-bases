// import { BasicTypes } from './typescript/BasicTypes';
// import { LiteralObjects } from './typescript/LiteralObjects';
// import { BasicFunctions } from './typescript/BasicFunctions';
// import { Counter } from "./components/Counter";
// import { LoginPage } from "./components/LoginPage";
// import { UsersPage } from "./components/UsersPage";

import { FormsPage } from "./components/FormsPage";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="h-svh flex flex-col justify-center items-center">
        <h1 className='text-4xl mb-5'>React + TS</h1>
        {/* <BasicTypes /> */}
        {/* <LiteralObjects /> */}
        {/* <BasicFunctions /> */}
        {/* <Counter /> */}
        {/* <LoginPage /> */}
        {/* <UsersPage /> */}
        <FormsPage />
      </div>
    </AuthProvider>
  )
}

export default App;
