// Types pour les données de massage
export interface SystemeEffets {
  nom: string;
  effets: string[];
}

export interface BienfaitsSpecifiques {
  description: string;
  systemes: SystemeEffets[];
}

export interface FamilleManoeuvre {
  nom: string;
  description: string;
  technique?: string;
  buts?: string[];
}

export interface SequenceMassage {
  description: string;
  etapes: string[];
}

export interface DescriptionMassage {
  introduction: string;
  composition: string;
  objectif: string;
}

export interface SousCategorie {
  id: string;
  title: string;
  description: DescriptionMassage | string;
  familles_manoeuvres?: FamilleManoeuvre[];
  sequence_massage?: SequenceMassage;
  bienfaits_specifiques?: BienfaitsSpecifiques;
  duration: string;
  price: string;
}

export interface Massage {
  id: string;
  title: string;
  image: string;
  description: DescriptionMassage | string;
  familles_manoeuvres?: FamilleManoeuvre[];
  sequence_massage?: SequenceMassage;
  bienfaits_specifiques?: BienfaitsSpecifiques;
  duration: string;
  price: string;
  sous_categories?: SousCategorie[];
}

export const massagesData: { massages: Massage[] } = {
  "massages": [
    {
      "id": "suedois",
      "title": "Massage Suédois",
      "image": "https://lapausehygge.fr/wp-content/uploads/2020/06/i101526-.webp",
      "description": {
        "introduction": "Les techniques du massage suédois visent principalement la masse musculaire et les articulations.",
        "composition": "Il est composé de différentes familles de manœuvres spécifiques à l'objectif du soin.",
        "objectif": "Un massage réussi se doit d'être englobant et élaboré selon les besoins du client."
      },
      "familles_manoeuvres": [],
      "sequence_massage": {
        "description": "Les bienfaits du massage se répercutent sur différents systèmes du corps.",
        "etapes": []
      },
      "bienfaits_specifiques": {
        "description": "Voici les bienfaits du massage suédois selon différents systèmes :",
        "systemes": [
          {
            "nom": "Système circulatoire",
            "effets": [
              "Il stimule la circulation sanguine vers le cœur",
              "Il renforce le système immunitaire"
            ]
          },
          {
            "nom": "Système digestif",
            "effets": [
              "Il aide à la digestion",
              "Il encourage grandement l'action du foie"
            ]
          },
          {
            "nom": "Système respiratoire",
            "effets": [
              "Il améliore la capacité du système respiratoire"
            ]
          },
          {
            "nom": "Système urinaire",
            "effets": [
              "Il stimule l'activité des reins"
            ]
          },
          {
            "nom": "Système nerveux",
            "effets": [
              "Il diminue la tension sur le système nerveux périphérique",
              "Il diminue la sécrétion de cortisol, hormone du stress"
            ]
          },
          {
            "nom": "Système musculo-squelettique",
            "effets": [
              "Il améliore la souplesse et débloque les tensions musculaires",
              "Il permet d'éliminer plus rapidement les toxines",
              "Il facilite l'autonettoyage de la peau"
            ]
          }
        ]
      },
      "duration": "90 minutes",
      "price": "100$",
      "sous_categories": [
        {
          "id": "detente",
          "title": "Détente",
          "description": {
            "introduction": "Le massage suédois de détente consiste en un enchaînement consécutif de quatre familles de manœuvres de base sur un segment corporel.",
            "composition": "Il se compose d'effleurages, de foulages, de pétrissages et de drainages.",
            "objectif": "Ce massage vise la relaxation globale du corps et la libération des tensions musculaires."
          },
          "familles_manoeuvres": [
            {
              "nom": "Effleurages",
              "description": "Les effleurages permettent de créer un contact, de relier les différentes familles de manœuvres et de conclure la séquence de la région massée.",
              "technique": "Glissements faits sur la peau avec toute la surface de la main, allant de superficiel à profond."
            },
            {
              "nom": "Foulages",
              "description": "Les foulages sont des glissements répétés des pouces, dont la pression s'effectue en alternance et sous forme d'ouverture en « V ».",
              "buts": [
                "Dissocier, séparer et réchauffer les structures tissulaires sur le même plan",
                "Rechercher les contractures",
                "Informer sur l'état musculaire"
              ]
            },
            {
              "nom": "Pétrissages",
              "description": "Les pétrissages sont des manœuvres profondes permettant une compression, un soulèvement et une torsion de la masse musculaire.",
              "buts": [
                "Associer et dissocier les plans musculaires"
              ]
            },
            {
              "nom": "Drainages",
              "description": "Les drainages sont des glissements lents et progressifs, exécutés de distal à proximal, favorisant la circulation des liquides corporels.",
              "buts": [
                "Favoriser l'équilibre liquidien du corps",
                "Évacuer les déchets libérés par les manœuvres précédentes"
              ]
            }
          ],
          "sequence_massage": {
            "description": "Voici la séquence habituelle des segments massés lors d'un massage suédois de détente (toutes variantes sont permises) :",
            "etapes": [
              "Dos et cou",
              "Cuisse, jambe et pied postérieurs du côté droit ou gauche",
              "Cuisse, jambe et pied postérieurs de l'autre côté",
              "Cuisse, jambe et pied antérieurs du côté droit ou gauche",
              "Cuisse, jambe et pied antérieurs de l'autre côté",
              "Bras, avant-bras et main du côté droit ou gauche",
              "Bras, avant-bras et main de l'autre côté",
              "Région du thorax supérieur",
              "Visage et cuir chevelu"
            ]
          },
          "bienfaits_specifiques": {
            "description": "Les bienfaits principaux du massage de détente sont la relaxation générale, la réduction du stress et l'amélioration de la circulation corporelle.",
            "systemes": []
          },
          "duration": "90 minutes",
          "price": "100$"
        },
        {
          "id": "therapeutique",
          "title": "Thérapeutique",
          "description": {
            "introduction": "Le massage suédois thérapeutique se concentre sur le traitement spécifique des tensions musculaires et des problèmes posturaux.",
            "composition": "Il utilise des techniques plus ciblées et approfondies pour traiter les zones problématiques.",
            "objectif": "Ce massage vise à soulager les douleurs musculaires, améliorer la mobilité et corriger les déséquilibres corporels."
          },
          "familles_manoeuvres": [
            {
              "nom": "Frictions",
              "description": "Mouvements circulaires ou transversaux appliqués avec une pression soutenue pour dénouer les tensions profondes.",
              "buts": [
                "Briser les adhérences tissulaires",
                "Stimuler la circulation locale",
                "Réduire l'inflammation"
              ]
            },
            {
              "nom": "Compressions",
              "description": "Pressions directes et soutenues sur les points de tension pour relâcher les contractures.",
              "buts": [
                "Libérer les trigger points",
                "Détendre les fibres musculaires contractées"
              ]
            },
            {
              "nom": "Étirements",
              "description": "Mobilisations passives et étirements musculaires pour restaurer l'amplitude de mouvement.",
              "buts": [
                "Améliorer la flexibilité",
                "Rétablir l'équilibre musculaire"
              ]
            }
          ],
          "sequence_massage": {
            "description": "La séquence thérapeutique s'adapte aux besoins spécifiques du client :",
            "etapes": [
              "Évaluation posturale et palpation",
              "Traitement des zones prioritaires identifiées",
              "Techniques spécifiques selon les problématiques",
              "Mobilisations articulaires si nécessaire",
              "Étirements et conseils préventifs"
            ]
          },
          "bienfaits_specifiques": {
            "description": "Le massage thérapeutique offre des bénéfices ciblés pour la récupération et la prévention :",
            "systemes": [
              {
                "nom": "Système musculo-squelettique",
                "effets": [
                  "Réduction significative des tensions musculaires",
                  "Amélioration de la posture",
                  "Augmentation de l'amplitude articulaire",
                  "Prévention des blessures"
                ]
              },
              {
                "nom": "Système nerveux",
                "effets": [
                  "Diminution de la douleur chronique",
                  "Amélioration de la proprioception"
                ]
              }
            ]
          },
          "duration": "90 minutes",
          "price": "110$"
        }
      ]
    },
    {
      "id": "deep",
      "title": "Deep Tissue",
      "image": "https://i.ytimg.com/vi/zdyRPzPQrFw/maxresdefault.jpg",
      "description": {
        "introduction": "Le massage Deep Tissue est une technique spécialisée qui cible les couches profondes des muscles et du tissu conjonctif.",
        "composition": "Il utilise des pressions fermes et soutenues, des mouvements lents et délibérés pour atteindre les structures musculaires en profondeur.",
        "objectif": "Ce massage vise à soulager les tensions chroniques, dénouer les adhérences tissulaires et restaurer la mobilité musculaire."
      },
      "familles_manoeuvres": [
        {
          "nom": "Pressions profondes",
          "description": "Application de pressions fermes et graduelles sur les zones de tension pour atteindre les couches musculaires profondes.",
          "technique": "Utilisation des avant-bras, coudes et phalanges pour maximiser la pression.",
          "buts": [
            "Dénouer les nœuds musculaires profonds",
            "Libérer les tensions chroniques",
            "Améliorer la circulation sanguine locale"
          ]
        },
        {
          "nom": "Frictions transversales",
          "description": "Mouvements de friction perpendiculaires aux fibres musculaires pour briser les adhérences.",
          "buts": [
            "Séparer les fibres musculaires collées",
            "Stimuler la régénération tissulaire",
            "Réduire la formation de tissu cicatriciel"
          ]
        },
        {
          "nom": "Relâchement myofascial",
          "description": "Techniques spécifiques pour détendre le fascia et améliorer la glisse entre les structures.",
          "buts": [
            "Restaurer l'élasticité fasciale",
            "Améliorer l'amplitude de mouvement",
            "Réduire les compensations posturales"
          ]
        },
        {
          "nom": "Étirements assistés",
          "description": "Mobilisations passives et étirements pour optimiser l'effet du traitement.",
          "buts": [
            "Consolider les gains obtenus",
            "Prévenir la reformation des tensions",
            "Rééduquer les patterns de mouvement"
          ]
        }
      ],
      "sequence_massage": {
        "description": "Le massage Deep Tissue suit une progression méthodique pour maximiser les bénéfices :",
        "etapes": [
          "Échauffement des tissus avec des techniques superficielles",
          "Évaluation palpatoire des zones de restriction",
          "Application progressive de pressions profondes",
          "Traitement spécifique des trigger points identifiés",
          "Travail fascial et relâchement myofascial",
          "Mobilisations articulaires complémentaires",
          "Étirements thérapeutiques ciblés",
          "Techniques de drainage pour éliminer les toxines",
          "Conseils posturaux et exercices préventifs"
        ]
      },
      "bienfaits_specifiques": {
        "description": "Le massage Deep Tissue offre des bénéfices durables pour la santé musculo-squelettique :",
        "systemes": [
          {
            "nom": "Système musculaire",
            "effets": [
              "Dissolution des nœuds et contractures chroniques",
              "Amélioration de la force et de l'endurance musculaire",
              "Réduction significative des douleurs musculaires",
              "Prévention des blessures récurrentes"
            ]
          },
          {
            "nom": "Système fascial",
            "effets": [
              "Restauration de l'élasticité et de la mobilité fasciale",
              "Amélioration de la coordination inter-musculaire",
              "Réduction des adhérences et compensations"
            ]
          },
          {
            "nom": "Système circulatoire",
            "effets": [
              "Stimulation profonde de la circulation sanguine",
              "Amélioration de l'oxygénation tissulaire",
              "Accélération de l'élimination des déchets métaboliques"
            ]
          },
          {
            "nom": "Système nerveux",
            "effets": [
              "Diminution de l'hyperactivité des points trigger",
              "Amélioration de la conduction nerveuse",
              "Réduction des douleurs neuropathiques"
            ]
          }
        ]
      },
      "duration": "75 minutes",
      "price": "110$"
    },
    {
      "id": "lymphatique",
      "title": "Drainage Lymphatique",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdyezOuYJBSureZvw2_WB-1s5Q15Jt-hIFtA&s",
      "description": {
        "introduction": "Le drainage lymphatique manuel est une technique douce et spécialisée qui stimule la circulation de la lymphe dans l'organisme.",
        "composition": "Il se compose de mouvements lents, rythmés et précis qui suivent le trajet des vaisseaux lymphatiques.",
        "objectif": "Ce massage vise à améliorer l'élimination des toxines, réduire la rétention d'eau et renforcer le système immunitaire."
      },
      "familles_manoeuvres": [
        {
          "nom": "Pompage",
          "description": "Mouvements de pression-relâchement rythmés qui imitent le fonctionnement naturel des vaisseaux lymphatiques.",
          "technique": "Pressions douces et progressives avec la paume des mains en direction des ganglions lymphatiques.",
          "buts": [
            "Stimuler la contraction des vaisseaux lymphatiques",
            "Faciliter la progression de la lymphe",
            "Activer le drainage naturel"
          ]
        },
        {
          "nom": "Appel ganglionnaire",
          "description": "Stimulation spécifique des principaux groupes ganglionnaires pour optimiser leur fonction de filtration.",
          "buts": [
            "Préparer les ganglions à recevoir la lymphe",
            "Améliorer la capacité de filtration",
            "Réduire l'engorgement ganglionnaire"
          ]
        },
        {
          "nom": "Résorption",
          "description": "Techniques spécifiques pour drainer les zones d'œdème et de rétention liquidienne.",
          "buts": [
            "Réduire les gonflements et l'œdème",
            "Améliorer la réabsorption des liquides",
            "Soulager la sensation de lourdeur"
          ]
        },
        {
          "nom": "Évacuation",
          "description": "Mouvements dirigés vers les voies de drainage principales pour faciliter l'élimination.",
          "technique": "Glissements légers et directionnels vers les collecteurs lymphatiques majeurs.",
          "buts": [
            "Optimiser l'évacuation des déchets",
            "Prévenir la stagnation lymphatique",
            "Maintenir la fluidité circulatoire"
          ]
        }
      ],
      "sequence_massage": {
        "description": "Le drainage lymphatique suit un protocole précis respectant l'anatomie du système lymphatique :",
        "etapes": [
          "Préparation et stimulation des ganglions centraux (cou, aisselles)",
          "Drainage de la région cervicale et faciale",
          "Traitement des membres supérieurs (bras, avant-bras, mains)",
          "Drainage du thorax et de la région abdominale",
          "Stimulation des ganglions inguinaux",
          "Traitement des membres inférieurs (cuisses, jambes, pieds)",
          "Drainage du dos et finalisation",
          "Temps de repos pour optimiser l'effet"
        ]
      },
      "bienfaits_specifiques": {
        "description": "Le drainage lymphatique apporte des bénéfices multisystémiques pour la santé globale :",
        "systemes": [
          {
            "nom": "Système lymphatique",
            "effets": [
              "Amélioration de 40% de la circulation lymphatique",
              "Réduction significative des œdèmes et gonflements",
              "Optimisation de l'élimination des toxines",
              "Prévention de la stagnation lymphatique"
            ]
          },
          {
            "nom": "Système immunitaire",
            "effets": [
              "Renforcement des défenses naturelles",
              "Amélioration de la production d'anticorps",
              "Stimulation de l'activité des globules blancs",
              "Réduction de la fatigue chronique"
            ]
          },
          {
            "nom": "Système circulatoire",
            "effets": [
              "Amélioration du retour veineux",
              "Réduction de la sensation de jambes lourdes",
              "Diminution de la rétention d'eau",
              "Prévention des troubles circulatoires"
            ]
          },
          {
            "nom": "Système digestif",
            "effets": [
              "Amélioration du transit intestinal",
              "Réduction des ballonnements",
              "Optimisation de l'absorption des nutriments"
            ]
          },
          {
            "nom": "Bien-être général",
            "effets": [
              "Sensation de légèreté et détente profonde",
              "Amélioration de la qualité du sommeil",
              "Réduction du stress et de l'anxiété",
              "Effet anti-âge sur la peau"
            ]
          }
        ]
      },
      "duration": "75 minutes",
      "price": "105$"
    }
  ]
};