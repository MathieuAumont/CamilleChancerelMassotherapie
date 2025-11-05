import { useState } from 'react';

export default function RendezVous() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formsubmit.co/mathieu.aumont@live.ca', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert('Une erreur est survenue. Veuillez réessayer.');
      }
    } catch (error) {
      alert('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNewMessage = () => {
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="rendez-vous formulaire message-envoie">
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <h3 style={{ color: '#4a5568', marginBottom: '1rem' }}>
            Merci d'avoir contacté Camille Chancerel, massothérapeute
          </h3>
          <p style={{ color: '#6b7280', marginBottom: '2rem' }}>
            Elle vous recontactera sous peu pour planifier votre rendez-vous.
          </p>
          <button
            onClick={handleNewMessage}
            className="btn-formulaire"
          >
            Envoyer un autre message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='rendez-vous'>
        <div className="rendez-vous-container">
            <div className="rendez-vous-intro">
                <h2>Prendre un rendez-vous</h2>
                <p>Veuillez remplir le formulaire ci-dessous pour prendre un rendez-vous.</p>
                <p>Veuillez indiquer vos disponibilités.</p>
                <p>Merci de votre confiance.</p>
            </div>
            <form 
            onSubmit={handleSubmit}
            className="formulaire"
            >
            <input type="hidden" name="_subject" value="Nouveau RDV via le site" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="_honey" style={{ display: "none" }} />

            <label>Nom</label>
            <input name="nom" type="text" required className="nom" />

            <label>Courriel</label>
            <input name="email" type="email" required className="courriel" />

            <label>Téléphone</label>
            <input
                name="telephone"
                type="tel"
                pattern="^[0-9 +().-]{7,}$"
                required
                className="tel"
            />

            <label>Message</label>
            <textarea
                name="message"
                rows={5}
                required
                className="message"
            />

            <button
                type="submit"
                className="btn-formulaire"
                disabled={isSubmitting}
            >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
            </button>
            </form>
        </div>
    </div>
  );
}
