export default function Footer() {
  return (
    <footer 
      style={{
        padding: '2rem 1rem',
        textAlign: 'center',
        color: '#f3f4f6',
        fontSize: '0.875rem',
        background: 'linear-gradient(to right, #b91c1c, #facc15, #dc2626)',
        borderTop: '4px solid #facc15',
        marginTop: '2.5rem',
        boxShadow: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)'
      }}
    >
      © {new Date().getFullYear()} España Infinita. Todos los derechos reservados.
    </footer>
  );
} 