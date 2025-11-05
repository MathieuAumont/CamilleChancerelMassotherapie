import { useEffect , useState} from "react";

export default function infoHome() {
    const [texte, setTexte] = useState("");

    useEffect(() => {
    fetch("/MassoDesc.json")
      .then((response) => {
        if (!response.ok) throw new Error("Erreur réseau");
        return response.json();
      })
      .then((data) => {
        setTexte(data.processus);
      })
      .catch((error) => console.error("Erreur JSON :", error));
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