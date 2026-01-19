import React from "react";
import "./App.css";

function App() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>🚀 CI/CD con Jenkins & Vercel</h1>

        <p style={styles.subtitle}>
          Aplicación React desplegada automáticamente
        </p>

        <div style={styles.infoBox}>
          <p><strong>Repositorio:</strong></p>
          <p>simple-node-js-react-npm-app</p>

          <p><strong>Pipeline CI:</strong></p>
          <ul>
            <li>✔️ Checkout desde GitHub</li>
            <li>✔️ npm install</li>
            <li>✔️ npm test</li>
            <li>✔️ npm run build</li>
          </ul>

          <p><strong>Despliegue CD:</strong></p>
          <ul>
            <li>☁️ Hosting en Vercel</li>
            <li>🔄 Deploy automático por Git push</li>
          </ul>
        </div>

        <footer style={styles.footer}>
          <p>📅 Build generado automáticamente</p>
          <p>🧠 Proyecto CI/CD académico</p>
        </footer>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    padding: "30px",
    width: "90%",
    maxWidth: "600px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
  },
  title: {
    textAlign: "center",
    color: "#333",
    marginBottom: "10px",
  },
  subtitle: {
    textAlign: "center",
    color: "#666",
    marginBottom: "25px",
  },
  infoBox: {
    backgroundColor: "#f7f7f7",
    padding: "20px",
    borderRadius: "8px",
    color: "#333",
  },
  footer: {
    marginTop: "20px",
    textAlign: "center",
    fontSize: "0.9rem",
    color: "#888",
  },
};

export default App;

