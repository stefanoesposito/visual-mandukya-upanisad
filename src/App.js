import {useEffect, useState} from 'react'
import './App.css'
import Footer from './components/Footer'
import {IconOm} from './components/omIcon'
import Veglia from './images/1-veglia.png'
import Sogno from './images/2-sogno.png'
import SonnoProfondo from './images/3-sonno-profondo.png'

function App() {
    const [isMobile, setIsMobile] = useState(false)
    const [isTablet, setIsTablet] = useState(false)
    const [isDesktop, setIsDesktop] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth
            setIsMobile(width < 768)        // Definisce Mobile per schermi sotto i 768px
            setIsTablet(width >= 768 && width < 1024)  // Definisce Tablet per schermi tra 768px e 1024px
            setIsDesktop(width >= 1024)     // Definisce Desktop per schermi 1024px e superiori
        }

        // Chiama la funzione una volta al caricamento
        handleResize()

        // Aggiunge un event listener per il resize
        window.addEventListener('resize', handleResize)

        // Cleanup: rimuove l'event listener quando il componente si smonta
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div className={'container'}>
            <div className={'wrapper'}>
                <h1 className={'title'}>Rappresentazione grafica della Mandukya Upanisad</h1>
                <div className={'title'}>
                    <IconOm height={90}/>
                </div>

                <p>Benvenuto/a in un viaggio interiore che esplora i quattro stati di coscienza descritti nella Mandukya
                    Upanisad, una delle più profonde scritture della Tradizione Vedantica. Questa antica saggezza ci
                    guida verso la comprensione della nostra vera natura attraverso l’analisi della consapevolezza nei
                    quattro diversi stati: </p>
                <ol style={{display: 'flex', flexDirection: 'column', gap: 12}}>
                    <li><i>Jagrat</i> (stato di veglia)</li>
                    <li><i>Svapna</i> (stato di sogno)</li>
                    <li><i>Sushupti</i> (stato di sonno profondo)</li>
                    <li><i>Turiya</i> (il quarto stato), il quale non è un "quarto" stato in senso lineare, ma è
                        la <strong>realtà sottostante</strong> e il testimone eterno degli altri tre stati
                    </li>

                </ol>

                <p>L’ispirazione per questo progetto nasce da una profonda intuizione avuta mentre esploravo le raffigurazioni
                    dei <a className={'link'}
                           href="https://www.deeshan.com/zen.htm" target={'_blank'} rel="noopemner noreferrer">10 Tori
                        Zen</a>, una serie di immagini tradizionali che rappresentano il percorso verso l'illuminazione.
                    Ho compreso che, in queste immagini, il cerchio rappresenta la consapevolezza immutabile,
                    non-originata e sempre presente, simile al ruolo di Turiya nella filosofia Vedantica: il Testimone
                    Silenzioso che osserva ogni esperienza senza mai essere toccato da essa.</p>

                <p>Nel corso della nostra vita, attraversiamo costantemente questi stati di coscienza, ciascuno con le
                    sue peculiarità e i suoi limiti. Ma c’è una consapevolezza che va oltre ogni esperienza, un Sostrato
                    Eterno che osserva senza mai essere coinvolto: Turiya, il Testimone Immutabile. Questa pagina ti
                    guiderà in un viaggio visivo e meditativo attraverso questi stati, illustrandoti come la coscienza
                    si manifesta nel mondo esterno, nei sogni, nel sonno profondo, e infine come essa dimora nella pura
                    consapevolezza di Turiya.</p>

                <p>Scoprirai che ciò che crediamo essere la realtà non è che una proiezione della mente (<i>Maya</i>), e
                    che il vero Sé, libero da ogni illusione, è sempre presente, oltre ogni esperienza e dualità.</p>


                <h2 className={'title'}>Mandukya Upanisad (testo)</h2>

                <p>1. La sillaba Om è tutto l'universo. Eccone la spiegazione. Il passato, il presente, il futuro: tutto
                    ciò è [compreso nella] sillaba Om. E anche ciò che è al di là del tempo, che è triplice, è [compreso
                    nella] sillaba Om.</p>

                <p>2. Infatti ogni cosa è il <i>Brahman</i>; l'<i>Atman</i> è il <i>Brahman</i>. Questo <i>Atman</i> ha
                    quattro modi di essere.</p>

                <p>3. Il primo modo di essere si chiama vaisvanara ed è quando si ha lo stato di veglia, si ha la
                    conoscenza delle cose esteriori, sette membra, diciannove aperture e si godono gli elementi
                    materiali.</p>

                <p>4. Il secondo modo di essere si chiama taijasa (luminoso) ed è quando si ha lo stato di sogno, si ha
                    la conoscenza delle cose interiori, sette membra, diciannove aperture e si godono gli elementi
                    sottili.</p>

                <p>5. Quando l'uomo addormentato non concepisce alcun desiderio, non scorge alcun sogno, allora si ha
                    [lo stato di] sonno profondo. Il terzo modo di essere si chiama prajna ed è quando si ha lo stato di
                    sonno profondo, s'è raggiunta l'unità, si è costituiti soltanto di conoscenza, soltanto di gioia, si
                    gode la gioia, si ha per apertura (o strumento di percezione) il pensiero.</p>

                <p>6. [Quando si trova in questa condizione, l'<i>Atman</i>] è il signore di tutto, è l'onnisciente, è
                    il reggitore interno, è il principio di tutte le cose, poiché è l'origine e la fine delle creature.
                </p>

                <p>7. Si considera come quarto [modo di essere] quello che è privo di conoscenza delle cose interiori,
                    privo di conoscenza delle cose esteriori, privo della conoscenza di entrambe. Esso non è costituito
                    soltanto di conoscenza, non è conoscitore né non conoscitore. Esso è invisibile, inavvicinabile,
                    inafferrabile, indefinibile, impensabile, indescrivibile, ha come caratteristica essenziale di
                    dipendere soltanto da se stesso; in esso il mondo visibile si risolve, è serenità e benevolenza, è
                    assolutamente non duale. Esso è l'<i>Atman</i>: esso deve essere conosciuto.</p>

                <p>8. Per quel che riguarda i fonemi, questo <i>Atman</i> corrisponde alla sillaba Om, considerandone
                    gli elementi costitutivi. Gli elementi costitutivi corrispondono ai modi di essere, e i modi di
                    essere corrispondono agli elementi costitutivi, ossia ai suoni <strong>AUM</strong>.</p>

                <p>9. Lo stato di veglia, <i>vaisvanara</i>, corrisponde alla lettera <strong>A</strong>, che è il primo
                    elemento, per il fatto che ottiene (ap) [tutto], oppure per il fatto che è il primo (adi). In verità
                    ottiene tutti i desideri e diventa il primo colui che così conosce.</p>

                <p>10. Lo stato di sogno, <i>taijasa</i>, corrisponde alla lettera <strong>U</strong>, che è il secondo
                    elemento, per il fatto d'essere più alto (utkarsa) [del precedente] o per il fatto di partecipare
                    (ubhayatva) degli altri due [stati fra i quali si trova]. In verità colui che così conosce tiene
                    alta la tradizione della conoscenza [nella sua famiglia], è indifferente [a gioie e dolori] e nella
                    sua stirpe non nasce chi non conosca il <i>Brahman</i>.</p>

                <p>11. Lo stato di sonno profondo, <i>prajna</i>, corrisponde alla lettera <strong>M</strong>, che è il
                    terzo elemento, per il fatto che crea (miti) o che [in esso] si dissolve (apiti) [l'universo]. In
                    verità colui che così conosce crea tutto questo universo e lo riassorbe in sé.</p>

                <p>12. Il quarto [stato] non corrisponde a un [singolo] elemento, è inavvicinabile, in esso il mondo
                    visibile si risolve, è benevolenza, è assolutamente non duale.</p>


                <div className="graphic">
                    <h2 className={'title'}>Rappresentazione grafica</h2>
                    <div className={'stato'}>
                        <h3 className={'title'}>Jagrat (Lo Stato di Veglia) <br/>A</h3>
                        <img className={'image'} width={isMobile ? '100%' : isTablet ? 460 : 600} src={Veglia} alt=""/>
                        <p className={'description'}>In esso la coscienza
                            è <strong>Vaisvanara</strong> (o <strong>Visva</strong>), uno stato caratterizzato dalla
                            dualità soggetto-oggetto estrovertita.
                            L'individuo è consapevole del mondo esterno e interagisce con esso attraverso i sensi.
                            <br/><strong>Turiya</strong> (bordo giallo) è il Sostrato, il Testimone Eterno, la
                            consapevolezza che è sempre presente e che osserva l’esperienza della veglia senza mai
                            essere toccata da essa. </p>
                        <hr className="elegant-hr" />
                    </div>
                    <div className={'stato'}>
                        <h3 className={'title'}>Svapna (Lo Stato di Sogno) <br/>U</h3>
                        <img className={'image'} width={isMobile ? '100%' : isTablet ? 460 : 600} src={Sogno} alt=""/>
                        <p className={'description'}>In esso la coscienza è <strong>Taijasa</strong>, uno stato
                            caratterizzato dalla dualità soggetto-oggetto interna.
                            L'individuo è consapevole di un mondo creato dalla mente, fatto di immagini, pensieri e
                            fantasie, indipendente dalla realtà esterna.
                            <br/><strong>Turiya</strong> (bordo giallo) il Testimone Eterno, la consapevolezza che è
                            sempre presente e che osserva l’esperienza del sogno senza mai essere toccata da essa.</p>
                        <hr className="elegant-hr" />
                    </div>
                    <div className={'stato'}>
                        <h3 className={'title'}>Sushupti (Lo Stato di Sonno Profondo) <br/>M</h3>
                        <img className={'image'} width={isMobile ? '100%' : isTablet ? 460 : 600} src={SonnoProfondo}
                             alt=""/>
                        <p className={'description'}>In esso la coscienza è <strong>Prajna</strong>, uno stato
                            caratterizzato dall'assenza di dualità e dall'indistinta beatitudine.
                            L'individuo non è consapevole né del mondo esterno né di immagini mentali; la coscienza è in
                            uno stato di unità e riposo totale, senza alcuna distinzione tra soggetto e oggetto.

                            <br/>Anche in questo stato, <strong>Turiya</strong> è presente come sostrato/testimone,
                            sebbene non vi sia dualità soggetto-oggetto.</p>
                        <hr className="elegant-hr" />
                    </div>
                </div>

                <h2 className={'title'}>Turiya: Il Testimone Eterno nelle Tre Esperienze</h2>
                <ul style={{display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 40}}>
                    <li>
                        <strong>Oltre la Dualità:</strong> Turiya è la consapevolezza pura che non è limitata dalla
                        dualità soggetto-oggetto come in Jagrat (veglia) e Svapna (sogno). È oltre ogni forma di
                        percezione, esperienza e attività mentale, libero dalle proiezioni della mente e dai sensi.
                    </li>
                    <li>
                        <strong>Puro Testimone (Sakshi):</strong> Turiya è il testimone silenzioso che osserva senza
                        essere coinvolto, senza essere influenzato o modificato dagli stati di veglia, sogno e sonno
                        profondo. Non è coinvolto nelle esperienze ma è sempre presente come la base della
                        consapevolezza che rende possibile ogni stato.
                    </li>
                    <li>
                        <strong>Invariante e Immutabile:</strong> Mentre la coscienza nei tre stati (Vaisvanara,
                        Taijasa, Prajna) è condizionata dal cambiamento, Turiya è immutabile, senza forma e senza
                        attributi (Nirguna). È la realtà che non subisce alterazioni, indipendentemente dal contenuto
                        delle esperienze.
                    </li>
                    <li>
                        <strong>Essenza del Sé (Atman):</strong> Turiya rappresenta l’Atman, la vera natura del Sé, che
                        è identico al Brahman (l’Assoluto). È la consapevolezza che esiste indipendentemente dal corpo,
                        dalla mente e dai fenomeni sensoriali, ed è pura beatitudine (Ananda) consapevole.
                    </li>
                    <li>
                        <strong>Silenzio che Segue AUM:</strong> Turiya è simboleggiato dal silenzio che segue la
                        recitazione di AUM, rappresentando lo stato di consapevolezza non manifestata, libera da ogni
                        contenuto mentale e sensoriale. È il fondamento su cui si manifestano e si dissolvono tutti gli
                        altri stati.
                    </li>
                </ul>

                <h2 className={'title'}>Conclusione</h2>
                <p>
                    Turiya, il Testimone Eterno, è la consapevolezza che è sempre presente e che osserva tutte le
                    esperienze senza mai essere toccata da esse. Non è limitata da Maya, e non è un’esperienza in sé, ma
                    la base che rende possibile ogni esperienza, la verità ultima che si realizza quando le illusioni
                    degli altri stati vengono trascese.
                </p>
            </div>
            <Footer />
        </div>
    )
}

export default App
