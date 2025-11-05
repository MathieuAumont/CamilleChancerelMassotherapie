import { useEffect , useState} from "react";
import { massoDescData } from "../data/massoDesc";

export default function infoHome() {
    const [texte, setTexte] = useState("");

    useEffect(() => {
        try {
            setTexte(massoDescData.processus);
        } catch (error) {
            console.error("Erreur lors du chargement des données :", error);
        }
    }, []);

    return (                    
    <section className="processus-masso">
        <div className="processus-text">
            <h2>Comment se passe une session de massothérapie avec Camille ?</h2>
            <div className="separator"></div>
            <p>{texte}</p>
        </div>
        <div className="processus-image">
            <img src="https://amassante.com/wp-content/uploads/2017/08/21105942_1463785260370863_2584657923974421102_n.jpg" alt="Processus de massothérapie" /> 
            <img src="https://zoneevolution.com/wp-content/uploads/2024/10/pexels-karolina-grabowska-6629555-scaled.jpg" alt="Processus de massothérapie" /> 
        </div>
    </section> 
    );
}