import { useState } from "react";
import { Aside } from "./components/Aside";
import { EmployeesFilter } from "./components/EmployeesFilter";
import { EmployeesTable } from "./components/EmployeesTable";
import { Login } from "./components/Login";

function App() {
  const [loginPopup, setLoginPopup] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <Aside />
      <main className="p-6 flex flex-col gap-4 w-full">
        <header className="flex w-full justify-between items-center">
          <div>
            <h1 className="text-5xl font-black">Administracion de Empleados</h1>
            <p>
              Bienvenido la plataforma de administración de empleados. Aquí
              podrás gestionar y administrar los empleados de tu empresa.
            </p>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 h-10 rounded"
            onClick={() => {
              setLoginPopup((prev) => !prev);
            }}
          >
            Login
          </button>
        </header>
        <EmployeesFilter />
        <EmployeesTable />
      </main>
      {loginPopup && (
        <Login
          closePopup={() => {
            setLoginPopup((prev) => !prev);
          }}
        />
      )}
    </div>
  );
}

export default App;
