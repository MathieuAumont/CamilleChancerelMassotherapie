import { useEffect , useState} from "react";

export default function MassoSection() {
    const [texte, setTexte] = useState("");

    useEffect(() => {
    fetch("/MassoDesc.json")
      .then((response) => {
        if (!response.ok) throw new Error("Erreur réseau");
        return response.json();
      })
      .then((data) => {
        setTexte(data.description);
      })
      .catch((error) => console.error("Erreur JSON :", error));
  }, []);

    return (                    
    <section className="masso">
        <h2>Qu'est-ce que la massothérapie?</h2>
        <div className="separator"></div>
        <p>{texte}</p>
    </section> 
    );
}