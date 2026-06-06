import { useState } from "react";
import Login from "./pages/Login";
import MainLayout from "./layouts/MainLayout";

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      {user ? (
        <MainLayout />
      ) : (
        <Login setUser={setUser} />
      )}
    </>
  );
}

export default App;