## Brainstormen

Voor de tweede opdracht ben ik hard gaan brainstromen ik had best veel ideeen waarvan ik een paar ook had uit getekend maar toch niet "het idee" was. Na door denken en schetsen maken ben ik eindelijk op "het idee" gekomen.

-  1ste idee: visjes spel. doormiddel van een lijst kanje verschillende kleuren vishes toevoegen en die om een paal laten driften
-  <img width="407" alt="loop" src="https://user-images.githubusercontent.com/22005581/174660996-9e908dc0-7057-4dd6-97e7-517e614198a0.PNG">

-  2de idee: "Your ijsco" een applicatie waarmee je ijs bolletjes op je eijshorn kan scheppen en het hoorntje dan kunt kopen
-  <img width="423" alt="ijs" src="https://user-images.githubusercontent.com/22005581/174661062-bac796d7-23e9-4d6a-99ea-6a27c48a0640.PNG">

-  3de idee: Vuurwerk vending machine, hier zou je uit een vending machine vuurwerkpijltjes kujnnnen halen en die kunnen plaatsen op een lauch pad. Om die vervolgens af te laten gaan

Het idee die ik heb gekozen is nummer 3. Deze heb ik gekozen omdat ik het beter voor me zelf kon schetsen en kon uitwerken. Hierbij heb ik inspiratie gehaald uit het werk van mijn doceent
[Ben en jerry](https://www.sinds1971.nl/bj3/index.html)

Het idee is een uitdaging maar ik hou ervan om me zelf op de proef te stellen

## Problemen

Ik ben wel tegen een paar probleemen aan gelopen. Door dat ik bootstrap gewend was wist ik niet meer hoe je noraal je code kon stijlen. Hierbij kreeg ik even een reminder van me docent en kon ik de draad weer op pakken. Ook dacht ik in verschillende situaties veelste moeilijk na terwijl het makkelijk opgelost kon worden.

### Hulp

Tijdens de opdracht heb ik hulp en feedback van mijn docent Sanne. Hij maakte een voorbeeld voormij en legde me uit hoe ik het kon toepassen en moest doen. Dit heeft mij ernorm geholpen want ik zelf dacht heel moeilijk na.

## Storyboard
![image](https://user-images.githubusercontent.com/22005581/174660547-e4555c65-f51b-465b-a301-d5a4ffaa0517.png)


## API

De API die ik gebruik voor mijn applicatie is Drag and Drop. Ik pas dit toe het vuurwerk pijl van de machine. Ik wilde de gebruiker een goede user ervaring bieden, dus probeerde het best realistisch te maken. In plaats van te klikken kan de gebruiker de vuurwerk pijl slepen en neerzetten op de gewenste positie, in de lauch pad natuurlijk.

De reden dat ik voor deze api heb gekozen is om het voor de gebruiker makkelijker te maken, we willen de gebruiker de beste gebruikerservaring bieden.

### Uitwerking

#### Machine

Ik ben als eerst begonnen met het maken van de machine, dat leek me het lastigste dus wilde ik het als eerst doen. Nadat de machine af was ben ik begonnen aan het animeren en het toevoegen van JS. Hierdoor kon ik het laten lijken alsof het vuurwerk pijl echt viel en eruit rolde. Dit geeft de gebruiker een reallife effect. Terwijl de machine het vuurwerk laat valen krijgt de gebruiker op de display scherm te zien dat het aan het laden is.

|  Normaal 	|  Selecteren 	|   Animeren	|
|---	|---	|---	|
| <img width=50% height=50% src="https://user-images.githubusercontent.com/22005581/174659906-ecff1469-60cb-4afe-bb8b-53312b4daa73.png"> |  <img width=50% height=50% src="https://user-images.githubusercontent.com/22005581/174659963-adb89f8b-a7fa-4f39-a17d-e51aa9676880.png"> |  <img width=50% height=50% src="https://user-images.githubusercontent.com/22005581/174660032-089f44c3-0960-4c99-80f1-f7322d95ec41.png">|


Als de gebruiker niet een vuur werk heeft gekozen maar toch drukt op de button get, dan krijgt de gebruiker een error te zien die hem/haar verder op weg helpt om vuurwerk te krijgen. Bij het selecteren van de vuurwerk krijgt de gebruiker dat ook op de display scherm te zien. Dit geeft de gebruiker feedback over wat hij/zij heeft geklikt.
Als de vuurwerk is gekozen en eruit komt, kan de gebruiker deze pakken en slepen naar de lauch pad.

#### Lauchpadd

Voor de lauch padd heb ik een 3D doos gemaakt. Dit geeft een cool POV voor de gebruiker. In de launch box heb ik 3 gaten gemaakt. Hierin kan de gebruiker de vuurwerk naar toe sleepen en plaatsen
bij de lauch padd is er ook een knop die het vuurwerk laat afgaan. Hierbij zoekt de knop naar de pijlen, en als die bestaan wordt er een animatie bij toevegoed waardoor ze afgaan en ontploffen. Als er geen vuurwerk in de lauch box zit dan zal de applicatie een bericht geven met plaats eert uw vuurwerk. Zodat de klant weet waarom het niet werkt en wat er gedaan moet worden om het wel werkend te krijgen.

|   Normaal	|  Met vuurwerk 	|  Zonder vuurwerk 	|
|---	|---	|---	|
|   <img width=50% height=50% src="https://user-images.githubusercontent.com/22005581/174660307-cad7c648-922e-431b-b616-d34d5b0bb507.png"> |  <img width=50% height=50% src="https://user-images.githubusercontent.com/22005581/174660345-82848be7-4cab-4ce7-b88b-05b8da487a98.png"> |  <img width=50% height=50% src="https://user-images.githubusercontent.com/22005581/174660411-c7b6348e-8798-430a-9e19-508a14eaf988.png"> |


#### Uitdaging

Wat ik het lastigste vond was om de animaties op elkaar laten inspringen. Met andere worden, de ene animatie moet afgaan als de ander is gestopt. Hier kreeg ik een goeie tip van mijn docent namelijk: De ene animatie speelt van 0% tot 50% en de andere animatie van 50% tot 100%.

### Resultaat
![image](https://user-images.githubusercontent.com/22005581/174660483-18aa3fe9-40da-48f2-a3e9-b19ba82f4c85.png)


# Bronnenlijst

-  https://codepen.io/alirezajonaqi/pen/ZEyvdgq
-  https://www.sinds1971.nl/bj3/index.html
-  https://codepen.io/Dave29/pen/ZErqgmY
-  https://codepen.io/shooft/pen/JjpxxWX
-  https://cssgradient.io/
