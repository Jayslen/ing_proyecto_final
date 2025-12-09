import { useEffect, useState } from "react";
import { DeleteIcon, EditIcon } from "./Icons";
import { EditEmployee } from "./EditEmployee";
import Employees from "../context/Employees";
import type { Employee } from "../types/core";

export function EmployeesTable() {
  const { employees, removeEmployee, initializeEmployees } = Employees();
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null,
  );
  const [editPopup, setEditPopup] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await initializeEmployees();
    };
    fetchData();
  }, []);

  console.log(employees);

  return (
    <>
      <section className="overflow-auto">
        <table className="w-full h-full">
          <thead className="text-left">
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Email</th>
              <th>Telefono</th>
              <th>Departamento</th>
              <th>Posición</th>
              <th>Fecha de Ingreso</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          {employees.length === 0 && (
            <tbody>
              <tr>
                <td colSpan={9} className="text-center p-10">
                  No hay empleados registrados.
                </td>
              </tr>
            </tbody>
          )}
          {employees.map((employee) => (
            <tr
              key={employee.id}
              className="odd:bg-gray-100 even:bg-gray-200 hover:bg-neutral-300 transition-colors duration"
            >
              <td className="p-4">{employee.name}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
              <td>{employee.department?.name ?? "Sin departamento"}</td>
              <td>{employee.employmentDetails?.position ?? "N/A"}</td>
              <td>{employee.employmentDetails?.hiringDate ?? "N/A"}</td>
              <td>{employee.isActive ? "Activo" : "Inactivo"}</td>
              <td className="flex gap-3 w-full h-full items-center">
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    setSelectedEmployee(employee);
                    setEditPopup(true);
                  }}
                >
                  <EditIcon color="green" />
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    const id = employee.id;
                    const confirm = window.confirm(
                      "¿Estás seguro de que deseas eliminar este empleado?",
                    );
                    if (confirm) {
                      // APIMethods.DeleteEmployee(id);
                      removeEmployee(id);
                    }
                  }}
                >
                  <DeleteIcon color="red" />
                </div>
              </td>
            </tr>
          ))}
        </table>
      </section>
      {editPopup && selectedEmployee && (
        <EditEmployee
          employeeData={selectedEmployee}
          closePopup={() => {
            setEditPopup(false);
          }}
        />
      )}
    </>
  );
}
