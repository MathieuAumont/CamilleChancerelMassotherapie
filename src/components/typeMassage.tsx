import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { massagesData } from "../data/massages";

interface FamilleManoeuvre {
  nom: string;
  description: string;
  technique?: string;
  buts?: string[];
}

interface DescriptionDetailed {
  introduction: string;
  composition: string;
  objectif: string;
}

interface BienfaitsSysteme {
  nom: string;
  effets: string[];
}

interface BienfaitsSpecifiques {
  description: string;
  systemes: BienfaitsSysteme[];
}

interface Massage {
  id: string;
  title: string;
  image: string;
  description: string | DescriptionDetailed;
  familles_manoeuvres?: (string | FamilleManoeuvre)[];
  sequence_massage?: {
    description: string;
    etapes: string[];
  };
  bienfaits_specifiques?: BienfaitsSpecifiques;
  duration?: string;
  price?: string;
}

interface TypeMassageProps {
  massageId?: string; // Prop optionnelle pour passer l'ID directement
}

function TypeMassage({ massageId }: TypeMassageProps) {
  const { typeId } = useParams();
  const [massage, setMassage] = useState<Massage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showMore, setShowMore] = useState<boolean>(false);
  
  // Utiliser massageId en prop ou typeId depuis l'URL
  const currentMassageId = massageId || typeId;

  useEffect(() => {
    const loadMassage = () => {
      try {
        setLoading(true);
        const foundMassage = massagesData.massages.find((m) => m.id === currentMassageId);
        
        if (foundMassage) {
          setMassage(foundMassage);
          setError(null);
        } else {
          setError('Service non trouvé');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Une erreur est survenue');
        console.error('Erreur lors du chargement des données:', err);
      } finally {
        setLoading(false);
      }
    };

    if (currentMassageId) {
      loadMassage();
    }
  }, [currentMassageId]);

  if (loading) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Chargement...</h1>
      </div>
    );
  }



  if (error || !massage) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Erreur</h1>
        <p>{error || 'Service non trouvé'}</p>
      </div>
    );
  }



  return (
    <div className="type-massage">
        <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h2>{massage.title}</h2>
        <img 
            src={massage.image} 
            alt={massage.title}
            style={{ 
            width: '100%', 
            maxWidth: '500px', 
            height: '300px', 
            objectFit: 'cover',
            borderRadius: '10px',
            marginBottom: '2rem'
            }}
        />
        <div style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
          {typeof massage.description === 'string' ? (
            <p>{massage.description}</p>
          ) : (
            <div>
              <p>{massage.description.introduction}</p>
              <p>{massage.description.composition}</p>
              <p><strong>Objectif:</strong> {massage.description.objectif}</p>
            </div>
          )}
        </div>
        <button className="btn-show-more" onClick={() => setShowMore(!showMore)} >
            {showMore ? 'Voir moins' : 'Voir plus'}
        </button>
        {showMore && massage.familles_manoeuvres && (
            <div className="familles-manoeuvres">
                <h3>Familles de manœuvres</h3>
                <ul>
                    {massage.familles_manoeuvres.map((famille, index) => (
                        <li key={index}>
                            {typeof famille === 'string' ? (
                                famille
                            ) : (
                                <div>
                                    <strong>{(famille as FamilleManoeuvre).nom}</strong>
                                    <p>{(famille as FamilleManoeuvre).description}</p>
                                    {(famille as FamilleManoeuvre).technique && <p><em>Technique: {(famille as FamilleManoeuvre).technique}</em></p>}
                                    {(famille as FamilleManoeuvre).buts && (
                                        <div>
                                            <strong>Buts:</strong>
                                            <ul>
                                                {(famille as FamilleManoeuvre).buts!.map((but: string, butIndex: number) => (
                                                    <li key={butIndex}>{but}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        )}
        {massage.sequence_massage && showMore && (
            <div className="sequence-massage" >
                <h3>Sequence de massage</h3>
                <p>{massage.sequence_massage.description}</p>
                <ol>
                    {massage.sequence_massage.etapes.map((etape, index) => (
                        <li key={index}>{etape}</li>
                    ))}
                </ol>
            </div>
        )}
        {massage.bienfaits_specifiques && showMore && (
            <div className="bienfaits-specifiques" style={{ marginTop: '2rem' }}>
                <h3>Bienfaits spécifiques</h3>
                <p>{massage.bienfaits_specifiques.description}</p>
                {massage.bienfaits_specifiques.systemes.length > 0 && (
                    <div>
                        {massage.bienfaits_specifiques.systemes.map((systeme, index) => (
                            <div key={index} style={{ marginBottom: '1rem' }}>
                                <h4>{systeme.nom}</h4>
                                <ul>
                                    {systeme.effets.map((effet, effetIndex) => (
                                        <li key={effetIndex}>{effet}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        )}
        <div className="details-massage" >
            {massage.duration && <p><strong>Durée:</strong> {massage.duration}</p>}
            {massage.price && <p><strong>Prix:</strong> {massage.price}</p>}
            <Link to="/rendez-vous">
              <div >
                <button className='bouton-massage'>
                    Prendre un rendez-vous
                </button>
              </div>
            </Link> 
        </div>
        </div>
    </div>
  );
}

export default TypeMassage;