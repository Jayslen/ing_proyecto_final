import { APIMethods } from "../api/Client";
import { PopupLayout } from "./PopupLayout";

export function Login({ closePopup }: { closePopup: () => void }) {
  return (
    <PopupLayout closePopup={closePopup}>
      <div
        className="bg-white p-6 rounded shadow"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form
          className="w-72"
          onSubmit={async (e) => {
            e.preventDefault();
            const formData = Object.fromEntries(new FormData(e.currentTarget));
            try {
              const token = await APIMethods.Login({
                email: formData.user as string,
                password: formData.password as string,
              });
              window.localStorage.setItem("token", token);
              window.alert("Inicio de sesión exitoso");
              closePopup();
            } catch (error) {
              console.error(error);
              window.alert("Error al iniciar sesión");
            }
          }}
        >
          <input
            type="text"
            placeholder="Usuario"
            name="user"
            className="border border-gray-300 p-2 rounded-md mb-4 w-full"
          />
          <input
            type="password"
            placeholder="Contraseña"
            name="password"
            className="border border-gray-300 p-2 rounded-md mb-4 w-full"
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
            Login
          </button>
        </form>
      </div>
    </PopupLayout>
  );
}
