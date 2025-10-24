import React, { useState } from 'react';
import './contact.css'; // crie um arquivo separado ou use global CSS

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Enviando...');
    try {
      const res = await fetch('http://localhost:5000/send', { // ou endpoint de produção
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success) {
        setStatus('Mensagem enviada com sucesso!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Erro ao enviar a mensagem.');
      }
    } catch (err) {
      console.error(err);
      setStatus('Erro ao enviar a mensagem.');
    }
  };

  return (
    <section id="contato" className="contact-section">
      <div className="section-divider"></div> {/* separador visual */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Entre em Contato</h2>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-lg mx-auto flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Seu nome"
            value={formData.name}
            onChange={handleChange}
            className="p-3 rounded bg-gray-700 border border-gray-600 text-white"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Seu email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 rounded bg-gray-700 border border-gray-600 text-white"
            required
          />
          <textarea
            name="message"
            placeholder="Sua mensagem"
            value={formData.message}
            onChange={handleChange}
            className="p-3 rounded bg-gray-700 border border-gray-600 text-white h-32 resize-none"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition-colors p-3 rounded font-bold text-white"
          >
            Enviar Mensagem
          </button>
          {status && <p className="text-center mt-2">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
