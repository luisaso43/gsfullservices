
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
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message
      })
    });

    const result = await response.json();

    if (response.ok) {
      setSubmitStatus('¡Gracias por contactarnos! Te responderemos pronto.');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } else {
      const errorMessage = result?.errors?.[0]?.message || 'Error al enviar el mensaje. Inténtalo de nuevo.';
      setSubmitStatus(errorMessage);
    }
  } catch (error) {
    setSubmitStatus('Error al enviar el mensaje. Inténtalo de nuevo.');
  }

  setIsSubmitting(false);
};
