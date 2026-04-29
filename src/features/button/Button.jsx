export default function Button({ children, className = '', ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded-md bg-primary text-accent-contrast ${className} hover:cursor-pointer`}
      {...props}
    >
      {children}
    </button>
  );
}
