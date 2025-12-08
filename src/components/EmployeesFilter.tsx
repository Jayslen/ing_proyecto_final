export function EmployeesFilter() {
  return (
    <section className="flex justify-between w-full">
      <form className="flex gap-4">
        <input type="text" placeholder="Buscar empleado" className="border border-gray-300 rounded-md px-4 py-2 w-full" />
        <select className="border border-gray-300 rounded-md px-4 py-2 w-full">
          <option value="all">Todos</option>
          <option value="active">Activos</option>
          <option value="inactive">Inactivos</option>
        </select>
        <select className="border border-gray-300 rounded-md px-4 py-2 w-full">
          <option value="all">Departamentos</option>
          <option value="sales">Ventas</option>
          <option value="marketing">Marketing</option>
          <option value="hr">Recursos Humanos</option>
        </select>
        <input type="date" placeholder="Fecha de ingreso" className="border border-gray-300 rounded-md px-4 py-2 w-full" />
      </form>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
        Nuevo Empleado +
      </button>
    </section>
  );
}
