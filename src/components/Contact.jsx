import React, { useState } from 'react';
import '../assets/css/style.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Enviando...');
    try {
      const res = await fetch('http://localhost:5000/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('Mensagem enviada com sucesso!');
        setFormData({ name: '', email: '', message: '' });
      } else setStatus('Erro ao enviar a mensagem.');
    } catch (err) {
      console.error(err);
      setStatus('Erro ao enviar a mensagem.');
    }
  };

  return (
    <section id="contato">
      <div className="section-divider"></div> {/* corte visual */}
      <h2>Entre em Contato</h2>
      <p>Preencha o formulário abaixo para enviar sua mensagem</p>

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Seu nome"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
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
          rows="5"
          required
        />
        <button type="submit">Enviar Mensagem</button>
        {status && <p className="status-message">{status}</p>}
      </form>
    </section>
  );
};

export default Contact;
