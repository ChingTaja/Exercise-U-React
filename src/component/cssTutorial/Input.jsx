export default function Input({ label, invalid, ...props }) {
  let labelClass = 'block mb-2 text-xs font-bold tracking-wide uppercase';
  let inputClass = 'w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow';

  if (invalid) {
    labelClass += labelClass + ' text-red-400';
    inputClass += inputClass + ' text-red-400';
  } else {
    labelClass += labelClass + ' text-stone-300';
    inputClass += inputClass + ' text-stone-300';
  }

  return (
    <>
      <label className={labelClass}>{label}</label>
      <input className={inputClass} {...props} />
    </>
  );
}
