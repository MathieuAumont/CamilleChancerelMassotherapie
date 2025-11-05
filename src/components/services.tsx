
import { useEffect, useState } from "react";
import TypeMassage from "./typeMassage";

interface Massage {
    id: string;
    title: string;
    image: string;
    description: string;
    duration: string;
    price: string;
}

export default function Services() {
    const [massages, setMassages] = useState<Massage[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentMassageId, setCurrentMassageId] = useState<string>("suedois");
    const [onMobile, setOnMobile] = useState(false);

    useEffect(() => {
        const fetchMassages = async () => {
            try {
                setLoading(true);
                const response = await fetch('/massages.json');
                
                if (!response.ok) {
                    throw new Error('Erreur lors du chargement des données');
                }
                
                const data = await response.json();
                setMassages(data.massages);
                setError(null);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Une erreur est survenue');
                console.error('Erreur lors du fetch:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchMassages();
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
        setCurrentMassageId(id);
        console.log(`Massage sélectionné: ${id}`);
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
                                {onMobile && massage.id === currentMassageId && (
                                    <TypeMassage massageId={massage.id} />
                                )}
                            </div>
                            
                        ))}
                    </div>
                </div>
                {!onMobile && (
                    <div>
                        <TypeMassage massageId={currentMassageId} />
                    </div>
                )}
            </div>
        </div>

    );
}
