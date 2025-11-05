import { useEffect , useState} from "react";
import { massoDescData } from "../data/massoDesc";

export default function MassoSection() {
    const [texte, setTexte] = useState("");

    useEffect(() => {
        try {
            setTexte(massoDescData.description);
        } catch (error) {
            console.error("Erreur lors du chargement des données :", error);
        }
    }, []);

    return (                    
    <section className="masso">
        <h2>Qu'est-ce que la massothérapie?</h2>
        <div className="separator"></div>
        <p>{texte}</p>
    </section> 
    );
}