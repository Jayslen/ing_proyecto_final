import { create } from "zustand";
import type { Employee, EmployeeFormData } from "../types/core";
import { APIMethods } from "../api/Client";

type EmployeesState = {
  employees: Employee[];
  addEmployee: (employee: EmployeeFormData) => void;
  removeEmployee: (id: string) => void;
  initializeEmployees: () => Promise<void>;
};

const useEmployeesStore = create<EmployeesState>((set) => ({
  employees: [],
  initializeEmployees: async () => {
    const data = await APIMethods.GetEmployees();
    set({ employees: data });
  },
  addEmployee: (input: EmployeeFormData) =>
    set((state) => {
      const newEmployee = {
        id: input.id,
        name: input.name,
        lastName: input.lastName,
        dni: input.dni,
        email: input.email,
        phone: input.phone,
        birthDate: input.birthDate,
        isActive: true,
        employmentDetails: {
          id: "",
          position: input.position,
          department: "null",
          salary: input.salary,
          hiringDate: input.hiringDate,
          paymentType: input.paymentType,
          employeeId: input.id,
        },
        department: {
          id: input.departmentId,
          name: "",
        },
      };
      return { employees: [...state.employees, newEmployee] };
    }),
  removeEmployee: (id) =>
    set((state) => ({
      employees: state.employees.filter((employee) => employee.id !== id),
    })),
}));

export default useEmployeesStore;
