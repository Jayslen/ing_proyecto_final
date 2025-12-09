import { PopupLayout } from "./PopupLayout";
import { APIMethods } from "../api/Client";
import type { Employee, EmployeeFormData } from "../types/core";
import { Input } from "./Input";

export function EditEmployee({
  closePopup,
  employeeData,
}: {
  closePopup: () => void;
  employeeData: Employee;
}) {
  const {
    id,
    name,
    employmentDetails: { position, salary, paymentType },
  } = employeeData;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = Object.fromEntries(
      new FormData(e.target as HTMLFormElement),
    ) as unknown as EmployeeFormData;

    console.log(id);
    console.log(formData);
    try {
      APIMethods.EditEmployee(id, formData);
      window.alert("Empleado editado exitosamente");
    } catch (error) {
      console.error(error);
      window.alert("Error al editar empleado");
    } finally {
      closePopup();
    }
  };

  return (
    <PopupLayout closePopup={closePopup}>
      <div
        className="bg-white p-6 max-w-md rounded shadow"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h2 className="text-2xl font-bold mb-4">Editar empleado</h2>
        <form className="" onSubmit={handleSubmit}>
          <Input
            label="Empleado"
            type="text"
            defaultValue={name}
            readOnly={true}
          />

          <Input
            label="Posicion"
            type="text"
            name="position"
            defaultValue={position}
          />
          <div className="flex gap-2">
            <Input
              label="Salario"
              type="number"
              name="salary"
              defaultValue={salary}
            />
            <Input
              label="Tipo de pago"
              type="text"
              name="paymentType"
              defaultValue={paymentType}
              readOnly={true}
            />
          </div>

          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
          >
            Editar empleado
          </button>
        </form>
      </div>
    </PopupLayout>
  );
}
