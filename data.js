const entries = [
  {
    "card": "El Loco",
    "major": "0",
    "minor": null,
    "suit": null,
    "meaning": "El Loco representa el inicio del viaje, la espontaneidad, la libertad y la fe en lo desconocido. Simboliza la inocencia, la creatividad sin límites y la apertura a nuevas experiencias. Invita a confiar en el instinto y a lanzarse a la aventura sin miedo a lo que vendrá.",
    "alt": "Cuando está invertida, El Loco puede indicar imprudencia, temeridad o falta de enfoque. Advertir exceso de ingenuidad, irresponsabilidad o escapismo. Puede ser señal de decisiones precipitadas sin medir las consecuencias."
  },
  {
    "card": "El Mago",
    "major": "I",
    "minor": null,
    "suit": null,
    "meaning": "El Mago simboliza la habilidad, la iniciativa y el poder de manifestación. Representa el talento, la concentración y la destreza para transformar ideas en realidad. Indica que se dispone de todos los recursos necesarios para alcanzar metas y que es momento de actuar con confianza.",
    "alt": "Invertido, El Mago puede sugerir manipulación, engaño o falta de concentración. Señala bloqueo creativo, dudas sobre el propio potencial o uso indebido del conocimiento para fines egoístas."
  },
  {
    "card": "La Sacerdotisa",
    "major": "II",
    "minor": null,
    "suit": null,
    "meaning": "La Sacerdotisa encarna la sabiduría profunda, la intuición y el conocimiento oculto. Invita a mirar hacia el yo interno y confiar en la voz interior. Representa el equilibrio entre lo consciente y lo inconsciente, así como la receptividad y el misterio.",
    "alt": "En posición invertida, puede indicar desconexión con la intuición, secretos mal manejados o retraimiento excesivo. Advierte falta de claridad interna, confusión emocional o desconfianza ante los mensajes del inconsciente."
  },
  {
    "card": "La Emperatriz",
    "major": "III",
    "minor": null,
    "suit": null,
    "meaning": "La Emperatriz simboliza la abundancia, la fertilidad y la creatividad en todas sus formas. Representa el crecimiento, la nutrición y el cuidado amoroso, así como la conexión con la naturaleza. Refleja un momento de prosperidad y realización de proyectos creativos.",
    "alt": "Cuando está invertida, puede indicar estancamiento creativo, negligencia o exceso de indulgencia. Señala desequilibrio en el cuidado propio o hacia los demás, infertilidad emocional o bloqueos para manifestar proyectos."
  },
  {
    "card": "El Emperador",
    "major": "IV",
    "minor": null,
    "suit": null,
    "meaning": "El Emperador representa autoridad, estructura y control. Simboliza la estabilidad, la ley y el liderazgo responsable. Indica la necesidad de establecer límites claros, organización y disciplina para alcanzar metas a largo plazo.",
    "alt": "Invertido, el Emperador puede señalar abuso de poder, rigidez excesiva o autoritarismo. Advierte falta de organización, inmadurez o incapacidad para responsabilizarse, así como posibles conflictos de poder."
  },
  {
    "card": "El Hierofante",
    "major": "V",
    "minor": null,
    "suit": null,
    "meaning": "El Hierofante (o Sumo Sacerdote) simboliza la tradición, la espiritualidad estructurada y la enseñanza. Representa los valores sociales, la guía moral y la búsqueda de conocimiento a través de sistemas establecidos. Invita a conectarse con lo sagrado y respetar las normas que aportan cohesión.",
    "alt": "En posición invertida, puede significar dogmatismo, rebeldía ante las normas o falta de fe. Indica posible rigidez mental, conformismo ciego o rechazo de las enseñanzas tradicionales sin discernimiento."
  },
  {
    "card": "Los Enamorados",
    "major": "VI",
    "minor": null,
    "suit": null,
    "meaning": "Los Enamorados representan la unión, la elección consciente y la armonía de opuestos. Simboliza el amor en todas sus formas, la conexión profunda y las decisiones éticas que definen el camino. Invita a escuchar al corazón y tomar decisiones alineadas con los valores más auténticos.",
    "alt": "Invertida, esta carta puede indicar indecisión, desequilibrio en relaciones o tentaciones. Advierte desavenencias amorosas, falta de compromiso o elecciones impulsivas que pueden alejar del propósito verdadero."
  },
  {
    "card": "El Carro",
    "major": "VII",
    "minor": null,
    "suit": null,
    "meaning": "El Carro simboliza la victoria, el impulso y el control del propio destino. Representa el triunfo mediante la determinación, la fuerza de voluntad y el equilibrio entre fuerzas opuestas. Indica avance decidido hacia objetivos y superación de obstáculos.",
    "alt": "Cuando está invertido, puede señalar falta de dirección, pérdida de control o impulsividad excesiva. Advierte estancamiento, conflictos internos que paralizan el avance o dificultades para mantener el equilibrio entre fuerzas contradictorias."
  },
  {
    "card": "La Fuerza",
    "major": "VIII",
    "minor": null,
    "suit": null,
    "meaning": "La Fuerza encarna el coraje interior, la compasión y el dominio de las pasiones. Representa la capacidad de afrontar desafíos con serenidad, diplomacia y empatía. Invita a actuar desde la templanza y la paciencia, controlando la energía de manera constructiva.",
    "alt": "Invertida, puede indicar inseguridad, agresividad mal canalizada o miedo a los propios instintos. Señala falta de autocontrol, impulsividad destructiva o incapacidad para enfrentar los miedos internos."
  },
  {
    "card": "El Ermitaño",
    "major": "IX",
    "minor": null,
    "suit": null,
    "meaning": "El Ermitaño simboliza la introspección, la búsqueda de la verdad y la soledad elegida. Representa la necesidad de retirarse temporalmente para reflexionar, meditar y encontrar guía interna. Invita a escuchar la voz interior y descubrir la sabiduría oculta en el silencio.",
    "alt": "En posición invertida, puede indicar aislamiento excesivo, soledad no deseada o negación de la propia guía interna. Advierte sensación de vacío, falta de propósito o miedo a mirar hacia adentro."
  },
  {
    "card": "La Rueda de la Fortuna",
    "major": "X",
    "minor": null,
    "suit": null,
    "meaning": "La Rueda de la Fortuna representa el cambio constante, los ciclos de la vida y el destino. Simboliza la suerte, las oportunidades que surgen y la ley de la causalidad. Indica que todo está en movimiento y que es momento de adaptarse a nuevas fases, manteniendo la fe en la evolución natural.",
    "alt": "Invertida, puede señalar resistencia al cambio, mala suerte temporal o estancamiento en viejos patrones. Advierte rachas negativas, falta de adaptación a las circunstancias o negación de los ciclos naturales."
  },
  {
    "card": "La Justicia",
    "major": "XI",
    "minor": null,
    "suit": null,
    "meaning": "La Justicia simboliza la equidad, la verdad y las consecuencias de los actos. Representa el equilibrio, la objetividad y la responsabilidad ética. Invita a tomar decisiones justas, afrontar las implicaciones legales o morales y asumir la responsabilidad de las acciones.",
    "alt": "Cuando está invertida, puede indicar injusticias, deshonestidad o falta de responsabilidad. Señala parcialidad, abuso de poder, juicios erróneos o negación de las propias faltas."
  },
  {
    "card": "El Colgado",
    "major": "XII",
    "minor": null,
    "suit": null,
    "meaning": "El Colgado representa la pausa voluntaria, la perspectiva diferente y el sacrificio consciente. Simboliza la entrega, la suspensión de la acción y la aceptación de la inercia como camino de crecimiento. Invita a renunciar momentáneamente a resultados inmediatos para obtener claridad interna.",
    "alt": "En posición invertida, puede indicar resistencia al cambio, estancamiento pasivo o sacrificios inútiles. Advierte obstinación, falta de voluntad para ver las cosas desde otra perspectiva o autoengaño al creer que se está haciendo un sacrificio cuando en realidad no aporta nada."
  },
  {
    "card": "La Muerte",
    "major": "XIII",
    "minor": null,
    "suit": null,
    "meaning": "La Muerte simboliza transformación profunda, finales necesarios y renacimiento. Representa el cierre de ciclos, la liberación de lo obsoleto y la apertura a nuevas etapas. Invita a soltar lo que ya no sirve para permitir la renovación y el crecimiento interior.",
    "alt": "Cuando está invertida, puede señalar resistencia a soltar, estancamiento en viejas situaciones o miedo al cambio. Advierte negación de procesos de cierre, prolongación innecesaria de relaciones o proyectos caducos."
  },
  {
    "card": "La Templanza",
    "major": "XIV",
    "minor": null,
    "suit": null,
    "meaning": "La Templanza representa la armonía, el equilibrio y la moderación. Simboliza la combinación de opuestos y la integración de energías para lograr paz interior. Invita a la paciencia, la flexibilidad y la búsqueda de consenso en situaciones conflictivas.",
    "alt": "Invertida, puede indicar desequilibrio emocional, falta de moderación o dificultades para armonizar distintos aspectos. Señala tendencias extremas, impaciencia o incapacidad para adaptarse a circunstancias que requieren flexibilidad."
  },
  {
    "card": "El Diablo",
    "major": "XV",
    "minor": null,
    "suit": null,
    "meaning": "El Diablo simboliza la obsesión, el apego y las ataduras autoimpuestas. Representa los miedos internos, las pasiones desbordadas y las cadenas que uno mismo crea. Invita a reconocer las adicciones o patrones negativos y a confrontar la propia sombra para liberarse.",
    "alt": "Cuando está invertida, puede indicar liberación de ataduras, superación de dependencias o reconocimiento de manipulaciones. También puede señalar que se está en negación de las propias sombras o que se intensifican miedos y obsesiones."
  },
  {
    "card": "La Torre",
    "major": "XVI",
    "minor": null,
    "suit": null,
    "meaning": "La Torre representa la ruptura repentina, la caída de estructuras falsas y la revelación impactante. Simboliza la liberación a través del derrumbe de lo que ya no es sostenible. Invita a aceptar la crisis como oportunidad para reconstruir sobre bases más sólidas.",
    "alt": "En posición invertida, puede indicar resistencia a la verdad, crisis prolongada o miedo al cambio. Advierte tendecias autodestructivas, incapacidad para aceptar la realidad y prolongación innecesaria de una situación insostenible."
  },
  {
    "card": "La Estrella",
    "major": "XVII",
    "minor": null,
    "suit": null,
    "meaning": "La Estrella simboliza la esperanza, la inspiración y la guía divina. Representa la confianza renovada, la serenidad y la conexión con la espiritualidad. Invita a soñar, a sanar y a avanzar con fe, confiando en que el universo proveerá apoyo.",
    "alt": "Invertida, puede señalar desesperanza, desilusión o falta de fe. Advierte distracción de los objetivos a causa de la negatividad, inseguridad o falta de claridad en el camino espiritual."
  },
  {
    "card": "La Luna",
    "major": "XVIII",
    "minor": null,
    "suit": null,
    "meaning": "La Luna representa el inconsciente, las ilusiones y los miedos ocultos. Simboliza la intuición, los sueños y la confusión que surge al no ver con claridad. Invita a explorar las sombras internas, a confiar en la voz interior y a discernir la realidad de la fantasía.",
    "alt": "Cuando está invertida, puede indicar engaños conscientes, confusión extrema o bloqueo de la intuición. Señala fobias irracionales, mentiras propias o ajenas y la imposibilidad de distinguir la verdad de la ilusión."
  },
  {
    "card": "El Sol",
    "major": "XIX",
    "minor": null,
    "suit": null,
    "meaning": "El Sol simboliza la claridad, la vitalidad y el éxito. Representa la alegría, la confianza en uno mismo y la realización material y espiritual. Invita a celebrar los logros, a irradiar optimismo y a compartir la energía positiva con los demás.",
    "alt": "Invertida, puede señalar arrogancia, exceso de ego o felicidad superficial. Advierte sobreexposición, falta de humildad o dependencia excesiva de la aprobación externa para sentirse bien."
  },
  {
    "card": "El Juicio",
    "major": "XX",
    "minor": null,
    "suit": null,
    "meaning": "El Juicio representa el renacer, la rendición de cuentas y la llamada interna a la transformación. Simboliza el momento de evaluación de la propia vida, la reconciliación con el pasado y la liberación de culpas. Invita a perdonar, a aceptar el karma y a responder con conciencia a la llamada interior.",
    "alt": "Cuando está invertida, puede indicar negación del llamado interno, culpa aplazada o resistencia al perdón. Señala autojuicio excesivo, estancamiento en viejos errores o incapacidad para evolucionar."
  },
  {
    "card": "El Mundo",
    "major": "XXI",
    "minor": null,
    "suit": null,
    "meaning": "El Mundo simboliza la plenitud, la realización y la integración de todos los aprendizajes. Representa el cierre exitoso de un ciclo, la armonía universal y el equilibrio entre el microcosmos y el macrocosmos. Invita a celebrar el logro, a sentirse conectado con el todo y a prepararse para nuevos comienzos.",
    "alt": "Invertida, puede señalar sensación de incompletitud, retrasos en la culminación de proyectos o falta de integración. Advierte miedo a los cambios que trae el cierre de ciclos o resistencia a aceptar los logros alcanzados."
  },
  {
    "card": "As de Bastos",
    "major": null,
    "minor": "1",
    "suit": "Bastos",
    "meaning": "El As de Bastos simboliza el inicio de un proyecto lleno de energía, inspiración y entusiasmo. Representa la chispa creativa y el impulso emprendedor, indicando que es el momento propicio para plantar nuevas ideas y actuar con determinación.",
    "alt": "Invertido, el As de Bastos puede señalar bloqueos creativos, falta de motivación o miedo a iniciar algo novedoso. Advierte que la energía potencial no se está aprovechando correctamente y que es necesario replantear el enfoque antes de avanzar."
  },
  {
    "card": "Dos de Bastos",
    "major": null,
    "minor": "2",
    "suit": "Bastos",
    "meaning": "El Dos de Bastos indica planificación y visión de futuro. Representa la capacidad de mirar más allá de la situación actual, evaluar opciones y sentar las bases para expandirse, tanto en el ámbito profesional como personal.",
    "alt": "Invertido, este naipe señala indecisión, miedo a salir de la zona de confort o falta de claridad en los planes. Advierte que, sin una estrategia definida, es posible estancarse en la mera contemplación de posibilidades."
  },
  {
    "card": "Tres de Bastos",
    "major": null,
    "minor": "3",
    "suit": "Bastos",
    "meaning": "El Tres de Bastos simboliza el avance sostenido tras una planificación cuidadosa y la apertura a nuevas oportunidades. Indica que los primeros esfuerzos han dado frutos y que ahora se puede empezar a recoger resultados, así como expandir horizontes más allá del entorno inmediato.",
    "alt": "Invertido, el Tres de Bastos puede señalar sobreconfianza, retrasos inesperados o la falta de previsión necesaria para el crecimiento. Advierte que hay riesgos de no consolidar los primeros éxitos debido a descuidos o expectativas demasiado optimistas."
  },
  {
    "card": "Cuatro de Bastos",
    "major": null,
    "minor": "4",
    "suit": "Bastos",
    "meaning": "El Cuatro de Bastos representa celebración, armonía y estabilidad en la comunidad o familia. Marca un momento de logro compartido, donde se pueden festejar hitos importantes y sentir seguridad en los cimientos que se han construido.",
    "alt": "Invertido, este naipe puede indicar que los festejos se ven empañados por tensiones ocultas, crisis en la convivencia o falta de reconocimiento del esfuerzo colectivo. Advierte que, pese a las apariencias de armonía, hay desequilibrios que necesitan atención."
  },
  {
    "card": "Cinco de Bastos",
    "major": null,
    "minor": "5",
    "suit": "Bastos",
    "meaning": "El Cinco de Bastos simboliza la competencia sana y los desafíos que impulsan el crecimiento personal. Representa conflictos menores o rivalidades que, aunque incómodas, sirven para afinar habilidades y demostrar la propia valía.",
    "alt": "Invertido, el Cinco de Bastos indica peleas estériles, falta de cooperación o tensiones que se prolongan sin resolver. Advierte que la competitividad se ha vuelto destructiva y que es necesario buscar consenso para evitar pérdidas innecesarias."
  },
  {
    "card": "Seis de Bastos",
    "major": null,
    "minor": "6",
    "suit": "Bastos",
    "meaning": "El Seis de Bastos representa el reconocimiento público, la victoria y el orgullo por los logros alcanzados. Indica que los esfuerzos han sido notados y que se recibe apoyo o elogios de quienes nos rodean, reforzando la confianza en uno mismo.",
    "alt": "Cuando está invertido, puede señalar falsas apariencias de éxito, vanidad excesiva o reconocimiento injusto. Advierte que la alabanza puede ser efímera y que es necesario mantener la humildad para no caer en la sobreevaluación personal."
  },
  {
    "card": "Siete de Bastos",
    "major": null,
    "minor": "7",
    "suit": "Bastos",
    "meaning": "El Siete de Bastos simboliza la defensa de las propias convicciones y la necesidad de mantener la posición ante la adversidad. Representa el coraje y la determinación para enfrentar criticismo o competencia, recordándonos que vale la pena defender lo que creemos justo.",
    "alt": "Invertido, este naipe puede indicar falta de coraje, dudas excesivas o saturación ante la presión externa. Advierte que, si no se recupera la fuerza interior, es posible ceder ante la crítica y perder terreno en lo que realmente importa."
  },
  {
    "card": "Ocho de Bastos",
    "major": null,
    "minor": "8",
    "suit": "Bastos",
    "meaning": "El Ocho de Bastos representa movimiento rápido, comunicaciones y avances vertiginosos. Indica que los proyectos se aceleran, que las noticias llegan de manera constante y que es momento de adaptarse a los cambios con agilidad.",
    "alt": "Cuando está invertido, el Ocho de Bastos señala bloqueos en la comunicación, retrasos imprevistos o sobrecarga de información que genera confusión. Advierte que, si no se calma la rapidez, existe el riesgo de perder detalles esenciales."
  },
  {
    "card": "Nueve de Bastos",
    "major": null,
    "minor": "9",
    "suit": "Bastos",
    "meaning": "El Nueve de Bastos simboliza la resiliencia, la fortaleza tras haber enfrentado múltiples obstáculos y la precaución ante nuevos retos. Representa la actitud vigilante de quien, aunque cansado, sabe que aún debe mantenerse firme para alcanzar la meta.",
    "alt": "Invertido, el Nueve de Bastos puede indicar agotamiento extremo, desconfianza paralizante o miedo a continuar. Advierte que, a menos que se recupere la energía y la fe en uno mismo, es posible abandonar justo antes del triunfo."
  },
  {
    "card": "Diez de Bastos",
    "major": null,
    "minor": "10",
    "suit": "Bastos",
    "meaning": "El Diez de Bastos representa la sobrecarga de responsabilidades, la presión extrema y el peso de las obligaciones acumuladas. Indica que, aunque se ha avanzado muchísimo, se necesita delegar o soltar cargas para no colapsar bajo el esfuerzo.",
    "alt": "Cuando está invertido, puede señalar liberación de cargas, pero también riesgo de actuar de forma irresponsable al abandonar compromisos esenciales. Advierte desequilibrio entre obligación y descanso, y la necesidad de reorganizar prioridades."
  },
  {
    "card": "Sota de Bastos",
    "major": null,
    "minor": "sota",
    "suit": "Bastos",
    "meaning": "La Sota de Bastos simboliza la curiosidad juvenil, el entusiasmo y la disposición a aprender. Representa un mensaje novedoso o la visita de alguien con energía creativa, alentando a explorar nuevas posibilidades sin miedo a equivocarse.",
    "alt": "Invertida, la Sota de Bastos puede indicar inmadurez, falta de compromiso o dispersión de energía. Advierte que el entusiasmo sin dirección puede volverse improductivo y que es necesario enfocar las ideas antes de actuar."
  },
  {
    "card": "Caballo de Bastos",
    "major": null,
    "minor": "caballo",
    "suit": "Bastos",
    "meaning": "El Caballo de Bastos representa la acción impulsiva, la pasión y el coraje para emprender nuevos caminos. Simboliza el mensajero dinámico que trae noticias urgentes y motiva a avanzar con rapidez en proyectos que requieren valentía.",
    "alt": "Invertido, este caballero puede señalar impulsividad descontrolada, irreflexión o temperamento explosivo. Advierte que, sin control, la prisa puede conducir a errores y que es necesario moderar la pasión con algo de cautela."
  },
  {
    "card": "Reina de Bastos",
    "major": null,
    "minor": "Reina",
    "suit": "Bastos",
    "meaning": "La Reina de Bastos simboliza la confianza, la calidez y el liderazgo carismático. Representa a una persona con gran energía creativa, capaz de motivar a otros y de adoptar decisiones con optimismo y determinación.",
    "alt": "Cuando está invertida, puede indicar arrogancia, manipulación o falta de empatía con quienes rodean. Advierte que el exceso de ego o la impaciencia pueden obstaculizar la comunicación y generar conflictos innecesarios."
  },
  {
    "card": "Rey de Bastos",
    "major": null,
    "minor": "Rey",
    "suit": "Bastos",
    "meaning": "El Rey de Bastos representa la autoridad natural, la visión estratégica y el liderazgo inspirador. Simboliza a alguien con gran capacidad para dirigir proyectos ambiciosos, guiando a su equipo con entusiasmo y objetividad.",
    "alt": "Invertido, el Rey de Bastos puede señalar tiranía, intolerancia o falta de compromiso con el bienestar ajeno. Advierte que, sin humildad y escucha activa, la autoridad se vuelve impositiva y puede generar resistencia en los demás."
  },
  {
    "card": "As de Espadas",
    "major": null,
    "minor": "1",
    "suit": "Espadas",
    "meaning": "El As de Espadas simboliza la claridad mental, el inicio de nuevas ideas y la revelación de la verdad. Representa la fuerza del intelecto, la capacidad de discernimiento y el potencial para cortar con engaños o falsas creencias. Indica que ha llegado un momento de claridad decisiva y de pensamiento agudo.",
    "alt": "Invertido, el As de Espadas puede señalar confusión mental, bloqueo comunicativo o decisiones precipitadas basadas en malentendidos. Advierte que la verdad está distorsionada y que es necesario tomar distancia para reenfocar la mente antes de actuar."
  },
  {
    "card": "Dos de Espadas",
    "major": null,
    "minor": "2",
    "suit": "Espadas",
    "meaning": "El Dos de Espadas refleja la necesidad de tomar una decisión difícil o de equilibrar dos ideas contrapuestas. Representa un momento de estancamiento mental donde la persona se resiste a enfrentar la realidad, eligiendo bloquear emociones y pensar fríamente. Indica que es preciso buscar el equilibrio interior antes de avanzar.",
    "alt": "Invertido, el Dos de Espadas puede indicar negación prolongada, ansiedad por no decidir o parálisis emocional. Advierte que eludir el problema solo perpetúa la tensión interna y que es necesario soltar el bloqueo para encontrar un camino claro."
  },
  {
    "card": "Tres de Espadas",
    "major": null,
    "minor": "3",
    "suit": "Espadas",
    "meaning": "El Tres de Espadas simboliza el dolor emocional, la traición y el sufrimiento. Representa un momento de desgarro interior, donde las heridas del corazón se hacen evidentes y es necesario confrontar la tristeza para poder sanar. Indica que la verdad hiriente ya salió a la luz y que hay que aceptar el duelo para iniciar la recuperación.",
    "alt": "Invertido, el Tres de Espadas puede señalar negación del dolor, resentimiento prolongado o incapacidad para perdonar. Advierte que aferrarse a la herida impide el proceso de sanación y que es esencial liberar el rencor para avanzar."
  },
  {
    "card": "Cuatro de Espadas",
    "major": null,
    "minor": "4",
    "suit": "Espadas",
    "meaning": "El Cuatro de Espadas representa el descanso necesario, la contemplación y la recuperación tras una etapa de estrés o conflicto. Invita a hacer una pausa en las actividades mentales intensas, a meditar y a recargar energías antes de retomar la acción. Simboliza el retiro provisional para promover la sanación interior.",
    "alt": "Invertido, el Cuatro de Espadas puede indicar insomnio, sobrecarga mental o incapacidad para relajarse. Advierte que ignorar la necesidad de descanso puede profundizar el agotamiento y provocar desequilibrios físicos y psicológicos más graves."
  },
  {
    "card": "Cinco de Espadas",
    "major": null,
    "minor": "5",
    "suit": "Espadas",
    "meaning": "El Cinco de Espadas simboliza el conflicto, la derrota y la tensión moral. Representa situaciones donde la victoria se obtiene a costa de la ética o del bienestar ajeno, generando remordimientos o resentimientos. Indica la importancia de elegir entre ganar a cualquier precio o mantener la integridad.",
    "alt": "Invertido, el Cinco de Espadas puede señalar la resolución del conflicto, el arrepentimiento o el deseo de reconciliación. También puede advertir que las tensiones reprimidas resurgen y que es necesario dialogar para sanar las heridas."
  },
  {
    "card": "Seis de Espadas",
    "major": null,
    "minor": "6",
    "suit": "Espadas",
    "meaning": "El Seis de Espadas representa la transición, el viaje hacia la tranquilidad y la superación de dificultades mentales. Simboliza el paso de un momento turbulento a uno más calmado, gracias a la voluntad de dejar atrás viejos patrones. Indica que se avanza hacia mejores perspectivas, aunque el rumbo implique incertidumbre.",
    "alt": "Invertido, el Seis de Espadas puede indicar resistencia al cambio, miedo al futuro o estancamiento en pensamientos negativos. Advierte que, si no se suelta lo pasado, no se podrá llegar a la orilla de la paz interior."
  },
  {
    "card": "Siete de Espadas",
    "major": null,
    "minor": "7",
    "suit": "Espadas",
    "meaning": "El Siete de Espadas simboliza la astucia, el sigilo y la estrategia mental. Indica que se está empleando la inteligencia para sortear obstáculos de manera discreta, o que alguien podría estar actuando con engaños o manipulaciones. Invita a vigilar los propios pensamientos y a actuar con honestidad.",
    "alt": "Invertido, el Siete de Espadas puede señalar descubrimiento de una traición, culpabilidad por engañar o temor a ser descubierto. Advierte que los secretos salen a la luz y que es mejor afrontar las consecuencias antes que prolongar el autoengaño."
  },
  {
    "card": "Ocho de Espadas",
    "major": null,
    "minor": "8",
    "suit": "Espadas",
    "meaning": "El Ocho de Espadas representa la sensación de estar atrapado por los propios pensamientos o circunstancias externas. Simboliza la autoimposición de límites mentales y la creencia de que no hay salida, cuando en realidad los barrotes suelen ser ilusorios. Indica que es momento de cuestionar esas creencias limitantes para liberarse.",
    "alt": "Invertido, el Ocho de Espadas puede señalar el inicio de la liberación, la superación de miedos o el abandono de la mentalidad victimista. Sin embargo, también puede advertir que aún persisten bloqueos internos que requieren atención para no retroceder."
  },
  {
    "card": "Nueve de Espadas",
    "major": null,
    "minor": "9",
    "suit": "Espadas",
    "meaning": "El Nueve de Espadas simboliza la angustia, la ansiedad y las pesadillas mentales. Representa el sufrimiento interior que suele manifestarse en noches de insomnio y pensamientos catastróficos. Indica que la mente está atrapada en una espiral de preocupaciones y que es necesario buscar ayuda o técnicas de relajación para aliviar el tormento.",
    "alt": "Invertido, el Nueve de Espadas puede señalar la etapa inicial de aceptación del dolor, la disminución de la ansiedad o la búsqueda de soluciones. También puede advertir que la negación prolongada del sufrimiento impide la recuperación emocional."
  },
  {
    "card": "Diez de Espadas",
    "major": null,
    "minor": "10",
    "suit": "Espadas",
    "meaning": "El Diez de Espadas representa el punto más bajo del sufrimiento mental o la traición definitiva. Simboliza el final de un ciclo doloroso y la aceptación de que algo ha concluido de forma irreversible. Invita a reconocer que, tras el derrumbe, solo queda reconstruir y renacer de las cenizas.",
    "alt": "Invertido, el Diez de Espadas puede indicar resistencia al cierre, negación del final o miedo a empezar de nuevo. Advierte que aferrarse al dolor prolonga la agonía y retrasa la posibilidad de sanación."
  },
  {
    "card": "Sota de Espadas",
    "major": null,
    "minor": "sota",
    "suit": "Espadas",
    "meaning": "La Sota de Espadas simboliza la curiosidad intelectual, la agudeza mental y el deseo de aprender. Representa un mensajero de noticias mentales o un joven con gran curiosidad y capacidad de análisis crítico. Indica que se debe estar alerta a información importante y a la comunicación clara.",
    "alt": "Invertida, la Sota de Espadas puede señalar inmadurez mental, chismes malintencionados o palabras hirientes. Advierte que el uso imprudente de las palabras puede generar conflictos y que es vital reflexionar antes de hablar."
  },
  {
    "card": "Caballo de Espadas",
    "major": null,
    "minor": "caballo",
    "suit": "Espadas",
    "meaning": "El Caballo de Espadas representa la acción rápida del pensamiento, la comunicación directa y el impulso para buscar la verdad. Simboliza a alguien que avanza con determinación para defender sus ideas, aunque a veces pueda parecer brusco. Indica que es momento de actuar con rapidez y determinación ante un reto intelectual.",
    "alt": "Invertido, este caballero puede señalar impulsividad verbal, agresividad o falta de tacto. Advierte que la prisa por expresar una opinión puede generar malentendidos y herir a otros, y que es necesario moderar el tono."
  },
  {
    "card": "Reina de Espadas",
    "major": null,
    "minor": "Reina",
    "suit": "Espadas",
    "meaning": "La Reina de Espadas simboliza la sabiduría crítica, la independencia mental y la objetividad. Representa a una persona con gran capacidad analítica, que busca la verdad sin sentimentalismos innecesarios. Indica que es preciso tomar decisiones lógicas y justas, basadas en hechos y no en emociones.",
    "alt": "Invertida, la Reina de Espadas puede señalar frialdad excesiva, cinismo o distanciamiento emocional. Advierte que la falta de empatía o el abuso de la crítica pueden aislar y herir a quienes buscan apoyo."
  },
  {
    "card": "Rey de Espadas",
    "major": null,
    "minor": "Rey",
    "suit": "Espadas",
    "meaning": "El Rey de Espadas representa la autoridad intelectual, la honestidad y el pensamiento estratégico. Simboliza a alguien que ejerce liderazgo basado en la razón, la justicia y la claridad de propósito. Indica que es momento de aplicar la lógica y la planificación rigurosa para resolver problemas complejos.",
    "alt": "Invertido, el Rey de Espadas puede señalar autoritarismo, rigidez mental o manipulación intelectual. Advierte que el uso del poder de la mente para dominar a otros puede generar resistencias y conflictos éticos."
  },
  {
    "card": "As de Copas",
    "major": null,
    "minor": "1",
    "suit": "Copas",
    "meaning": "El As de Copas simboliza el nacimiento de nuevas emociones, la apertura del corazón y el florecimiento del amor. Representa la intuición, la empatía y la posibilidad de conectar a un nivel profundo con los demás, así como el inicio de una etapa de plenitud emocional.",
    "alt": "Invertido, el As de Copas puede señalar bloqueo afectivo, represión emocional o falta de empatía. Advierte que el flujo de los sentimientos está retenido y que es necesario liberar el corazón para evitar estancamientos emocionales."
  },
  {
    "card": "Dos de Copas",
    "major": null,
    "minor": "2",
    "suit": "Copas",
    "meaning": "El Dos de Copas refleja la unión armoniosa, la atracción mutua y el comienzo de una relación basada en el respeto y la reciprocidad. Simboliza la cooperación, la complicidad y la creación de vínculos emocionales equilibrados entre dos personas.",
    "alt": "Invertido, el Dos de Copas puede indicar desacuerdos, desequilibrio en la pareja o falta de compromiso. Advierte que la relación adolece de reciprocidad y que es necesario dialogar para restablecer la armonía."
  },
  {
    "card": "Tres de Copas",
    "major": null,
    "minor": "3",
    "suit": "Copas",
    "meaning": "El Tres de Copas simboliza la celebración, la amistad sincera y la colaboración creativa. Representa momentos de alegría compartida, reuniones sociales y el apoyo mutuo en un ambiente festivo, donde la unión de energías emociona a todos los involucrados.",
    "alt": "Invertido, el Tres de Copas puede señalar excesos en el festejo, rivalidades ocultas o amistades superficiales. Advierte que la alegría se está consumiendo en exceso de indiferencia o conflictos latentes en el grupo."
  },
  {
    "card": "Cuatro de Copas",
    "major": null,
    "minor": "4",
    "suit": "Copas",
    "meaning": "El Cuatro de Copas representa la introspección emocional, la apatía o el aburrimiento afectivo. Indica un momento en que se valoran poco las oportunidades que llegan desde el corazón, invitando a buscar dentro de uno mismo para redescubrir qué es lo que realmente se desea.",
    "alt": "Invertido, el Cuatro de Copas puede señalar compulsión emocional, escapismo o incapacidad para aprovechar una oferta amorosa. Advierte que la insatisfacción interna impide ver regalos afectivos presentes en el entorno."
  },
  {
    "card": "Cinco de Copas",
    "major": null,
    "minor": "5",
    "suit": "Copas",
    "meaning": "El Cinco de Copas simboliza la pérdida emocional, el duelo y el sentimiento de decepción. Representa la concentración en lo que se ha derramado o perdido, invitando a procesar el dolor para poder seguir adelante y reconocer las oportunidades que aún permanecen intactas.",
    "alt": "Invertido, el Cinco de Copas puede señalar negación del duelo, falseamiento de los sentimientos o incapacidad para sanar. Advierte que ignorar el dolor prolonga el sufrimiento y retrasa la recuperación."
  },
  {
    "card": "Seis de Copas",
    "major": null,
    "minor": "6",
    "suit": "Copas",
    "meaning": "El Seis de Copas simboliza la nostalgia, los recuerdos de la infancia y la ternura inocente. Representa la conexión con el pasado, la reencuentro con personas queridas y la posibilidad de sanar a través de la bondad y la simpleza afectiva de tiempos pasados.",
    "alt": "Invertido, el Seis de Copas puede indicar estancamiento en el pasado, rechazo a madurar o idealización excesiva de recuerdos. Advierte que vivir en la nostalgia impide aprovechar las oportunidades presentes."
  },
  {
    "card": "Siete de Copas",
    "major": null,
    "minor": "7",
    "suit": "Copas",
    "meaning": "El Siete de Copas refleja las múltiples opciones emocionales y la fantasía. Simboliza la tentación de soñar despierto, las ilusiones románticas y la necesidad de discernir entre lo real y lo ilusorio antes de tomar una decisión que implique el corazón.",
    "alt": "Invertido, el Siete de Copas puede señalar confusión ante tantas alternativas, engaños emocionales o indecisión paralizante. Advierte que las fantasías sin fundamento llevan a la decepción y que es preciso aterrizar en la realidad."
  },
  {
    "card": "Ocho de Copas",
    "major": null,
    "minor": "8",
    "suit": "Copas",
    "meaning": "El Ocho de Copas simboliza la renuncia voluntaria a relaciones o situaciones que ya no llenan el alma. Representa el momento de dejar atrás lo conocido para emprender un viaje interior de búsqueda de mayor satisfacción emocional, aunque implique incertidumbre.",
    "alt": "Invertido, el Ocho de Copas puede indicar miedo a dejar el confort emocional, estancamiento en una relación insatisfactoria o negación de la necesidad de cambio. Advierte que aferrarse al pasado impide el crecimiento."
  },
  {
    "card": "Nueve de Copas",
    "major": null,
    "minor": "9",
    "suit": "Copas",
    "meaning": "El Nueve de Copas simboliza el bienestar emocional, la gratitud y la satisfacción de deseos. Representa la plenitud interior, la autoestima fortalecida y el disfrute de los frutos afectivos, invitando a celebrar los logros sentimentales alcanzados.",
    "alt": "Invertido, el Nueve de Copas puede señalar complacencia excesiva, vanidad sentimental o felicidad superficial. Advierte que el ego emocional puede cegar frente a necesidades más profundas, generando insatisfacción a largo plazo."
  },
  {
    "card": "Diez de Copas",
    "major": null,
    "minor": "10",
    "suit": "Copas",
    "meaning": "El Diez de Copas representa la armonía familiar, la felicidad compartida y el amor incondicional. Simboliza la realización de un ideal afectivo, el hogar feliz y la sensación de pertenencia a un entorno emocionalmente pleno y estable.",
    "alt": "Invertido, el Diez de Copas puede indicar apariencias engañosas de felicidad, tensiones familiares ocultas o expectativas afectivas irreales. Advierte que la imagen perfecta puede ocultar conflictos no resueltos."
  },
  {
    "card": "Sota de Copas",
    "major": null,
    "minor": "sota",
    "suit": "Copas",
    "meaning": "La Sota de Copas simboliza la curiosidad emocional, la sensibilidad artística y la disposición a explorar sentimientos. Representa un mensajero afectivo que trae noticias de amor, invitando a abrir el corazón a nuevas experiencias sentimentales y creativas.",
    "alt": "Invertido, la Sota de Copas puede señalar inmadurez emocional, timidez excesiva o malentendidos afectivos. Advierte que la receptividad sin límites puede llevar a desilusiones o a idealizar demasiado a los demás."
  },
  {
    "card": "Caballo de Copas",
    "major": null,
    "minor": "caballo",
    "suit": "Copas",
    "meaning": "El Caballo de Copas representa el romanticismo, la galantería y el mensaje de amor. Simboliza a alguien que actúa guiado por el corazón, expresando sentimientos con sensibilidad y encanto, y que puede traer propuestas emocionales significativas.",
    "alt": "Invertido, este caballero puede señalar idealismo desbordado, dependencia emocional o promesas vacías. Advierte que el exceso de romanticismo sin sustento real puede conducir a decepciones sentimentales."
  },
  {
    "card": "Reina de Copas",
    "major": null,
    "minor": "Reina",
    "suit": "Copas",
    "meaning": "La Reina de Copas simboliza la compasión, la intuición profunda y el cuidado afectivo incondicional. Representa a alguien con gran empatía, equilibrio emocional y capacidad de escucha, que guía a otros desde la ternura y la sabiduría del corazón.",
    "alt": "Invertida, la Reina de Copas puede indicar emocionalidad excesiva, código de víctima o falta de límites afectivos. Advierte que envolverse demasiado en los problemas ajenos puede provocar agotamiento emocional y dependencia."
  },
  {
    "card": "Rey de Copas",
    "major": null,
    "minor": "Rey",
    "suit": "Copas",
    "meaning": "El Rey de Copas representa la madurez emocional, la diplomacia y el liderazgo empático. Simboliza a una persona calmada, justa y equilibrada, capaz de manejar con serenidad conflictos afectivos y de ofrecer apoyo emocional sin perder la objetividad.",
    "alt": "Invertido, el Rey de Copas puede señalar manipulación emocional, frialdad disfrazada de afecto o inestabilidad oculta. Advierte que, cuando la empatía se utiliza para controlar, se traiciona la verdadera esencia del corazón."
  },
  {
    "card": "As de Oros",
    "major": null,
    "minor": "1",
    "suit": "Oros",
    "meaning": "El As de Oros simboliza una nueva oportunidad material, el inicio de proyectos financieros o profesionales con alto potencial de prosperidad. Representa la semilla de la abundancia tangible, invitando a plantar la base sólida para el crecimiento económico y la estabilidad futura.",
    "alt": "Invertido, el As de Oros puede señalar falta de recursos, oportunidades perdidas o miedo a invertir. Advierte que la semilla de la prosperidad no se está cultivando adecuadamente y que la inseguridad material está bloqueando el avance."
  },
  {
    "card": "Dos de Oros",
    "major": null,
    "minor": "2",
    "suit": "Oros",
    "meaning": "El Dos de Oros refleja la habilidad para equilibrar múltiples responsabilidades financieras o laborales. Representa la adaptabilidad, la gestión eficiente de recursos y la capacidad de mantener la armonía entre ingresos y gastos, aun en situaciones cambiantes.",
    "alt": "Invertido, el Dos de Oros puede indicar desequilibrio económico, estrés por múltiples obligaciones o falta de organización financiera. Advierte que, sin una gestión adecuada, los recursos pueden dispersarse y generar inestabilidad."
  },
  {
    "card": "Tres de Oros",
    "major": null,
    "minor": "3",
    "suit": "Oros",
    "meaning": "El Tres de Oros simboliza la colaboración exitosa y el reconocimiento por el trabajo bien hecho. Representa el oficio, la maestría y la recompensa derivada del esfuerzo conjunto, señalando que el talento se amplifica cuando se trabaja en equipo bajo estándares de excelencia.",
    "alt": "Invertido, el Tres de Oros puede señalar conflictos en el trabajo, falta de coordinación o negligencia en los detalles. Advierte que la calidad del resultado se ve comprometida cuando no se valora el aporte de cada quien o se descuida la profesionalidad."
  },
  {
    "card": "Cuatro de Oros",
    "major": null,
    "minor": "4",
    "suit": "Oros",
    "meaning": "El Cuatro de Oros representa la estabilidad material y el deseo de proteger los bienes acumulados. Simboliza la cautela financiera, la consolidación de recursos y la necesidad de seguridad económica, invitando a resguardar los logros para evitar pérdidas futuras.",
    "alt": "Invertido, el Cuatro de Oros puede indicar avaricia, temor al cambio o apego excesivo a lo material. Advierte que la seguridad se convierte en posesividad, impidiendo el flujo natural de recursos y obstaculizando la generosidad."
  },
  {
    "card": "Cinco de Oros",
    "major": null,
    "minor": "5",
    "suit": "Oros",
    "meaning": "El Cinco de Oros simboliza dificultades económicas, privaciones o pérdida de recursos. Representa un momento de carencia material y sensación de abandono, invitando a buscar apoyo externo y a reconocer que la ayuda puede llegar incluso en la adversidad.",
    "alt": "Invertido, el Cinco de Oros puede señalar recuperación de la crisis, resistencia al victimismo o temor a aceptar asistencia. Advierte que, si se sigue negando la ayuda, la situación difícil puede prolongarse innecesariamente."
  },
  {
    "card": "Seis de Oros",
    "major": null,
    "minor": "6",
    "suit": "Oros",
    "meaning": "El Seis de Oros representa la generosidad, la ayuda mutua y el flujo equilibrado de recursos. Simboliza la prosperidad compartida, donde quien tiene posibilidad brinda apoyo al que lo necesita, incentivando la reciprocidad y la justicia social en el plano material.",
    "alt": "Invertido, el Seis de Oros puede indicar dependencia excesiva, favoritismos o recibo de ayuda condicional. Advierte que la balanza de dar y recibir está desequilibrada, generando deudas emocionales o abusos de poder."
  },
  {
    "card": "Siete de Oros",
    "major": null,
    "minor": "7",
    "suit": "Oros",
    "meaning": "El Siete de Oros simboliza la evaluación de las inversiones y la paciencia ante los resultados. Representa un periodo de reflexión sobre el progreso económico o laboral, invitando a analizar si los esfuerzos están rindiendo frutos y a ajustar la estrategia a largo plazo.",
    "alt": "Invertido, el Siete de Oros puede señalar impaciencia, desmotivación o abandono prematuro de un proyecto. Advierte que, al no valorar el tiempo necesario para la maduración, se corre el riesgo de perder oportunidades consolidadas."
  },
  {
    "card": "Ocho de Oros",
    "major": null,
    "minor": "8",
    "suit": "Oros",
    "meaning": "El Ocho de Oros representa la dedicación al oficio, el aprendizaje constante y la perfección en el trabajo. Simboliza el artesano concentrado en su tarea, que mejora sus habilidades mediante la práctica disciplinada y el compromiso con la calidad.",
    "alt": "Invertido, el Ocho de Oros puede indicar falta de motivación, desgano por el trabajo o errores repetitivos. Advierte que, si no se pone empeño en el aprendizaje, se estancan las habilidades y se compromete la excelencia."
  },
  {
    "card": "Nueve de Oros",
    "major": null,
    "minor": "9",
    "suit": "Oros",
    "meaning": "El Nueve de Oros simboliza la independencia financiera, el disfrute de los frutos del esfuerzo personal y la abundancia lograda con responsabilidad. Representa la autosuficiencia, el lujo moderado y la gratitud por los logros materiales alcanzados.",
    "alt": "Invertido, el Nueve de Oros puede señalar vanidad, aislamiento o temor a la pérdida de status. Advierte que, al centrarse demasiado en lo material, se descuida el bienestar emocional y las relaciones genuinas."
  },
  {
    "card": "Diez de Oros",
    "major": null,
    "minor": "10",
    "suit": "Oros",
    "meaning": "El Diez de Oros representa la estabilidad familiar, la herencia y el legado patrimonial. Simboliza la culminación de la prosperidad material transmitida entre generaciones, así como el sentido de pertenencia y la seguridad que brinda un linaje consolidado.",
    "alt": "Invertido, el Diez de Oros puede indicar conflictos familiares por dinero, herencias disputadas o expectativas irreales. Advierte que los bienes pueden convertirse en fuente de discordia si no se gestionan con equidad y transparencia."
  },
  {
    "card": "Sota de Oros",
    "major": null,
    "minor": "sota",
    "suit": "Oros",
    "meaning": "La Sota de Oros simboliza la curiosidad práctica, el interés por aprender sobre finanzas y el inicio de estudios relacionados con el mundo material. Representa un mensajero que trae noticias de trabajo o de oportunidades para formarse en algún oficio concretamente útil.",
    "alt": "Invertido, la Sota de Oros puede señalar inmadurez financiera, falta de compromiso con el aprendizaje o distracción en proyectos prácticos. Advierte que el aprendizaje superficial no conduce a resultados sólidos ni duraderos."
  },
  {
    "card": "Caballo de Oros",
    "major": null,
    "minor": "caballo",
    "suit": "Oros",
    "meaning": "El Caballo de Oros representa la perseverancia en el trabajo, la prudencia en las inversiones y el avance constante hacia las metas materiales. Simboliza a alguien que progresa con determinación y seguridad, sin apresurarse, asegurando cada paso.",
    "alt": "Invertido, este caballero puede señalar terquedad, lentitud excesiva o aversión al riesgo. Advierte que el miedo al cambio puede frenar el progreso y que la falta de flexibilidad impide aprovechar nuevas oportunidades."
  },
  {
    "card": "Reina de Oros",
    "major": null,
    "minor": "Reina",
    "suit": "Oros",
    "meaning": "La Reina de Oros simboliza la generosidad práctica, el cuidado del hogar y la capacidad para gestionar los recursos con sabiduría. Representa a alguien que combina la abundancia material con la calidez afectiva, brindando seguridad y confort a quienes la rodean.",
    "alt": "Invertida, la Reina de Oros puede indicar excesiva preocupación por lo material, negligencia emocional o tendencia a malgastar. Advierte que el desbalance entre lo práctico y lo afectivo puede generar distanciamiento en las relaciones más cercanas."
  },
  {
    "card": "Rey de Oros",
    "major": null,
    "minor": "Rey",
    "suit": "Oros",
    "meaning": "El Rey de Oros representa la autoridad en los asuntos financieros y la administración eficiente del patrimonio. Simboliza a una persona con gran experiencia empresarial, liderazgo pragmático y la capacidad de generar y mantener riqueza de forma ética y estable.",
    "alt": "Invertido, el Rey de Oros puede indicar avaricia, corrupción o manejo irresponsable de recursos. Advierte que el poder económico sin principios puede conducir a abusos y a la pérdida de la confianza de quienes dependen del bienestar común."
  }
];