export default function Footer() {
  return (
    <footer 
      className="py-8 px-4 text-center text-gray-100 text-sm bg-gradient-to-r from-red-700 via-yellow-300 to-red-600 border-t-4 border-yellow-300 mt-10 shadow-inner"
    >
      © {new Date().getFullYear()} España Infinita. Todos los derechos reservados.
    </footer>
  );
} 