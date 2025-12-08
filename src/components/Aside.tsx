export function Aside() {
  return (
    <aside id="logo-sidebar" className=" w-72 h-full">
      <div className="h-full px-3 py-4 overflow-y-auto bg-neutral-primary-soft border-e border-default">
        <div className="flex items-center ps-2.5 mb-5">
          <img src="/dashboard.png" className="w-12 me-3" alt="Logo" />
          <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">
            Adminstracion
          </span>
        </div>
        <ul className="space-y-2 font-medium">
          <AsideLiComponent label="Dashboard" />
          <AsideLiComponent label="Empleados" />
          <AsideLiComponent label="Clientes" />
        </ul>
      </div>
    </aside>
  );
}

function AsideLiComponent({ label }: { label: string }) {
  return (
    <li className="flex items-center px-2 py-1.5 text-body rounded-md hover:bg-gray-400/20 hover:text-blue-600 transition-colors duration-300 cursor-pointer">
      <svg
        className="w-5 h-5 transition duration-75 group-hover:text-fg-brand"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10V6.025Z"
        />
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3Z"
        />
      </svg>
      <span className="ms-3 text-lg">{label}</span>
    </li>
  );
}
