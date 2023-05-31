import { Suspense } from "react";
import "./App.scss";
import UserManagements from "./pages/user-managements";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layout/layout";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<h1>Loading</h1>}>
        <Routes>
          <Route exact path={"/"} element={<Layout />}>
            <Route exact path={"/"} element={<UserManagements />} />
            <Route path="/not-found" element={<h1>Not Found</h1>}/>
            <Route path="*" element={<Navigate to="/not-found"/>} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
