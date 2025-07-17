const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus('');

  try {
    const response = await fetch('https://formspree.io/f/xldnzqen', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmitStatus('✅ ¡Mensaje enviado correctamente!');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } else {
      const data = await response.json();
      const error = data?.errors?.[0]?.message || '❌ Hubo un problema al enviar el mensaje.';
      setSubmitStatus(error);
    }
  } catch (error) {
    console.error(error);
    setSubmitStatus('❌ Ocurrió un error inesperado. Intenta de nuevo.');
  }

  setIsSubmitting(false);

  // Ocultar mensaje después de 5 segundos
  setTimeout(() => {
    setSubmitStatus('');
  }, 5000);
};
