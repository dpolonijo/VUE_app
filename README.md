# vue_app

## Preuzimanje i pokretanje aplikacije

Prvi preduvjet za pokretanje aplikacije je da su na lokalnom računalu instalirani GIT i Node.js

1. Kreirati novi folder na lokalnom računalu te se u njega pozicionirati putem komandne linije
2. Pokrenuti naredbu za preuzimanje aplikacije `git clone https://github.com/dpolonijo/VUE_app.git`
3. Nakon uspješnog preuzimanja, putem komandne linije potrebno se pozicionirati u preuzeti direktorij `VUE_app`
4. Pokrenuti naredbu `npm install`
5. Nakon poruke o uspješnoj instalaciji pokrenuti naredbu `npm run serve`
6. Nakon uspješnog kompajliranja aplikacija je dostupna na adresi `http://localhost:8080`

## Moje lokalno razvojno okruženje

OS: Windows 10 Pro

Node.js: v16.13.0

Vue: 3.2.31

### Dodatne programske biblioteke:
vue-router: 4.0.13

vue-spinner: 1.0.4

vue-sweetalert2: 5.0.2

## Opće informacije i upute za korištenje

- Početna stranica prikazuje popis korisnika koji se dohvaćaju putem MOCK API servisa.
- Stranica se učitava s odmakom od 10 sekundi što simulira sporu vezue ili učitavanje velike količine podataka.
- Za vrijeme učitavanja, korisniku se na početnoj stranici prikazuje animacija s prikladnom porukom.
- Gornji desni dio ekrana naznačava da korisnik inicijalno nije prijavljen.
- Prijava korisnika vrši se duplim klikom zapisa u tablici korisnika (Users). Uspješno će se prijaviti samo korisnik čija email adresa sadrži .net domenu.
- Navigacijski linkovi s lijeve strane ekrana (About me i Admin only) su onemogućeni sve dok se korisnik uspješno ne prijavi. Ne može im se pristupiti niti direktnim unosom url-a u web pregledniku.
- Uspješnom prijavom ime i prezime prijavljenog korisnika pojavljuje se u gornjem desnom kutu ekrana, kao i ikona za odjavu, a linkovi u navigaciji postaju dostupni.
- U slučaju da postoji više korisnika sa .net domenom, prijava sljedećeg je moguća tek kada se prvi odjavi. 
- Za proces prijave i odjave korisnika korišten je local storage. Ti podaci koriste se za prikaz korisničkih podataka na About me stranici (čime se izbježe čekanje ponovnog dohvata podataka koje traje 10 sekundi), te za prikaz korisničkog imena trenutno prijavljenog korisnika.
- Korisniku je u svakom trenutku vizualno naglašeno na kojoj se stranici nalazi, te koji je korisnik trenutno prijavljen, ili nije.
- U slučaju da prijavljeni korisnik osvježi web stranicu, zatvori tab ili ugasi web preklednik, ostat će i dalje prijavljen sve dok se eksplicitno ne odjavi putem linka za odjavu.
- Klikom ikone za odjavu, te nakon potvrde konfirmacijskog dialoga, korisnik se odjavljuje i aplikacija se vraća u inicijalno stanje.

Nije korišten nikakav dodatni UI library, te je izrađen osnovni responsive dizajn.








