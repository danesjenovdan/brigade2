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
        <TheChart selected_username="_megwhite_" />
      </div>
      <MyParagraph>
        <div class="font-bold">Primer: atipična distribucija</div>
        <div>Število sledilcev poskoči v določenih obdobjih.</div>
      </MyParagraph>
      <div class="bg-yellow p-2 mt-2 -mx-6 flex items-center justify-center">
        <TheChart selected_username="zigaturk" />
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
    <div>
      <div
        class="container max-w-4xl mx-auto mt-16 py-6 flex flex-wrap gap-4 text-sm"
      >
        <div
          class="flex-1 max-sm:basis-full p-6 pb-8 text-center bg-yellow flex gap-2 flex-col items-center justify-center"
        >
          <div class="text-2xl font-bold">Povej naprej!</div>
          <div class="flex gap-4 mt-4">
            <a
              href="https://twitter.com/intent/tweet?text=Preberi%20analizo%20Twitter%20Brigade%3A%20%C4%8Cas%20sledenja%20https%3A%2F%2Fbrigade-cas-sledenja.djnd.si%2F"
              target="_blank"
              rel="noopener noreferrer"
              class="block p-2 hover:bg-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1400 1400"
                class="w-12"
              >
                <path
                  d="M108 0A108 108 0 0 0 0 108v1184a108 108 0 0 0 108 108h1184a108 108 0 0 0 108-108V108A108 108 0 0 0 1292 0H108zm81.5 189.5h304.027l263.596 375.38 330.031-375.38h90.07L797.134 621.824h-.022L1210.5 1210.5H906.473L628.098 814.086 279.574 1210.5H189.5l398.61-453.357L189.5 189.5zm122.53 66.348 321.347 449.771 40.387 56.524v.021l275.084 385.004h138.35l-337.1-471.816-40.389-56.524-259.33-362.98h-138.35z"
                />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fbrigade-cas-sledenja.djnd.si%2F"
              target="_blank"
              rel="noopener noreferrer"
              class="block p-2 hover:bg-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 666.667 664.225"
                class="w-12"
              >
                <path
                  d="M666.667 333.333C666.667 149.24 517.428 0 333.333 0 149.24 0 0 149.239 0 333.333 0 489.66 107.62 620.83 252.808 656.851V435.195h-68.736V333.333h68.736v-43.892c0-113.456 51.344-166.042 162.73-166.042 21.118 0 57.557 4.14 72.463 8.281v92.339c-7.868-.828-21.532-1.243-38.509-1.243-54.657 0-75.776 20.704-75.776 74.533v36.024h108.879L463.89 435.195h-90.175v229.03c165.048-19.934 292.95-160.468 292.95-330.892"
                />
              </svg>
            </a>
            <a
              href="mailto:?subject=Twitter%20Brigade%3A%20%C4%8Cas%20sledenja&body=Preberi%20analizo%20Twitter%20Brigade%3A%20%C4%8Cas%20sledenja%20https%3A%2F%2Fbrigade-cas-sledenja.djnd.si%2F"
              target="_blank"
              rel="noopener noreferrer"
              class="block p-2 hover:bg-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="w-12"
              >
                <path
                  d="m3 7.921 8.427 5.899c.34.235.795.246 1.147 0L21 7.921V18c0 .272-.11.521-.295.705S20.272 19 20 19H4c-.272 0-.521-.11-.705-.295S3 18.272 3 18zM1 5.983V18c0 .828.34 1.579.88 2.12S3.172 21 4 21h16c.828 0 1.579-.34 2.12-.88S23 18.828 23 18V5.982a2.995 2.995 0 0 0-.88-2.102A2.998 2.998 0 0 0 20 3H4c-.828 0-1.579.34-2.12.88A2.995 2.995 0 0 0 1 5.983zm19.894-.429L12 11.779 3.106 5.554a.999.999 0 0 1 .188-.259A.994.994 0 0 1 4 5h16a1.016 1.016 0 0 1 .893.554z"
                />
              </svg>
            </a>
          </div>
        </div>
        <div
          class="flex-1 max-sm:basis-full p-6 pb-8 text-center bg-yellow flex gap-2 flex-col items-center justify-center"
        >
          <div class="text-2xl font-bold">Podpri nas!</div>
          <div class="mt-4">
            <a
              href="https://danesjenovdan.si/doniraj"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center border-2 border-black text-3xl font-bold text-black uppercase italic px-4 py-3 leading-none no-underline hover:bg-white"
            >
              Doniraj
              <img src="./assets/heart.png" alt="" class="h-8 ml-4">
            </a>
          </div>
        </div>
      </div>
    </div>
    <footer class="bg-yellow">
      <div
        class="container max-w-4xl mx-auto py-6 flex flex-wrap gap-4 text-sm"
      >
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
            <img
              src="./assets/nl-embassy.png"
              alt="Veleposlaništvo Kraljevine Nizozemske"
              class="h-24 w-auto"
            />
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
