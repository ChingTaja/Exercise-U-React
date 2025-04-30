export default function Button({ children, onSelect, ...props }) {
  return (
    <button
      className="rounded px-4 py-2 font-semibold uppercase text-stone-900 bg-amber-400 hover:bg-amber-500"
      onClick={onSelect}
    >
      {children}
    </button>
  );
}
