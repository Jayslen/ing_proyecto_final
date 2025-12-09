export function PopupLayout({
  children,
  closePopup,
}: {
  children: React.ReactNode;
  closePopup: () => void;
}) {
  return (
    <div
      className="absolute top-0 left-0 w-screen h-screen grid place-content-center bg-black/70"
      onClick={closePopup}
    >
      {children}
    </div>
  );
}
