
import { useEffect, useState } from "react";
import TypeMassage from "./typeMassage";
import { massagesData, type Massage} from "../data/massages";

export default function Services() {
    const [massages, setMassages] = useState<Massage[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentMassageId, setCurrentMassageId] = useState<string>("suedois");
    const [selectedSousCategorie, setSelectedSousCategorie] = useState<string | null>("detente");
    const [onMobile, setOnMobile] = useState(false);

    useEffect(() => {
        // Plus besoin de fetch, les données sont directement disponibles
        try {
            setMassages(massagesData.massages);
            setError(null);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Une erreur est survenue');
            console.error('Erreur lors du chargement des données:', err);
        } finally {
            setLoading(false);
        }
    }, []);

    // Détection mobile
    useEffect(() => {
        const checkIfMobile = () => {
            setOnMobile(window.innerWidth <= 768);
        };

        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);

        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    if (loading) {
        return (
            <div className="services">
                <h1>Nos Services</h1>
                <p>Chargement des services...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="services">
                <h1>Nos Services</h1>
                <p>Erreur: {error}</p>
            </div>
        );
    }
    
    const handleMassageClick = (id: string) => {
        // Si le massage cliqué est déjà sélectionné, on le désélectionne
        if (currentMassageId === id) {
            setCurrentMassageId("");
            setSelectedSousCategorie(null);
            console.log(`Massage désélectionné: ${id}`);
        } else {
            setCurrentMassageId(id);
            // Si on sélectionne le massage suédois, sélectionner par défaut "détente"
            if (id === "suedois") {
                setSelectedSousCategorie("detente");
            } else {
                setSelectedSousCategorie(null);
            }
            console.log(`Massage sélectionné: ${id}`);
        }
    };

    const handleSousCategorieClick = (sousCategorieId: string) => {
        setSelectedSousCategorie(sousCategorieId);
        console.log(`Sous-catégorie sélectionnée: ${sousCategorieId}`);
    };

    // Obtenir le massage actuel et ses données à afficher
    const getCurrentMassageData = () => {
        const currentMassage = massages.find(m => m.id === currentMassageId);
        if (!currentMassage) return undefined;
        
        // Si c'est le massage suédois et qu'une sous-catégorie est sélectionnée
        if (currentMassage.id === "suedois" && selectedSousCategorie && currentMassage.sous_categories) {
            const sousCategorie = currentMassage.sous_categories.find(sc => sc.id === selectedSousCategorie);
            if (sousCategorie) {
                // Retourner les données de la sous-catégorie formatées comme un massage
                return {
                    ...currentMassage,
                    title: `${currentMassage.title} - ${sousCategorie.title}`,
                    description: sousCategorie.description,
                    familles_manoeuvres: sousCategorie.familles_manoeuvres,
                    sequence_massage: sousCategorie.sequence_massage,
                    bienfaits_specifiques: sousCategorie.bienfaits_specifiques,
                    duration: sousCategorie.duration,
                    price: sousCategorie.price
                };
            }
        }
        
        return currentMassage;
    };
   
    return (
        <div className="services">
            <div className="services-hero">
                <h1>Mes services en massothérapie</h1>
                <p>Découvrez tous mes services de massothérapie adaptés à vos besoins.</p>
            </div>
            <div className="service-photo-description">
                <div className="service-photo-container">
                    <div className="service-photo">
                        {massages.map((massage) => (
                            <div key={massage.id}>
                                <h3>{massage.title}</h3>
                                <div 
                                    onClick={() => handleMassageClick(massage.id)} 
                                    className={`service-photo-link ${currentMassageId === massage.id ? 'selected' : ''}`}
                                >
                                    <img 
                                        src={massage.image} 
                                        alt={massage.title}
                                        onError={(e) => {
                                            console.error(`Erreur chargement image pour ${massage.title}`);
                                            e.currentTarget.src = 'https://via.placeholder.com/400x250?text=Image+non+disponible';
                                        }}
                                    />
                                </div>
                                
                                {/* Affichage des sous-catégories pour le massage suédois */}
                                {massage.id === "suedois" && currentMassageId === "suedois" && massage.sous_categories && (
                                    <div style={{ marginTop: '10px' }}>
                                        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
                                            {massage.sous_categories.map((sousCategorie) => (
                                                <button
                                                    key={sousCategorie.id}
                                                    onClick={() => handleSousCategorieClick(sousCategorie.id)}
                                                    style={{
                                                        padding: '8px 16px',
                                                        border: `2px solid ${selectedSousCategorie === sousCategorie.id ? 'rgb(212, 140, 226)' : '#ccc'}`,
                                                        borderRadius: '20px',
                                                        background: selectedSousCategorie === sousCategorie.id ? 'rgb(212, 140, 226)' : 'white',
                                                        color: selectedSousCategorie === sousCategorie.id ? 'white' : '#333',
                                                        cursor: 'pointer',
                                                        fontSize: '14px',
                                                        fontWeight: '500',
                                                        transition: 'all 0.3s ease'
                                                    }}
                                                >
                                                    {sousCategorie.title}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                
                                {onMobile && massage.id === currentMassageId && (
                                    <TypeMassage massageData={getCurrentMassageData()} />
                                )}
                            </div>
                            
                        ))}
                    </div>
                </div>
                {!onMobile && (
                    <div>
                        <TypeMassage massageData={getCurrentMassageData()} />
                    </div>
                )}
            </div>
        </div>

    );
}
