import Question from "./Question";

const QUESTIONS = [
    {
        "id":1,
        "question":"Ce este un vaccin?",
        "answer":"Vaccinul este un preparat biologic care conține microorganisme omorâte sau atenuate, ori fragmente ale acestora.  În urma administrării vaccinului, apare un răspuns imun (de apărare), care ne protejează împotriva bolii produse de microorganismele patogene."
    },
    {
        "id":2,
        "question":"De ce trebuie să îmi vaccinez copilul?",
        "answer":"Vaccinarea copilului este importantă pentru protejarea sănătății lui și a altor persoane din comunitatea în care trăiește. Vaccinurile sunt concepute pentru a ajuta organismul să dezvolte imunitate la anumite boli, făcându-l astfel mai puțin susceptibil la infecții și va fi mai puțin probabil să le transmită altor copii și adulți care nu pot fi vaccinați din motive medicale.\n" +
            "\n" +
            "Este important să vaccinăm copiii deoarece aceștia sunt mai vulnerabili la infecții și pot dezvolta complicații severe ca urmare a bolilor infecțioase. De asemenea, vaccinarea poate ajuta la reducerea răspândirii bolilor în comunitate și poate ajuta la prevenirea apariției unor epidemii sau pandemii."
    },
    {
        "id":3,
        "question":"De ce unele vaccinuri sunt obligatorii?",
        "answer":"Unele vaccinuri sunt obligatorii în anumite țări sau regiuni pentru a proteja sănătatea publică și a preveni răspândirea bolilor infecțioase, care pot avea consecințe grave pentru sănătate. Obligația vaccinării este bazată pe principiul responsabilității sociale. Vaccinarea nu numai că protejează individul care este vaccinat, ci și pe cei din jurul lui, în special persoanele vulnerabile care nu pot fi vaccinate din motive medicale.\n" +
            "De exemplu, vaccinarea obligatorie poate fi impusă pentru vaccinurile împotriva rujeolei, oreionului și rubeolei (ROR), care sunt boli foarte contagioase și pot avea complicații grave, cum ar fi pneumonie, encefalită și boli ale ochilor. Dacă un număr suficient de mare de persoane sunt vaccinate împotriva acestor boli, acestea vor fi prevenite de la răspândire în comunitate."
    },
    {
        "id":4,
        "question":"De ce apar reacții adverse la vaccinuri?",
        "answer":"Vaccinurile pot avea unele reacții adverse, precum durere la locul injectării, febră ușoară, oboseală sau dureri de cap. Aceste reacții adverse sunt, de obicei, ușoare și trecătoare și sunt considerate un răspuns normal al sistemului imunitar la vaccin. Cu toate acestea, în cazuri rare, unele vaccinuri pot provoca reacții adverse mai grave.\n" +
            "Există mai multe motive pentru care vaccinurile pot avea reacții adverse:\n" +
            "\n•\tStimularea sistemului imunitar: vaccinurile sunt concepute pentru a stimula sistemul imunitar pentru a recunoaște și a dezvolta o apărare împotriva unei anumite boli. Uneori, acest proces poate provoca reacții adverse ușoare.\n" +
            "\n•\tDiferite componente ale vaccinului: vaccinurile conțin diferite componente, cum ar fi antigene (fragmente ale virusului sau bacteriei) și excipienți, cum ar fi conservanți și adjuvanți - substanțe care ajută la stimularea răspunsului imunitar. Aceste componente pot provoca rareori reacții adverse la unele persoane.\n" +
            "\n•\tFactori individuali: răspunsul fiecărei persoane la vaccin poate fi diferit. Unele persoane pot avea un sistem imunitar mai sensibil sau pot fi alergice la unele componente ale vaccinului. Acestea pot duce la reacții adverse mai severe.\n" +
            "Cu toate acestea, este important să subliniem faptul că reacțiile adverse asociate cu vaccinurile sunt rare și că beneficiile vaccinării depășesc cu mult riscurile."
    },  {
        "id":5,
        "question":"Ce să fac dacă apare o reacție adversă în urma unui vaccin?",
        "answer":"Contactați medicul dumneavoastră sau personalul medical. Dacă observați orice simptom neobișnuit sau sever, cum ar fi febră ridicată, dificultăți de respirație sau dureri în piept, este important să raportați aceste simptome personalului medical.\n" +
            "\n" +
            "Urmați instrucțiunile medicului sau ale personalului medical. Dacă medicul dumneavoastră sau personalul medical vă oferă instrucțiuni specifice pentru a face față reacției adverse, este important să le urmați cu atenție.\n" +
            "Luați analgezice sau antipiretice conform indicațiilor medicului dumneavoastră. Dacă aveți febră sau dureri, medicul dumneavoastră poate recomanda anumite medicamente pentru a vă ajuta să faceți față simptomelor.\n" +
            "Monitorizați simptomele și luați măsuri de auto-îngrijire. În cazul reacțiilor ușoare, cum ar fi dureri la locul injecției, vă puteți odihni și aplica comprese calde pentru a reduce inflamația.\n" +
            "Reacțiile adverse pot fi raportate pe site-ul Agenției Naționale a Medicamentului și Dispozitivelor Medicale (ANMDM)."
    },
    {
        "id":6,
        "question":"Ce să fac dacă apare o urgență medicală în urma vaccinării?",
        "answer":"Dacă apare o urgență medicală în urma vaccinării, este important să căutați imediat asistență medicală. În general, reacțiile adverse severe la vaccinuri sunt rare, dar este posibil să apară o reacție alergică gravă (anafilaxie) sau alte simptome severe.\n" +
            "Dacă sunteți într-un centru de vaccinare, raportați imediat personalului medical orice simptom neobișnuit sau sever. Personalul de la centrul de vaccinare este instruit să facă față situațiilor de urgență și să acorde asistență medicală adecvată.\n" +
            "Dacă sunteți acasă și apare o reacție severă la vaccin, sunați imediat la serviciul de urgență (112) sau mergeți la camera de gardă a celui mai apropiat spital."
    },
    {
        "id":7,
        "question":"Poate apărea autism în urma vaccinării?",
        "answer":"Nu există nicio legătură între vaccinare și apariția autismului. Această idee a apărut în urma unui studiu publicat în 1998, care ulterior a fost infirmat și retras de pe site-ul revistei în care a fost publicat. În prezent, majoritatea cercetătorilor și organizațiilor de sănătate publică consideră că această afirmație este falsă și că vaccinurile nu cauzează autism.\n" +
            "Numeroase studii științifice ample și de calitate au demonstrat în mod repetat și consistent că nu există o legătură între vaccinuri și autism. De asemenea Organizația Mondială a Sănătății, Academia Americană de Pediatrie și Centrul pentru Controlul și Prevenirea Bolilor din SUA susțin în mod categoric siguranța vaccinurilor și recomandă vaccinarea copiilor."
    },
    {
        "id":8,
        "question":"Este adevărat că vaccinurile conțin metale grele?",
        "answer":"Vaccinurile nu conțin metale grele în cantități periculoase pentru sănătatea umană.\n" +
            "Există unele vaccinuri care conțin cantități mici de metale, cum ar fi aluminiul și mercurul, dar acestea sunt folosite pentru a crește eficacitatea vaccinului și pentru a preveni deteriorarea acestuia. Cantitățile de metale folosite în vaccinuri sunt în general foarte mici și nu reprezintă un risc semnificativ pentru sănătate.\n" +
            "Aluminiul este adesea folosit ca adjuvant în vaccinuri pentru a stimula răspunsul imun, dar este utilizat în cantități foarte mici și este rapid eliminat din organism. Mercurul, care a fost folosit anterior în vaccinuri ca și conservant, a fost eliminat din majoritatea vaccinurilor din cauza îngrijorărilor legate de siguranța sa, iar cele care mai conțin mercur, conțin cantități extrem de mici, care nu sunt considerate periculoase pentru sănătate.\n" +
            "Organizațiile precum Organizația Mondială a Sănătății, Centrul pentru Controlul și Prevenirea Bolilor din SUA și alte agenții guvernamentale de sănătate publică au confirmat siguranța vaccinurilor și au declarat că acestea sunt una dintre cele mai importante măsuri preventive pentru prevenirea bolilor infecțioase."
    },
    {
        "id":9,
        "question":"Ce se întâmplă dacă nu îmi vaccinez deloc copilul?",
        "answer":"Dacă nu îți vaccinezi copilul, există riscul ca acesta să se îmbolnăvească de boli infecțioase grave, precum poliomielita, rujeola, oreionul, rubeola, difteria, tetanosul, hepatita B sau meningococemia. Aceste boli pot fi foarte periculoase pentru copii și pot duce la complicații severe, inclusiv dizabilități permanente sau deces.\n" +
            "De asemenea, dacă un număr mare de copii nu sunt vaccinați, există riscul de a apărea focare de boli infecțioase în comunități și de a permite răspândirea acestora."
    },
    {
        "id":10,
        "question":"De ce unele persoane nu se pot vaccina?",
        "answer":"Există mai multe motive pentru care unele persoane nu se pot vaccina, inclusiv:\n" +
            "Contraindicații medicale: anumite condiții medicale, cum ar fi anumite boli autoimune, probleme de coagulare a sângelui sau reacții alergice severe la componente ale vaccinului, pot face imposibilă vaccinarea pentru aceste persoane. De asemenea, femeile gravide sau cele care alăptează pot avea restricții pentru unele tipuri de vaccinuri.\n" +
            "Vârsta: unele vaccinuri sunt recomandate numai pentru anumite grupe de vârstă. De exemplu, vaccinul împotriva rujeolei, oreionului și rubeolei (MMR) este recomandat pentru copii de vârstă 12-15 luni și 4-6 ani.\n" +
            "Disponibilitatea vaccinului: în anumite regiuni, vaccinurile pot fi limitate ca disponibilitate sau accesibilitate."
    },

]

function FAQ (){

    return(
        <div className={"background"}>
            <div>
                {QUESTIONS.map(q=>
                    <Question   key={q.id}
                                id={q.id}
                                que={q.question}
                                ans={q.answer}/>)}
            </div>
        </div>
        
    )
}
export default FAQ