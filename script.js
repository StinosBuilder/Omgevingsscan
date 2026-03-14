// ── Standaard template (Template/Template.json) ──
const SEED_DATA = {
  seedVersion: 2,
  counter: 26,
  headerTekst: 'APK [klant]',
  docHeaderTekst: 'Het doel van deze scan is het identificeren van knelpunten en het zichtbaar maken van onbenutte kansen binnen de huidige AFAS-omgeving.',
  docFooterTekst: 'Dit rapport biedt een overzicht van de huidige knelpunten en de onbenutte kansen binnen de AFAS-omgeving. Tijdens onze geplande overleggen nemen wij dit document graag met u door. We kunnen dan gezamenlijk kijken naar uw prioriteiten en strategische doelen. Op basis van die input stellen we vervolgens een realistische, behapbare planning op, afgestemd op de huidige draagkracht van de organisatie.',
  activeCats: ['Algemeen','CRM','HRM','Payroll','Financieel','Ordermanagement','Abonnementen','Projecten','Fiscaal'],
  categories: ['Algemeen','CRM','HRM','Payroll','Financieel','Ordermanagement','Abonnementen','Projecten','Fiscaal'],
  scores: [
    { key: 'Niet',        label: 'Niet in gebruik',     css: 'niet',     color: '#c53030', bg: '#fff5f5', border: '#fc8181', emoji: '🚫' },
    { key: 'Optim',       label: 'Optimalisatiekansen',  css: 'optim',   color: '#b7791f', bg: '#fffbeb', border: '#f6ad55', emoji: '🔧' },
    { key: 'Goed',        label: 'Goed in gebruik',      css: 'goed',    color: '#276749', bg: '#f0fff4', border: '#68d391', emoji: '✅' }
  ],
  checklistItems: [
    { id: 1, text: 'Analyse periode', type: 'text', done: false, value: '' },
    { id: 2, text: 'Aantal workflows', type: 'number', done: false, value: '' },
    { id: 3, text: 'Doorlooptijd norm (dagen)', type: 'number', done: false, value: '' },
    { id: 4, text: 'Aantal connectorgebruikers', type: 'number', done: false, value: '' },
    { id: 5, text: 'Aantal autorisatiegroepen', type: 'number', done: false, value: '' },
    { id: 6, text: 'Handmatig gevulde groepen', type: 'number', done: false, value: '' },
    { id: 7, text: 'Aantal payroll audits', type: 'number', done: false, value: '' },
    { id: 8, text: 'Aantal actieve licenties', type: 'number', done: false, value: '' },
    { id: 9, text: 'Beschikbare licenties', type: 'number', done: false, value: '' },
    { id: 10, text: 'Externe accounts', type: 'number', done: false, value: '' },
    { id: 11, text: 'Aantal dossieritemtypes', type: 'number', done: false, value: '' },
    { id: 12, text: 'Dossieritemtypes met bewaartermijn', type: 'number', done: false, value: '' },
    { id: 13, text: 'Aantal signalen', type: 'number', done: false, value: '' },
    { id: 14, text: 'Aantal tickets', type: 'number', done: false, value: '' },
    { id: 15, text: 'Gem. doorlooptijd ticket (dagen)', type: 'number', done: false, value: '' }
  ],
  checklistCounter: 15,
  rows: [
    // ── Algemeen ──
    { categorie: 'Algemeen', id: 1, naam: 'Workflows / dossieritems', toelichting: 'Binnen dit onderdeel beoordelen wij de gezondheid van de meest gebruikte workflows en de bijbehorende dossieritems. Wij analyseren welke workflows structureel worden ingezet, wat de gemiddelde doorlooptijd per workflow bedraagt en in hoeverre deze aansluit bij de beoogde procestermijn en interne SLA-afspraken.\nDaarnaast beoordelen wij of workflows consistent worden afgerond, of taken correct zijn toegewezen en of het aantal afkeuringen binnen een acceptabele bandbreedte valt.\nAfwijkingen kunnen duiden op onduidelijke verantwoordelijkheden, inefficient ingerichte pagina\'s of een organisatiestructuur die het proces onnodig vertraagt.', score: null, quickwin: false, expanded: false, afbeeldingen: [], teksten: { Niet: 'Binnen de omgeving worden workflows niet of nauwelijks ingezet voor de afhandeling van processen. Mutaties en goedkeuringen verlopen voornamelijk handmatig, waardoor dossiervorming onvolledig is en een betrouwbare audittrail ontbreekt.', Optim: 'Uit de analyse blijkt dat binnen de periode {{Analyse periode}} in totaal {{Aantal workflows}} workflows zijn gestart. De gemiddelde doorlooptijd overschrijdt de interne norm van {{Doorlooptijd norm (dagen)}} dagen.', Goed: 'Workflows worden structureel ingezet voor de belangrijkste processen. De gemiddelde doorlooptijd blijft binnen de gestelde norm van {{Doorlooptijd norm (dagen)}} dagen. Taken zijn correct toegewezen en het aantal afkeuringen is minimaal.' } },
    { categorie: 'Algemeen', id: 2, naam: 'Inactieve tokens', toelichting: 'Binnen dit hoofdstuk analyseren wij het gebruik van connectorgebruikers en tokens die worden ingezet voor externe koppelingen met AFAS. Hierbij beoordelen wij het aantal actieve connectorgebruikers, de mate van autorisatie (leesrechten en mutatierechten) en de recente activiteit van tokens.\nConnectorgebruikers met brede rechten op HR-, payroll- of financiele gegevens vergroten het risico op ongeautoriseerde datamutaties. Tokens zonder recente aanroepen vormen een beveiligingsrisico.', score: null, quickwin: false, expanded: false, afbeeldingen: [], teksten: { Niet: 'Er zijn geen connectorgebruikers of tokens aangetroffen binnen de omgeving. Externe koppelingen met AFAS zijn niet ingericht.', Optim: 'Binnen de omgeving zijn {{Aantal connectorgebruikers}} actieve connectorgebruikers aangetroffen. Een deel beschikt over brede mutatierechten zonder duidelijke functionele noodzaak.', Goed: 'Alle {{Aantal connectorgebruikers}} connectorgebruikers zijn actief in gebruik en beschikken over passende autorisaties. Tokens worden periodiek gecontroleerd en er zijn geen inactieve tokens aangetroffen.' } },
    { categorie: 'Algemeen', id: 3, naam: 'InSite / APK', toelichting: 'Wij analyseren de opbouw van pagina\'s en tegels binnen InSite en beoordelen of veelgebruikte processen en overzichten logisch zijn geplaatst en snel toegankelijk zijn. De medewerker dient met zo min mogelijk muisklikken te komen waar hij/zij moet zijn.\nWanneer processen versnipperd of niet intuitief vindbaar zijn, kan er frustratie ontstaan. Medewerkers kiezen dan sneller voor alternatieve routes buiten AFAS.', score: null, quickwin: false, expanded: false, afbeeldingen: [], teksten: { Niet: 'De InSite-omgeving is niet aangepast aan de organisatie. Medewerkers werken met de standaardinrichting, waardoor veelgebruikte processen moeilijk vindbaar zijn en de gebruikservaring suboptimaal is.', Optim: 'De InSite-omgeving is deels aangepast, maar niet alle veelgebruikte processen zijn logisch geplaatst. Medewerkers hebben te veel klikken nodig om bij relevante informatie te komen, wat de adoptie van AFAS belemmert.', Goed: 'De InSite-omgeving is goed ingericht en afgestemd op de organisatie. Veelgebruikte processen en overzichten zijn logisch geplaatst en snel toegankelijk voor medewerkers.' } },
    { categorie: 'HRM', id: 4, naam: 'Correcties / wijzigingen', toelichting: 'Binnen dit hoofdstuk analyseren wij in hoeverre mutaties binnen HR-, payroll- en financiele processen in een keer correct worden verwerkt, of dat achteraf correcties plaatsvinden.\nEen verhoogd aantal correcties wijst vaak op onvolledige procesinrichting of workflows die niet optimaal worden benut. Wanneer mutaties structureel achteraf worden aangepast, ontstaat extra werkdruk binnen HR en Finance.', score: null, quickwin: false, expanded: false, afbeeldingen: [], teksten: { Niet: 'Er worden geen correcties geregistreerd binnen de omgeving. Dit kan erop wijzen dat correcties buiten het systeem worden verwerkt of dat er onvoldoende controle is op de juistheid van mutaties.', Optim: 'Uit de analyse blijkt dat er regelmatig correcties worden doorgevoerd op eerder verwerkte mutaties. Dit wijst op onvolledige procesinrichting of workflows die niet optimaal worden benut, waardoor extra werkdruk ontstaat binnen HR en Finance.', Goed: 'Mutaties worden overwegend in een keer correct verwerkt. Het aantal correcties is minimaal, wat duidt op goed ingerichte processen en effectief gebruik van workflows voor validatie en goedkeuring.' } },
    { categorie: 'Algemeen', id: 5, naam: 'Autorisatie', toelichting: 'Binnen dit hoofdstuk analyseren wij de inrichting van autorisaties binnen de AFAS-omgeving. Wij kijken specifiek naar autorisatiegroepen die niet automatisch worden gevuld, het gebruik van individuele rechten, groepen met mogelijk te brede autorisaties en de mate waarin autorisaties aansluiten op functies.\nEen goed ingerichte autorisatiestructuur is gebaseerd op rollen en wordt waar mogelijk automatisch onderhouden. Wanneer autorisaties voornamelijk handmatig worden beheerd, neemt de beheerlast toe.', score: null, quickwin: false, expanded: false, afbeeldingen: [], teksten: { Niet: 'De autorisatiestructuur is niet ingericht op basis van rollen of functies. Individuele rechten worden ad hoc toegekend, waardoor er geen gestructureerd overzicht is van wie toegang heeft tot welke gegevens.', Optim: 'Binnen de autorisatiestructuur zijn {{Aantal autorisatiegroepen}} autorisatiegroepen aangetroffen, waarvan {{Handmatig gevulde groepen}} handmatig worden onderhouden.', Goed: 'De autorisatiestructuur is goed ingericht en gebaseerd op rollen en functies. Autorisatiegroepen worden automatisch onderhouden en sluiten aan bij de organisatiestructuur. Het gebruik van individuele rechten is minimaal.' } },
    { categorie: 'Payroll', id: 6, naam: 'Audits', toelichting: 'Binnen dit hoofdstuk analyseren wij het gebruik en de inrichting van audits binnen de AFAS-omgeving. Audits zijn controles die afwijkingen of mogelijke fouten signaleren voordat deze gevolgen hebben voor salarisverwerking of financiele administratie.\nEen effectief auditlandschap helpt organisaties om fouten tijdig te signaleren en risico\'s te beperken. Wanneer audits niet of beperkt worden ingezet, worden afwijkingen vaak pas achteraf ontdekt.', score: null, quickwin: false, expanded: false, afbeeldingen: [], teksten: { Niet: 'Er worden geen audits gebruikt binnen de omgeving. Afwijkingen in salarisverwerking of financiele administratie worden niet proactief gesignaleerd, waardoor fouten mogelijk pas achteraf worden ontdekt.', Optim: 'Binnen de omgeving zijn {{Aantal payroll audits}} payroll audits actief ingericht. Meerdere standaard audits zijn beschikbaar maar worden niet gebruikt.', Goed: 'Het auditlandschap is effectief ingericht met {{Aantal payroll audits}} actieve audits. Alle relevante controles op salarisverwerking en financiele administratie worden periodiek uitgevoerd en afwijkingen worden tijdig gesignaleerd.' } },
    { categorie: 'Algemeen', id: 7, naam: 'Overtollige licenties en gebruikers', toelichting: 'Binnen dit hoofdstuk analyseren wij het gebruik van licenties en gebruikersaccounts binnen de AFAS-omgeving. Wij beoordelen het aantal actieve licenties, de beschikbare licentieruimte en de verhouding tussen afgenomen licenties en het daadwerkelijke gebruik.\nEen goed beheer van licenties zorgt ervoor dat toegang aansluit op de actuele organisatie en dat licentiekosten in verhouding staan tot het daadwerkelijke gebruik.', score: null, quickwin: false, expanded: false, afbeeldingen: [], teksten: { Niet: 'Het licentiebeheer is niet actief ingericht. Er is geen overzicht van de verhouding tussen afgenomen en daadwerkelijk gebruikte licenties, waardoor onnodige kosten kunnen ontstaan.', Optim: 'Binnen de omgeving zijn {{Beschikbare licenties}} licenties beschikbaar, waarvan {{Aantal actieve licenties}} momenteel actief in gebruik. Er zijn {{Externe accounts}} accounts gekoppeld aan externe partijen.', Goed: 'Het licentiebeheer is goed op orde. De verhouding tussen beschikbare en actief gebruikte licenties is gezond. Externe accounts zijn beperkt tot {{Externe accounts}} en worden periodiek gecontroleerd.' } },
    { categorie: 'HRM', id: 8, naam: 'Aan- / afwezigheid', toelichting: 'Binnen dit hoofdstuk analyseren wij de registratie en opvolging van aan- en afwezigheid. Wij kijken naar verlofsaldi, mogelijke negatieve saldi en de opvolging van activiteiten rondom langdurig verzuim.\nHoge verlofsaldi kunnen leiden tot oplopende financiele verplichtingen. Negatieve verlofsaldi kunnen wijzen op onjuiste registratie of onvoldoende controle binnen het proces.', score: null, quickwin: false, expanded: false, afbeeldingen: [], teksten: { Niet: 'De registratie van aan- en afwezigheid wordt niet via AFAS verwerkt. Verlof en verzuim worden buiten het systeem bijgehouden, waardoor er geen centraal overzicht is van saldi en verplichtingen.', Optim: 'De aan- en afwezigheidsregistratie wordt gebruikt, maar er zijn verbeterpunten geconstateerd. Er zijn medewerkers met opvallend hoge verlofsaldi of negatieve saldi, wat kan wijzen op onvoldoende controle binnen het proces.', Goed: 'De registratie van aan- en afwezigheid is goed ingericht. Verlofsaldi worden correct bijgehouden, negatieve saldi komen niet voor en langdurig verzuim wordt adequaat opgepakt via de bijbehorende processen.' } },
    // ── Financieel ──
    { categorie: 'Financieel', id: 9, naam: 'Inkoopaanvragen', toelichting: 'Binnen dit hoofdstuk analyseren wij in hoeverre de organisatie gebruikmaakt van inkoopaanvragen en inkooporders. Deze functionaliteiten ondersteunen het principe van \'inkoop voor factuur\', waarbij verplichtingen eerst worden goedgekeurd voordat kosten worden gemaakt.\nHet gebruik van inkoopaanvragen draagt bij aan betere financiele controle, transparantie en efficientere factuurverwerking.', score: null, quickwin: false, expanded: false, afbeeldingen: [], teksten: { Niet: 'De organisatie maakt geen gebruik van inkoopaanvragen of inkooporders binnen AFAS. Inkoopverplichtingen worden niet vooraf geautoriseerd, waardoor financiele controle beperkt is.', Optim: 'Inkoopaanvragen worden deels gebruikt maar niet consequent toegepast. Niet alle afdelingen of kostensoorten verlopen via het inkoopproces, waardoor factuurverwerking niet volledig geautomatiseerd kan worden.', Goed: 'Het inkoopaanvraagproces is goed ingericht en wordt consequent gebruikt. Verplichtingen worden vooraf goedgekeurd, wat bijdraagt aan financiele controle en efficiente factuurverwerking.' } },
    { categorie: 'HRM', id: 10, naam: 'Bewaartermijnen', toelichting: 'Binnen dit hoofdstuk analyseren wij in hoeverre bewaartermijnen voor persoonsgegevens en dossieritems zijn ingericht. AFAS biedt de mogelijkheid om per type persoon of dossieritem bewaartermijnen vast te leggen.\nHet correct instellen draagt bij aan naleving van privacywetgeving (AVG). Wanneer bewaartermijnen ontbreken, bestaat het risico dat gegevens langer worden bewaard dan noodzakelijk.', score: null, quickwin: false, expanded: false, afbeeldingen: [], teksten: { Niet: 'Binnen de omgeving zijn {{Aantal dossieritemtypes}} dossieritemtypes aanwezig. Voor {{Dossieritemtypes met bewaartermijn}} hiervan is een bewaartermijn ingesteld.', Optim: 'Bewaartermijnen zijn voor een deel van de dossieritemtypes ingesteld. Van de {{Aantal dossieritemtypes}} aanwezige types zijn {{Dossieritemtypes met bewaartermijn}} voorzien van een bewaartermijn. De overige types vereisen nog configuratie voor volledige AVG-compliance.', Goed: 'Bewaartermijnen zijn volledig ingericht voor alle relevante dossieritemtypes en persoonstypen. De organisatie voldoet aan de AVG-vereisten voor het automatisch opschonen van persoonsgegevens na de wettelijke bewaartermijn.' } },
    { categorie: 'HRM', id: 11, naam: 'Handmatige mutaties', toelichting: 'Binnen dit hoofdstuk analyseren wij welke mutaties momenteel buiten workflows om direct in AFAS worden uitgevoerd, terwijl deze geschikt zijn voor geautomatiseerde verwerking via workflows.\nDoor deze mutaties via workflows te laten verlopen wordt de dossiervorming compleet en ontstaat een betrouwbare audittrail.', score: null, quickwin: false, expanded: false, afbeeldingen: [], teksten: { Niet: 'Alle mutaties worden handmatig verwerkt buiten workflows om. Er is geen geautomatiseerde verwerking ingericht, waardoor dossiervorming onvolledig is en een betrouwbare audittrail ontbreekt.', Optim: 'Een deel van de mutaties wordt nog buiten workflows om verwerkt. Deze handmatige mutaties zijn geschikt voor automatisering, waardoor de dossiervorming completer wordt en een betrouwbare audittrail ontstaat.', Goed: 'Mutaties worden overwegend via workflows verwerkt. De dossiervorming is compleet en er is een betrouwbare audittrail beschikbaar. Handmatige mutaties zijn beperkt tot uitzonderingssituaties.' } },
    { categorie: 'Algemeen', id: 12, naam: 'Inzicht (BI)', toelichting: 'Binnen dit hoofdstuk analyseren wij in hoeverre de organisatie gebruikmaakt van inzichten en rapportages op basis van AFAS-gegevens. AFAS fungeert als bronsysteem voor HR-, payroll- en financiele gegevens.\nWanneer rapportages voornamelijk handmatig worden samengesteld, ontstaat het risico dat verschillende versies van dezelfde informatie circuleren. Een goed ingericht BI-landschap zorgt voor actuele en betrouwbare informatie.', score: null, quickwin: false, expanded: false, afbeeldingen: [], teksten: { Niet: 'De organisatie maakt geen gebruik van gestructureerde rapportages op basis van AFAS-gegevens. Informatie wordt ad hoc verzameld, waardoor het risico bestaat dat verschillende versies circuleren.', Optim: 'Er wordt beperkt gebruikgemaakt van rapportages vanuit AFAS. Een deel van de informatiebehoefte wordt handmatig ingevuld, waardoor rapportages niet altijd actueel of consistent zijn.', Goed: 'De organisatie beschikt over een goed ingericht BI-landschap op basis van AFAS-gegevens. Rapportages zijn geautomatiseerd, actueel en betrouwbaar, en worden actief gebruikt voor besluitvorming.' } },
    { categorie: 'HRM', id: 13, naam: 'Personeelsmobiliteit', toelichting: 'Binnen dit hoofdstuk analyseren wij in hoeverre de organisatie gebruikmaakt van de rapportage werkgebonden personenmobiliteit. Voor organisaties met meer dan 100 medewerkers geldt een wettelijke rapportageverplichting.\nAFAS biedt functionaliteit om deze gegevens te registreren en te rapporteren. Wanneer deze inrichting niet volledig is, kan het verzamelen extra handmatig werk vereisen.', score: null, quickwin: false, expanded: false, afbeeldingen: [], teksten: { Niet: 'De rapportage werkgebonden personenmobiliteit is niet ingericht binnen AFAS. De benodigde gegevens worden niet centraal geregistreerd, waardoor rapportage handmatig werk vereist.', Optim: 'De registratie van werkgebonden personenmobiliteit is deels ingericht. Niet alle benodigde gegevens worden volledig vastgelegd, waardoor de wettelijke rapportage aanvullend handmatig werk vereist.', Goed: 'De rapportage werkgebonden personenmobiliteit is volledig ingericht. Alle benodigde gegevens worden centraal geregistreerd en de wettelijke rapportage kan direct vanuit AFAS worden gegenereerd.' } },
    { categorie: 'HRM', id: 14, naam: 'Talentmanagement', toelichting: 'Binnen dit hoofdstuk analyseren wij in hoeverre de talentmanagementmodule van AFAS wordt gebruikt. Deze module ondersteunt processen rondom gesprekscycli, beoordelingen, ontwikkeling en competentiemanagement.\nWanneer deze processen buiten het systeem plaatsvinden, ontstaat het risico dat informatie versnipperd raakt en minder goed beschikbaar is voor analyse of opvolging.', score: null, quickwin: false, expanded: false, afbeeldingen: [], teksten: { Niet: 'De talentmanagementmodule wordt niet gebruikt. Gesprekscycli, beoordelingen en competentiemanagement vinden buiten AFAS plaats, waardoor informatie versnipperd raakt.', Optim: 'De talentmanagementmodule wordt beperkt gebruikt. Niet alle onderdelen (gesprekscycli, beoordelingen, competenties) worden via AFAS ondersteund, waardoor de informatie niet centraal beschikbaar is voor analyse.', Goed: 'De talentmanagementmodule wordt actief en volledig gebruikt. Gesprekscycli, beoordelingen en competentiemanagement zijn centraal ingericht, wat bijdraagt aan gestructureerde opvolging en ontwikkeling van medewerkers.' } },
    { categorie: 'HRM', id: 15, naam: 'Draaiboek', toelichting: 'Binnen dit hoofdstuk analyseren wij in hoeverre draaiboeken worden gebruikt voor processen rondom instroom, sollicitatie en uitstroom. Draaiboeken maken het mogelijk om standaardtaken automatisch toe te wijzen aan betrokken rollen (HR, IT, facilitair, leidinggevende).\nWanneer deze processen niet via een draaiboek worden ondersteund, bestaat het risico dat taken worden vergeten of verantwoordelijkheden niet duidelijk zijn belegd.', score: null, quickwin: false, expanded: false, afbeeldingen: [], teksten: { Niet: 'Er worden geen draaiboeken gebruikt voor instroom, sollicitatie of uitstroom. Taken worden niet automatisch toegewezen, waardoor het risico bestaat dat stappen worden overgeslagen of verantwoordelijkheden onduidelijk zijn.', Optim: 'Draaiboeken worden beperkt ingezet. Niet alle relevante processen (instroom, uitstroom, functiewijziging) zijn via draaiboeken ondersteund, waardoor taken handmatig moeten worden verdeeld en opvolging niet is geborgd.', Goed: 'Draaiboeken worden actief ingezet voor instroom, uitstroom en andere relevante HR-processen. Taken worden automatisch toegewezen aan de juiste rollen en de opvolging is geborgd.' } },
    { categorie: 'Algemeen', id: 16, naam: 'Signalen', toelichting: 'Binnen dit hoofdstuk analyseren wij in hoeverre signaleringen worden gebruikt om processen en gebeurtenissen tijdig onder de aandacht te brengen. Signalen maken het mogelijk om gebruikers automatisch te informeren over gebeurtenissen die opvolging vereisen.\nWanneer signaleringen niet gekoppeld zijn aan workflows, bestaat het risico dat belangrijke gebeurtenissen pas laat worden opgemerkt.', score: null, quickwin: false, expanded: false, afbeeldingen: [], teksten: { Niet: 'Er zijn geen signaleringen ingericht binnen de omgeving. Belangrijke gebeurtenissen en deadlines worden niet automatisch onder de aandacht gebracht, waardoor opvolging afhankelijk is van handmatige controle.', Optim: 'Binnen de omgeving zijn {{Aantal signalen}} signalen ingericht. Niet alle relevante HR-processen worden via signaleringen ondersteund.', Goed: 'Er zijn {{Aantal signalen}} signalen effectief ingericht die alle relevante processen en gebeurtenissen dekken. Gebruikers worden tijdig geinformeerd over acties die opvolging vereisen.' } },
    { categorie: 'CRM', id: 17, naam: 'Ticketing in AFAS', toelichting: 'Binnen dit hoofdstuk analyseren wij in hoeverre vragen en verzoeken centraal worden geregistreerd via Ticketing. Wanneer verzoeken voornamelijk via e-mail worden afgehandeld, ontbreekt vaak overzicht in openstaande vragen en doorlooptijden.\nDoor ticketverzoeken via workflows te laten verlopen, ontstaat inzicht in de status en kan opvolging worden geborgd.', score: null, quickwin: false, expanded: false, afbeeldingen: [], teksten: { Niet: 'De ticketingmodule wordt niet gebruikt. Vragen en verzoeken worden voornamelijk via e-mail afgehandeld, waardoor overzicht in openstaande items en doorlooptijden ontbreekt.', Optim: 'Binnen de onderzochte periode zijn {{Aantal tickets}} tickets geregistreerd. De gemiddelde doorlooptijd bedraagt {{Gem. doorlooptijd ticket (dagen)}} werkdagen.', Goed: 'De ticketingmodule wordt actief gebruikt met {{Aantal tickets}} geregistreerde tickets in de onderzochte periode. De gemiddelde doorlooptijd van {{Gem. doorlooptijd ticket (dagen)}} werkdagen valt binnen de gestelde norm en opvolging is geborgd via workflows.' } }
  ]
};

const DEFAULT_SCORES = [
  { key: 'Niet',  label: 'Niet in gebruik',    css: 'niet',  color: '#c53030', bg: '#fff5f5', border: '#fc8181', emoji: '🚫' },
  { key: 'Optim', label: 'Optimalisatiekansen', css: 'optim', color: '#b7791f', bg: '#fffbeb', border: '#f6ad55', emoji: '🔧' },
  { key: 'Goed',  label: 'Goed in gebruik',     css: 'goed',  color: '#276749', bg: '#f0fff4', border: '#68d391', emoji: '✅' },
];
const SCORE_COLORS = [
  { name: 'Rood',    color: '#c53030', bg: '#fff5f5', border: '#fc8181', css: 'sc-rood' },
  { name: 'Oranje',  color: '#b7791f', bg: '#fffbeb', border: '#f6ad55', css: 'sc-oranje' },
  { name: 'Groen',   color: '#276749', bg: '#f0fff4', border: '#68d391', css: 'sc-groen' },
  { name: 'Blauw',   color: '#2b6cb0', bg: '#ebf8ff', border: '#63b3ed', css: 'sc-blauw' },
  { name: 'Paars',   color: '#6b46c1', bg: '#faf5ff', border: '#b794f4', css: 'sc-paars' },
  { name: 'Grijs',   color: '#4a5568', bg: '#f7fafc', border: '#a0aec0', css: 'sc-grijs' },
];
const SCORE_EMOJIS = ['🚫','🔧','✅','⚡','📌','🔍','💡','⚠️','🎯','📊'];
let SCORES = DEFAULT_SCORES.map(s => ({...s}));
let SCORE_MAP = {};
let EMOJIS = {};
function rebuildScoreMaps() {
  SCORE_MAP = Object.fromEntries(SCORES.map(s => [s.key, s]));
  EMOJIS = Object.fromEntries(SCORES.map(s => [s.key, s.emoji || '•']));
}
rebuildScoreMaps();
const DEFAULT_CATEGORIES = ['Algemeen','CRM','HRM','Payroll','Financieel','Ordermanagement','Abonnementen','Projecten','Fiscaal'];
let CATEGORIES = [...DEFAULT_CATEGORIES];

let rows          = [];
let counter       = 0;
let headerTekst   = '';
let docHeaderTekst = '';
let docFooterTekst = '';
let consultantNaam = '';
let activeCats    = new Set(CATEGORIES); // alle categorieën zichtbaar
let checklistItems = [];  // [{id, text, done}]
let checklistCounter = 0;
let scanTodos = [];       // [{id, text, done}]
let scanTodoCounter = 0;
const STORAGE_KEY  = 'omgevingsscan_data';
/* LIBRARY_KEY verwijderd */

function emptyTeksten() {
  return Object.fromEntries(SCORES.map(s => [s.key, '']));
}

let rowVarCounter = 0;

// ── Rich Text helpers ──
function richToolbarHtml(editorId) {
  return `<div class="rich-toolbar" data-editor="${editorId}">
    <button type="button" onmousedown="event.preventDefault(); applyFormat('bold')" title="Vet (Ctrl+B)"><b>B</b></button>
    <button type="button" onmousedown="event.preventDefault(); applyFormat('italic')" title="Cursief (Ctrl+I)"><i>I</i></button>
    <button type="button" onmousedown="event.preventDefault(); applyFormat('underline')" title="Onderstreept (Ctrl+U)"><u>U</u></button>
    <button type="button" onmousedown="event.preventDefault(); applyFormat('insertUnorderedList')" title="Opsommingslijst">&#8226;</button>
  </div>`;
}
function applyFormat(cmd) {
  document.execCommand(cmd, false, null);
}

// Haal plain-text uit een contenteditable (voor variabele-detectie bij slash-commands)
function getEditorPlainText(el) {
  return el.innerText || '';
}

// Sanitize HTML van contenteditable voor opslag (strip scripts, alleen veilige tags)
function sanitizeEditorHtml(html) {
  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  // Verwijder script/style tags
  tmp.querySelectorAll('script,style,iframe,object,embed').forEach(el => el.remove());
  return tmp.innerHTML;
}

// Highlight {{variabelen}} inline in een contenteditable
function highlightVarsInEditor(el) {
  const sel = window.getSelection();
  let savedRange = null;
  if (sel.rangeCount > 0 && el.contains(sel.anchorNode)) {
    savedRange = saveCaretPosition(el);
  }
  // Walk all text nodes and wrap {{...}} in spans
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
  const matches = [];
  let node;
  while (node = walker.nextNode()) {
    // Skip als parent al een var-hl span is
    if (node.parentNode.classList && node.parentNode.classList.contains('var-hl')) continue;
    const regex = /\{\{([^}]+)\}\}/g;
    let match;
    while (match = regex.exec(node.textContent)) {
      matches.push({ node, start: match.index, end: match.index + match[0].length, text: match[0] });
    }
  }
  // Achteruit vervangen zodat indices kloppen
  for (let i = matches.length - 1; i >= 0; i--) {
    const m = matches[i];
    const range = document.createRange();
    range.setStart(m.node, m.start);
    range.setEnd(m.node, m.end);
    const span = document.createElement('span');
    span.className = 'var-hl';
    span.textContent = m.text;
    range.deleteContents();
    range.insertNode(span);
  }
  if (savedRange) restoreCaretPosition(el, savedRange);
}

function saveCaretPosition(el) {
  const sel = window.getSelection();
  if (!sel.rangeCount) return null;
  const range = sel.getRangeAt(0);
  const pre = document.createRange();
  pre.selectNodeContents(el);
  pre.setEnd(range.startContainer, range.startOffset);
  return pre.toString().length;
}

function restoreCaretPosition(el, offset) {
  const sel = window.getSelection();
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
  let node, pos = 0;
  while (node = walker.nextNode()) {
    const len = node.textContent.length;
    if (pos + len >= offset) {
      const range = document.createRange();
      range.setStart(node, offset - pos);
      range.collapse(true);
      sel.removeAllRanges();
      sel.addRange(range);
      return;
    }
    pos += len;
  }
}

// ── Editor input handlers ──
function handleEditorInput(el, rowId, scoreKey) {
  const html = sanitizeEditorHtml(el.innerHTML);
  if (scoreKey === 'toelichting') updateToelichting(rowId, html);
  else updateTekst(rowId, scoreKey, html);
  handleSlashInputEditor(el, rowId, scoreKey);
}
function handleScanEditorInput(el, rowId) {
  const html = sanitizeEditorHtml(el.innerHTML);
  updateScanTekst(rowId, html);
}

// ── Slash-commands voor contenteditable ──
function handleSlashKeyEditor(e, rowId, scoreKey) {
  const el = e.target.closest('[contenteditable]') || e.target;
  const row = rows.find(r => r.id === rowId);
  const rowVars = (row && Array.isArray(row.variabelen)) ? row.variabelen.map(v => ({ id: v.id, text: v.name, _rowVar: true })) : [];
  const globalVars = checklistItems.filter(i => (i.type === 'text' || i.type === 'number') && (!i.linkedRowId || i.linkedRowId === rowId));
  const varItems = [...rowVars, ...globalVars];
  if (varItems.length === 0) return;

  if (slashState && slashState.el === el) {
    if (e.key === 'ArrowDown') { e.preventDefault(); slashState.selectedIdx = Math.min(slashState.selectedIdx + 1, slashState.filtered.length - 1); renderSlashDropdown(); return; }
    if (e.key === 'ArrowUp')   { e.preventDefault(); slashState.selectedIdx = Math.max(slashState.selectedIdx - 1, 0); renderSlashDropdown(); return; }
    if (e.key === 'Enter' || e.key === 'Tab') {
      e.preventDefault();
      const item = slashState.filtered[slashState.selectedIdx];
      if (item) pickSlashVariableEditor(item);
      return;
    }
    if (e.key === 'Escape') { e.preventDefault(); closeSlashDropdown(); return; }
  }
}

function handleSlashInputEditor(el, rowId, scoreKey) {
  const row = rows.find(r => r.id === rowId);
  const rowVars = (row && Array.isArray(row.variabelen)) ? row.variabelen.map(v => ({ id: v.id, text: v.name, _rowVar: true })) : [];
  const globalVars = checklistItems.filter(i => (i.type === 'text' || i.type === 'number') && (!i.linkedRowId || i.linkedRowId === rowId));
  const varItems = [...rowVars, ...globalVars];
  if (varItems.length === 0) { closeSlashDropdown(); return; }

  const sel = window.getSelection();
  if (!sel.rangeCount) { closeSlashDropdown(); return; }
  const range = sel.getRangeAt(0);
  const textNode = range.startContainer;
  if (textNode.nodeType !== Node.TEXT_NODE) { closeSlashDropdown(); return; }

  const text = textNode.textContent;
  const cursor = range.startOffset;
  const before = text.substring(0, cursor);
  const slashIdx = before.lastIndexOf('/');
  if (slashIdx === -1 || (slashIdx > 0 && before[slashIdx - 1] !== ' ' && before[slashIdx - 1] !== '\n')) {
    closeSlashDropdown(); return;
  }
  const query = before.substring(slashIdx + 1).toLowerCase();
  const filtered = varItems.filter(v => v.text.toLowerCase().includes(query));
  if (filtered.length === 0) { closeSlashDropdown(); return; }

  slashState = { el, rowId, scoreKey, textNode, slashOffset: slashIdx, cursorOffset: cursor, filtered, selectedIdx: 0 };
  renderSlashDropdownEditor();
}

function renderSlashDropdownEditor() {
  if (!slashState) return;
  let dd = document.getElementById('slash-dropdown');
  if (!dd) {
    dd = document.createElement('div');
    dd.id = 'slash-dropdown';
    dd.className = 'slash-dropdown';
    document.body.appendChild(dd);
  }
  dd.innerHTML = slashState.filtered.map((v, i) =>
    `<div class="slash-dropdown-item${i === slashState.selectedIdx ? ' active' : ''}"
       onmousedown="pickSlashVariableEditorById(${v.id})">${escHtml(v.text)}</div>`
  ).join('');
  dd.style.display = 'block';

  // Positie bij caret
  const sel = window.getSelection();
  if (sel.rangeCount > 0) {
    const caretRect = sel.getRangeAt(0).getBoundingClientRect();
    dd.style.left = caretRect.left + 'px';
    dd.style.minWidth = '200px';
    const ddHeight = dd.offsetHeight;
    const spaceBelow = window.innerHeight - caretRect.bottom - 4;
    if (spaceBelow < ddHeight && caretRect.top > ddHeight) {
      dd.style.top = (caretRect.top - ddHeight - 4) + 'px';
    } else {
      dd.style.top = (caretRect.bottom + 4) + 'px';
    }
  }
}

function pickSlashVariableEditorById(varId) {
  if (slashState && slashState.filtered) {
    const item = slashState.filtered.find(v => v.id === varId);
    if (item) { pickSlashVariableEditor(item); return; }
  }
  const item = checklistItems.find(i => i.id === varId);
  if (item) pickSlashVariableEditor(item);
}

function pickSlashVariableEditor(item) {
  if (!slashState) return;
  const { el, rowId, scoreKey, textNode, slashOffset, cursorOffset } = slashState;
  const tag = `{{${item.text}}}`;

  // Vervang /query door de tag
  const text = textNode.textContent;
  textNode.textContent = text.substring(0, slashOffset) + tag + text.substring(cursorOffset);

  // Zet caret na de tag
  const newOffset = slashOffset + tag.length;
  const sel = window.getSelection();
  const range = document.createRange();
  range.setStart(textNode, newOffset);
  range.collapse(true);
  sel.removeAllRanges();
  sel.addRange(range);

  // Save
  const html = sanitizeEditorHtml(el.innerHTML);
  if (scoreKey === 'toelichting') updateToelichting(rowId, html);
  else if (scoreKey === '_scan') updateScanTekst(rowId, html);
  else updateTekst(rowId, scoreKey, html);

  closeSlashDropdown();
}

// ── Versie beheer ──
const VERSION_KEY = 'omgevingsscan_versions';
function saveVersion() {
  const versions = JSON.parse(localStorage.getItem(VERSION_KEY) || '[]');
  const payload = buildPayload();
  const nr = versions.length + 1;
  versions.push({ nr, timestamp: new Date().toISOString(), data: payload });
  // Max 20 versies
  while (versions.length > 20) versions.shift();
  localStorage.setItem(VERSION_KEY, JSON.stringify(versions));
  showToast(`Versie ${nr} opgeslagen`);
  saveData();
}
function loadVersions() { return JSON.parse(localStorage.getItem(VERSION_KEY) || '[]'); }
function restoreVersion(idx) {
  const versions = loadVersions();
  const v = versions[idx];
  if (!v) return;
  if (!confirm(`Wil je versie ${v.nr} herstellen? Huidige wijzigingen worden overschreven.`)) return;
  applyImportedScan(v.data, `versie-${v.nr}`);
  showToast(`Versie ${v.nr} hersteld`);
}
function showVersionModal() {
  const versions = loadVersions();
  let content;
  if (versions.length === 0) {
    content = '<div class="version-empty">Nog geen versies opgeslagen.</div>';
  } else {
    content = '<div class="version-list">' + versions.map((v, i) => {
      const d = new Date(v.timestamp);
      const dateStr = d.toLocaleDateString('nl-NL') + ' ' + d.toLocaleTimeString('nl-NL', {hour:'2-digit',minute:'2-digit'});
      return `<div class="version-item">
        <div class="v-info"><div class="v-label">Versie ${v.nr}</div><div class="v-date">${dateStr}</div></div>
        <div class="v-actions">
          <button class="v-restore" onclick="restoreVersion(${i}); closeVersionModal()">Herstellen</button>
          <button onclick="downloadVersion(${i})">Download</button>
        </div>
      </div>`;
    }).reverse().join('') + '</div>';
  }
  let backdrop = document.getElementById('version-modal-backdrop');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.id = 'version-modal-backdrop';
    backdrop.className = 'modal-backdrop open';
    backdrop.onclick = e => { if (e.target === backdrop) closeVersionModal(); };
    document.body.appendChild(backdrop);
  }
  backdrop.innerHTML = `<div class="version-modal"><h3>Versiegeschiedenis</h3>${content}<div style="text-align:right;margin-top:16px;"><button class="btn-primary" onclick="closeVersionModal()">Sluiten</button></div></div>`;
  backdrop.classList.add('open');
  backdrop.style.display = 'flex';
}
function closeVersionModal() {
  const backdrop = document.getElementById('version-modal-backdrop');
  if (backdrop) { backdrop.classList.remove('open'); backdrop.style.display = 'none'; }
}
function downloadVersion(idx) {
  const versions = loadVersions();
  const v = versions[idx];
  if (!v) return;
  const safeName = (v.data.headerTekst || 'scan').replace(/[^a-zA-Z0-9]/g, '-').substring(0, 30);
  const dateStr = new Date(v.timestamp).toISOString().slice(0,10);
  const blob = new Blob([JSON.stringify(v.data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href = url;
  a.download = `omgevingsscan-${safeName}-v${v.nr}-${dateStr}.json`;
  a.click(); URL.revokeObjectURL(url);
}

// ── Opslaan & laden ──
function buildPayload() {
  return {
    seedVersion: 1,
    counter, headerTekst, docHeaderTekst, docFooterTekst, consultantNaam,
    activeCats: [...activeCats],
    categories: [...CATEGORIES],
    scores: SCORES.map(s => ({...s})),
    checklistItems: checklistItems,
    checklistCounter: checklistCounter,
    scanTodos: scanTodos,
    scanTodoCounter: scanTodoCounter,
    rows: rows.map(r => ({ ...r, expanded: false }))
  };
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(buildPayload()));
}

function loadData() {
  try {
    const raw  = localStorage.getItem(STORAGE_KEY);
    const p    = (raw && JSON.parse(raw).seedVersion >= 1) ? JSON.parse(raw) : SEED_DATA;
    counter        = p.counter        || 0;
    headerTekst    = p.headerTekst    || '';
    docHeaderTekst = p.docHeaderTekst || '';
    docFooterTekst = p.docFooterTekst || '';
    consultantNaam = p.consultantNaam || '';
    // Herstel categorieën
    if (p.categories && p.categories.length) CATEGORIES = p.categories;
    activeCats     = new Set(p.activeCats && p.activeCats.length ? p.activeCats : CATEGORIES);
    CATEGORIES.forEach(c => { if (!activeCats.has(c)) activeCats.add(c); });
    // Herstel scores
    if (p.scores && p.scores.length) {
      SCORES = p.scores.map(s => ({...s}));
      rebuildScoreMaps();
    }
    // Herstel checklist (migreer oude items zonder type)
    checklistItems   = (p.checklistItems || []).map(i => ({ type: 'checkbox', value: '', linkedRowId: null, ...i }));
    checklistCounter = p.checklistCounter || (checklistItems.length ? Math.max(...checklistItems.map(i=>i.id))+1 : 0);
    scanTodos        = (p.scanTodos || []).map(t => ({ done: false, ...t }));
    scanTodoCounter  = p.scanTodoCounter || (scanTodos.length ? Math.max(...scanTodos.map(t=>t.id))+1 : 0);
    rows           = (p.rows || []).map(r => {
      const row = { categorie: CATEGORIES[0] || 'Algemeen', toelichting: '', ...r, expanded: false };
      // Migreer oud enkelvoudig afbeelding-veld naar array
      if (!Array.isArray(row.afbeeldingen)) {
        row.afbeeldingen = row.afbeelding ? [row.afbeelding] : [];
      }
      // Migreer tekstvelden voor nieuwe/aangepaste scores
      if (row.teksten) {
        SCORES.forEach(s => { if (!(s.key in row.teksten)) row.teksten[s.key] = ''; });
      }
      // Migreer: voeg variabelen array toe als die ontbreekt
      if (!Array.isArray(row.variabelen)) row.variabelen = [];
      // Voeg ontbrekende categorie toe als die niet in CATEGORIES staat
      if (row.categorie && !CATEGORIES.includes(row.categorie)) {
        CATEGORIES.push(row.categorie);
        activeCats.add(row.categorie);
      }
      return row;
    });
    // Init rowVarCounter op basis van bestaande variabelen
    const allRowVarIds = rows.flatMap(r => (r.variabelen || []).map(v => v.id || 0));
    rowVarCounter = allRowVarIds.length > 0 ? Math.max(...allRowVarIds) : 0;
  } catch(e) {
    // corrupt data → seed
    counter = SEED_DATA.counter; headerTekst = SEED_DATA.headerTekst;
    docHeaderTekst = SEED_DATA.docHeaderTekst; docFooterTekst = SEED_DATA.docFooterTekst;
    activeCats = new Set(CATEGORIES); rows = SEED_DATA.rows.map(r => ({...r, expanded:false}));
  }

  renderCatFilter();
  renderTable();
}

// ── Update functies ──
function updateHeaderTekst(v)     { headerTekst    = v; debounceSave(); }
function updateDocTekst(part, v)  {
  if (part === 'header') docHeaderTekst = v;
  else                   docFooterTekst = v;
  debounceSave();
}

let saveTimer = null;
function debounceSave() { clearTimeout(saveTimer); saveTimer = setTimeout(saveData, 400); }

// ── Categorie filter ──
function renderCatFilter() {
  const wrap = document.getElementById('cat-filter-chips');
  if (!wrap) return;
  wrap.innerHTML = CATEGORIES.map(c => {
    const checked = activeCats.has(c);
    return `<label class="cat-chip${checked ? ' checked' : ''}">
      <input type="checkbox" ${checked ? 'checked' : ''} onchange="toggleCatFilter('${c}', this)"/>
      ${c}
    </label>`;
  }).join('');
}

function toggleCatFilter(cat, el) {
  if (el.checked) activeCats.add(cat);
  else            activeCats.delete(cat);
  // update chip style
  el.closest('.cat-chip').classList.toggle('checked', el.checked);
  applyFilter();
  saveData();
}

function applyFilter() {
  for (const r of rows) {
    const visible  = activeCats.has(r.categorie);
    const mainRow  = document.getElementById(`row-${r.id}`);
    const detRow   = document.getElementById(`detail-${r.id}`);
    if (mainRow) mainRow.classList.toggle('hidden', !visible);
    if (detRow  && !visible) detRow.style.display = 'none';
  }
  updateBadges();
}

// ── Rijen beheer ──
function addRow() {
  const id = ++counter;
  rows.push({ id, naam: `Variabele ${id}`, categorie: CATEGORIES[0] || 'Algemeen', score: null, teksten: emptyTeksten(), afbeeldingen: [], quickwin: false, type: null, expanded: false, variabelen: [] });
  renderTable();
  renderMappingCards();
  saveData();
  setTimeout(() => {
    const card = document.getElementById(`mcard-${id}`);
    if (card) { card.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
    const nameInput = card && card.querySelector('.mapping-card-name');
    if (nameInput) { nameInput.focus(); nameInput.select(); }
  }, 50);
}

function removeRow(id) {
  rows = rows.filter(r => r.id !== id);
  renderTable();
  if (currentPage === 'mapping') renderMappingCards();
  saveData();
}

function toggleActive(id) {
  const r = rows.find(r => r.id === id);
  if (r) r.actief = !r.actief;
  updateBadges();
  updateGenerateBtn();
  const tr = document.getElementById(`row-${id}`);
  if (tr) tr.classList.toggle('is-active', r.actief);
  saveData();
}

function setScore(id, key) {
  const r = rows.find(r => r.id === id);
  if (!r) return;
  r.score = (r.score === key) ? null : key;
  const el = document.getElementById(`score-${id}`);
  if (el) el.innerHTML = scoreHTML(r);
  // Toggle has-score class op card
  const card = document.getElementById(`scan-card-${id}`);
  if (card) card.classList.toggle('has-score', !!r.score);
  // Toon/verberg tekst-blok op scan pagina
  const tekstEl = document.getElementById(`row-tekst-${id}`);
  if (tekstEl) {
    if (r.score) {
      tekstEl.style.display = '';
      const scoreInfo = SCORE_MAP[r.score];
      const label = tekstEl.querySelector('.scan-tekst-label');
      const ta = document.getElementById(`scan-ta-${id}`);
      if (label && scoreInfo) label.textContent = scoreInfo.label;
      if (ta) { ta.innerHTML = r.teksten[r.score] || ''; }
    } else {
      tekstEl.style.display = 'none';
    }
  }
  updateGenerateBtn();
  saveData();
}

function updateScanTekst(id, value) {
  const r = rows.find(r => r.id === id);
  if (r && r.score) { r.teksten[r.score] = value; debounceSave(); }
}

function toggleExpand(id) {
  const r = rows.find(r => r.id === id);
  if (!r) return;
  r.expanded = !r.expanded;
  const btn  = document.getElementById(`expand-btn-${id}`);
  const det  = document.getElementById(`detail-${id}`);
  if (btn) { btn.classList.toggle('open', r.expanded); btn.textContent = r.expanded ? '▲ Sluiten' : '▼ Teksten'; updateExpandBtnStyle(r.id); }
  if (det) det.style.display = r.expanded ? 'table-row' : 'none';
  // Sync mobiele expand-knop
  const mobBtn = document.querySelector(`#row-${id} .btn-mob-expand`);
  if (mobBtn) mobBtn.classList.toggle('open', r.expanded);
}

function updateTekst(id, key, value) {
  const r = rows.find(r => r.id === id);
  if (r) { r.teksten[key] = value; updateExpandBtnStyle(id); debounceSave(); }
}

function updateToelichting(id, value) {
  const r = rows.find(r => r.id === id);
  if (r) { r.toelichting = value; debounceSave(); }
}

function updateNaam(id, value) {
  const r = rows.find(r => r.id === id);
  if (r) { r.naam = value; debounceSave(); }
}

function updateCategorie(id, value) {
  const r = rows.find(r => r.id === id);
  if (!r) return;
  r.categorie = value;
  // direct filter toepassen
  const visible = activeCats.has(value);
  const mainRow = document.getElementById(`row-${id}`);
  const detRow  = document.getElementById(`detail-${id}`);
  if (mainRow) mainRow.classList.toggle('hidden', !visible);
  if (detRow && !visible) detRow.style.display = 'none';
  updateBadges();
  saveData();
}

function toggleVarDropdown(btn) {
  const dd = btn.nextElementSibling;
  const isOpen = dd.style.display !== 'none';
  closeSlashDropdown();
  document.querySelectorAll('.var-dropdown').forEach(d => d.style.display = 'none');
  dd.style.display = isOpen ? 'none' : 'block';
}

function insertVariable(rowId, scoreKey, varId, el) {
  // Zoek in per-row variabelen eerst, dan globaal
  const row = rows.find(r => r.id === rowId);
  let varName = null;
  if (row && Array.isArray(row.variabelen)) {
    const rv = row.variabelen.find(v => v.id === varId);
    if (rv) varName = rv.name;
  }
  if (!varName) {
    const item = checklistItems.find(i => i.id === varId);
    if (item) varName = item.text;
  }
  if (!varName) return;
  const editor = document.getElementById(`ta-${rowId}-${scoreKey}`);
  if (!editor) return;
  const tag = `{{${varName}}}`;
  // Insert bij caret of aan het einde
  editor.focus();
  const sel = window.getSelection();
  if (sel.rangeCount > 0 && editor.contains(sel.anchorNode)) {
    const range = sel.getRangeAt(0);
    range.deleteContents();
    const textNode = document.createTextNode(tag);
    range.insertNode(textNode);
    range.setStartAfter(textNode);
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);
  } else {
    editor.innerHTML += tag;
  }
  const html = sanitizeEditorHtml(editor.innerHTML);
  if (scoreKey === 'toelichting') updateToelichting(rowId, html);
  else updateTekst(rowId, scoreKey, html);
  if (el.closest('.var-dropdown')) el.closest('.var-dropdown').style.display = 'none';
  closeSlashDropdown();
}

// ── Slash-command dropdown (/variabele) ──
let slashState = null; // { ta, rowId, scoreKey, slashPos, selectedIdx }

function handleSlashKey(e, rowId, scoreKey) {
  const ta = e.target;
  const row = rows.find(r => r.id === rowId);
  const rowVars = (row && Array.isArray(row.variabelen)) ? row.variabelen.map(v => ({ id: v.id, text: v.name, _rowVar: true })) : [];
  const globalVars = checklistItems.filter(i => (i.type === 'text' || i.type === 'number') && (!i.linkedRowId || i.linkedRowId === rowId));
  const varItems = [...rowVars, ...globalVars];
  if (varItems.length === 0) return;

  // Als slash-dropdown open is, navigeer met pijltjes/enter/escape
  if (slashState && slashState.ta === ta) {
    if (e.key === 'ArrowDown') { e.preventDefault(); slashState.selectedIdx = Math.min(slashState.selectedIdx + 1, slashState.filtered.length - 1); renderSlashDropdown(); return; }
    if (e.key === 'ArrowUp')   { e.preventDefault(); slashState.selectedIdx = Math.max(slashState.selectedIdx - 1, 0); renderSlashDropdown(); return; }
    if (e.key === 'Enter' || e.key === 'Tab') {
      e.preventDefault();
      const item = slashState.filtered[slashState.selectedIdx];
      if (item) pickSlashVariable(item);
      return;
    }
    if (e.key === 'Escape') { e.preventDefault(); closeSlashDropdown(); return; }
  }
}

function handleSlashInput(e, rowId, scoreKey) {
  const ta = e.target;
  // Combineer per-row variabelen + globale variabelen (incl. aan deze row gelinkte)
  const row = rows.find(r => r.id === rowId);
  const rowVars = (row && Array.isArray(row.variabelen)) ? row.variabelen.map(v => ({ id: v.id, text: v.name, _rowVar: true })) : [];
  const globalVars = checklistItems.filter(i => (i.type === 'text' || i.type === 'number') && (!i.linkedRowId || i.linkedRowId === rowId));
  const varItems = [...rowVars, ...globalVars];
  if (varItems.length === 0) { closeSlashDropdown(); return; }
  const val = ta.value;
  const cursor = ta.selectionStart;

  // Zoek de laatste '/' vóór de cursor
  const before = val.substring(0, cursor);
  const slashIdx = before.lastIndexOf('/');
  if (slashIdx === -1 || (slashIdx > 0 && before[slashIdx - 1] !== ' ' && before[slashIdx - 1] !== '\n')) {
    closeSlashDropdown(); return;
  }
  const query = before.substring(slashIdx + 1).toLowerCase();

  // Filter variabelen op query
  const filtered = varItems.filter(v => v.text.toLowerCase().includes(query));
  if (filtered.length === 0) { closeSlashDropdown(); return; }

  slashState = { ta, rowId, scoreKey, slashPos: slashIdx, filtered, selectedIdx: 0 };
  renderSlashDropdown();
}

function renderSlashDropdown() {
  if (!slashState) return;
  let dd = document.getElementById('slash-dropdown');
  if (!dd) {
    dd = document.createElement('div');
    dd.id = 'slash-dropdown';
    dd.className = 'slash-dropdown';
    document.body.appendChild(dd);
  }
  dd.innerHTML = slashState.filtered.map((v, i) =>
    `<div class="slash-dropdown-item${i === slashState.selectedIdx ? ' active' : ''}"
       onmousedown="pickSlashVariableById(${v.id})">${escHtml(v.text)}</div>`
  ).join('');
  dd.style.display = 'block';
  // Positie: probeer onder de textarea, anders erboven als het niet past
  const ta = slashState.ta;
  const rect = ta.getBoundingClientRect();
  dd.style.left = rect.left + 'px';
  dd.style.minWidth = Math.min(rect.width, 260) + 'px';
  const ddHeight = dd.offsetHeight;
  const spaceBelow = window.innerHeight - rect.bottom - 4;
  if (spaceBelow < ddHeight && rect.top > ddHeight) {
    dd.style.top = (rect.top - ddHeight - 4) + 'px';
  } else {
    dd.style.top = (rect.bottom + 4) + 'px';
  }
}

function pickSlashVariableById(varId) {
  if (slashState && slashState.filtered) {
    const item = slashState.filtered.find(v => v.id === varId);
    if (item) { pickSlashVariable(item); return; }
  }
  const item = checklistItems.find(i => i.id === varId);
  if (item) pickSlashVariable(item);
}

function pickSlashVariable(item) {
  if (!slashState) return;
  const { ta, rowId, scoreKey, slashPos } = slashState;
  const tag = `{{${item.text}}}`;
  const cursor = ta.selectionStart;
  ta.value = ta.value.substring(0, slashPos) + tag + ta.value.substring(cursor);
  ta.selectionStart = ta.selectionEnd = slashPos + tag.length;
  ta.focus();
  if (scoreKey === 'toelichting') updateToelichting(rowId, ta.value);
  else updateTekst(rowId, scoreKey, ta.value);
  syncHighlight(rowId, scoreKey);
  closeSlashDropdown();
}

function closeSlashDropdown() {
  slashState = null;
  const dd = document.getElementById('slash-dropdown');
  if (dd) dd.style.display = 'none';
}

// Sluit slash-dropdown bij klik buiten
document.addEventListener('mousedown', e => {
  const dd = document.getElementById('slash-dropdown');
  if (dd && !dd.contains(e.target)) closeSlashDropdown();
});

function replaceVariables(text, row) {
  if (!text) return text;
  // Eerst per-row variabelen vervangen
  if (row && Array.isArray(row.variabelen)) {
    for (const v of row.variabelen) {
      text = text.replaceAll(`{{${v.name}}}`, v.value || '');
    }
  }
  // Dan checklist variabelen: globale + aan deze row gelinkte
  for (const item of checklistItems) {
    if (item.type === 'text' || item.type === 'number') {
      if (item.linkedRowId && (!row || item.linkedRowId !== row.id)) continue;
      text = text.replaceAll(`{{${item.text}}}`, item.value || '');
    }
  }
  return text;
}

function highlightVars(text) {
  if (!text) return '\n';
  return escHtml(text).replace(/\{\{([^}]+)\}\}/g, '<mark class="var-hl">{{$1}}</mark>') + '\n';
}
function syncHighlight(rowId, key) {
  const ta = document.getElementById(`ta-${rowId}-${key}`);
  const hl = document.getElementById(`hl-${rowId}-${key}`);
  if (ta && hl) { hl.innerHTML = highlightVars(ta.value); hl.scrollTop = ta.scrollTop; }
}
function syncHighlightScroll(ta, rowId, key) {
  const hl = document.getElementById(`hl-${rowId}-${key}`);
  if (hl) hl.scrollTop = ta.scrollTop;
}

// ── Per-row variabelen beheer ──
function addRowVariable(rowId) {
  const r = rows.find(r => r.id === rowId);
  if (!r) return;
  const input = document.getElementById(`row-var-input-${rowId}`);
  const name = input ? input.value.trim() : '';
  if (!name) return;
  if (r.variabelen.some(v => v.name === name)) { showToast('Variabele bestaat al voor dit onderdeel.'); return; }
  r.variabelen.push({ id: ++rowVarCounter, name, type: 'text', value: '' });
  if (input) input.value = '';
  renderMappingCards();
  debounceSave();
}

function removeRowVariable(rowId, varId) {
  const r = rows.find(r => r.id === rowId);
  if (!r) return;
  r.variabelen = r.variabelen.filter(v => v.id !== varId);
  renderMappingCards();
  debounceSave();
}

function updateRowVariableValue(rowId, varId, value) {
  const r = rows.find(r => r.id === rowId);
  if (!r) return;
  const v = r.variabelen.find(v => v.id === varId);
  if (v) { v.value = value; debounceSave(); }
}

function toggleQuickwin(id) {
  const r = rows.find(r => r.id === id);
  if (r) { r.quickwin = !r.quickwin; saveData(); }
  const cb = document.getElementById(`qw-${id}`);
  if (cb) cb.checked = r.quickwin;
}

function setType(id, type) {
  const r = rows.find(r => r.id === id);
  if (!r) return;
  r.type = type || null;
  saveData();
}

// ── HTML helpers ──
function scoreHTML(r) {
  return SCORES.map(s => {
    const sel = r.score === s.key ? ' selected' : '';
    return `<span class="score-pill ${s.css}${sel}" onclick="setScore(${r.id},'${s.key}')">${s.label}</span>`;
  }).join('');
}

function detailHTML(r) {
  const imgs = Array.isArray(r.afbeeldingen) ? r.afbeeldingen : [];
  const thumbsHtml = imgs.length > 0
    ? imgs.map((src, idx) => `
        <div style="display:flex;align-items:center;gap:10px;padding:7px 10px;border:1.5px solid #c4cfe8;border-radius:8px;background:white;margin-bottom:6px;">
          <img src="${safeImgSrc(src)}" style="height:52px;max-width:100px;object-fit:contain;border-radius:5px;border:1px solid #e2e8f0;flex-shrink:0;" alt="afb ${idx+1}"/>
          <span style="flex:1;font-size:0.79rem;color:#4a5568;">Afbeelding ${idx+1}</span>
          <button class="img-remove-btn" onclick="removeAfbeelding(${r.id},${idx})">✕</button>
        </div>`).join('')
    : '';
  // Combineer per-row variabelen + globale/gelinkte variabelen voor dropdown
  const rowVarItems = Array.isArray(r.variabelen) ? r.variabelen.map(v => ({ id: v.id, text: v.name })) : [];
  const globalVarItems = checklistItems.filter(i => (i.type === 'text' || i.type === 'number') && (!i.linkedRowId || i.linkedRowId === r.id));
  const allVarItems = [...rowVarItems, ...globalVarItems];

  return `<div class="mob-row-settings">
      <label>Categorie</label>
      <select class="cat-select" onchange="updateCategorie(${r.id}, this.value)">
        ${CATEGORIES.map(c => `<option value="${c}"${r.categorie===c?' selected':''}>${c}</option>`).join('')}
      </select>
      <button class="btn-danger" onclick="removeRow(${r.id})" title="Verwijderen">✕ Verwijderen</button>
    </div>` + (() => {
    const toelVarBtn = allVarItems.length > 0
      ? `<button class="var-insert-btn" onclick="toggleVarDropdown(this)" title="Variabele invoegen">{ }</button>
         <div class="var-dropdown" style="display:none;">${allVarItems.map(v => `<div class="var-dropdown-item" onclick="insertVariable(${r.id},'toelichting',${v.id},this)">${escHtml(v.text)}</div>`).join('')}</div>`
      : '';
    return `<div class="field-group toelichting-group">
      <div class="field-label-row"><label>Toelichting</label>${toelVarBtn}</div>
      ${richToolbarHtml('ta-'+r.id+'-toelichting')}
      <div class="rich-editor" contenteditable="true" id="ta-${r.id}-toelichting"
        data-placeholder="Standaard toelichting voor dit onderwerp… (typ / voor variabelen)"
        data-row-id="${r.id}" data-score-key="toelichting"
        oninput="handleEditorInput(this,${r.id},'toelichting')"
        onkeydown="handleSlashKeyEditor(event,${r.id},'toelichting')">${r.toelichting || ''}
      </div>
    </div>`;
    })() + SCORES.map(s => {
    const varBtn = allVarItems.length > 0
      ? `<button class="var-insert-btn" onclick="toggleVarDropdown(this)" title="Variabele invoegen">{ }</button>
         <div class="var-dropdown" style="display:none;">${allVarItems.map(v => `<div class="var-dropdown-item" onclick="insertVariable(${r.id},'${s.key}',${v.id},this)">${escHtml(v.text)}</div>`).join('')}</div>`
      : '';
    return `
    <div class="field-group ${s.css}">
      <div class="field-label-row"><label>${EMOJIS[s.key]} ${s.label}</label>${varBtn}</div>
      ${richToolbarHtml('ta-'+r.id+'-'+s.key)}
      <div class="rich-editor" contenteditable="true" id="ta-${r.id}-${s.key}"
        data-placeholder="Omschrijving voor '${s.label}'… (typ / voor variabelen)"
        data-row-id="${r.id}" data-score-key="${s.key}"
        oninput="handleEditorInput(this,${r.id},'${s.key}')"
        onkeydown="handleSlashKeyEditor(event,${r.id},'${s.key}')">${r.teksten[s.key] || ''}
      </div>
    </div>`;
  }).join('') + `
  <div class="img-upload-row">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;">
      <label class="img-upload-label" style="margin-bottom:0;">📎 Afbeeldingen${imgs.length > 0 ? ` (${imgs.length})` : ''} — worden getoond in document</label>
      <button class="btn-primary" onclick="bulkImportImages()" title="Koppel meerdere afbeeldingen automatisch op naam" style="font-size:0.75rem;padding:5px 12px;border-radius:50px;">
        <svg width="11" height="11" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>
          <polyline points="21 15 16 10 5 21"/>
        </svg>
        Bulk koppelen
      </button>
    </div>
    ${thumbsHtml}
    <div class="img-upload-area" onclick="triggerImgUpload(${r.id})" style="margin-top:${imgs.length>0?'4px':'0'}">
      <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="opacity:0.45;flex-shrink:0">
        <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>
        <polyline points="21 15 16 10 5 21"/>
      </svg>
      <span class="img-upload-placeholder">${imgs.length > 0 ? '+ Nog een afbeelding toevoegen' : 'Klik om een afbeelding te koppelen (PNG, JPG)'}</span>
    </div>
    <input type="file" accept="image/png,image/jpeg,image/gif,image/webp" id="img-input-${r.id}" style="display:none" onchange="handleImgUpload(${r.id}, this)"/>
  </div>`;
}

function renderTable() {
  const container = document.getElementById('scan-cards');
  if (rows.length === 0) {
    container.innerHTML = `<div class="empty-state">
      <svg width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/>
        <line x1="9" y1="3" x2="9" y2="21"/>
      </svg>
      <p>Geen onderdelen. Voeg onderdelen toe via <strong>Mapping</strong>.</p>
    </div>`;
    updateBadges(); updateGenerateBtn(); return;
  }

  // Sorteer op categorie (CATEGORIES volgorde)
  const sortedRows = [...rows].sort((a, b) => {
    const ai = CATEGORIES.indexOf(a.categorie);
    const bi = CATEGORIES.indexOf(b.categorie);
    const av = ai === -1 ? 999 : ai;
    const bv = bi === -1 ? 999 : bi;
    return av - bv;
  });

  // Groepeer per categorie
  let html = '';
  let lastCat = null;
  for (const r of sortedRows) {
    const hidden = !activeCats.has(r.categorie) ? ' style="display:none"' : '';
    // Categorie header — open groep
    if (r.categorie !== lastCat) {
      if (lastCat !== null) html += '</div>'; // sluit vorige groep
      lastCat = r.categorie;
      html += `<div class="scan-cat-group"${hidden}>`;
      html += `<div class="scan-cat-header">${escHtml(r.categorie)}</div>`;
    }
    // Score pills
    const pills = scoreHTML(r);
    // Tekst bij geselecteerde score
    const showTekst = r.score ? '' : ' style="display:none"';
    const scoreInfo = r.score ? SCORE_MAP[r.score] : null;
    const rawTekst = r.score ? (r.teksten[r.score] || '') : '';
    const tekst = replaceVariables(rawTekst, r);
    const scoreLabel = scoreInfo ? scoreInfo.label : '';

    html += `
    <div class="scan-card${r.score ? ' has-score' : ''}" id="scan-card-${r.id}">
      <div class="scan-card-top">
        <span class="scan-naam-link" onclick="navigateToMappingRow(${r.id})" title="Klik om te bewerken in Mapping">${escHtml(r.naam)}</span>
        <div class="scan-card-right">
          <label class="scan-qw-label" title="Quick Win"><input type="checkbox" ${r.quickwin?'checked':''} onchange="toggleQuickwin(${r.id})" style="width:16px;height:16px;cursor:pointer;accent-color:#3251c4;"/> Quick Win</label>
          <div class="score-group" id="score-${r.id}">${pills}</div>
        </div>
      </div>
      <div class="scan-card-tekst" id="row-tekst-${r.id}"${showTekst}>
        <label class="scan-tekst-label">${escHtml(scoreLabel)}</label>
        ${richToolbarHtml('scan-ta-'+r.id)}
        <div class="rich-editor scan-tekst-area" contenteditable="true" id="scan-ta-${r.id}"
          data-placeholder="Voer tekst in voor deze score…"
          data-row-id="${r.id}" data-score-key="_scan"
          oninput="handleScanEditorInput(this,${r.id})">${tekst || ''}</div>
      </div>
    </div>`;
  }
  if (lastCat !== null) html += '</div>'; // sluit laatste groep
  container.innerHTML = html;
  // Rich editors auto-resize via contenteditable
  updateBadges();
  updateGenerateBtn();
}

// Navigeer naar Mapping en scroll naar de juiste card
function navigateToMappingRow(id) {
  navigateTo('mapping');
  setTimeout(() => {
    const r = rows.find(r => r.id === id);
    if (r) r._mappingExpanded = true;
    renderMappingCards();
    setTimeout(() => {
      const card = document.getElementById(`mcard-${id}`);
      if (card) card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 50);
  }, 50);
}

function updateBadges() {
  // Badges verwijderd — enkel nog generate-knop bijwerken
  updateGenerateBtn();
}

function updateGenerateBtn() {
  document.getElementById('btn-generate').disabled =
    rows.filter(r => r.score).length === 0;
}

function escHtml(str) {
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function safeImgSrc(src) {
  if (typeof src === 'string' && /^data:image\//i.test(src)) return src;
  return '';
}

// Check of alle tekstvelden gevuld zijn voor een rij
function hasIncompleteTeksten(r) {
  for (const s of SCORES) {
    if (!r.teksten[s.key] || r.teksten[s.key].trim() === '') return true;
  }
  return false;
}

// Pas oranje kleur toe op expand-knop als teksten incompleet zijn
function updateExpandBtnStyle(id) {
  const r = rows.find(r => r.id === id);
  const btn = document.getElementById(`expand-btn-${id}`);
  if (!r || !btn) return;
  btn.classList.toggle('incomplete', hasIncompleteTeksten(r));
}

// ── Afbeelding per rij ──
function triggerImgUpload(id) {
  const inp = document.getElementById(`img-input-${id}`);
  if (inp) inp.click();
}

function handleImgUpload(id, input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    const r = rows.find(r => r.id === id);
    if (!r) return;
    if (!Array.isArray(r.afbeeldingen)) r.afbeeldingen = [];
    r.afbeeldingen.push(e.target.result);
    const detDiv = document.querySelector(`#detail-${id} .detail-inner`);
    if (detDiv) detDiv.innerHTML = detailHTML(r);
    // Also refresh mapping card detail if on mapping page
    const mcardDetail = document.querySelector(`#mcard-body-${id} .detail-inner`);
    if (mcardDetail) mcardDetail.innerHTML = detailHTML(r);
    debounceSave();
    showToast('✅ Afbeelding toegevoegd!');
  };
  reader.readAsDataURL(file);
}

function bulkImportImages() {
  const inp = document.getElementById('bulk-img-input');
  if (inp) { inp.value = ''; inp.click(); }
}

// ── Map inladen: map selecteren met afbeeldingen + variabelen-tabel ──
function loadFolder() {
  const inp = document.getElementById('folder-input');
  if (inp) { inp.value = ''; inp.click(); }
}

function handleFolderImport(input) {
  const files = Array.from(input.files);
  if (!files.length) return;

  const imageFiles = [];
  const dataFiles = [];

  for (const f of files) {
    const name = f.name.toLowerCase();
    // Alleen bestanden in de root van de geselecteerde map (niet in submappen)
    const pathParts = (f.webkitRelativePath || f.name).split('/');
    if (pathParts.length > 2) continue; // skip submappen

    if (/\.(png|jpe?g|gif|webp|svg)$/i.test(name)) {
      imageFiles.push(f);
    } else if (/\.(csv|tsv|txt)$/i.test(name)) {
      dataFiles.push(f);
    }
  }

  let pending = 0;
  let totalExpected = imageFiles.length + dataFiles.length;
  if (totalExpected === 0) { showToast('Geen afbeeldingen of data-bestanden gevonden in de map.'); return; }

  const imgResults = [];
  let varCount = 0;

  // Lees afbeeldingen
  for (const f of imageFiles) {
    pending++;
    const reader = new FileReader();
    reader.onload = e => {
      imgResults.push({ file: f, src: e.target.result });
      if (--pending === 0) finishFolderImport(imgResults, varCount);
    };
    reader.readAsDataURL(f);
  }

  // Lees data-bestanden (CSV: Variabelnaam;Variabelwaarde of Variabelnaam,Variabelwaarde)
  for (const f of dataFiles) {
    pending++;
    const reader = new FileReader();
    reader.onload = e => {
      varCount += parseFolderVariables(e.target.result, f.name);
      if (--pending === 0) finishFolderImport(imgResults, varCount);
    };
    reader.readAsText(f);
  }

  if (totalExpected === 0) finishFolderImport([], 0);
}

function parseFolderVariables(text, filename) {
  const lines = text.split(/\r?\n/).filter(l => l.trim());
  if (lines.length === 0) return 0;

  // Detecteer separator: tab, puntkomma of komma
  const firstLine = lines[0];
  let sep = '\t';
  if (firstLine.includes('\t')) sep = '\t';
  else if (firstLine.includes(';')) sep = ';';
  else if (firstLine.includes(',')) sep = ',';

  let count = 0;
  // Check of eerste regel een header is (variabelnaam/naam/name etc.)
  const firstCols = firstLine.split(sep).map(c => c.trim().toLowerCase());
  const startIdx = (firstCols[0].includes('naam') || firstCols[0].includes('name') || firstCols[0].includes('variabel')) ? 1 : 0;

  for (let i = startIdx; i < lines.length; i++) {
    const cols = lines[i].split(sep).map(c => c.trim());
    if (cols.length < 2 || !cols[0]) continue;
    const varName = cols[0];
    const varValue = cols[1];

    // Check of variabele al bestaat (globaal)
    const existing = checklistItems.find(ci => ci.text === varName);
    if (existing) {
      existing.value = varValue;
    } else {
      // Voeg toe als nieuwe globale variabele
      checklistItems.push({
        id: Date.now() + Math.random(),
        text: varName,
        type: isNaN(Number(varValue)) ? 'text' : 'number',
        value: varValue,
        done: false
      });
    }
    count++;
  }
  if (count > 0) {
    renderMappingChecklist();
    debounceSave();
  }
  return count;
}

function finishFolderImport(imgResults, varCount) {
  // Verwerk afbeeldingen via bestaande matching logica
  if (imgResults.length > 0) {
    processFileData(imgResults);
  }

  // Toon samenvatting
  const parts = [];
  if (imgResults.length > 0) parts.push(`${imgResults.length} afbeelding${imgResults.length !== 1 ? 'en' : ''}`);
  if (varCount > 0) parts.push(`${varCount} variabele${varCount !== 1 ? 'n' : ''}`);
  if (parts.length > 0 && varCount > 0) {
    showToast(`✅ Map ingeladen: ${parts.join(' + ')} verwerkt`);
  } else if (varCount > 0) {
    showToast(`✅ ${varCount} variabele${varCount !== 1 ? 'n' : ''} ingeladen`);
  }
}

function normName(str) {
  // Verwijder nummers, spaties, speciale tekens — alleen letters die overblijven
  return String(str).toLowerCase().replace(/[\d\s\-_.,!?()\[\]{}'"\/:;\\]/g, '');
}

let pendingUnmatched = []; // { src, baseName }

function handleBulkImgImport(input) {
  const files = Array.from(input.files);
  if (!files.length) return;

  // Lees alle bestanden tegelijk als base64
  let done = 0;
  const fileData = new Array(files.length);
  files.forEach((file, i) => {
    const reader = new FileReader();
    reader.onload = e => {
      fileData[i] = { file, src: e.target.result };
      if (++done === files.length) processFileData(fileData);
    };
    reader.readAsDataURL(file);
  });
}

function processFileData(fileData) {
  const matched   = [];
  const unmatched = [];

  for (const { file, src } of fileData) {
    const baseName = file.name.replace(/\.[^.]+$/, '');
    const row = rows.find(r => normName(r.naam) === normName(baseName));
    if (row) matched.push({ row, src });
    else     unmatched.push({ src, baseName });
  }

  // Auto-koppel gevonden matches
  for (const { row, src } of matched) {
    if (!Array.isArray(row.afbeeldingen)) row.afbeeldingen = [];
    row.afbeeldingen.push(src);
  }
  if (matched.length > 0) { renderTable(); if (currentPage === 'mapping') renderMappingCards(); debounceSave(); }

  if (unmatched.length > 0) {
    pendingUnmatched = unmatched;
    showUnmatchedModal(unmatched);
    if (matched.length > 0)
      showToast(`✅ ${matched.length} gekoppeld — ${unmatched.length} niet herkend (zie popup)`);
  } else {
    showToast(`✅ ${matched.length} afbeelding${matched.length!==1?'en':''} automatisch gekoppeld!`);
  }
}

function showUnmatchedModal(unmatched) {
  const list = document.getElementById('unmatch-list');
  list.innerHTML = unmatched.map((u, i) => `
    <div class="unmatch-item">
      <img class="unmatch-thumb" src="${safeImgSrc(u.src)}" alt="${escHtml(u.baseName)}"/>
      <span class="unmatch-name" title="${escHtml(u.baseName)}">${escHtml(u.baseName)}</span>
      <select class="unmatch-select" id="unmatch-sel-${i}">
        <option value="">— Overslaan —</option>
        ${rows.map(r => `<option value="${r.id}">${escHtml(r.naam)}</option>`).join('')}
      </select>
    </div>`).join('');
  document.getElementById('unmatch-modal').classList.add('open');
}

function closeUnmatchedModal() {
  document.getElementById('unmatch-modal').classList.remove('open');
  pendingUnmatched = [];
}

function saveUnmatchedMappings() {
  let count = 0;
  pendingUnmatched.forEach((u, i) => {
    const sel = document.getElementById(`unmatch-sel-${i}`);
    if (!sel || !sel.value) return;
    const row = rows.find(r => r.id === parseInt(sel.value));
    if (!row) return;
    if (!Array.isArray(row.afbeeldingen)) row.afbeeldingen = [];
    row.afbeeldingen.push(u.src);
    count++;
  });
  closeUnmatchedModal();
  if (count > 0) { renderTable(); if (currentPage === 'mapping') renderMappingCards(); debounceSave(); showToast(`✅ ${count} afbeelding${count!==1?'en':''} handmatig gekoppeld!`); }
}

function removeAfbeelding(id, idx) {
  const r = rows.find(r => r.id === id);
  if (!r || !Array.isArray(r.afbeeldingen)) return;
  r.afbeeldingen.splice(idx, 1);
  const detDiv = document.querySelector(`#detail-${id} .detail-inner`);
  if (detDiv) detDiv.innerHTML = detailHTML(r);
  const mcardDetail = document.querySelector(`#mcard-body-${id} .detail-inner`);
  if (mcardDetail) mcardDetail.innerHTML = detailHTML(r);
  debounceSave();
  showToast('🗑️ Afbeelding verwijderd.');
}

// Vervang [klant] overal in teksten door de ingevulde Klant/Project naam
function replaceKlant(text) {
  if (!text) return text;
  const klant = headerTekst || '[klant]';
  return text.replace(/\[klant\]/gi, klant);
}

function getCatOrder(activeRows) {
  return [...CATEGORIES, ...activeRows.map(r=>r.categorie).filter(c=>!CATEGORIES.includes(c)).filter((c,i,a)=>a.indexOf(c)===i)];
}

// ── Preview modal ──
function buildCatSections(activeRows, forHtml) {
  // Groepeer op categorie (volgorde CATEGORIES), daarna overige
  const catOrder = getCatOrder(activeRows);
  let out = '';
  for (const cat of catOrder) {
    const catRows = activeRows.filter(r => r.categorie === cat);
    if (catRows.length === 0) continue;
    out += forHtml
      ? `<div class="doc-cat-section"><div class="doc-cat-section-header"><span class="doc-cat-section-title">${escHtml(cat)}</span><span class="doc-cat-section-count">${catRows.length} item${catRows.length!==1?'s':''}</span></div>`
      : `<h2 style="font-family:'Roboto','Segoe UI',Calibri,sans-serif;font-size:16pt;color:#23296C;padding-bottom:6pt;margin:24pt 0 10pt;">${escHtml(cat)}</h2>`;
    catRows.forEach((r, idx) => {
      const s     = SCORE_MAP[r.score];
      const tekst = replaceVariables(replaceKlant(r.teksten[r.score] || ''), r);
      const toel  = replaceVariables(replaceKlant(r.toelichting || ''), r);
      const imgs = Array.isArray(r.afbeeldingen) ? r.afbeeldingen : [];
      if (forHtml) {
        const imgsHtml = imgs.map(src =>
          `<div style="margin-top:10px;"><img src="${safeImgSrc(src)}" style="max-width:100%;max-height:320px;border-radius:7px;border:1px solid #e2e8f0;display:block;" alt=""/></div>`
        ).join('');
        const toelHtml = toel ? `<div class="doc-toelichting">${sanitizeEditorHtml(toel)}</div>` : '';
        out += `
          <div class="doc-section">
            <div class="doc-var-title"><span class="doc-item-num">${idx+1}</span>${escHtml(r.naam)}</div>
            ${toelHtml}
            <div class="doc-score-badge" style="color:${s.color};background:${s.bg};border-color:${s.border};">${EMOJIS[s.key]} ${s.label}</div>${r.type === 'kans' ? '<span style="display:inline-block;font-size:0.76rem;font-weight:700;padding:3px 11px;border-radius:99px;border:1.5px solid #276749;color:#276749;background:#f0fff4;margin-left:8px;vertical-align:middle;">💡 Kans</span>' : r.type === 'risico' ? '<span style="display:inline-block;font-size:0.76rem;font-weight:700;padding:3px 11px;border-radius:99px;border:1.5px solid #c53030;color:#c53030;background:#fff5f5;margin-left:8px;vertical-align:middle;">⚠️ Risico</span>' : ''}${r.quickwin ? '<span style="display:inline-block;font-size:0.76rem;font-weight:700;padding:3px 11px;border-radius:99px;border:1.5px solid #3251c4;color:#3251c4;background:#eaedfa;margin-left:8px;vertical-align:middle;">⚡ Quick Win</span>' : ''}
            <div class="doc-var-text">${sanitizeEditorHtml(tekst) || '<em style="color:#a0aec0">Geen tekst ingevuld</em>'}</div>
            ${imgsHtml}
          </div><hr class="doc-divider"/>`;
      } else {
        const imgsWordHtml = imgs.map(src =>
          `<p style="margin:4pt 0 10pt;"><img src="${safeImgSrc(src)}" style="max-width:14cm;border:1pt solid #e2e8f0;"/></p>`
        ).join('');
        const toelWord = toel ? `<div style="font-family:'Roboto','Segoe UI',Calibri,sans-serif;font-size:10pt;color:#4a5568;line-height:1.55;margin:4pt 0 8pt;border-left:3pt solid #D4A843;padding-left:10pt;">${sanitizeEditorHtml(toel)}</div>` : '';
        out += `
          <p style="font-family:'Roboto','Segoe UI',Calibri,sans-serif;font-size:9pt;color:#6b7280;margin:14pt 0 2pt;">${idx+1}.</p>
          <h3 style="font-family:'Roboto','Segoe UI',Calibri,sans-serif;font-size:12pt;color:#23296C;margin:0 0 5pt;">${escHtml(r.naam)}</h3>
          ${toelWord}
          <p style="font-family:'Roboto','Segoe UI',Calibri,sans-serif;font-size:9pt;color:${s.color};background:${s.bg};border:1pt solid ${s.border};padding:3pt 10pt;border-radius:4pt;display:inline-block;margin-bottom:7pt;font-weight:bold;">${EMOJIS[s.key]} ${s.label}</p>${r.type === 'kans' ? '<p style="font-family:\'Roboto\',\'Segoe UI\',Calibri,sans-serif;font-size:9pt;color:#276749;background:#f0fff4;border:1pt solid #276749;padding:3pt 10pt;border-radius:4pt;display:inline-block;margin-bottom:7pt;margin-left:6pt;font-weight:bold;">💡 Kans</p>' : r.type === 'risico' ? '<p style="font-family:\'Roboto\',\'Segoe UI\',Calibri,sans-serif;font-size:9pt;color:#c53030;background:#fff5f5;border:1pt solid #c53030;padding:3pt 10pt;border-radius:4pt;display:inline-block;margin-bottom:7pt;margin-left:6pt;font-weight:bold;">⚠️ Risico</p>' : ''}${r.quickwin ? '<p style="font-family:\'Roboto\',\'Segoe UI\',Calibri,sans-serif;font-size:9pt;color:#23296C;background:#eaedfa;border:1pt solid #23296C;padding:3pt 10pt;border-radius:4pt;display:inline-block;margin-bottom:7pt;margin-left:6pt;font-weight:bold;">⚡ Quick Win</p>' : ''}
          <div style="font-family:'Roboto','Segoe UI',Calibri,sans-serif;font-size:11pt;color:#2d3748;line-height:1.65;margin:4pt 0 ${imgs.length?'6pt':'14pt'};">${sanitizeEditorHtml(tekst)}</div>
          ${imgsWordHtml}`;
      }
    });
    if (forHtml) out += `</div>`;
  }
  return out;
}

function showPreview() {
  const activeRows = rows.filter(r => r.score);
  if (activeRows.length === 0) { showToast('Geen actieve rijen met score geselecteerd.'); return; }

  const now     = new Date();
  const dateStr = now.toLocaleDateString('nl-NL', {year:'numeric',month:'long',day:'numeric'});
  const titel   = headerTekst ? `Omgevingsscan — ${escHtml(headerTekst)}` : 'Omgevingsscan';
  const headerText = replaceVariables(replaceKlant(docHeaderTekst));
  const footerText = replaceVariables(replaceKlant(docFooterTekst));

  // Bouw inhoudsopgave
  const catOrder = getCatOrder(activeRows);
  let tocHtml = '<div class="doc-toc"><h2 style="font-size:1.15rem;font-weight:700;color:#23296C;margin-bottom:10px;">Inhoudsopgave</h2><ul style="list-style:none;padding:0;margin:0 0 24px;">';
  for (const cat of catOrder) {
    const catRows = activeRows.filter(r => r.categorie === cat);
    if (catRows.length === 0) continue;
    tocHtml += `<li style="font-size:0.92rem;font-weight:600;color:#23296C;margin:6px 0 2px;">${escHtml(cat)}</li>`;
    catRows.forEach(r => {
      const s = SCORE_MAP[r.score];
      tocHtml += `<li style="font-size:0.84rem;color:#4a5568;padding-left:16px;margin:1px 0;">• ${escHtml(r.naam)} <span style="color:${s.color};font-size:0.78rem;font-weight:600;">${s.label}</span></li>`;
    });
  }
  tocHtml += '</ul></div>';

  // Consultant + datum sectie
  let consultantHtml = '';
  if (consultantNaam) {
    consultantHtml = `<div style="margin-bottom:18px;"><span style="font-size:0.80rem;font-weight:600;color:#6b7280;">Consultant:</span> <span style="font-size:0.90rem;font-weight:600;color:#23296C;">${escHtml(consultantNaam)}</span></div>`;
  }

  document.getElementById('doc-paper-content').innerHTML = `
    <div style="margin-bottom:18px;"><img src="Logo PB blauw.png" alt="Logo" style="height:44px;width:auto;"/></div>
    <div class="doc-title-bar">
      <div class="doc-main-title">${titel}</div>
      <div class="doc-meta">Aangemaakt op ${dateStr} &nbsp;·&nbsp; ${activeRows.length} variabele${activeRows.length!==1?'n':''}</div>
    </div>
    ${consultantHtml}
    ${headerText ? `<div class="doc-intro">${sanitizeEditorHtml(headerText)}</div>` : ''}
    ${tocHtml}
    ${buildCatSections(activeRows, true)}
    ${footerText ? `<div class="doc-outro">${sanitizeEditorHtml(footerText)}</div>` : ''}
    ${(() => {
      const openTodos = scanTodos.filter(t => !t.done);
      if (openTodos.length === 0) return '';
      return `<div style="margin-top:24px;">
        <h2 style="font-size:1.1rem;font-weight:700;color:#23296C;margin-bottom:10px;">Actiepunten</h2>
        <ul style="margin:0;padding-left:20px;">${openTodos.map(t => `<li style="font-size:0.92rem;color:#2d3748;margin:4px 0;">${escHtml(t.text)}</li>`).join('')}</ul>
      </div>`;
    })()}
    `;

  document.getElementById('preview-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closePreview() {
  document.getElementById('preview-modal').classList.remove('open');
  document.body.style.overflow = '';
}

function closePreviewOnBackdrop(e) {
  if (e.target === document.getElementById('preview-modal')) closePreview();
}

function downloadPdf() {
  const content = document.getElementById('doc-paper-content');
  if (!content) return;
  const printWin = window.open('', '_blank');
  printWin.document.write(`<!DOCTYPE html><html><head><title>Omgevingsscan</title><style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Roboto','Segoe UI',Calibri,sans-serif; color: #2d3748; line-height: 1.6; padding: 40px; }
    img { max-width: 100%; }
    .doc-title-bar { margin-bottom: 18px; }
    .doc-main-title { font-size: 22pt; font-weight: 700; color: #23296C; }
    .doc-meta { font-size: 9pt; color: #6b7280; margin-top: 4px; }
    .doc-intro, .doc-outro { font-size: 11pt; color: #4a5568; line-height: 1.65; margin-bottom: 20px; }
    .doc-toc ul { list-style: none; padding: 0; }
    .doc-cat-section { margin-bottom: 24px; }
    .doc-cat-section-header { background: #23296C; color: white; padding: 8px 16px; border-radius: 6px; margin-bottom: 12px; }
    .doc-cat-section-title { font-weight: 700; font-size: 11pt; }
    .doc-cat-section-count { font-size: 8pt; opacity: 0.7; margin-left: 8px; }
    .doc-section { padding: 14px 0; }
    .doc-var-title { font-size: 12pt; font-weight: 700; color: #23296C; margin-bottom: 6px; }
    .doc-item-num { display: inline-block; font-size: 9pt; color: #6b7280; margin-right: 6px; }
    .doc-toelichting { font-size: 10pt; color: #4a5568; border-left: 3px solid #D4A843; padding-left: 10px; margin: 6px 0 10px; }
    .doc-score-badge { display: inline-block; font-size: 9pt; font-weight: 700; padding: 3px 12px; border-radius: 4px; border: 1.5px solid; margin-bottom: 8px; }
    .doc-var-text { font-size: 11pt; color: #2d3748; line-height: 1.65; margin: 6px 0; }
    hr.doc-divider { border: none; border-top: 1px solid #e2e8f0; margin: 14px 0; }
    @media print { body { padding: 20px; } }
  </style></head><body>${content.innerHTML}</body></html>`);
  printWin.document.close();
  printWin.onload = function() { printWin.print(); };
}

// ── Helpers voor docx library ──
function b64ToUint8(b64) {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
  return arr;
}
function uint8ToB64(u8) {
  let bin = '';
  for (let i = 0; i < u8.length; i++) bin += String.fromCharCode(u8[i]);
  return btoa(bin);
}

function dataUriToUint8(dataUri) {
  const parts = dataUri.split(',');
  return b64ToUint8(parts[1] || parts[0]);
}

function dataUriType(dataUri) {
  const m = dataUri.match(/^data:image\/(png|jpe?g|gif|webp|bmp)/i);
  if (m) return m[1].toLowerCase().replace('jpeg','jpg');
  return 'png';
}

// ── Afbeelding-afmetingen schatten uit data URI (voor docx ImageRun) ──
async function getImageDims(dataUri, maxW, maxH) {
  return new Promise(resolve => {
    const img = new Image();
    img.onload = () => {
      let w = img.naturalWidth, h = img.naturalHeight;
      if (w > maxW) { h = h * maxW / w; w = maxW; }
      if (h > maxH) { w = w * maxH / h; h = maxH; }
      resolve({ width: Math.round(w), height: Math.round(h) });
    };
    img.onerror = () => resolve({ width: maxW, height: Math.round(maxW * 0.6) });
    img.src = dataUri;
  });
}

// ── Document downloaden (vanuit preview) — echte .docx met docx-js ──
// Parse HTML content naar docx paragraphs met TextRuns (vet/cursief/onderstreept/lijsten)
function htmlToDocxParagraphs(html, baseOpts) {
  const D = window.docx;
  if (!html || !D) return [];
  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  const paragraphs = [];
  const opts = baseOpts || {};

  function nodeToRuns(node, inherited) {
    const runs = [];
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent;
      if (text) runs.push(new D.TextRun({ text, font: 'Roboto', size: opts.size || 22, color: opts.color || '2D3748', ...inherited }));
      return runs;
    }
    if (node.nodeType !== Node.ELEMENT_NODE) return runs;
    const tag = node.tagName.toLowerCase();
    const style = { ...inherited };
    if (tag === 'b' || tag === 'strong') style.bold = true;
    if (tag === 'i' || tag === 'em') style.italics = true;
    if (tag === 'u') style.underline = { type: D.UnderlineType.SINGLE };
    if (tag === 'br') { runs.push(new D.TextRun({ break: 1 })); return runs; }
    if (tag === 'ul' || tag === 'ol') {
      for (const li of node.children) {
        if (li.tagName.toLowerCase() === 'li') {
          const liRuns = [];
          for (const c of li.childNodes) liRuns.push(...nodeToRuns(c, style));
          paragraphs.push(new D.Paragraph({
            spacing: { after: 40 },
            bullet: { level: 0 },
            indent: opts.indent || undefined,
            border: opts.border || undefined,
            children: liRuns
          }));
        }
      }
      return runs;
    }
    if (tag === 'div' || tag === 'p') {
      const blockRuns = [];
      for (const c of node.childNodes) blockRuns.push(...nodeToRuns(c, style));
      if (blockRuns.length > 0) {
        paragraphs.push(new D.Paragraph({
          spacing: { after: opts.spacing || 60 },
          indent: opts.indent || undefined,
          border: opts.border || undefined,
          children: blockRuns
        }));
      }
      return runs;
    }
    for (const c of node.childNodes) runs.push(...nodeToRuns(c, style));
    return runs;
  }

  // Process top-level nodes
  const inlineRuns = [];
  for (const child of tmp.childNodes) {
    const r = nodeToRuns(child, {});
    inlineRuns.push(...r);
  }
  // Als er nog inline runs over zijn, maak er een paragraph van
  if (inlineRuns.length > 0) {
    paragraphs.push(new D.Paragraph({
      spacing: { after: opts.spacing || 60 },
      indent: opts.indent || undefined,
      border: opts.border || undefined,
      children: inlineRuns
    }));
  }
  return paragraphs;
}

async function downloadDoc() {
  const D = window.docx;
  if (!D) { showToast('⚠️ docx library niet geladen. Controleer je internetverbinding en herlaad de pagina.'); return; }

  const activeRows = rows.filter(r => r.score);
  if (activeRows.length === 0) return;

  const now     = new Date();
  const dateStr = now.toLocaleDateString('nl-NL', {year:'numeric',month:'long',day:'numeric'});
  const titel   = headerTekst ? `Omgevingsscan — ${headerTekst}` : 'Omgevingsscan';
  const hdrText = replaceVariables(replaceKlant(docHeaderTekst));
  const ftrText = replaceVariables(replaceKlant(docFooterTekst));

  // Decode images — beeldmerk met fallback
  const logoData = await fetch('Logo PB blauw.png').then(r => r.arrayBuffer()).then(b => new Uint8Array(b));
  let beeldmerkData;
  for (const bmPath of ['PB-layout/assets/Beeldmerk.png', 'Logo.png']) {
    try {
      const resp = await fetch(bmPath);
      if (resp.ok) { beeldmerkData = new Uint8Array(await resp.arrayBuffer()); break; }
    } catch(e) {}
  }
  if (!beeldmerkData) beeldmerkData = logoData;

  // ── COVER PAGE (eerste pagina) ──
  const coverChildren = [];

  // Zoek cover afbeelding in alle rijen
  let coverImgData = null;
  let coverImgType = 'png';
  const coverNorm = normName('Eerste pagina foto');
  // 1) Rij met naam "Eerste pagina foto" → eerste afbeelding
  for (const r of rows) {
    if (normName(r.naam) === coverNorm && Array.isArray(r.afbeeldingen) && r.afbeeldingen.length > 0) {
      try { coverImgType = dataUriType(r.afbeeldingen[0]); coverImgData = dataUriToUint8(r.afbeeldingen[0]); } catch(e) {}
      break;
    }
  }
  // 2) Fallback: zoek rij waarvan naam "eerste" EN "foto" of "pagina" bevat
  if (!coverImgData) {
    for (const r of rows) {
      const nn = normName(r.naam);
      if ((nn.includes('eerste') && (nn.includes('foto') || nn.includes('pagina') || nn.includes('cover')))
          && Array.isArray(r.afbeeldingen) && r.afbeeldingen.length > 0) {
        try { coverImgType = dataUriType(r.afbeeldingen[0]); coverImgData = dataUriToUint8(r.afbeeldingen[0]); } catch(e) {}
        if (coverImgData) break;
      }
    }
  }
  // 3) Fallback: probeer bestand 'Eerste pagina foto.jpg' of 'Cover.jpeg' te laden
  if (!coverImgData) {
    for (const fn of ['Eerste pagina foto.jpg', 'PB-layout/assets/Cover.jpeg', 'Background.jpg']) {
      try {
        const resp = await fetch(fn);
        if (resp.ok) {
          const buf = await resp.arrayBuffer();
          coverImgData = new Uint8Array(buf);
          coverImgType = fn.endsWith('.png') ? 'png' : 'jpeg';
          break;
        }
      } catch(e) {}
    }
  }

  // Cover achtergrondafbeelding — floating behind text, vult hele pagina
  if (coverImgData) {
    // A4 page in pixels at 96 DPI: 794 x 1123
    coverChildren.push(new D.Paragraph({
      spacing: { after: 0 },
      children: [new D.ImageRun({
        type: coverImgType, data: coverImgData,
        transformation: { width: 794, height: 1123 },
        floating: {
          horizontalPosition: { relative: D.HorizontalPositionRelativeFrom.PAGE, offset: 0 },
          verticalPosition: { relative: D.VerticalPositionRelativeFrom.PAGE, offset: 0 },
          wrap: { type: D.TextWrappingType.NONE },
          behindDocument: true,
          allowOverlap: true,
        },
        altText: { title: 'Cover', description: 'Cover achtergrond', name: 'cover-bg' }
      })]
    }));
  }

  // Spacer om APK tekst naar midden van pagina te duwen
  coverChildren.push(new D.Paragraph({ spacing: { before: 4800, after: 0 }, children: [] }));

  // "APK" gecentreerd groot — wit op achtergrondafbeelding
  coverChildren.push(new D.Paragraph({
    spacing: { before: 0, after: 120 },
    alignment: D.AlignmentType.CENTER,
    children: [new D.TextRun({ text: 'APK', font: 'Roboto', size: 196, bold: true, color: 'FFFFFF' })]
  }));

  // Klantnaam gecentreerd — wit 40pt
  const klantNaam = headerTekst || '';
  coverChildren.push(new D.Paragraph({
    spacing: { after: 200 },
    alignment: D.AlignmentType.CENTER,
    children: [new D.TextRun({ text: klantNaam, font: 'Roboto', size: 80, bold: true, color: 'FFFFFF' })]
  }));

  // Info block onderaan — wit tekst
  coverChildren.push(new D.Paragraph({ spacing: { after: 4800 }, children: [] }));
  coverChildren.push(new D.Paragraph({
    alignment: D.AlignmentType.CENTER,
    spacing: { after: 40 },
    children: [
      new D.TextRun({ text: 'Aanleiding:\t', font: 'Roboto', size: 24, color: 'FFFFFF' }),
      new D.TextRun({ text: 'APK', font: 'Roboto', size: 24, bold: true, color: 'FFFFFF' }),
    ]
  }));
  coverChildren.push(new D.Paragraph({
    alignment: D.AlignmentType.CENTER,
    spacing: { after: 40 },
    children: [
      new D.TextRun({ text: 'Uitgevoerd:\t', font: 'Roboto', size: 24, color: 'FFFFFF' }),
      new D.TextRun({ text: dateStr, font: 'Roboto', size: 24, bold: true, color: 'FFFFFF' }),
    ]
  }));
  if (consultantNaam) {
    coverChildren.push(new D.Paragraph({
      alignment: D.AlignmentType.CENTER,
      children: [
        new D.TextRun({ text: 'Mentor:\t', font: 'Roboto', size: 24, color: 'FFFFFF' }),
        new D.TextRun({ text: consultantNaam, font: 'Roboto', size: 24, bold: true, color: 'FFFFFF' }),
      ]
    }));
  }

  // Build content children (pagina 2+)
  const children = [];

  // ── Logo bovenaan ──
  children.push(new D.Paragraph({
    spacing: { after: 200 },
    children: [new D.ImageRun({
      type: 'png', data: logoData,
      transformation: { width: 200, height: 42 },
      altText: { title: 'Logo', description: 'Logo', name: 'Logo' }
    })]
  }));

  // ── Titel met navy lijn eronder ──
  children.push(new D.Paragraph({
    spacing: { after: 60 },
    border: { bottom: { style: D.BorderStyle.SINGLE, size: 6, color: '23296C', space: 8 } },
    children: [new D.TextRun({ text: titel, font: 'Roboto', size: 40, bold: true, color: '23296C' })]
  }));

  children.push(new D.Paragraph({
    spacing: { after: 120 },
    children: [new D.TextRun({ text: `Aangemaakt op ${dateStr}  ·  ${activeRows.length} variabele${activeRows.length!==1?'n':''}`, font: 'Roboto', size: 18, color: 'A0AEC0' })]
  }));

  // ── Consultant ──
  if (consultantNaam) {
    children.push(new D.Paragraph({
      spacing: { after: 240 },
      children: [
        new D.TextRun({ text: 'Consultant: ', font: 'Roboto', size: 20, color: '6B7280' }),
        new D.TextRun({ text: consultantNaam, font: 'Roboto', size: 22, bold: true, color: '23296C' }),
      ]
    }));
  }

  // ── Header tekst ──
  if (hdrText) {
    const hdrParas = htmlToDocxParagraphs(hdrText, { size: 22, color: '2D3748', spacing: 80 });
    hdrParas.forEach(p => children.push(p));
    if (hdrParas.length > 0) children.push(new D.Paragraph({ spacing: { after: 200 }, children: [] }));
  }

  // ── Inhoudsopgave ──
  const tocCatOrder = getCatOrder(activeRows);
  children.push(new D.Paragraph({
    spacing: { before: 200, after: 120 },
    border: { bottom: { style: D.BorderStyle.SINGLE, size: 4, color: '3251C4', space: 6 } },
    children: [new D.TextRun({ text: 'Inhoudsopgave', font: 'Roboto', size: 40, bold: true, color: '23296C' })]
  }));
  for (const cat of tocCatOrder) {
    const catRows = activeRows.filter(r => r.categorie === cat);
    if (catRows.length === 0) continue;
    children.push(new D.Paragraph({
      spacing: { before: 80, after: 40 },
      children: [new D.TextRun({ text: cat, font: 'Roboto', size: 22, bold: true, color: '23296C' })]
    }));
    catRows.forEach(r => {
      const s = SCORE_MAP[r.score];
      children.push(new D.Paragraph({
        spacing: { after: 20 },
        indent: { left: 360 },
        children: [
          new D.TextRun({ text: `• ${r.naam}  `, font: 'Roboto', size: 20, color: '4A5568' }),
          new D.TextRun({ text: s.label, font: 'Roboto', size: 18, bold: true, color: s.color.replace('#','') }),
        ]
      }));
    });
  }
  children.push(new D.Paragraph({ spacing: { after: 200 }, children: [] }));

  // ── Categorie secties ──
  const catOrder = getCatOrder(activeRows);
  for (const cat of catOrder) {
    const catRows = activeRows.filter(r => r.categorie === cat);
    if (catRows.length === 0) continue;

    // Categorie heading
    children.push(new D.Paragraph({
      spacing: { before: 320, after: 120 },
      border: { bottom: { style: D.BorderStyle.SINGLE, size: 4, color: '3251C4', space: 6 } },
      children: [
        new D.TextRun({ text: cat, font: 'Roboto', size: 40, bold: true, color: '23296C' }),
        new D.TextRun({ text: `  ${catRows.length} item${catRows.length!==1?'s':''}`, font: 'Roboto', size: 18, color: 'A0AEC0' }),
      ]
    }));

    // Items
    for (let idx = 0; idx < catRows.length; idx++) {
      const r = catRows[idx];
      const s = SCORE_MAP[r.score];
      const tekst = replaceVariables(replaceKlant(r.teksten[r.score] || ''), r);
      const toel = replaceVariables(replaceKlant(r.toelichting || ''), r);
      const imgs = Array.isArray(r.afbeeldingen) ? r.afbeeldingen : [];

      // Item nummer + naam
      children.push(new D.Paragraph({
        spacing: { before: 200, after: 40 },
        children: [
          new D.TextRun({ text: `${idx+1}. `, font: 'Roboto', size: 20, color: '6B7280' }),
          new D.TextRun({ text: r.naam, font: 'Roboto', size: 32, bold: true, color: '23296C' }),
        ]
      }));

      // Toelichting
      if (toel) {
        const toelParas = htmlToDocxParagraphs(toel, {
          size: 20, color: '4A5568', spacing: 40,
          indent: { left: 240 },
          border: { left: { style: D.BorderStyle.SINGLE, size: 6, color: 'D4A843', space: 8 } }
        });
        toelParas.forEach(p => children.push(p));
      }

      // Score badge als tekst
      const badgeRuns = [
        new D.TextRun({ text: `${EMOJIS[s.key]} ${s.label}`, font: 'Roboto', size: 18, bold: true, color: s.color.replace('#','') }),
      ];
      if (r.type === 'kans') {
        badgeRuns.push(new D.TextRun({ text: '   💡 Kans', font: 'Roboto', size: 18, bold: true, color: '276749' }));
      } else if (r.type === 'risico') {
        badgeRuns.push(new D.TextRun({ text: '   ⚠️ Risico', font: 'Roboto', size: 18, bold: true, color: 'C53030' }));
      }
      if (r.quickwin) {
        badgeRuns.push(new D.TextRun({ text: '   ⚡ Quick Win', font: 'Roboto', size: 18, bold: true, color: '3251C4' }));
      }
      children.push(new D.Paragraph({ spacing: { after: 80 }, children: badgeRuns }));

      // Tekst
      if (tekst) {
        const tekstParas = htmlToDocxParagraphs(tekst, { size: 22, color: '2D3748', spacing: 60 });
        tekstParas.forEach(p => children.push(p));
      } else {
        children.push(new D.Paragraph({
          spacing: { after: 100 },
          children: [new D.TextRun({ text: 'Geen tekst ingevuld', font: 'Roboto', size: 22, color: 'A0AEC0', italics: true })]
        }));
      }

      // Afbeeldingen
      for (const src of imgs) {
        try {
          const imgType = dataUriType(src);
          const imgData = dataUriToUint8(src);
          const dims = await getImageDims(src, 500, 350);
          children.push(new D.Paragraph({
            spacing: { after: 120 },
            children: [new D.ImageRun({
              type: imgType, data: imgData,
              transformation: dims,
              altText: { title: r.naam, description: 'Screenshot', name: 'img' }
            })]
          }));
        } catch(e) { console.warn('Afbeelding overgeslagen:', e); }
      }

      // Scheidingslijn (behalve na laatste item)
      if (idx < catRows.length - 1) {
        children.push(new D.Paragraph({
          spacing: { before: 40, after: 40 },
          border: { bottom: { style: D.BorderStyle.SINGLE, size: 1, color: 'E2E8F0', space: 4 } },
          children: []
        }));
      }
    }
  }

  // ── Footer tekst ──
  if (ftrText) {
    children.push(new D.Paragraph({ spacing: { before: 320 }, children: [] }));
    const ftrParas = htmlToDocxParagraphs(ftrText, { size: 22, color: '2D3748', spacing: 80 });
    ftrParas.forEach(p => children.push(p));
  }

  // ── To-do lijst (actiepunten) ──
  const openTodos = scanTodos.filter(t => !t.done);
  if (openTodos.length > 0) {
    children.push(new D.Paragraph({ spacing: { before: 400 }, children: [] }));
    children.push(new D.Paragraph({
      spacing: { after: 160 },
      children: [new D.TextRun({ text: 'Actiepunten', font: 'Roboto', size: 28, bold: true, color: '23296C' })]
    }));
    openTodos.forEach(t => {
      children.push(new D.Paragraph({
        spacing: { after: 60 },
        bullet: { level: 0 },
        children: [new D.TextRun({ text: t.text, font: 'Roboto', size: 22, color: '2D3748' })]
      }));
    });
  }

  // ── Document samenstellen ──
  const doc = new D.Document({
    styles: {
      default: { document: { run: { font: 'Roboto', size: 22 } } },
    },
    sections: [
      // ── Cover page (eerste pagina, geen header/footer, full-bleed) ──
      {
        properties: {
          page: {
            size: { width: 11906, height: 16838 },
            margin: { top: 720, right: 720, bottom: 720, left: 720 }
          },
        },
        headers: {
          default: new D.Header({ children: [new D.Paragraph({ children: [] })] }),
        },
        footers: {
          default: new D.Footer({ children: [new D.Paragraph({ children: [] })] }),
        },
        children: coverChildren
      },
      // ── Inhoud (pagina 2+) ──
      {
        properties: {
          page: {
            size: { width: 11906, height: 16838 },
            margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
          },
        },
        headers: {
          default: new D.Header({
            children: [new D.Paragraph({
              alignment: D.AlignmentType.RIGHT,
              children: [new D.ImageRun({
                type: 'png', data: beeldmerkData,
                transformation: { width: 27, height: 44 },
                altText: { title: 'PB', description: 'Beeldmerk', name: 'Beeldmerk' }
              })]
            })]
          }),
        },
        footers: {
          default: new D.Footer({
            children: [
              new D.Paragraph({
                alignment: D.AlignmentType.RIGHT,
                children: [new D.TextRun({ children: [D.PageNumber.CURRENT], font: 'Roboto', size: 20, color: '718096' })]
              }),
              new D.Paragraph({
                alignment: D.AlignmentType.CENTER,
                children: [new D.TextRun({ text: 'Meer grip op uw ERP-omgeving? Neem contact met ons op.', font: 'Roboto', size: 16, color: '718096' })]
              }),
            ]
          }),
        },
        children
      }
    ]
  });

  // ── Genereer en download .docx ──
  const blob = await D.Packer.toBlob(doc);
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url; a.download = `omgevingsscan-${now.toISOString().slice(0,10)}.docx`;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast(`✅ Document gedownload met ${activeRows.length} variabele${activeRows.length!==1?'n':''}!`);
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3500);
}

// ── Settings ──
function openSettings() {
  renderSettingsCats();
  renderSettingsScores();
  renderSettingsChecklist();
  document.getElementById('settings-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeSettings() {
  document.getElementById('settings-modal').classList.remove('open');
  document.body.style.overflow = '';
  renderCatFilter();
  renderTable();
  renderChecklist();
  renderMappingCards();
  renderMappingChecklist();
  saveData();
}
function closeSettingsOnBackdrop(e) {
  if (e.target === document.getElementById('settings-modal')) closeSettings();
}

// ── Drag-and-drop helper voor sorteerbare lijsten ──
function initDragList(container, dataAttr, onDrop) {
  let dragEl = null;
  container.addEventListener('dragstart', e => {
    const item = e.target.closest('.draggable');
    if (!item) return;
    dragEl = item;
    item.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
  });
  container.addEventListener('dragend', e => {
    if (dragEl) dragEl.classList.remove('dragging');
    container.querySelectorAll('.drag-over').forEach(el => el.classList.remove('drag-over'));
    dragEl = null;
  });
  container.addEventListener('dragover', e => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    const target = e.target.closest('.draggable');
    if (!target || target === dragEl) return;
    container.querySelectorAll('.drag-over').forEach(el => el.classList.remove('drag-over'));
    target.classList.add('drag-over');
  });
  container.addEventListener('dragleave', e => {
    const target = e.target.closest('.draggable');
    if (target) target.classList.remove('drag-over');
  });
  container.addEventListener('drop', e => {
    e.preventDefault();
    const target = e.target.closest('.draggable');
    if (!target || !dragEl || target === dragEl) return;
    const fromIdx = parseInt(dragEl.getAttribute(dataAttr));
    const toIdx = parseInt(target.getAttribute(dataAttr));
    if (isNaN(fromIdx) || isNaN(toIdx)) return;
    onDrop(fromIdx, toIdx);
  });
}

function renderSettingsCats() {
  const el = document.getElementById('settings-cat-list');
  if (!el) return;
  el.innerHTML = CATEGORIES.map((c, i) => {
    return `<div class="settings-item draggable" draggable="true" data-cat-idx="${i}">
      <span class="drag-handle" title="Versleep om te herordenen">☰</span>
      <input type="text" class="settings-cat-edit" value="${escHtml(c)}" onchange="renameCategory(${i}, this.value)" />
      <button class="settings-remove-btn" onclick="removeCategory(${i})" title="Verwijderen">✕</button>
    </div>`;
  }).join('');
  initDragList(el, 'data-cat-idx', function(fromIdx, toIdx) {
    const item = CATEGORIES.splice(fromIdx, 1)[0];
    CATEGORIES.splice(toIdx, 0, item);
    renderSettingsCats();
    saveData();
    rerenderActiveViews();
  });
}

function rerenderActiveViews() {
  renderCatFilter();
  if (currentPage === 'landing') renderLandingCats();
  if (currentPage === 'scan') renderTable();
  if (currentPage === 'mapping') renderMappingCards();
}


function addCategory() {
  const input = document.getElementById('settings-cat-input');
  const name = input.value.trim();
  if (!name) return;
  if (CATEGORIES.includes(name)) { showToast('⚠️ Categorie bestaat al.'); return; }
  CATEGORIES.push(name);
  activeCats.add(name);
  input.value = '';
  renderSettingsCats();
  saveData();
  showToast(`✅ Categorie "${name}" toegevoegd!`);
}

function renameCategory(idx, newName) {
  newName = newName.trim();
  if (!newName) { renderSettingsCats(); return; }
  const oldName = CATEGORIES[idx];
  if (oldName === newName) return;
  if (CATEGORIES.includes(newName)) { showToast('Categorie bestaat al.'); renderSettingsCats(); return; }
  CATEGORIES[idx] = newName;
  rows.forEach(r => { if (r.categorie === oldName) r.categorie = newName; });
  if (activeCats.has(oldName)) { activeCats.delete(oldName); activeCats.add(newName); }
  saveData();
}

function removeCategory(idx) {
  const name = CATEGORIES[idx];
  if (CATEGORIES.length <= 1) { showToast('Minimaal 1 categorie nodig.'); return; }
  if (rows.some(r => r.categorie === name)) {
    const fallback = CATEGORIES.find((c, i) => i !== idx) || CATEGORIES[0];
    if (!confirm(`Er zijn rijen met categorie "${name}". Deze worden verplaatst naar "${fallback}". Doorgaan?`)) return;
    rows.forEach(r => { if (r.categorie === name) r.categorie = fallback; });
  }
  CATEGORIES.splice(idx, 1);
  activeCats.delete(name);
  renderSettingsCats();
  saveData();
  showToast(`Categorie "${name}" verwijderd.`);
}

function renderSettingsScores() {
  const el = document.getElementById('settings-score-list');
  if (!el) return;
  el.innerHTML = SCORES.map((s, i) => {
    const colorDot = `<span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:${s.border};margin-right:6px;vertical-align:middle;"></span>`;
    return `<div class="settings-item">
      <span>${colorDot}${s.emoji || '•'}</span>
      <input type="text" class="settings-cat-edit" value="${escHtml(s.label)}" onchange="renameScore(${i}, this.value)" style="flex:1;" />
      <button class="settings-remove-btn" onclick="removeScore(${i})" title="Verwijderen">✕</button>
    </div>`;
  }).join('');
  // Vul kleur- en emoji-selects
  const colorSel = document.getElementById('settings-score-color');
  if (colorSel) colorSel.innerHTML = SCORE_COLORS.map(c => `<option value="${c.css}">${c.name}</option>`).join('');
  const emojiSel = document.getElementById('settings-score-emoji');
  if (emojiSel) emojiSel.innerHTML = SCORE_EMOJIS.map(e => `<option value="${e}">${e}</option>`).join('');
}

function renameScore(idx, newLabel) {
  newLabel = newLabel.trim();
  if (!newLabel) { renderSettingsScores(); return; }
  SCORES[idx].label = newLabel;
  rebuildScoreMaps();
  saveData();
}

function addScore() {
  const input = document.getElementById('settings-score-label');
  const label = input.value.trim();
  if (!label) return;
  const key = label.replace(/[^a-zA-Z0-9]/g, '').substring(0, 12) || ('S' + Date.now());
  if (SCORES.some(s => s.key === key)) { showToast('⚠️ Score met die key bestaat al.'); return; }
  if (SCORES.some(s => s.label.toLowerCase() === label.toLowerCase())) { showToast('⚠️ Score met dat label bestaat al.'); return; }
  const colorCss = document.getElementById('settings-score-color').value;
  const colorObj = SCORE_COLORS.find(c => c.css === colorCss) || SCORE_COLORS[0];
  const emoji = document.getElementById('settings-score-emoji').value || '•';
  SCORES.push({ key, label, css: colorObj.css, color: colorObj.color, bg: colorObj.bg, border: colorObj.border, emoji });
  rebuildScoreMaps();
  // Voeg tekstveld toe aan bestaande rijen
  rows.forEach(r => { if (!r.teksten[key]) r.teksten[key] = ''; });
  input.value = '';
  renderSettingsScores();
  saveData();
  showToast(`✅ Score "${label}" toegevoegd!`);
}

function removeScore(idx) {
  if (SCORES.length <= 1) { showToast('⚠️ Er moet minimaal 1 score bestaan.'); return; }
  const s = SCORES[idx];
  const affected = rows.filter(r => r.score === s.key);
  if (affected.length > 0) {
    if (!confirm(`Er zijn ${affected.length} rij(en) met score "${s.label}". Hun score wordt gereset. Doorgaan?`)) return;
    affected.forEach(r => { r.score = null; });
  }
  SCORES.splice(idx, 1);
  rebuildScoreMaps();
  // Verwijder tekstveld uit rijen
  rows.forEach(r => { delete r.teksten[s.key]; });
  renderSettingsScores();
  saveData();
  showToast(`🗑️ Score "${s.label}" verwijderd.`);
}

function renderSettingsChecklist() {
  // Taken (checkbox items)
  const todosEl = document.getElementById('settings-todos-list');
  if (todosEl) {
    const todos = checklistItems.filter(i => i.type === 'checkbox' || !i.type);
    todosEl.innerHTML = todos.length === 0
      ? '<div style="color:rgba(255,255,255,0.35);font-size:0.82rem;padding:6px 0;">Nog geen taken.</div>'
      : todos.map(item => `<div class="settings-item">
          <input type="text" class="settings-cat-edit" value="${escHtml(item.text)}" onchange="renameChecklistItem(${item.id}, this.value)" style="flex:1;" />
          <button class="settings-remove-btn" onclick="removeChecklistItem(${item.id})" title="Verwijderen">✕</button>
        </div>`).join('');
  }
  // Variabelen (text/number items)
  const varsEl = document.getElementById('settings-vars-list');
  if (varsEl) {
    const typeLabels = { text: 'Tekst', number: 'Nummer' };
    const vars = checklistItems.filter(i => i.type === 'text' || i.type === 'number');
    varsEl.innerHTML = vars.length === 0
      ? '<div style="color:rgba(255,255,255,0.35);font-size:0.82rem;padding:6px 0;">Nog geen variabelen.</div>'
      : vars.map(item => `<div class="settings-item">
          <input type="text" class="settings-cat-edit" value="${escHtml(item.text)}" onchange="renameChecklistItem(${item.id}, this.value)" style="flex:1;" />
          <small style="color:rgba(255,255,255,0.40);">${typeLabels[item.type] || 'Tekst'}</small>
          <button class="settings-remove-btn" onclick="removeChecklistItem(${item.id})" title="Verwijderen">✕</button>
        </div>`).join('');
  }
}

function renameChecklistItem(id, newText) {
  newText = newText.trim();
  const item = checklistItems.find(i => i.id === id);
  if (!item || !newText) { renderSettingsChecklist(); return; }
  item.text = newText;
  saveData();
}

function addTodoItem() {
  const input = document.getElementById('settings-todo-input');
  const text = input.value.trim();
  if (!text) return;
  checklistItems.push({ id: ++checklistCounter, text, type: 'checkbox', done: false, value: '', linkedRowId: null });
  input.value = '';
  renderSettingsChecklist();
  renderChecklist();
  saveData();
}

function addVarItem() {
  const input = document.getElementById('settings-var-input');
  const typeSelect = document.getElementById('settings-var-type');
  const text = input.value.trim();
  if (!text) return;
  const type = typeSelect ? typeSelect.value : 'text';
  checklistItems.push({ id: ++checklistCounter, text, type, done: false, value: '', linkedRowId: null });
  input.value = '';
  renderSettingsChecklist();
  renderMappingChecklist();
  saveData();
}

function addChecklistItem() {
  // Backwards compat — delegate to addTodoItem
  addTodoItem();
}

function removeChecklistItem(id) {
  checklistItems = checklistItems.filter(i => i.id !== id);
  renderSettingsChecklist();
  renderChecklist();
  saveData();
}

// ── Checklist (main page) ──
function removeChecklistItem(id) {
  const idx = checklistItems.findIndex(i => i.id === id);
  if (idx === -1) return;
  checklistItems.splice(idx, 1);
  renderMappingChecklist();
  renderChecklist();
  debounceSave();
}

function renderChecklistItem(item) {
  if (item.type === 'text' || item.type === 'number') {
    return `<div class="checklist-var-item${item.value ? ' has-value' : ''}">
      <span class="checklist-var-label">${escHtml(item.text)}</span>
      <input type="${item.type}" class="checklist-var-input" value="${escHtml(item.value || '')}"
        oninput="updateChecklistValue(${item.id}, this.value)"
        placeholder="${item.type === 'number' ? '0' : 'Vul in…'}"/>
      <button class="checklist-var-remove" onclick="removeChecklistItem(${item.id})" title="Verwijderen">✕</button>
    </div>`;
  }
  return `<label class="checklist-item">
    <input type="checkbox" ${item.done ? 'checked' : ''} onchange="toggleChecklistDone(${item.id}, ${item.done ? 'false' : 'true'})"/>
    ${escHtml(item.text)}
  </label>`;
}

function renderChecklist() {
  // Scan page: alleen taken (checkbox items), geen variabelen
  const panel = document.getElementById('checklist-panel');
  if (!panel) return;

  const checkboxItems = checklistItems.filter(i => i.type === 'checkbox' || !i.type);
  if (checkboxItems.length === 0) { panel.style.display = 'none'; return; }
  panel.style.display = '';

  const openCb = checkboxItems.filter(i => !i.done);
  const doneCb = checkboxItems.filter(i => i.done);

  document.getElementById('checklist-open').innerHTML = openCb.map(item => renderChecklistItem(item)).join('');

  const toggleBtn = document.getElementById('checklist-done-toggle');
  const doneList = document.getElementById('checklist-done');
  if (doneCb.length === 0) {
    toggleBtn.style.display = 'none';
    doneList.innerHTML = '';
  } else {
    toggleBtn.style.display = '';
    document.getElementById('checklist-done-count').textContent = `Afgeronde items (${doneCb.length})`;
    doneList.innerHTML = doneCb.map(item => renderChecklistItem(item)).join('');
  }
}

// ── Scan To-do lijst ──
function renderScanTodos() {
  const panel = document.getElementById('scan-todo-panel');
  if (!panel) return;

  const open = scanTodos.filter(t => !t.done);
  const done = scanTodos.filter(t => t.done);

  document.getElementById('scan-todo-open').innerHTML = open.map(t =>
    `<div class="scan-todo-item">
      <label class="scan-todo-check"><input type="checkbox" onchange="toggleScanTodo(${t.id}, true)" /><span>${escHtml(t.text)}</span></label>
      <button class="checklist-var-remove" onclick="removeScanTodo(${t.id})" title="Verwijderen">✕</button>
    </div>`
  ).join('');

  const toggleBtn = document.getElementById('scan-todo-done-toggle');
  const doneList = document.getElementById('scan-todo-done');
  if (done.length === 0) {
    toggleBtn.style.display = 'none';
    doneList.innerHTML = '';
  } else {
    toggleBtn.style.display = '';
    document.getElementById('scan-todo-done-count').textContent = `Afgeronde items (${done.length})`;
    doneList.innerHTML = done.map(t =>
      `<div class="scan-todo-item done">
        <label class="scan-todo-check"><input type="checkbox" checked onchange="toggleScanTodo(${t.id}, false)" /><span>${escHtml(t.text)}</span></label>
        <button class="checklist-var-remove" onclick="removeScanTodo(${t.id})" title="Verwijderen">✕</button>
      </div>`
    ).join('');
  }
}

function addScanTodo() {
  const input = document.getElementById('scan-todo-input');
  const text = (input.value || '').trim();
  if (!text) return;
  scanTodos.push({ id: ++scanTodoCounter, text, done: false });
  input.value = '';
  saveData();
  renderScanTodos();
}

function toggleScanTodo(id, done) {
  const t = scanTodos.find(t => t.id === id);
  if (t) { t.done = done; saveData(); renderScanTodos(); }
}

function removeScanTodo(id) {
  scanTodos = scanTodos.filter(t => t.id !== id);
  saveData();
  renderScanTodos();
}

function toggleScanTodoDone() {
  const btn = document.getElementById('scan-todo-done-toggle');
  const list = document.getElementById('scan-todo-done');
  btn.classList.toggle('open');
  list.classList.toggle('open');
}

function renderScanVars() {
  const panel = document.getElementById('scan-vars-panel');
  const list = document.getElementById('scan-vars-list');
  if (!panel || !list) return;
  const varItems = checklistItems.filter(i => i.type === 'text' || i.type === 'number');
  if (varItems.length === 0) { panel.style.display = 'none'; return; }
  panel.style.display = '';
  list.innerHTML = varItems.map(item =>
    `<div class="checklist-var-item${item.value ? ' has-value' : ''}">
      <span class="checklist-var-label">${escHtml(item.text)}</span>
      <input type="${item.type}" class="checklist-var-input" value="${escHtml(item.value || '')}"
        oninput="updateChecklistValue(${item.id}, this.value)"
        placeholder="${item.type === 'number' ? '0' : 'Vul in\u2026'}"/>
    </div>`
  ).join('');
}

function updateChecklistValue(id, value) {
  const item = checklistItems.find(i => i.id === id);
  if (item) { item.value = value; debounceSave(); renderTable(); }
}

function linkVariableToRow(varId, rowIdStr) {
  const item = checklistItems.find(i => i.id === varId);
  if (!item) return;
  item.linkedRowId = rowIdStr ? Number(rowIdStr) : null;
  renderMappingChecklist();
  renderTable();
  saveData();
}

function toggleChecklistDone(id, done) {
  const item = checklistItems.find(i => i.id === id);
  if (item) item.done = done;
  renderChecklist();
  renderMappingChecklist();
  saveData();
}

function toggleDoneList() {
  const btn = document.getElementById('checklist-done-toggle');
  const list = document.getElementById('checklist-done');
  btn.classList.toggle('open');
  list.classList.toggle('open');
}

/* Library modal functies verwijderd — export/import zit nu in de toolbar */

function exportCurrentScan() {
  const json = JSON.stringify(buildPayload(), null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  const safeName = (headerTekst || 'scan').replace(/[^a-z0-9\-_\s]/gi, '').trim().replace(/\s+/g, '-');
  const dateStr  = new Date().toISOString().slice(0, 10);
  a.href = url; a.download = `omgevingsscan-${safeName}-${dateStr}.json`;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast(`📥 Scan geëxporteerd als bestand!`);
}

function importScanFromFile() {
  document.getElementById('import-file-input').click();
}

function applyImportedScan(p, filename) {
  counter        = p.counter        || 0;
  headerTekst    = p.headerTekst    || '';
  docHeaderTekst = p.docHeaderTekst || '';
  docFooterTekst = p.docFooterTekst || '';
  consultantNaam = p.consultantNaam || '';
  if (p.categories && p.categories.length) CATEGORIES = p.categories;
  activeCats     = new Set(p.activeCats && p.activeCats.length ? p.activeCats : CATEGORIES);
  CATEGORIES.forEach(c => { if (!activeCats.has(c)) activeCats.add(c); });
  if (p.scores && p.scores.length) { SCORES = p.scores.map(s => ({...s})); rebuildScoreMaps(); }
  checklistItems   = (p.checklistItems || []).map(i => ({ type: 'checkbox', value: '', linkedRowId: null, ...i }));
  checklistCounter = p.checklistCounter || (checklistItems.length ? Math.max(...checklistItems.map(i=>i.id))+1 : 0);
  scanTodos        = (p.scanTodos || []).map(t => ({ done: false, ...t }));
  scanTodoCounter  = p.scanTodoCounter || (scanTodos.length ? Math.max(...scanTodos.map(t=>t.id))+1 : 0);
  rows           = (p.rows || []).map(r => ({ categorie: CATEGORIES[0] || 'Algemeen', ...r, expanded: false }));
  // Voeg ontbrekende categorieën toe die in rijen voorkomen maar niet in CATEGORIES
  rows.forEach(r => {
    if (r.categorie && !CATEGORIES.includes(r.categorie)) {
      CATEGORIES.push(r.categorie);
      activeCats.add(r.categorie);
    }
    SCORES.forEach(s => { if (r.teksten && !(s.key in r.teksten)) r.teksten[s.key] = ''; });
    if (!Array.isArray(r.variabelen)) r.variabelen = [];
  });
  // Herstel linkedRowId koppelingen: match op row-naam als ID niet meer klopt
  const importedRows = p.rows || [];
  checklistItems.forEach(ci => {
    if (!ci.linkedRowId) return;
    const matchInNewRows = rows.find(r => r.id === ci.linkedRowId);
    if (matchInNewRows) return; // ID klopt nog
    const origRow = importedRows.find(r => r.id === ci.linkedRowId);
    if (origRow && origRow.naam) {
      const byName = rows.find(r => r.naam === origRow.naam);
      if (byName) ci.linkedRowId = byName.id;
      else ci.linkedRowId = null;
    } else {
      ci.linkedRowId = null;
    }
  });
  const allRowVarIds = rows.flatMap(r => (r.variabelen || []).map(v => v.id || 0));
  rowVarCounter = allRowVarIds.length > 0 ? Math.max(...allRowVarIds) : 0;
  renderCatFilter();
  renderTable();
  renderChecklist();
  renderScanTodos();
  saveData();
}

function handleImportFile(input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const p = JSON.parse(e.target.result);
      if (!p.seedVersion && !p.rows) {
        showToast('⚠️ Ongeldig bestand — geen geldige scan-data gevonden.');
        return;
      }
      if (rows.length > 0 && !confirm('De huidige scan wordt overschreven. Doorgaan?')) return;
      applyImportedScan(p, file.name);
      showToast(`✅ Scan geladen vanuit "${file.name}"!`);
    } catch(err) {
      showToast('⚠️ Fout bij inlezen: ' + err.message);
    }
  };
  reader.readAsText(file);
  input.value = '';
}

/* exportFromLibrary, deleteFromLibrary, renderLibList verwijderd */

// ── Landing page ──
/* selectedTemplateId verwijderd */

function renderLandingCats() {
  const wrap = document.getElementById('landing-cat-chips');
  if (!wrap) return;
  wrap.innerHTML = CATEGORIES.map(c => {
    const checked = activeCats.has(c);
    return `<label class="cat-chip${checked ? ' checked' : ''}">
      <input type="checkbox" ${checked ? 'checked' : ''} onchange="toggleLandingCat('${c}', this)"/>
      ${c}
    </label>`;
  }).join('');
}

function toggleLandingCat(cat, el) {
  if (el.checked) activeCats.add(cat);
  else            activeCats.delete(cat);
  el.closest('.cat-chip').classList.toggle('checked', el.checked);
}

/* renderLandingTemplates en selectTemplate verwijderd — templates niet meer nodig */

function importScanFromLanding() {
  document.getElementById('landing-import-input').click();
}

function handleLandingImport(input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const p = JSON.parse(e.target.result);
      if (!p.seedVersion && !p.rows) {
        showToast('⚠️ Ongeldig bestand — geen geldige scan-data gevonden.');
        return;
      }
      applyImportedScan(p, file.name);
      navigateTo('scan');
      showToast(`✅ Scan geladen vanuit "${file.name}"!`);
    } catch(err) {
      showToast('⚠️ Fout bij inlezen: ' + err.message);
    }
  };
  reader.readAsText(file);
  input.value = '';
}

let currentPage = 'landing';

function navigateTo(page) {
  // Sync landing-velden als we van landing weggaan
  if (currentPage === 'landing') {
    const klantVal = document.getElementById('landing-klant').value.trim();
    const consultantVal = document.getElementById('landing-consultant').value.trim();
    headerTekst    = klantVal;
    consultantNaam = consultantVal;
    saveData();
  }
  // Sync standaard tekst velden (staan nu op scan pagina)
  if (currentPage === 'scan') {
    const mh = document.getElementById('mapping-header-tekst');
    const mf = document.getElementById('mapping-footer-tekst');
    if (mh) docHeaderTekst = mh.innerHTML || '';
    if (mf) docFooterTekst = mf.innerHTML || '';
    saveData();
  }

  // Verberg alle pagina's
  document.getElementById('landing-page').classList.add('page-hidden');
  document.getElementById('mapping-page').classList.add('page-hidden');
  document.getElementById('scan-page').classList.add('page-hidden');

  // Update stepper
  const pages = ['landing', 'mapping', 'scan'];
  const activeIdx = pages.indexOf(page);
  document.querySelectorAll('.step').forEach(s => {
    const stepIdx = parseInt(s.dataset.step);
    s.classList.remove('active', 'done');
    if (stepIdx === activeIdx) s.classList.add('active');
    else if (stepIdx < activeIdx) s.classList.add('done');
  });

  // Toon de juiste pagina
  if (page === 'landing') {
    document.getElementById('landing-klant').value = headerTekst;
    document.getElementById('landing-consultant').value = consultantNaam;
    renderLandingCats();
    document.getElementById('landing-page').classList.remove('page-hidden');
  } else if (page === 'mapping') {
    renderMappingCards();
    renderMappingChecklist();
    document.getElementById('mapping-page').classList.remove('page-hidden');
  } else if (page === 'scan') {
    // Vul standaard tekst velden
    const mh = document.getElementById('mapping-header-tekst');
    const mf = document.getElementById('mapping-footer-tekst');
    if (mh) mh.innerHTML = docHeaderTekst || '';
    if (mf) mf.innerHTML = docFooterTekst || '';
    renderCatFilter();
    renderTable();
    renderChecklist();
    renderScanTodos();
    document.getElementById('scan-page').classList.remove('page-hidden');
  }

  currentPage = page;
  window.scrollTo(0, 0);
}

function goToMain() {
  navigateTo('scan');
}

function goToLanding() {
  navigateTo('landing');
}

// ── Mapping page rendering ──
function renderMappingCards() {
  const container = document.getElementById('mapping-cards');
  if (!container) return;

  if (rows.length === 0) {
    container.innerHTML = `<div class="card" style="padding:40px;text-align:center;">
      <div class="empty-state">
        <svg width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
        </svg>
        <p>Geen onderdelen. Klik op <strong>+ Onderdeel toevoegen</strong> om te starten.</p>
      </div>
    </div>`;
    return;
  }

  // Sorteer op categorie
  const sortedRows = [...rows].sort((a, b) => {
    const ai = CATEGORIES.indexOf(a.categorie);
    const bi = CATEGORIES.indexOf(b.categorie);
    return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
  });

  let html = '';
  let currentCat = null;
  let catIdx = 0;

  for (const r of sortedRows) {
    if (r.categorie !== currentCat) {
      currentCat = r.categorie;
      catIdx = 0;
      html += `<div style="font-size:0.72rem;font-weight:700;text-transform:uppercase;letter-spacing:0.6px;color:rgba(255,255,255,0.50);margin:${html ? '24px' : '4px'} 0 8px;padding-bottom:6px;border-bottom:1px solid rgba(255,255,255,0.10);">${escHtml(currentCat)}</div>`;
    }
    catIdx++;
    const isExpanded = r._mappingExpanded;
    const rowVars = Array.isArray(r.variabelen) ? r.variabelen : [];
    const rowVarsHtml = rowVars.map(v => `
      <div class="checklist-var-item${v.value ? ' has-value' : ''}" style="gap:8px;">
        <span class="checklist-var-label" style="min-width:auto;font-size:0.82rem;">${escHtml(v.name)}</span>
        <input type="text" class="checklist-var-input" value="${escHtml(v.value || '')}"
          oninput="updateRowVariableValue(${r.id}, ${v.id}, this.value)"
          placeholder="Vul in…" style="flex:1;"/>
        <button class="settings-remove-btn" onclick="removeRowVariable(${r.id}, ${v.id})" title="Verwijderen" style="padding:2px 6px;font-size:0.85rem;">✕</button>
      </div>`).join('');

    html += `<div class="mapping-card draggable" id="mcard-${r.id}" draggable="true" data-row-id="${r.id}" data-row-cat="${escHtml(r.categorie)}">
      <div class="mapping-card-header" onclick="toggleMappingCard(${r.id})">
        <span class="drag-handle" onclick="event.stopPropagation()" title="Versleep om te herordenen">☰</span>
        <span class="mapping-card-num">${catIdx}</span>
        <input class="mapping-card-name" type="text" value="${escHtml(r.naam)}"
          oninput="updateNaam(${r.id}, this.value)" onclick="event.stopPropagation()" placeholder="Naam onderdeel…"/>
        <span class="mapping-card-cat">${escHtml(r.categorie)}</span>
        <button class="mapping-card-toggle${isExpanded ? ' open' : ''}" onclick="event.stopPropagation(); toggleMappingCard(${r.id})">
          ${isExpanded ? '▲' : '▼'}
        </button>
      </div>
      <div class="mapping-card-body${isExpanded ? ' open' : ''}" id="mcard-body-${r.id}">
        <div class="mapping-card-meta">
          <label>Categorie</label>
          <select class="cat-select" onchange="updateCategorie(${r.id}, this.value); renderMappingCards();">
            ${CATEGORIES.map(c => `<option value="${c}"${r.categorie===c?' selected':''}>${c}</option>`).join('')}
          </select>
          <label>Type</label>
          <select class="type-select" onchange="setType(${r.id}, this.value)">
            <option value=""${!r.type?' selected':''}>—</option>
            <option value="kans"${r.type==='kans'?' selected':''}>💡 Kans</option>
            <option value="risico"${r.type==='risico'?' selected':''}>⚠️ Risico</option>
          </select>
          <button class="btn-danger" onclick="removeRow(${r.id}); renderMappingCards();" title="Verwijderen" style="margin-left:auto;">✕ Verwijderen</button>
        </div>
        <!-- Per-onderdeel variabelen -->
        <div style="margin:12px 0 8px;padding:12px 14px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.10);border-radius:10px;">
          <div style="font-size:0.70rem;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;color:rgba(255,255,255,0.50);margin-bottom:6px;">Variabelen</div>
          ${rowVarsHtml}
          <div style="display:flex;gap:6px;align-items:center;margin-top:${rowVars.length > 0 ? '6' : '0'}px;">
            <input type="text" id="row-var-input-${r.id}" class="checklist-var-input" placeholder="Nieuwe variabele…"
              style="flex:1;font-size:0.82rem;" onkeydown="if(event.key==='Enter')addRowVariable(${r.id})"/>
            <button class="settings-add-btn" onclick="addRowVariable(${r.id})" style="padding:5px 12px;font-size:0.78rem;border-radius:6px;">+ Toevoegen</button>
          </div>
        </div>
        <div class="detail-inner" style="margin-top:12px;">
          ${detailHTML(r)}
        </div>
      </div>
    </div>`;
  }
  container.innerHTML = html;
  initMappingDrag(container);
}

function initMappingDrag(container) {
  let dragEl = null;
  container.addEventListener('dragstart', e => {
    const item = e.target.closest('.mapping-card.draggable');
    if (!item) return;
    dragEl = item;
    item.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
  });
  container.addEventListener('dragend', () => {
    if (dragEl) dragEl.classList.remove('dragging');
    container.querySelectorAll('.drag-over').forEach(el => el.classList.remove('drag-over'));
    dragEl = null;
  });
  container.addEventListener('dragover', e => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    const target = e.target.closest('.mapping-card.draggable');
    if (!target || target === dragEl) return;
    // Alleen binnen dezelfde categorie
    if (dragEl && target.dataset.rowCat !== dragEl.dataset.rowCat) return;
    container.querySelectorAll('.drag-over').forEach(el => el.classList.remove('drag-over'));
    target.classList.add('drag-over');
  });
  container.addEventListener('dragleave', e => {
    const target = e.target.closest('.mapping-card.draggable');
    if (target) target.classList.remove('drag-over');
  });
  container.addEventListener('drop', e => {
    e.preventDefault();
    const target = e.target.closest('.mapping-card.draggable');
    if (!target || !dragEl || target === dragEl) return;
    if (target.dataset.rowCat !== dragEl.dataset.rowCat) return;
    const fromId = parseInt(dragEl.dataset.rowId);
    const toId = parseInt(target.dataset.rowId);
    reorderRowInCategory(fromId, toId);
  });
}

function reorderRowInCategory(fromId, toId) {
  const fromIdx = rows.findIndex(r => r.id === fromId);
  const toIdx = rows.findIndex(r => r.id === toId);
  if (fromIdx === -1 || toIdx === -1) return;
  const item = rows.splice(fromIdx, 1)[0];
  const newToIdx = rows.findIndex(r => r.id === toId);
  rows.splice(newToIdx === -1 ? rows.length : newToIdx, 0, item);
  renderMappingCards();
  renderTable();
  saveData();
}

function toggleMappingCard(id) {
  const r = rows.find(r => r.id === id);
  if (!r) return;
  r._mappingExpanded = !r._mappingExpanded;
  const body = document.getElementById(`mcard-body-${id}`);
  const toggle = document.querySelector(`#mcard-${id} .mapping-card-toggle`);
  if (body) body.classList.toggle('open', r._mappingExpanded);
  if (toggle) {
    toggle.classList.toggle('open', r._mappingExpanded);
    toggle.textContent = r._mappingExpanded ? '▲' : '▼';
  }
}

function renderMappingChecklist() {
  // Mapping page: alleen variabelen (text/number items), geen taken
  const panel = document.getElementById('mapping-checklist-panel');
  if (!panel) return;

  const varItems = checklistItems.filter(i => (i.type === 'text' || i.type === 'number') && !i.linkedRowId);
  if (varItems.length === 0) { panel.style.display = 'none'; return; }
  panel.style.display = '';

  document.getElementById('mapping-checklist-open').innerHTML = varItems.map(item => {
    const rowOptions = rows.map(r =>
      `<option value="${r.id}">${escHtml(r.naam || 'Naamloos')}</option>`
    ).join('');
    return `<div class="checklist-var-item${item.value ? ' has-value' : ''}">
      <span class="checklist-var-label">${escHtml(item.text)}</span>
      <select class="checklist-var-link" onchange="linkVariableToRow(${item.id}, this.value)" title="Koppel aan onderdeel">
        <option value="" selected>Globaal</option>
        ${rowOptions}
      </select>
      <input type="${item.type}" class="checklist-var-input" value="${escHtml(item.value || '')}"
        oninput="updateChecklistValue(${item.id}, this.value)"
        placeholder="${item.type === 'number' ? '0' : 'Vul in…'}"/>
      <button class="checklist-var-remove" onclick="removeChecklistItem(${item.id})" title="Verwijderen">✕</button>
    </div>`;
  }).join('');
}

function toggleDoneListMapping() {
  const btn = document.getElementById('mapping-checklist-done-toggle');
  const list = document.getElementById('mapping-checklist-done');
  btn.classList.toggle('open');
  list.classList.toggle('open');
}

function initLanding() {
  // Vul landing met huidige data
  document.getElementById('landing-klant').value = headerTekst;
  document.getElementById('landing-consultant').value = consultantNaam;
  renderLandingCats();
}

// ── Auto-resize textareas: groei mee met inhoud, geen scroll ──
function autoResizeTextarea(ta) {
  ta.style.height = 'auto';
  ta.style.height = ta.scrollHeight + 'px';
}
// Observe alle textareas in detail-inner en mapping cards
document.addEventListener('input', e => {
  if (e.target.tagName === 'TEXTAREA' && (e.target.closest('.detail-inner') || e.target.closest('.mapping-std-tekst') || e.target.classList.contains('scan-tekst-area'))) {
    autoResizeTextarea(e.target);
  }
});
// Auto-resize bij eerste render via MutationObserver
const textareaObserver = new MutationObserver(() => {
  document.querySelectorAll('.detail-inner textarea, .mapping-std-tekst textarea, .scan-tekst-area').forEach(ta => {
    if (ta.scrollHeight > ta.clientHeight) autoResizeTextarea(ta);
  });
});
textareaObserver.observe(document.body, { childList: true, subtree: true });

loadData();
initLanding();
renderChecklist();
renderScanTodos();
