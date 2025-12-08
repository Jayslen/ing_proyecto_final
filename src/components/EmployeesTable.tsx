import { DeleteIcon, EditIcon } from "./Icons";
import data from "../../mock/employees.json";

export type Employee = {
  id: string;
  name: string;
  lastName: string;
  dni: string;
  email: string;
  phone: string;
  birthDate: string; // ISO date string
  isActive: boolean;
  employmentDetails: {
    id: string;
    position: string;
    department: string;
    salary: number;
    hiringDate: string; // ISO date string
    paymentType: string;
    employeeId: string;
  };
  department: {
    id: string;
    name: string;
  };
};

export function EmployeesTable() {
  const employees = data as Employee[];

  return (
    <section className="overflow-auto">
      <table className="w-full h-screen">
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
        {employees.map((employee) => (
          <tr
            key={employee.id}
            className="odd:bg-gray-100 even:bg-gray-200 hover:bg-neutral-300 transition-colors duration"
          >
            <td className="p-4">{employee.name}</td>
            <td>{employee.lastName}</td>
            <td>{employee.email}</td>
            <td>{employee.phone}</td>
            <td>{employee.department.name}</td>
            <td>{employee.employmentDetails.position}</td>
            <td>{employee.employmentDetails.hiringDate}</td>
            <td>{employee.isActive ? "Activo" : "Inactivo"}</td>
            <td className="flex gap-3 w-full h-full items-center">
              <div className="cursor-pointer">
                <EditIcon color="green" />
              </div>
              <div className="cursor-pointer">
                <DeleteIcon color="red" />
              </div>
            </td>
          </tr>
        ))}
      </table>
    </section>
  );
}
