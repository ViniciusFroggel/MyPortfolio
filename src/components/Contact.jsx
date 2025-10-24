// src/components/Contact.jsx
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../assets/css/style.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Enviando...");

    // Proteção mínima: valida se variáveis estão definidas
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus("Erro de configuração: variáveis de ambiente não encontradas.");
      console.error("Missing EmailJS env vars:", { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY });
      return;
    }

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(() => {
        setStatus("Mensagem enviada com sucesso!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setStatus("Erro ao enviar a mensagem. Tente mais tarde.");
      });
  };

  return (
    <section id="contato" className="contact-section">
      <div className="section-divider" style={{ width: 60, height: 3, background: "var(--primary)" }}></div>
      <h2>Entre em Contato</h2>
      <p>Preencha o formulário abaixo para enviar sua mensagem</p>

      <form onSubmit={handleSubmit} className="contact-form" aria-label="Formulário de contato">
        <input
          name="name"
          type="text"
          placeholder="Seu nome"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Seu e-mail"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Sua mensagem"
          value={formData.message}
          onChange={handleChange}
          rows="6"
          required
        />
        <button type="submit">Enviar Mensagem</button>
        {status && <p className="status-message">{status}</p>}
      </form>
    </section>
  );
};

export default Contact;
