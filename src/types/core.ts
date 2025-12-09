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

export type EmployeeFormData = {
  id: string;
  name: string;
  lastName: string;
  dni: string;
  birthDate: string;
  email: string;
  phone: string;
  departmentId: string;
  position: string;
  hiringDate: string;
  salary: number;
  paymentType: string;
};

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
