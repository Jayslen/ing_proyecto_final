import { useEffect, useState } from "react";
import { PopupLayout } from "./PopupLayout";
import Employees from "../context/Employees";
import { APIMethods } from "../api/Client";
import { Input } from "./Input";
import type { EmployeeFormData } from "../types/core";

export function AddEmployee({ closePopup }: { closePopup: () => void }) {
  const { addEmployee } = Employees();
  const [departments, setDepartments] = useState<
    { id: string; name: string }[]
  >([]);

  useEffect(() => {
    APIMethods.GetDepartments().then((data) => {
      setDepartments(data);
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = Object.fromEntries(
      new FormData(e.target as HTMLFormElement),
    ) as unknown as EmployeeFormData;

    try {
      const newUser = await APIMethods.AddEmployee(formData);
      addEmployee(newUser);
      window.alert("Empleado agregado exitosamente");
      closePopup();
    } catch (error) {
      console.error(error);
      window.alert("Error al agregar empleado");
    }
  };

  return (
    <PopupLayout closePopup={closePopup}>
      <div
        className="bg-white p-6 w-96 rounded shadow"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h2 className="text-2xl font-bold mb-4">Agregar nuevo empleado</h2>
        <form className="" onSubmit={handleSubmit}>
          <div className="flex gap-2">
            <Input
              label="Nombre"
              name="name"
              placeholder="John"
              type="text"
              minLength={3}
              maxLength={20}
              required
            />
            <Input
              label="Apellido"
              name="lastName"
              placeholder="Doe"
              type="text"
              minLength={3}
              maxLength={25}
              required
            />
          </div>

          <Input
            label="DNI"
            name="dni"
            placeholder="034-234354-3"
            type="text"
            required
            minLength={11}
            maxLength={11}
          />
          <Input
            label="Fecha de nacimiento"
            name="birthDate"
            type="date"
            required
          />

          <div className="flex gap-2">
            <Input
              type="email"
              label="Correo"
              name="email"
              placeholder="john.doe@example.com"
              required
              maxLength={50}
            />
            <Input
              type="text"
              label="Teléfono"
              name="phone"
              placeholder="034-234354-3"
              minLength={10}
              maxLength={15}
              required
            />
          </div>

          {/* departmentId */}
          <div className="flex gap-2">
            <label>
              Departamento
              <select
                name="departmentId"
                className="w-full p-2 mb-2 border border-gray-300 rounded"
                required
              >
                <option value="">Select Department</option>
                {departments.map((department) => (
                  <option value={department.id}>{department.name}</option>
                ))}
              </select>
            </label>

            <Input
              type="text"
              label="Posición"
              name="position"
              placeholder="Programador"
              required
            />
          </div>

          <Input
            type="date"
            label="Fecha de Contratación"
            name="hiringDate"
            placeholder="example@example.com"
            required
          />

          <div className="flex gap-2">
            <Input
              type="number"
              label="Salario"
              name="salary"
              placeholder="Salary"
              required
            />
            <Input
              type="text"
              label="Tipo de Pago"
              name="paymentType"
              placeholder="Quincenal"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
          >
            Add Employee
          </button>
        </form>
      </div>
    </PopupLayout>
  );
}
