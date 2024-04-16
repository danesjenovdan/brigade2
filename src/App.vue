<script setup>
import MyHeading1 from "./components/MyHeading1.vue";
import MyHeading2 from "./components/MyHeading2.vue";
import MyParagraph from "./components/MyParagraph.vue";
import PeopleSelector from "./components/PeopleSelector.vue";
import TheChart from "./components/TheChart.vue";
</script>

<template>
  <div>
    <img
      src="./assets/brigade2-ilustracija-2.jpg"
      class="w-screen h-auto min-h-[33svh] object-cover object-[35%_center]"
    />
    <div class="container max-w-4xl mx-auto my-16 px-6">
      <MyHeading1>Twitter Brigade: Čas sledenja</MyHeading1>
      <MyParagraph>
        Twitter se je, odkar smo januarja 2021 v okviru projekta Twitter Brigade
        prvič preiskovali njegova lažna občinstva, precej spremenil. Slovenija
        je v tem času dobila novo vlado, kontroverzno družbeno omrežje pa novega
        lastnika in novo ime. Premier Golob in njegova stranka Gibanje Svoboda
        so Twitter kmalu po volitvah sicer
        <a
          href="https://gibanjesvoboda.si/novica/svoboda-zapusca-twitter/"
          target="_blank"
          rel="noopener noreferrer"
          >protestno zapustili</a
        >, kot razlog pa navedli, da ga pravzaprav uporablja zelo malo ljudi in
        da je diskurz, ki ga lahko tam spremljamo, ugrabljen s strani določene
        stranke (beri: stranke SDS).
      </MyParagraph>
      <MyParagraph>
        Oboje drži. Da Twitter uporablja precej malo Slovencev, je prvi opozoril
        podatkovni analitik Marko Plahuta, s katerim sodelujemo tudi pri
        tokratni raziskavi. Po
        <a
          href="https://twitter.com/Virostatiq/status/1587719643288031232"
          target="_blank"
          rel="noopener noreferrer"
          >njegovih ugotovitvah</a
        >
        je namreč na slovenskem delu Twitterja aktivno pisočih zgolj 5000
        uporabnikov, kar znaša zanemarljiv delež populacije. Sodeč po
        <a
          href="https://www.valicon.net/sl/2020/01/uporaba-druzbenih-omrezij-in-storitev-klepeta-v-sloveniji-2018-2019/"
          target="_blank"
          rel="noopener noreferrer"
        >
          raziskavi Valicon</a
        >
        iz leta 2020 naj bi bilo na tem družbenem omrežju sicer 50.000
        slovenskih uporabnikov, medtem ko jih je na Instagramu približno
        300.000, na Facebooku pa skoraj milijon.
      </MyParagraph>
      <MyParagraph>
        A doseg Twitterja moramo razumeti v njegovem širšem učinku na medijski
        prostor. Tradicionalni mediji tvite politikov in mnenjskih voditeljev
        namreč redno povzemajo in obravnavajo kot novodobne izjave za javnost.
        Še več – mediji pogosto poročajo tudi o besednih spopadih med znanimi
        uporabniki ali kontroverznih poobjavah, s čimer utrjujejo vlogo tega
        omrežja kot de facto “mestnega trga”.
      </MyParagraph>
      <MyParagraph>
        V letu 2023 smo zato pripravljali nadaljevanje naše raziskave, ki je
        pred tem razkrila in izpostavila številne lažne profile. Dodati smo
        želeli nove analize, ki bi ponudile globlji analitičen vpogled v
        manipuliranje s tovrstnimi profili ter umetno ustvarjanje
        verodostojnosti in teže posameznih profilov. Žal pa zaradi novo
        vzpostavljenih omejitev uporabe programskega vmesnika (API) omrežja X,
        ki jih je uvedel njegov lastnik Elon Musk, raziskav ni več mogoče
        izvesti in replicirati tako, kot smo predvideli.
      </MyParagraph>
      <MyParagraph>
        In čeprav je omrežje X po nekaterih ocenah pravzaprav v zatonu, na srečo
        pa se vzpostavljajo bolj
        <a
          href="https://mas.to/@danesjenovdan"
          target="_blank"
          rel="noopener noreferrer"
          >digitalno suverene alternative</a
        >, vseeno objavljamo eno od pripravljenih analiz, ki bi utegnila
        zanimati tako splošno javnost kot tudi raziskovalce družbenih omrežij.
      </MyParagraph>
      <div class="-mx-6">
        <img
          src="./assets/brigade2-ilustracija-manjsa-2.jpg"
          class="w-full my-12"
        />
      </div>
      <MyHeading2>Analiza: Čas sledenja</MyHeading2>
      <MyParagraph>
        Število sledilcev je ključen podatek o vplivu in pomembnosti Twitter
        oziroma X profila. Več sledilcev, kot ima, večji je videz
        priljubljenosti in zaupanja javnosti. Ta številka deluje kot nekakšna
        kvantifikacija verodostojnosti ali ugleda in je eden od najpomembnejših
        kazalnikov na družbenih omrežjih.
      </MyParagraph>
      <MyParagraph>
        Podatek o tem, kdaj je posamezni uporabnik začel slediti drugemu
        uporabniku, ni javno znan. Je pa pomemben za razumevanje širšega
        konteksta, saj lahko tako ugotovimo, kdaj so določeni profili pridobili
        nove sledilce (in s tem pozornost javnosti).
      </MyParagraph>
      <MyParagraph>
        Twitter oziroma X seznam sledilcev posameznega profila predstavi v
        kronološkem zaporedju. To pomeni, da so uporabniki, ki so profilu začeli
        slediti najprej, uvrščeni na dno seznama, tisti, ki so mu začeli slediti
        nazadnje, pa so na vrhu. Če ta podatek povežemo z javno dostopnimi
        podatki o času nastanka profilov, lahko sorazmerno natančno ocenimo,
        kdaj je določen profil začel slediti drugemu.
      </MyParagraph>
      <!-- <MyParagraph>
        <div class="text-pink-500 font-bold italic font-mono">
          METODOLOGIJA ŠE BOLJ PODROBNO MOGOČE CELO SNIPPET FORMULE / KODE?
        </div>
      </MyParagraph> -->
      <MyParagraph>
        <div class="font-bold">Primer: distribucija tipičnega uporabnika</div>
        <div>
          Število sledilcev raste linearno skozi čas in je neodvisno od
          političnih dogodkov.
        </div>
      </MyParagraph>
      <div class="bg-yellow p-2 mt-2 -mx-6 flex items-center justify-center">
        <TheChart selected_username="nmusar" />
      </div>
      <MyParagraph>
        <div class="font-bold">Primer: atipična distribucija</div>
        <div>Število sledilcev poskoči v določenih obdobjih.</div>
      </MyParagraph>
      <div class="bg-yellow p-2 mt-2 -mx-6 flex items-center justify-center">
        <TheChart selected_username="tfajon" />
      </div>
      <MyParagraph>
        Na podlagi opisane metodologije smo pripravili izračun časovne
        distribucije sledilcev za 100 pomembnejših slovenskih profilov. Izbrali
        smo 20 politikov in 20 vplivnežev z vsakega političnega pola, ki imajo
        največ sledilcev.
      </MyParagraph>
      <MyParagraph>
        Njihove distribucije si lahko ogledate v spodnjem pregledovalniku.
      </MyParagraph>
      <PeopleSelector />
    </div>
    <footer class="bg-yellow">
      <div class="container max-w-4xl mx-auto mt-16 py-6 flex flex-wrap gap-4 text-sm">
        <div
          class="flex-1 max-sm:basis-full px-6 py-12 text-center bg-white flex gap-2 flex-col items-center justify-center"
        >
          <div>
            Kampanjo smo na
            <a
              href="https://danesjenovdan.si/"
              target="_blank"
              rel="noopener noreferrer"
              >Danes je nov dan</a
            >
            pripravili v sodelovanju z
            <a
              href="https://kontekst.io/"
              target="_blank"
              rel="noopener noreferrer"
              >Markom Plahuto</a
            >.
          </div>
        </div>
        <div
          class="flex-1 max-sm:basis-full px-6 py-4 text-center bg-white flex gap-2 flex-col items-center justify-center"
        >
          <div>Projekt je nastal s podporo</div>
          <div>
            <img src="./assets/nl-embassy.png" alt="Veleposlaništvo Kraljevine Nizozemske" class="h-24 w-auto" />
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
