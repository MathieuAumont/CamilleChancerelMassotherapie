// Types pour les descriptions de massothérapie
export interface TypeMassage {
  img?: string;
  description: string;
  bienfait?: string;
}

export interface MassoDescData {
  processus: string;
  description: string;
  suedois: TypeMassage;
  deepTissue: TypeMassage;
}

export const massoDescData: MassoDescData = {
  "processus": "Lors d'une séance de massage, le client s'allonge sur une table de traitement coussinée. La durée d'une séance peut varier. Demandez conseil à notre équipe, afin de vous assurer d'avoir la durée de traitement qui convient le mieux à votre situation. La durée la plus souvent recommandée est de 60 minutes afin de permettre au corps et à l'esprit de se détendre. Les massothérapeutes utilisent plusieurs techniques de massage pour vous traiter, telles que les longs mouvements, le pétrissage, les mouvements circulaires profonds ou les vibrations. D'ailleurs, nos massothérapeutes sont formés et expérimentés pour détecter les tensions et favoriser le rétablissement de vos blessures. Vous devrez bien sûr répondre à quelques questions de santé afin de s'assurer que le traitement est adapté et que vous êtes à l'aise avec les techniques qui seront utilisées par les praticiens à notre clinique de massothérapie à Longueuil.",

  "description": "C'est une discipline de la médecine douce utilisant la manipulation de la structure musculaire pour régler les maux et les douleurs du corps. Elle traite, entre autres, les muscles, les tissus mous, les tendons et les ligaments. Elle permet aussi de réduire considérablement le stress et de détendre les muscles du corps. Les résultats sur le bien-être sont reconnus scientifiquement et vous pourrez les constater par vous même en faisant affaire avec notre équipe. Que ce soit pour soulager vos douleurs musculaires ou simplement pour vous détendre, l'équipe de massothérapeutes de la clinique Physio Ostéo Longueuil est disponible pour vous servir. Aussi, ce traitement peut être combiné à d'autres approches, tels que la physiothérapie ou l'ostéopathie, afin de vous aider à régler plus rapidement une problématique. Ce sont tous des services que nous offrons à notre clinique de massothérapie à Longueuil.",

  "suedois": {
    "img": "https://lapausehygge.fr/wp-content/uploads/2020/06/i101526-.webp",
    "description": "Le massage suédois est une technique de massage thérapeutique qui utilise des mouvements longs, des pétrissages, des frictions circulaires, des tapotements et des vibrations sur les couches superficielles des muscles. Il vise à détendre les muscles, améliorer la circulation sanguine et lymphatique, réduire le stress et favoriser la relaxation générale du corps. Ce type de massage est souvent utilisé pour soulager les tensions musculaires, améliorer la flexibilité et favoriser le bien-être physique.",
    "bienfait": "Les bienfaits du massage suédois incluent la réduction du stress et de l'anxiété, l'amélioration de la circulation sanguine, la diminution des tensions musculaires, l'augmentation de la flexibilité et de l'amplitude des mouvements, ainsi que la promotion d'un sentiment général de bien-être et de relaxation."
  },

  "deepTissue": {
    "description": "Le massage des tissus profonds est une technique de massage thérapeutique qui cible les couches profondes des muscles et des tissus conjonctifs. Il utilise des mouvements lents et une pression ferme pour libérer les tensions chroniques, les adhérences musculaires et les nœuds. Ce type de massage est souvent recommandé pour soulager les douleurs musculaires persistantes, améliorer la mobilité et favoriser la guérison des blessures. Il peut être plus intense que d'autres formes de massage, mais il est efficace pour traiter les problèmes musculo-squelettiques.",
    "bienfait": "Les bienfaits du massage des tissus profonds incluent la réduction des douleurs musculaires, l'amélioration de la mobilité, la libération des tensions chroniques et la promotion de la guérison des blessures."
  }
};