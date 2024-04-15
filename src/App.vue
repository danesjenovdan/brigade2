<script setup>
import MyHeading1 from "./components/MyHeading1.vue";
import MyHeading2 from "./components/MyHeading2.vue";
import MyParagraph from "./components/MyParagraph.vue";
import PeopleSelector from "./components/PeopleSelector.vue";
import TheChart from "./components/TheChart.vue";
</script>

<template>
  <div>
    <img src="./assets/brigade2-ilustracija-2.jpg" class="w-screen h-auto" />
    <div class="container max-w-4xl mx-auto my-16">
      <MyHeading1>Twitter brigade 2.0</MyHeading1>
      <MyParagraph>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
        consectetur ab ullam rerum fugit possimus repellendus expedita,
        distinctio saepe delectus provident est quae perspiciatis! Nisi impedit
        illum qui asperiores quidem.
      </MyParagraph>
      <MyParagraph>
        Družbeno omrežje Twitter se je odkar smo januarja 2021 njegova lažna
        občinstva prvič preiskovali v okviru projekta Twittter Brigade precej
        spremenilo. Slovenija je v tem času dobila novo vlado, kontroverzno
        omrežje pa novega lastnika in novo ime. Premier Golob in njegova stranka
        Gibanje Svoboda so omrežje kmalu po volitvah protestno zapustili z
        argumentoma, da ga pravzaprav uporablja zelo malo ljudi in da je
        diskurz, ki ga lahko spremljamo na Twitterju ugrabljen s strani določene
        stranke (namig: stranke SDS).
      </MyParagraph>
      <MyParagraph>
        Oboje drži - da Twitter uporablja pravzaprav precej malo Slovencev je
        prvi opozoril podatkovni analitik Marko Plahuta s katerim sodelujemo
        tudi pri tokratnji raziskavi - po njegovih ugotovitvah je namreč na
        slovenskem delu Twitterja aktivnih zgolj 7000 uporabnikov, kar znaša XX
        procentov populacije. Za primerjavo, na Instagramu naj bi bilo XX
        slovencev, na Facebooku XXX. Vendar ta ocena zajema zgolj aktivne
        uporabnike - koliko je še takšnih, ki omrežje redno spremljajo, je težje
        oceniti. Prav tako je za doseg Twitterja pomembno razumeti njegov učinek
        na širši medijski prostor, saj tradicionalni mediji tvite politikov in
        mnenjskih voditeljev redno povzemajo in obravnajo kot novodobne izjave
        za javnost. Še več - mediji pogosto poročajo tudi o besednih spopadih
        med znanimi uporabniki ali kontroverznih ritvitih in s tem utrjujejo
        vlogo omrežje kot de facto “mestnega trga” (town square).
      </MyParagraph>
      <MyParagraph>
        <img src="./assets/brigade2-ilustracija-manjsa-1.jpg" class="w-full" />
      </MyParagraph>
      <MyParagraph>
        V letu 2023 smo pripravljali nadaljevanje naše odmevne raziskave Twitter
        Brigade, ki je razkrila in izpostavila številne lažne profile. Raziskavo
        smo želeli nadgraditi z novimi metodami analiz, ki bi ponudile globlji
        analitični vpogled v manipuliranje z lažnimi profili in umetno
        ustvarjanje kredibilnosti in teže posameznih profilov. Žal pa zaradi
        novo vzpostavljenih omejitev uporabe programskega vmesnika (API) omrežja
        X, ki jih je uvedel njegov lastnik Elon Musk, analiz ni več mogoče
        izvesti in replicirati na način, kot smo ga predvideli.
      </MyParagraph>
      <MyParagraph>
        Kljub temu, da je omrežje X pravzaprav v zatonu, in da se na srečo
        vzpostavljajo bolj digitalno suverene alternative (link na mastodon),
        vseeno objavljamo eno od analiz, ki smo jih pripravili, za katero
        menimo, da bi lahko bila zanima za splošno javnost in raziskovalce
        družabnih omrežji.
      </MyParagraph>
      <MyParagraph>
        <img src="./assets/brigade2-ilustracija-manjsa-2.jpg" class="w-full" />
      </MyParagraph>
      <MyHeading2>Analiza: Čas sledenja</MyHeading2>
      <MyParagraph>
        Število sledilcev je ključen podatek o vplivu oziroma pomembnosti
        Twitter/X profila. Več sledilcev, kot ima profil, večji je videz
        priljubljenosti oziroma zaupanja javnosti. Deluje kot nekakšna
        kvantifikacija kredibilnosti ali ugleda in je eden od najbolj pomembnih
        indikatorjev na družbenih omrežjih.
      </MyParagraph>
      <MyParagraph>
        Podatek o tem, kdaj je posamezni uporabnik posledil drugega uporabnika
        ni javno znan. Je pa pomemben za razumevanje širšega konteksta, kdaj je
        posamezen profil pridobil pozornost javnosti (in s tem nove sledilce).
      </MyParagraph>
      <MyParagraph>
        Twitter/X predstavlja seznam sledilcev posameznega profila v kronološkem
        zaporedju. Tisti profili, ki so bili posledeni najprej, so na dnu,
        tisti, ki so bili nazadnje, so na vrhu. To dejstvo, v kombinaciji z
        javno dostopnim podatkom, kdaj je bil kateri profil ustvarjen, nam
        omogoča, da lahko relativno natančno ocenimo, kdaj je določen profil
        posledil drugega.
      </MyParagraph>
      <MyParagraph>
        METODOLOGIJA ŠE BOLJ PODROBNO MOGOČE CELO SNIPPET FORMULE / KODE?
      </MyParagraph>
      <MyParagraph>
        <div class="font-bold">Primer: distribucija tipičnega uporabnika</div>
        <div>
          Število sledilcev raste linearno skozi čas in je neodvisno od
          političnih dogodkov.
        </div>
      </MyParagraph>
      <div class="bg-yellow py-10 flex items-center justify-center">
        <TheChart selected_username="nmusar" />
      </div>
      <MyParagraph>
        <div class="font-bold">Primer: distribucija atipičnega uporabnika</div>
        <div>Število sledilcev poskoči v določenih obdobjih.</div>
      </MyParagraph>
      <div class="bg-yellow py-10 flex items-center justify-center">
        <TheChart selected_username="tfajon" />
      </div>
      <MyParagraph>
        Na podlagi opisane metodologije smo pripravili izračun časovne
        distribucije sledilcev za 100 slovenskih profilov z visokim številom
        sledilcev. Izbrali smo 20 politikov iz 20 vplivnežev iz vsakega
        političnega pola*, ki imajo največ sledilcev.
      </MyParagraph>
      <PeopleSelector />
    </div>
    <footer class="min-h-60 bg-yellow">
      footer
    </footer>
  </div>
</template>
