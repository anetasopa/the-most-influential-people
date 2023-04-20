import "./styles.css";
import React, { useState } from "react";
import { Popup2 } from "./Popup2/popup";

const MATHEMATICIAN = "MATHEMATICIAN";
const PHYSICIST = "PHYSICIST";
const CHEMIST = "CHEMIST";
const ASTRONOMER = "ASTRONOMER";
const ALCHEMISTS = "ALCHEMISTS";
const THEOLOGIAN = "THEOLOGIAN";
const CRAFTSMAN = "CRAFTSMAN";
const PRINTER = "PRINTER";
const GOLDSMITH = "GOLDSMITH";
const INVENTOR = "INVENTOR";
const ARTIST = "ARTIST";
const PRIEST = "PRIEST";
const HYMNWRITER = "HYMNWRITER";
const PROFESSOR = "PROFESSOR";
const AUTHOR = "AUTHOR";
const FRIAR = "FRIAR";
const NATURALIST = "NATURALIST";
const GEOLOGIST = "GEOLOGIST";
const BIOLOGIST = "BIOLOGIST";
const PLAYWRIGHT = "PLAYWRIGHT";
const POET = "POET";
const ACTOR = "ACTOR";
const EXPLORER = "EXPLORER";
const NAVIGATOR = "NAVIGATOR";
const PHILOSOPHER = "PHILOSOPHER";
const ECONOMIST = "ECONOMIST";
const HISTORIAN = "HISTORIAN";
const SOCIOLOGIST = "SOCIOLOGIST";
const JOURNALIST = "JOURNALIST";
const POLYMATH = "POLYMATH";
const PAINTER = "PAINTER";
const DRAUGHTSMAN = "DRAUGHTSMAN";
const ENGINEER = "ENGINEER";
const SCIENTIST = "SCIENTIST";
const THEORIST = "THEORIST";
const ARCHITECT = "ARCHITECT";
const PSYCHOANALYST = "PSYCHOANALYST";
const NEUROLOGIST = "NEUROLOGIST";
const MICROBIOLOGIST = "MICROBIOLOGIST";
const BUSINESSMAN = "BUSINESSMAN";
const LAWYER = "LAWYER";
const PRESIDENT = "PRESIDENT";
const POLITICIAN = "POLITICIAN";
const ANTICOLONIALIST = "ANTICOLONIALIST";
const PHYSICIAN = "PHYSICIAN";
const SCULPTOR = "SCULPTOR";
const OFFICER = "OFFICER";
const STATESMAN = "STATESMAN";
const SURVEYOR = "SURVEYOR";
const RULER = "RULER";
const THINKER = "THINKER";
const COMPOSER = "COMPOSER";
const VIOLINIST = "VIOLINIST";
const MILITARY = "MILITARY";
const KING = "KING";
const EMPEROR = "EMPEROR";
const MUSICIAN = "MUSICIAN";
const INDUSTRIALIST = "INDUSTRIALIST";
const PHILANTHROPIST = "PHILANTHROPIST";
const PIANIST = "PIANIST";

const tags = [
  PIANIST,
  PHILANTHROPIST,
  INDUSTRIALIST,
  MUSICIAN,
  MILITARY,
  KING,
  EMPEROR,
  VIOLINIST,
  COMPOSER,
  THINKER,
  RULER,
  SURVEYOR,
  STATESMAN,
  OFFICER,
  PHYSICIAN,
  PRESIDENT,
  ANTICOLONIALIST,
  POLITICIAN,
  LAWYER,
  BUSINESSMAN,
  MICROBIOLOGIST,
  PSYCHOANALYST,
  NEUROLOGIST,
  THEORIST,
  SCULPTOR,
  ARCHITECT,
  SCIENTIST,
  DRAUGHTSMAN,
  MATHEMATICIAN,
  PHYSICIST,
  CHEMIST,
  PHILOSOPHER,
  ASTRONOMER,
  ALCHEMISTS,
  THEOLOGIAN,
  CRAFTSMAN,
  PRINTER,
  GOLDSMITH,
  INVENTOR,
  ARTIST,
  PRIEST,
  HYMNWRITER,
  PROFESSOR,
  AUTHOR,
  FRIAR,
  NATURALIST,
  GEOLOGIST,
  BIOLOGIST,
  PLAYWRIGHT,
  POET,
  ACTOR,
  EXPLORER,
  NAVIGATOR,
  ECONOMIST,
  HISTORIAN,
  SOCIOLOGIST,
  JOURNALIST,
  POLYMATH,
  ENGINEER,
  PAINTER
];

const data = {
  1: {
    id: 1,
    img:
      "https://www.ardalpha.de/wissen/geschichte/historische-persoenlichkeiten/gutenberg-johannes-buchdruck-druck-erfinder-114~_v-img__3__4__xl_-f4c197f4ebda83c772171de6efadd3b29843089f.jpg?version=af442",
    name: "Johann Gutenberg",
    born: "1393",
    died: "1468",
    century: "14",
    tags: [CRAFTSMAN, INVENTOR],
    links: [
      {
        link: "https://en.wikipedia.org/wiki/Johannes_Gutenberg",
        linkText: "https://en.wikipedia.org..."
      }
    ],
    infos: [
      {
        inf: "His place of residence was Germany."
      },
      {
        inf: "He created the world's first industrial-scale printing method."
      },
      {
        inf:
          "He also had a direct impact on the development of the Renaissance, Reformation and humanist movement."
      }
    ]
  },
  2: {
    id: 2,
    img:
      "data:image/jpeg;base64,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",
    name: "Isaac Newton",
    born: "1643",
    died: "1727",
    century: "17",
    tags: [MATHEMATICIAN, PHYSICIST, ASTRONOMER, ALCHEMISTS, THEOLOGIAN],
    links: [
      {
        link: "https://en.wikipedia.org/wiki/Isaac_Newton",
        linkText: "https://en.wikipedia.org..."
      },
      {
        link:
          "https://scienceready.com.au/pages/particle-and-wave-model-of-light#:~:text=Newton's%20model%20of%20light%20proposes,human%20eye%2C%20obey%20Newtonian%20physics.",
        linkText: "https://scienceready.com.au/pages...",
        linkName: "Model of Light:"
      },
      {
        link: "https://www.animations.physics.unsw.edu.au/jw/calculus.htm",
        linkText: "https://www.animations.physics...",
        linkName: "Calculus:"
      },

      {
        link:
          "https://ecuip.lib.uchicago.edu/multiwavelength-astronomy/optical/history/04.html",
        linkText: "https://ecuip.lib.uchicago.edu...",
        linkName: "Newton’s Reflecting Telescope:"
      }
    ],
    infos: [
      {
        inf: "He was from England."
      },
      {
        inf:
          "The crowning place is occupied by the formulation of the physical law of universal gravitation and the law of motion."
      },
      {
        inf:
          "In the field of mathematics, Newton developed the integral and differential calculus."
      },
      {
        inf: "He said that light is made up of particles."
      },
      {
        inf:
          "He was the creator of the first reflecting telescope and measured speed."
      },
      {
        inf:
          "Newton also gave a scientifically convincing explanation for the origin of celestial bodies."
      },
      {
        inf:
          "He led to the discovery that ordinary white light consists of a mixture of all the colors contained in the rainbow."
      }
    ]
  },
  3: {
    id: 3,
    img:
      "data:image/jpeg;base64,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",
    name: "Martin Luther",
    born: "1483",
    died: "1546",
    century: "15",
    tags: [PRIEST, HYMNWRITER, PROFESSOR, AUTHOR, THEOLOGIAN, FRIAR],
    links: [
      {
        link: "https://en.wikipedia.org/wiki/Martin_Luther",
        linkText: "https://en.wikipedia.org..."
      },
      {
        link:
          "https://www.christianstudylibrary.org/article/william-tyndale-translator-bible",
        linkText: "https://www.christianstudylibrary.org...",
        linkName: "Tyndale Bible:"
      }
    ],
    infos: [
      {
        inf: "He was from German."
      },
      {
        inf:
          "He is the seminal figure of the Protestant Reformation and the namesake of Lutheranism."
      },
      {
        inf:
          "He came to reject several teachings and practices of the Roman Catholic Church. He questioned the view of indulgences. He believed that man can be saved only by the grace of God, not by indulgences or good works."
      },
      {
        inf:
          "His translation of the Bible into the German native language made it more accessible to the laity, which greatly influenced both the Church and German culture. He also influenced the writing of the English translation, the Tyndale Bible."
      }
    ]
  },
  4: {
    id: 4,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzTuObjgJIC112DiUQ4mKzRML95ceYhFNReg&usqp=CAU",
    name: "Charles Darwin",
    born: "1809",
    died: "1882",
    century: "19",
    tags: [NATURALIST, GEOLOGIST, BIOLOGIST],
    links: [
      {
        link: "https://en.wikipedia.org/wiki/Charles_Darwin",
        linkText: "https://en.wikipedia.org..."
      },
      {
        link: "https://www.vliz.be/docs/Zeecijfers/Origin_of_Species.pdf",
        linkText: "https://www.vliz.be/docs...",
        linkName: "Book:"
      }
    ],
    infos: [
      {
        inf: "He was from England."
      },
      {
        inf:
          "Creator of the theory of evolution, which says that all species of life are descended from a common early ancestor."
      }
    ]
  },
  5: {
    id: 5,
    img:
      "data:image/jpeg;base64,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",
    name: "William Shakespeare",
    born: "1564",
    died: "1616",
    century: "16",
    tags: [PLAYWRIGHT, POET, ACTOR],
    links: [
      {
        link: "https://en.wikipedia.org/wiki/Johannes_Gutenberg",
        linkText: "https://en.wikipedia.org..."
      },
      {
        link:
          "https://www.shakespeare.org.uk/explore-shakespeare/shakespedia/shakespeares-plays/romeo-and-juliet/",
        linkText: "https://www.shakespeare.org...",
        linkName: "Romeo and Juliet:"
      }
    ],
    infos: [
      {
        inf: "He was from Englad."
      },
      {
        inf:
          "He is widely regarded as the greatest writer in the English language and theater reformers."
      },
      {
        inf:
          "His early plays were primarily comedies and histories. Then he wrote mainly tragedies such as  Hamlet, Romeo and Juliet, Othello, King Lear, and Macbeth."
      },
      {
        inf:
          "In the last phase of his life, he wrote tragicomedies and collaborated with other playwrights."
      }
    ]
  },
  6: {
    id: 6,
    img:
      "data:image/jpeg;base64,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",
    name: "Christopher Columbus",
    born: "1451",
    died: "1506",
    century: "15",
    tags: [CRAFTSMAN],
    links: [
      {
        link: "https://en.wikipedia.org/wiki/Christopher_Columbus",
        linkText: "https://en.wikipedia.org..."
      },
      {
        link:
          "https://www.thoughtco.com/fourth-new-world-voyage-christopher-columbus-2136698",
        linkText: "https://www.thoughtco.com...",
        linkName: "The Fourth Voyage:"
      }
    ],
    infos: [
      {
        inf: "He was born in Portugal."
      },
      {
        inf: "He discovered America."
      },
      {
        inf: "He completed four voyages across the Atlantic Ocean."
      }
    ]
  },
  7: {
    id: 7,
    img:
      "data:image/jpeg;base64,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",
    name: "Karl Marx",
    born: "1818",
    died: "1883",
    century: "19",
    tags: [PHILOSOPHER, ECONOMIST, HISTORIAN, SOCIOLOGIST, JOURNALIST],
    links: [
      {
        link: "https://en.wikipedia.org/wiki/Karl_Marx",
        linkText: "https://en.wikipedia.org..."
      },
      {
        link: "https://www.britannica.com/topic/critical-theory",
        linkText: "https://www.britannica.com...",
        linkName: "Critical theory:"
      },
      {
        link: "http://cgpi.org/338",
        linkText: "http://cgpi.org...",
        linkName: "Scientific socialism:"
      }
    ],
    infos: [
      {
        inf: "He was born in Germany."
      },
      {
        inf:
          "Creator of scientific socialism, co-founder of the First International."
      },
      {
        inf:
          "The most famous pamphlet titles he wrote are The Communist Manifesto and Das Kapital."
      },
      {
        inf:
          "He was critical of political economy, which influenced later intellectual, economic and political history."
      }
    ]
  },
  8: {
    id: 8,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkV-mlUMWYDqm-aRWiy6fE0qqXCES8WjGifw&usqp=CAU",
    name: "Albert Einstein",
    born: "1879",
    died: "1955",
    century: "19",
    tags: [PHYSICIST],
    links: [
      {
        link: "https://en.wikipedia.org/wiki/Albert_Einstein",
        linkText: "https://en.wikipedia.org..."
      },
      {
        link:
          "https://www.forbes.com/sites/startswithabang/2018/01/23/the-three-meanings-of-emc2-einsteins-most-famous-equation/?sh=6b5a8a9571c0",
        linkText: "https://www.forbes.com/sites/...",
        linkName: "E=mc^2:"
      },
      {
        link: "https://www.newscientist.com/definition/quantum-mechanics/",
        linkText: "https://www.newscientist.com...",
        linkName: "Quantum mechanics:"
      },
      {
        link:
          "https://www.aljazeera.com/wp-content/uploads/2021/10/INTERACTIVE-Nobel-Prize-Categories.png?w=770&resize=770%2C770&quality=80",
        linkText: "https://www.aljazeera.com/wp-content/...",
        linkName: "Nobel Prize 1901-2021:"
      },
      {
        link: "https://www.vedantu.com/physics/einsteins-explaination",
        linkText: "hhttps://www.vedantu.com/physics/...",
        linkName: "Photoelectric Effect:"
      },
      {
        link:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRNak5C10xlzcgErKUeMf_GFNw6eveQZlvAg&usqp=CAU",
        linkText: "https://encrypted-tbn0.gstatic.com/images...",
        linkName: "Photoelectric Effect - image:"
      },
      {
        link:
          "https://scitechdaily.com/einsteins-general-relativity-theory-beginning-to-fray-at-the-edges/",
        linkText: "https://scitechdaily.com...",
        linkName: "General Relativity:"
      }
    ],
    infos: [
      {
        inf: "Albert Einstein was born in Germany."
      },
      {
        inf:
          "He developed the theory of relativity (E = mc2) and quantum mechanics, where he believed that the laws of classical mechanics could no longer be reconciled with the laws of the electromagnetic field."
      },
      {
        inf:
          "He received the Nobel Prize in Physics in 1921 for theoretical physics and the discovery of the law of the photoelectric effect."
      },
      {
        inf:
          "Einstein's published four papers on the theory of the photoelectric effect which explained Brownian motion by introducing special relativity and showed the equivalence of mass and energy."
      },
      {
        inf:
          " He also studied the thermal properties of light and the quantum theory of radiation, which laid the foundations for the photon theory of light."
      }
    ]
  },
  9: {
    id: 9,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjTK8dBy6_qlQR5GzWZBQA31G9w5JqXPtapw&usqp=CAU",
    name: "Nicolaus Copernicus",
    born: "1473",
    died: "1543",
    century: "15",
    tags: [POLYMATH, MATHEMATICIAN, ASTRONOMER],
    links: [
      {
        link: "https://en.wikipedia.org/wiki/Nicolaus_Copernicus",
        linkText: "https://en.wikipedia.org..."
      },
      {
        link:
          "https://www.astronomytrek.com/who-discovered-the-earth-moves-around-the-sun/",
        linkText: "https://www.astronomytrek.com...",
        linkName: "The Earth Moves Around The Sun:"
      },
      {
        link: "http://copernicus.torun.pl/en/science/economics/4/",
        linkText: "http://copernicus.torun...",
        linkName: "On the Minting of Coin:"
      },
      {
        link:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/De_revolutionibus_orbium_coelestium.jpg/200px-De_revolutionibus_orbium_coelestium.jpg",
        linkText: "https://upload.wikimedia.org/...",
        linkName: "On the Revolutions of the Celestial Spheres:"
      }
    ],
    infos: [
      {
        inf: "Nicolaus Copernicus was born in Poland."
      },
      {
        inf:
          "He discovered that the Earth revolves around the Sun, and not vice versa, as previously thought"
      },
      {
        inf:
          "He was also a very good economist. He was the originator of the fact that a weaker, corrupted coin displaces a good coin."
      },
      {
        inf:
          'His most important work is the treatise "On the Revolutions of the Celestial Spheres", in which he described the heliocentric vision of the universe.'
      }
    ]
  },
  10: {
    id: 10,
    img:
      "data:image/jpeg;base64,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",
    name: "Galileo Galilei",
    born: "1564",
    died: "1642",
    century: "16",
    tags: [ASTRONOMER, PHYSICIST, ENGINEER],
    links: [
      {
        link: "https://en.wikipedia.org/wiki/Galileo_Galilei",
        linkText: "https://en.wikipedia.org..."
      },
      {
        link: "https://scienceprojectideasforkids.com/galileos-pendulum-exp/",
        linkText: "https://scienceprojectideasforkids.com...",
        linkName: "Galileo’s Pendulum Experiment:"
      },
      {
        link:
          "https://science.howstuffworks.com/how-does-a-galileo-thermometer-work.htm",
        linkText: "https://science.howstuffworks.com...",
        linkName: "Galileo thermoscope:"
      },
      {
        link:
          "https://wikisummaries.org/galileo-confirms-the-heliocentric-model-of-the-solar-system/",
        linkText: "https://wikisummaries.org/galileo...",
        linkName: "Holicentrism:"
      }
    ],
    infos: [
      {
        inf: "Galileo Galilei was from Italy."
      },
      {
        inf:
          "He dealt with the science and technology describing the properties of pendulums and 'hydrostatic scales'."
      },
      {
        inf:
          "Galileo studied speed and velocity, gravity and free fall, the principle of relativity, inertia, projectile motion."
      },
      {
        inf:
          "He invented the thermoscope and used it for scientific observations of celestial bodies."
      },
      {
        inf:
          "He advocated Copernican holicentrism. This met with opposition from the Catholic Church because it was contrary to Scripture. Therefore, he was considered to preach heresy. As a result, he was placed under house arrest for the rest of his life."
      }
    ]
  },
  11: {
    id: 11,
    img:
      "data:image/jpeg;base64,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",
    name: "Leonardo da Vinci",
    born: "1452",
    died: "1519",
    century: "15",
    tags: [PAINTER, THEORIST, SCULPTOR, ARCHITECT, SCIENTIST, DRAUGHTSMAN],
    links: [
      {
        link: "https://en.wikipedia.org/wiki/Leonardo_da_Vinci",
        linkText: "https://en.wikipedia.org..."
      },
      {
        link: "https://www.leonardodavinci.net/drawings.jsp",
        linkText: "https://www.leonardodavinci.net...",
        linkName: "Paintings, Drawings, Quotes:"
      },
      {
        link:
          " https://lithub.com/how-leonardo-da-vinci-became-the-ultimate-renaissance-man/",
        linkText: "https://lithub.com...",
        linkName: "Ultimate Renaissance Man:"
      },
      {
        link:
          " https://historylists.org/other/9-incredible-leonardo-da-vinci-inventions.html",
        linkText: "https://historylists.org/other...",
        linkName: "Leonardo da Vinci Inventions:"
      }
    ],
    infos: [
      {
        inf: "Leonardo da Vinci was from Italy."
      },
      {
        inf:
          "He is widely regarded as a genius who embodied the Renaissance ideal of a humanist."
      },
      {
        inf:
          "Although he was a popular painter, he also made drawings and notes on equal sheets."
      },
      {
        inf:
          "Leonardo is known as one of the greatest painters in the history of art and is often credited with creating the Great Renaissance."
      },
      {
        inf:
          "He painted, among others, 'Mona Lisa', 'The Last Supper' and the drawing of 'The Vitruvian Man'."
      },
      {
        inf:
          "He also made significant discoveries in anatomy, civil engineering, hydrodynamics, geology, optics and tribology. However, he did not publish his discoveries, which meant that they had little or no direct impact on later science."
      }
    ]
  },
  12: {
    id: 12,
    img:
      "data:image/jpeg;base64,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",
    name: "Sigmund Freud",
    born: "1856",
    died: "1939",
    century: "19",
    tags: [PSYCHOANALYST, NEUROLOGIST],
    links: [
      {
        link: "https://en.wikipedia.org/wiki/Leonardo_da_Vinci",
        linkText: "https://en.wikipedia.org..."
      },
      {
        link: "https://positivepsychology.com/psychoanalysis/",
        linkText: "https://positivepsychology.com...",
        linkName: "Freud’s Psychoanalytic Theory:"
      },
      {
        link:
          "https://www.tutorialspoint.com/the-interpretation-of-dreams-sigmund-freud",
        linkText: "https://www.tutorialspoint.com...",
        linkName: "The Interpretation of Dreams:"
      },
      {
        link: "https://www.thoughtco.com/oedipus-complex-4582398",
        linkText: " https://www.thoughtco.com/oedipus...",
        linkName: "Oedipus Complex:"
      },
      {
        link: "https://journals.sagepub.com/doi/10.1177/0003065119858947",
        linkText: "https://journals.sagepub.com...",
        linkName: "Psychology of Women:"
      }
    ],
    infos: [
      {
        inf: "Freud was born to Galician Jewish parents in the Austrian Empire."
      },
      {
        inf:
          "He qualified as a doctor of medicine in 1881 at the University of Vienna."
      },
      {
        inf:
          "He developed therapeutic techniques such as the use of free association and discovered transference, establishing its central role in the analytic process."
      },
      {
        inf:
          "He analyzed dreams, which provided him with models for the clinical analysis of symptom formation and underlying mechanisms of repression, that is, a defense mechanism consisting in removing from consciousness thoughts, feelings, desires that cause fear or guilt."
      },
      {
        inf: "He formulated the theory of the Oedipus complex."
      },
      {
        inf:
          "He was a traditionalist in relation to women, which means that he saw them through the prism of such qualities as: passivity, submission, passivity."
      }
    ]
  },
  13: {
    id: 13,
    img:
      "data:image/jpeg;base64,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",
    name: "Louis Pasteur",
    born: "1822",
    died: "1895",
    century: "19",
    tags: [MICROBIOLOGIST, CHEMIST],
    links: [
      {
        link: "https://en.wikipedia.org/wiki/Louis_Pasteur",
        linkText: "https://en.wikipedia.org..."
      },
      {
        link:
          "https://www.cdc.gov/mmwr/preview/mmwrhtml/00000572.htm#:~:text=On%20July%206%2C%201885%2C%20Louis,rabid%20dog%202%20days%20before.",
        linkText: "https://www.cdc.gov/mmwr/preview/mmwrhtml...",
        linkName: "Rabies vaccine:"
      },
      {
        link:
          "https://chemaust.raci.org.au/article/september%E2%80%93november-2020/louis-pasteur-his-chemistry-and-microbiology.html",
        linkText: "https://chemaust.raci.org.au/article...",
        linkName: "Microbiology and chemistry:"
      }
    ],
    infos: [
      {
        inf: "Louis Pasteur comes from France."
      },
      {
        inf:
          "He is known for the principles of inoculation, microbial fermentation and pasteurization."
      },
      {
        inf:
          "Creator of the rabies vaccine. It was he who first produced the first effective serum against this disease in 1885."
      },
      {
        inf:
          "He invented two molecules of tartaric acid enantiomers, which allowed to create the idea of stereochemistry, and also changed the approach to organic foods in medicine, mainly in the field of prebiotics."
      },
      {
        inf:
          'It is from his name that the method of food preservation called "pasteurization" was named, which he developed in the study of fermentation processes. Its main assumption is thermal treatment.'
      }
    ]
  },
  14: {
    id: 14,
    img:
      "data:image/jpeg;base64,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",
    name: "Thomas Edison",
    born: "1847",
    died: "1931",
    century: "19",
    tags: [BUSINESSMAN, INVENTOR],
    links: [
      {
        link: "https://en.wikipedia.org/wiki/Thomas_Edison",
        linkText: "https://en.wikipedia.org..."
      },
      {
        link:
          "data:image/jpeg;base64,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",
        linkText: "data:image/jpeg;base64,/9j/4AAQSk...",
        linkName: "Phonograph:"
      },
      {
        link:
          "https://www.livescience.com/43424-who-invented-the-light-bulb.html",
        linkText: "https://www.livescience.com/43424...",
        linkName: "Lightbulb:"
      },
      {
        link:
          "https://www.nutsvolts.com/uploads/wygwam/NV_0212_Noon_historical_photo_01_battery_ad_+_new.jpg",
        linkText: "https://www.nutsvolts.com/uploads/wygwam...",
        linkName: "Alkaline battery:"
      },
      {
        link:
          "https://www.businessinsider.com/little-known-thomas-edison-inventions-stories-photos#alkaline-batteries-1",
        linkText: "https://www.businessinsider.com/little...",
        linkName: "Invetions:"
      }
    ],
    infos: [
      {
        inf: "He was born in United States."
      },
      {
        inf:
          "Edison created the phonograph (voice recorder), which enabled the later production of gramophones, gramophones, records and players."
      },
      {
        inf: "Edison patented the electric light bulb."
      },
      {
        inf:
          "He built an alkaline battery and the world's first municipal power plant."
      },
      {
        inf:
          "These achievements of Thomas Edison also include a DC motor, a gramophone record, an oscilloscope, a film camera with simultaneous sound recording on a film tape, which he also improved with perforation."
      },
      {
        inf:
          "He created a movie projector to play sound movies, where before the cinema was silent."
      },
      {
        inf: "It was Edison who was also the precursor of helicopters."
      },
      {
        inf:
          'He was also the founder of the well-known and respected scientific journal "Science" (1880).'
      }
    ]
  },
  15: {
    id: 15,
    img:
      "data:image/jpeg;base64,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",
    name: "Thomas Jefferson",
    born: "1743",
    died: "1826",
    century: "18",
    tags: [POLITICIAN, LAWYER],
    links: [
      {
        link: "https://en.wikipedia.org/wiki/Thomas_Jefferson",
        linkText: "https://en.wikipedia.org..."
      }
    ],
    infos: [
      {
        inf: "He was born in United States."
      },
      {
        inf:
          "He served as the third president of the United States from 1801 to 1809."
      },
      {
        inf:
          "He was one of the authors of the United States Declaration of Independence."
      },
      {
        inf:
          "He believed that drinking wine should be celebrated - tasting, feeling the emotions, culture and history associated with wine. He understood the social function of wine, the art of knowing how to drink."
      }
    ]
  },
  16: {
    id: 16,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa2zVspOWTKICvqrD_W0ErKhJYRjJZLJGmLA&usqp=CAU",
    name: "Adolf Hitler",
    born: "1889",
    died: "1945",
    century: "19",
    tags: [POLITICIAN, PRESIDENT],
    links: [
      {
        link: "https://en.wikipedia.org/wiki/Adolf_Hitler",
        linkText: "https://en.wikipedia.org..."
      },
      {
        link: "https://www.britannica.com/biography/Adolf-Hitler/World-War-II",
        linkText: "https://www.britannica.com/biography...",
        linkName: "World War II:"
      }
    ],
    infos: [
      {
        inf: "He was from Germany."
      },
      {
        inf: "He initiated World War II in Europe."
      },
      {
        inf:
          "Adolf Hitler was appointed Chancellor of the Reich on January 30, 1933."
      },
      {
        inf: "In March 1938, Adolf Hitler annexed Austria."
      },
      {
        inf:
          "On April 30, 1945, at a time when Germany was close to defeat on the Eastern Front and Soviet troops were capturing Berlin, Hitler Adolf ended his life in his bunker."
      }
    ]
  },
  17: {
    id: 17,
    img:
      "data:image/jpeg;base64,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",
    name: "Mahatma Gandhi",
    born: "1869",
    died: "1948",
    century: "19",
    tags: [LAWYER, POLITICIAN, ANTICOLONIALIST],
    links: [
      {
        link: "https://en.wikipedia.org/wiki/Mahatma_Gandhi",
        linkText: "https://en.wikipedia.org..."
      },
      {
        link:
          "https://www.sahistory.org.za/article/gandhi-and-passive-resistance-campaign-1907-1914",
        linkText: "https://www.sahistory.org.za/article/gandhi...",
        linkName: "Passive Resistance Campaign:"
      },
      {
        link:
          "https://www.firstpost.com/india/mahatma-gandhis-salt-march-heres-everything-you-need-to-know-about-historic-event-10450451.html",
        linkText: "https://www.firstpost.com/india/mahatma-gandhis...",
        linkName: "Salt March:"
      }
    ],
    infos: [
      {
        inf: "He was from India."
      },
      {
        inf:
          "He was involved in social campaigns aimed at respecting the rights of people of color."
      },
      {
        inf:
          "Gandhi began to propagate the idea of 'passive resistance', based on non-violence, but the promotion of one's own culture, silent disobedience to the authorities and economic boycott."
      },
      {
        inf:
          "In 1930, Gandhi organized so-called 'salt march', which is a form of protest against new taxes."
      }
    ]
  },
  18: {
    id: 18,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9IgBGfnCsNyZFrvXkPBm_nGSDkVIBrrpv-A&usqp=CAU",
    name: "John Locke",
    born: "1632",
    died: "1704",
    century: "17",
    tags: [PHILOSOPHER, PHYSICIAN, ECONOMIST],
    links: [
      {
        link: "https://en.wikipedia.org/wiki/John_Locke",
        linkText: "https://en.wikipedia.org..."
      },
      {
        link: "https://www.britannica.com/event/Rye-House-Plot",
        linkText: "https://www.britannica.com/event...",
        linkName: "Salt March:"
      },
      {
        link: "https://www.thelivingphilosophy.com/what-is-empiricism/",
        linkText: "https://www.thelivingphilosophy.com...",
        linkName: "What is empiricism?"
      },
      {
        link: "https://www.thecollector.com/who-is-john-locke/",
        linkText: "https://www.thecollector.com/...",
        linkName: "The Father of Liberalism:"
      }
    ],
    infos: [
      {
        inf: "He was born at Wrington, Somerset, England."
      },
      {
        inf:
          "He exposed a plot against King Charles II in which Lord Shaftesbury was involved and then Locke had to flee the country."
      },
      {
        inf: "One of Locke's areas of interest was genetic empiricism."
      },
      {
        inf:
          'He claimed that the human mind is a "blank, unwritten slate", which is filled with content only by internal and external experience.'
      },
      {
        inf:
          "He believed that man should pursue his own interests and be guided by reason, not authority."
      },
      {
        inf: "He was in favor of economic freedom."
      },
      {
        inf:
          "He painted a picture of a liberal constitutional state, based on the principles of tolerance and a system of laws that would guarantee it."
      },
      {
        inf:
          "He constructed a simple in form quantitative theory of money and introduced to it a quantity similar to the later concept of the velocity of money circulation"
      }
    ]
  },
  19: {
    id: 19,
    img:
      "data:image/jpeg;base64,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",
    name: "Michelangelo",
    born: "1475",
    died: "1564",
    century: "15",
    tags: [SCULPTOR, PAINTER, ARCHITECT, POET],
    links: [
      {
        link: "https://en.wikipedia.org/wiki/Michelangelo",
        linkText: "https://en.wikipedia.org..."
      },
      {
        link:
          "https://everything-everywhere.com/michelangelo-the-greatest-artist-of-the-renaissance/",
        linkText: "https://everything-everywhere.com/michelangelo...",
        linkName: "Michelangelo:"
      }
    ],
    infos: [
      {
        inf: "He was from Italy."
      },
      {
        inf:
          "He belongs to the three greatest artists of the Renaissance era and is also considered one of the greatest artists in the history of the world."
      },
      {
        inf:
          "His most famous sculptures are Pietà and David, The Last Judgment or the figure of Cupid kneeling."
      },
      {
        inf:
          "He led the construction of the Basilica of St. Peter in Rome. He worked on its construction until the end of his life, but did not manage to complete it. The building was completed at the end of the century."
      }
    ]
  },
  20: {
    id: 20,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSobWxgJylGevzv5pB460hNiZd0WxrxklrqvA&usqp=CAU",
    name: "Adam Smith",
    born: "1723",
    died: "1790",
    century: "18",
    tags: [ECONOMIST, PHILOSOPHER],
    links: [
      {
        link: "https://en.wikipedia.org/wiki/Adam_Smith",
        linkText: "https://en.wikipedia.org..."
      },
      {
        link: "https://shchedrovitskiy.com/adam-smith-division-of-labor/",
        linkText: "https://shchedrovitskiy.com/adam-smith...",
        linkName: "The division of labor:"
      },
      {
        link: "https://www.adamsmith.org/the-wealth-of-nations",
        linkText: "https://www.adamsmith.org...",
        linkName: "The Wealth of Nations:"
      },
      {
        link: "https://www.britannica.com/topic/mercantilism",
        linkText: "https://www.britannica.com/topic...",
        linkName: "Mercantilism:"
      }
    ],
    infos: [
      {
        inf: "He was from Scotland."
      },
      {
        inf:
          "Smith repeated the importance of the division of labor as the basis for productivity growth."
      },
      {
        inf:
          "He considered the influence of the division of labor and the use of capital on the multiplication of national wealth."
      },
      {
        inf:
          "Smith's ideas grew out of mercantilism, which emphasized trade and the power of money, and physiocracy, which emphasized the importance of agriculture."
      }
    ]
  },
  21: {
    id: 21,
    img:
      "data:image/jpeg;base64,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",
    name: "George Washington",
    born: "1732",
    died: "1799",
    century: "18",
    tags: [SURVEYOR, STATESMAN, OFFICER],
    links: [
      {
        link: "https://en.wikipedia.org/wiki/George_Washington",
        linkText: "https://en.wikipedia.org..."
      }
    ],
    infos: [
      {
        inf: "He was from United States."
      },
      {
        inf:
          "On February 4, 1787, George Washington became the president of the United States."
      },
      {
        inf:
          "On March 3, 1797, he resigned from the office of president, giving way to John Adams."
      }
    ]
  },
  22: {
    id: 22,
    img:
      "data:image/jpeg;base64,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",
    name: "Genghis Khan",
    born: "1162",
    died: "1227",
    century: "12",
    tags: [RULER],
    links: [
      {
        link: "https://en.wikipedia.org/wiki/Genghis_Khan",
        linkText: "https://en.wikipedia.org..."
      },
      {
        link: "https://www.britannica.com/place/Mongol-empire",
        linkText: "https://www.britannica.com/place...",
        linkName: "Mongol empire:"
      },
      {
        link: "http://the_uighurs.tripod.com/Scrpt.htm",
        linkText: "http://the_uighurs.tripod.com...",
        linkName: "Uyghur script:"
      },
      {
        link:
          "https://www.factoryschool.com/genghis-khan-the-meritocracy-that-conquered-the-world/",
        linkText: "https://www.factoryschool.com/genghis-khan...",
        linkName: "The Meritocracy:"
      }
    ],
    infos: [
      {
        inf: "He was born in Deliün Bołdak."
      },
      {
        inf: "He was the ruler of the Mongols."
      },
      {
        inf: "He started the Mongol invasions."
      },
      {
        inf: "He set Mongol law and adopted the Uyghur script as well."
      },
      {
        inf: "He also practiced meritocracy and religious tolerance."
      }
    ]
  },
  23: {
    id: 23,
    img:
      "data:image/jpeg;base64,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",
    name: "Abraham Lincoln",
    born: "1809",
    died: "1865",
    century: "19",
    tags: [LAWYER, POLITICIAN, STATESMAN],
    links: [
      {
        link: "https://en.wikipedia.org/wiki/Abraham_Lincoln",
        linkText: "https://en.wikipedia.org..."
      },
      {
        link:
          "https://www.brainyquote.com/lists/authors/top-10-abraham-lincoln-quotes",
        linkText: "https://www.brainyquote.com/lists...",
        linkName: "Top 10 Abraham Lincoln Quotes:"
      }
    ],
    infos: [
      {
        inf: "He was from United States."
      },
      {
        inf: "On March 4, 1861, he became president of the United States."
      },
      {
        inf: "He advocated the abolition of slavery."
      }
    ]
  },
  24: {
    id: 24,
    img:
      "data:image/jpeg;base64,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",
    name: "Thomas Aquinas",
    born: "1225",
    died: "1274",
    century: "13",
    tags: [PHILOSOPHER, THEOLOGIAN, THINKER, FRIAR, PRIEST],
    links: [
      {
        link: "https://en.wikipedia.org/wiki/Thomas_Aquinas",
        linkText: "https://en.wikipedia.org..."
      },
      {
        link: "https://www.britannica.com/topic/Thomism",
        linkText: "https://www.britannica.com...",
        linkName: "Thomism:"
      }
    ],
    infos: [
      {
        inf: "He was born in Italy."
      },
      {
        inf: "Member of the Dominican order."
      },
      {
        inf:
          "He was one of the greatest thinkers in the history of Christianity."
      },
      {
        inf:
          "He defended the uniqueness of truth, which means that there can be no incompatibility between revelation and reason, some truths exceed reason, but none oppose it."
      },
      {
        inf:
          "He created a system of philosophical science and Catholic theology, called Thomism."
      }
    ]
  },
  25: {
    id: 25,
    img:
      "data:image/jpeg;base64,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",
    name: "James Watt",
    born: "1736",
    died: "1819",
    century: "18",
    tags: [INVENTOR, ENGINEER, CHEMIST],
    links: [
      {
        link: "https://en.wikipedia.org/wiki/James_Watt",
        linkText: "https://en.wikipedia.org..."
      }
    ],
    infos: [
      {
        inf: "He was from Scotland."
      },
      {
        inf:
          "He perfected Thomas Newcomen's 1712 steam engine with his Watt steam engine, which he constructed himself in 1776."
      }
    ]
  },
  26: {
    id: 26,
    img:
      "data:image/jpeg;base64,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",
    name: "Wolfgang Amadeus Mozart",
    born: "1756",
    died: "1791",
    century: "18",
    tags: [COMPOSER, VIOLINIST],
    links: [
      {
        link: "https://de.wikipedia.org/wiki/Wolfgang_Amadeus_Mozart",
        linkText: "https://en.wikipedia.org..."
      },
      {
        link: "https://www.eno.org/discover-opera/mozarts-famous-music-start/",
        linkText: "https://www.eno.org/discover...",
        linkName: "Mozart's most famous music:"
      }
    ],
    infos: [
      {
        inf: "He was born in Salzburg."
      },
      {
        inf:
          "From an early age he composed his first pieces and for this reason he was called a 'child prodigy'."
      },
      {
        inf:
          "His artistic life was very intense. From an early age he traveled and gave concerts in many European cities. He also had an intense social life."
      },
      {
        inf:
          "He created over 626 works. He composed his first work at the age of only 5, and the last on his deathbed. Mozart's works are characterized by wit, melodiousness and lightness."
      },
      {
        inf: "Opera was his favorite genre."
      }
    ]
  },
  27: {
    id: 27,
    img:
      "data:image/jpeg;base64,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",
    name: "Napoleon Bonaparte",
    born: "1769",
    died: "1821",
    century: "18",
    tags: [MILITARY, POLITICIAN, EMPEROR, KING],
    links: [
      {
        link: "https://en.wikipedia.org/wiki/Napoleon",
        linkText: "https://en.wikipedia.org..."
      }
    ],
    infos: [
      {
        inf: "He was born in France on Corsica."
      },
      {
        inf: "From 1793 he fought in the revolutionary army."
      },
      {
        inf: "In 1794 he became commander of the French army in Italy."
      },
      {
        inf:
          "He led to the seizure of Belgium by France and the conclusion of peace with Austria."
      },
      {
        inf: "In 1804 he was crowned Emperor of the French."
      },
      {
        inf:
          "In 1807 in Dresden, Napoleon Bonaparte granted a constitution to the  Duchy of Warsaw. "
      }
    ]
  },
  28: {
    id: 28,
    img:
      "data:image/jpeg;base64,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",
    name: "Johann Sebastian Bach",
    born: "1685",
    died: "1750",
    century: "17",
    tags: [MUSICIAN, COMPOSER],
    links: [
      {
        link: "https://en.wikipedia.org/wiki/Napoleon",
        linkText: "https://en.wikipedia.org..."
      },
      {
        link:
          "https://www.udiscovermusic.com/classical-features/best-bach-works-10-essential-pieces/",
        linkText: "https://www.udiscovermusic.com/classical-features...",
        linkName: "The 10 most important works:"
      }
    ],
    infos: [
      {
        inf: "He was born in Germany in Eisenach."
      },
      {
        inf: "Representative of the Baroque in music."
      }
    ]
  },
  29: {
    id: 29,
    img:
      "data:image/jpeg;base64,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",
    name: "Henry Ford",
    born: "1863",
    died: "1947",
    century: "19",
    tags: [ENGINEER, INDUSTRIALIST, PHILANTHROPIST],
    links: [
      {
        link: "https://en.wikipedia.org/wiki/Henry_Ford",
        linkText: "https://en.wikipedia.org..."
      },
      {
        link: "https://www.britannica.com/topic/Ford-Motor-Company",
        linkText: "https://www.britannica.com/topic...",
        linkName: "Ford Motor Company:"
      }
    ],
    infos: [
      {
        inf: "He was born in United State."
      },
      {
        inf: "Main founder Ford Motor Company."
      },
      {
        inf: "During World War II, founder of the America First committee."
      }
    ]
  },
  30: {
    id: 30,
    img:
      "data:image/jpeg;base64,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",
    name: "Ludwig van Beethoven",
    born: "1770",
    died: "1827",
    century: "18",
    tags: [COMPOSER, PIANIST],
    links: [
      {
        link: "https://en.wikipedia.org/wiki/Ludwig_van_Beethoven",
        linkText: "https://en.wikipedia.org..."
      },
      {
        link:
          "https://www.udiscovermusic.com/classical-features/best-beethoven-works-10-essential-pieces/",
        linkText: "https://www.udiscovermusic.com/classical-features...",
        linkName: "Best Beethoven Works:"
      }
    ],
    infos: [
      {
        inf: "He was born from German."
      },
      {
        inf: "One of the greatest composers."
      },
      {
        inf:
          "In 1787, Beethoven went to Vienna for the first time, but did not stay there for long because of his wife's illness. The next visit took place in 1792."
      }
    ]
  }
};

const characterPopup = (id) => {
  const d = data[id];

  if (!d) {
    return <></>;
  }

  const tags = d.tags;
  const infos = d.infos;
  const links = d.links;
  const born = d.born;
  const died = d.died;

  const calculate = died - born;

  return (
    <>
      <div className="namePopup">{d.name}</div>
      {!tags ? <>no tags!</> : null}
      <div>
        <div className="containerTagsPopup">
          {tags && tags.map((t) => <div className="tagsPopup">{t}</div>)}
        </div>
      </div>
      <div className="displayCenturyPopup">
        <div className="agePopup">{d.born}</div>-
        <div className="agePopup">{d.died}</div>
      </div>
      <div className="calculateAgePopup">He lived for {calculate} years</div>
      <div className="containerPopup">
        <img alt="img" className="imgPopup" src={d.img}></img>
        <div className="display">
          <ul className="ulPopup">
            {infos && infos.map((i) => <li className="infosPopup">{i.inf}</li>)}
          </ul>
          <div className="displayPopup">
            {links &&
              links.map((l) => (
                <a className="linkPopup" href={l.link}>
                  <div className="linkNamePopup">{l.linkName}</div>
                  {l.linkText}
                </a>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default function App() {
  const [modalIdOpen, setModalIdOpen] = useState();
  const [centuryFilter, setCenturyFilter] = useState(null);
  const [nameFilter, setNameFilter] = useState(null);
  const [tagFilter, setTagFilter] = useState(null);
  const [tagsFilter, setTagsFilter] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const onClosePopup = () => {
    setModalIdOpen(false);
  };

  const dataArr = Object.values(data);

  let filtered = dataArr;
  console.log({ filtered });

  let filteredTag = tags;
  console.log({ filteredTag });

  if (nameFilter) {
    const fn = (o) => o.name.includes(nameFilter);

    filtered = filtered.filter(fn);
    console.log({ filteredFiltered: filtered });
  }

  if (tagsFilter.length > 0) {
    const fn = (o) => o.tags && o.tags.some((t) => tagsFilter.includes(t));

    filtered = filtered.filter(fn);
  }

  if (tagFilter) {
    // const ft = tags.map((t) => t.includes(tagFilter));
    const ft = tags.includes(tagFilter);

    console.log({ ft });
  }

  if (centuryFilter) {
    const fc = (o) => o.century.includes(centuryFilter);

    filtered = filtered.filter(fc);
  }

  tags.sort();

  // tags.sort(function (a, b) {
  //   if (a > b) {
  //     console.log({ a: a, b: b });
  //     return -1;
  //   }
  //   if (b > a) {
  //     return 1;
  //   }
  //   return 0;
  // });

  return (
    <>
      <Popup2
        onClose={onClosePopup}
        modalState={modalIdOpen}
        component={characterPopup(modalIdOpen)}
      />
      <h1 className="h1">The Most Influential People.</h1>
      <div className="searchContainer">
        <div className="search">
          <input
            className="input"
            type="text"
            name="search"
            value={nameFilter}
            placeholder="Search by name"
            onChange={(event) => setNameFilter(event.target.value)}
          />
        </div>
        <div className="search">
          <input
            className="input"
            type="text"
            name="search"
            value={centuryFilter}
            placeholder="Search by century"
            onChange={(event) => setCenturyFilter(event.target.value)}
          />
        </div>
        <div className="search">
          <input
            className="input"
            type="text"
            name="search"
            value={tagFilter}
            placeholder="Search by tag"
            onChange={(event) => setTagFilter(event.target.value)}
          />
        </div>
        <button className="openTags" onClick={() => setIsOpen(!isOpen)}>
          Open tags
        </button>
        {isOpen ? (
          <div className="grid">
            {tags.map((t) => {
              var selected = tagsFilter.includes(t) ? "selected" : "sort";

              return (
                <div
                  onClick={() => {
                    //tagsFilter = [METMATICIAN]
                    // t = ALCHEMISTS
                    let ctagsFilter = [...tagsFilter];

                    if (!ctagsFilter.includes(t)) {
                      ctagsFilter.push(t);
                    } else {
                      // 1.Find index
                      // 2.Remove from under the index
                      // var index = ctagsFilter.indexOf(t);

                      // if (index !== -1) {
                      //   ctagsFilter.splice(index, 1);
                      // }

                      // Filter out valus
                      // This will remove duplicates
                      ctagsFilter = ctagsFilter.filter((tag) => t !== tag);
                    }
                    setTagsFilter(ctagsFilter);
                  }}
                  className={selected}
                >
                  {t}
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="box">
        <div className="grid2">
          {filtered.map((d) => {
            return (
              <>
                <div className="container" key={d.id}>
                  <img alt="img" className="img" src={d.img}></img>
                  <span className="name" onClick={() => setModalIdOpen(d.id)}>
                    {d.name}
                  </span>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
