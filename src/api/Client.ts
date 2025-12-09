import type { EmployeeFormData } from "../types/core";

const API = import.meta.env.VITE_API;

export class APIMethods {
  static async Login(input: { email: string; password: string }) {
    const response = await fetch(`${API}/Auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: input.email, password: input.password }),
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }

    const data = await response.json();
    return data.token;
  }
  static async GetEmployees() {
    const response = await fetch(`${API}/Employee`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GetCookieToken()}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch employees");
    }
    const data = await response.json();
    return data;
  }

  static async GetDepartments() {
    const response = await fetch(`${API}/Department`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GetCookieToken()}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch departments");
    }
    const data = await response.json();
    return data;
  }

  static async AddEmployee(formData: EmployeeFormData) {
    const body = {
      name: formData.name,
      lastName: formData.lastName,
      dni: formData.dni,
      departmentId: formData.departmentId,
      email: formData.email,
      phone: formData.phone,
      birthDate: new Date(formData.birthDate).toISOString(),
      employmentDetails: {
        position: formData.position,
        salary: +formData.salary,
        hiringDate: new Date(formData.hiringDate).toISOString(),
        paymentType: formData.paymentType,
      },
    };
    const response = await fetch(`${API}/Employee`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GetCookieToken()}`,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error("Failed to add employee");
    }
    const data = await response.json();
    return data;
  }

  static async DeleteEmployee(id: string) {
    const response = await fetch(`${API}/Employee/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GetCookieToken()}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to delete employee");
    }
    const data = await response.json();
    return data;
  }

  static async EditEmployee(id: string, formData) {
    const body = {
      position: formData.position,
      salary: +formData.salary,
      paymentType: formData.paymentType,
    };
    console.log(body);

    const response = await fetch(`${API}/Employee/${id}/Details`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GetCookieToken()}`,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error("Failed to edit employee");
    }
  }
}

export function GetCookieToken(): string | null {
  const token = window.localStorage.getItem("token");

  return token;
}
