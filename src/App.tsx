import { Aside } from "./components/Aside";
import { EmployeesFilter } from "./components/EmployeesFilter";
import { EmployeesTable } from "./components/EmployeesTable";

function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Aside />
      <main className="p-6 flex flex-col gap-4 w-full">
        <header>
          <h1 className="text-5xl font-black">Administracion de Empleados</h1>
          <p>
            {" "}
            Bienvenido a la plataforma de administración de empleados. Aquí
            podrás gestionar y administrar los empleados de tu empresa.
          </p>
        </header>

        <section className="relative">
          <div>
            <span className="text-3xl font-bold">650</span>
            <span className="italic">Empleados</span>
          </div>
          <div className="w-full absolute h-1 bg-blue-400 rounded-full"></div>
        </section>
        <EmployeesFilter />
        <EmployeesTable />
      </main>
    </div>
  );
}

export default App;
