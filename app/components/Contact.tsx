const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch('https://formspree.io/f/xldnzqen', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.ok) {
      setSubmitStatus('¡Gracias por contactarnos! Te responderemos pronto.');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } else {
      const errorMessage = result?.errors?.[0]?.message || 'Hubo un problema. Intenta de nuevo.';
      setSubmitStatus(errorMessage);
    }
  } catch (error) {
    console.error('Error al enviar:', error);
    setSubmitStatus('Ocurrió un error inesperado. Intenta de nuevo.');
  }

  setIsSubmitting(false);
};
