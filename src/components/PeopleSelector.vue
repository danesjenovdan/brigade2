<script setup>
import { ref, computed, nextTick } from "vue";
import TheChart from "./TheChart.vue";
import MyParagraph from "./MyParagraph.vue";

const dropdown = ref();
const addButton = ref();

const inputVisible = ref(false);
const inputValue = ref("");
const selectedUsers = ref([]);

const users = [
  { userName: "_MegWhite_", displayName: "GeneralAwesomeness" },
  { userName: "007_delic", displayName: "Anuška Delić" },
  { userName: "ABratusek", displayName: "Alenka Bratušek" },
  { userName: "AlenkaJerajSDS", displayName: "Alenka Jeraj" },
  { userName: "aleshojs", displayName: "Aleš Hojs" },
  { userName: "AlesZalar", displayName: "Aleš Zalar" },
  { userName: "AlHarlamov", displayName: "Aljoša Harlamov" },
  { userName: "Andrazus", displayName: "An dr. Až Zorko" },
  { userName: "AndrejDrapal", displayName: "Andrej Drapal" },
  { userName: "AnzeLog", displayName: "Anže Logar" },
  { userName: "APivec", displayName: "Aleksandra Pivec" },
  { userName: "BandelliMarko", displayName: "MARKO BANDELLI" },
  { userName: "Bodem43", displayName: "Božo Simonič" },
  { userName: "BojanPozar", displayName: "Bojan Požar" },
  { userName: "BorutPahor", displayName: "Borut Pahor" },
  { userName: "BrankoGrims1", displayName: "Branko Grims" },
  { userName: "Bulc_EU", displayName: "Violeta Bulc" },
  { userName: "crnkovic", displayName: "Marko Crnkovič" },
  { userName: "D_Jasmina", displayName: "Jasmina Držanič" },
  { userName: "DC43", displayName: "NATAŠA BRIŠKI" },
  { userName: "DominikaSvarc", displayName: "Dominika Švarc Pipan" },
  { userName: "drfilomena", displayName: "Alenka Unk" },
  { userName: "drVinkoGorenak", displayName: "dr. Vinko Gorenak" },
  { userName: "EdvardKadic", displayName: "Edvard Kadič" },
  { userName: "emilija_st", displayName: "Emilija Stojmenova Duh" },
  { userName: "ErikaPlaninsec", displayName: "Erika Planinšec" },
  { userName: "EvaIrglL", displayName: "Eva Irgl" },
  { userName: "FranciKek", displayName: "Franci Kek" },
  { userName: "Gibanje_Svoboda", displayName: "Gibanje Svoboda" },
  { userName: "gregarepovz", displayName: "Grega Repovž" },
  { userName: "IphigenieNoemi", displayName: "Iphigénie Noëmi" },
  { userName: "IPirkovic", displayName: "Igor Pirkovič" },
  { userName: "JanezLenarcic", displayName: "Janez Lenarčič" },
  { userName: "JaniModern", displayName: "Inaj" },
  { userName: "jdamijan", displayName: "Joze P. Damijan" },
  { userName: "jelka_godec", displayName: "Jelka Godec" },
  { userName: "JernejVrtovec", displayName: "Jernej Vrtovec" },
  { userName: "JJansaSDS", displayName: "Janez Janša" },
  { userName: "JozeBiscak", displayName: "Joze Biscak" },
  { userName: "JozeMozina", displayName: "Jože Možina" },
  { userName: "KanglerFranc", displayName: "Franc Kangler" },
  { userName: "KatarinaJenko", displayName: "Katarina Jenko" },
  { userName: "kjaklic", displayName: "Klemen Jaklič" },
  { userName: "Konkretno_", displayName: "Stranka Konkretno" },
  { userName: "KopacAnja", displayName: "Dr. Anja Kopač" },
  { userName: "LahovnikMatej", displayName: "Matej Lahovnik" },
  { userName: "Libertarec", displayName: "Libertarec" },
  { userName: "llisjak", displayName: "Luka Lisjak" },
  { userName: "lojzepeterle", displayName: "Lojze Peterle" },
  { userName: "LukaMesec", displayName: "Luka Mesec" },
  { userName: "m_bostjan", displayName: "Boštjan M. Turk" },
  { userName: "MajdaSirca", displayName: "Majda Širca" },
  { userName: "Matej_Klaric", displayName: "Matej Klarič" },
  { userName: "MatejSpehar", displayName: "Matej Špehar" },
  { userName: "MatejTonin", displayName: "Matej Tonin" },
  { userName: "MatevzNovak", displayName: "legionar" },
  { userName: "MatjaNemec", displayName: "Matjaž Nemec" },
  { userName: "MilanZver", displayName: "Milan Zver" },
  { userName: "milijonar", displayName: "Jonas" },
  { userName: "Mirko_Mayer", displayName: "Mirko Mayer" },
  { userName: "MiroCerar", displayName: "dr. Miro Cerar" },
  { userName: "MitjaIrsic", displayName: "Mitja Irsic" },
  { userName: "mojcav1", displayName: "Mojca Vočko" },
  { userName: "NeMaramButlov", displayName: "Boris Tomašič" },
  { userName: "NeuroVirtu", displayName: "Sebastjan Jeretič" },
  { userName: "ninagaspari", displayName: "Nina Gaspari" },
  { userName: "nmusar", displayName: "Nataša Pirc Musar" },
  { userName: "NovaSlovenija", displayName: "NSi" },
  { userName: "NovicaMihajlo", displayName: "Novica Mihajlović" },
  { userName: "p_zoran", displayName: "zoran p" },
  { userName: "pengovsky", displayName: "pengovsky" },
  { userName: "pers_luka", displayName: "Perš Luka Perš" },
  { userName: "Pertinacal", displayName: "Aljuš Pertinač" },
  { userName: "peterjancic", displayName: "peter jancic" },
  { userName: "petra_jansa", displayName: "Petra Janša" },
  { userName: "petrasovdat", displayName: "petra sovdat" },
  { userName: "PGantar", displayName: "Pavel Gantar" },
  { userName: "PocivalsekZ", displayName: "Zdravko Počivalšek" },
  { userName: "praprotnix", displayName: "Matej Praprotnik" },
  { userName: "PreglArjan", displayName: "Arjan Pregl" },
  { userName: "RomanaTomc", displayName: "Romana Tomc" },
  { userName: "RomanJakic", displayName: "Roman Jakič" },
  { userName: "RomanVodeb", displayName: "Roman Vodeb" },
  { userName: "sarecmarjan", displayName: "Marjan Šarec" },
  { userName: "SBobovnik", displayName: "Slavko Bobovnik" },
  { userName: "steinbuch", displayName: "Dejan Steinbuch" },
  { userName: "strankalevica", displayName: "Levica" },
  { userName: "strankaSD", displayName: "Socialni demokrati" },
  { userName: "strankaSDS", displayName: "SDS" },
  { userName: "tamaravonta", displayName: "Tamara" },
  { userName: "tfajon", displayName: "Tanja Fajon" },
  { userName: "TinoMamic", displayName: "Tino Mamić" },
  { userName: "vanfranco", displayName: "Sebastjan ₳rtič" },
  { userName: "vinkovasle1", displayName: "vinko vasle novinar" },
  { userName: "ZanMahnic", displayName: "Žan Mahnič" },
  { userName: "ZaresGregor", displayName: "Gregor Golobič" },
  { userName: "ZidanDejan", displayName: "Dejan Židan" },
  { userName: "ZigaTurk", displayName: "Žiga Turk" },
  { userName: "ZmagoPlemeniti", displayName: "Zmago J. Plemeniti" },
  { userName: "zofijamazej", displayName: "Zofija Mazej Kukovič" },
];

const matchingUsers = computed(() => {
  const searchString = inputValue.value.toLowerCase();
  const remainingUsers = users.filter(
    (user) => !selectedUsers.value.includes(user)
  );
  return remainingUsers.filter(
    (user) =>
      user.displayName.toLowerCase().includes(searchString) ||
      user.userName.toLowerCase().includes(searchString)
  );
});

const displayedUsers = computed(() => {
  if (inputValue.value === "") {
    return [];
  }
  const users = matchingUsers.value;
  users.forEach((user) => {
    const displayName = user.displayName;
    const userName = user.userName;
    const boldedDisplayName = displayName.replace(
      new RegExp(inputValue.value, "gi"),
      (match) => `<b>${match}</b>`
    );
    const boldedUserName = userName.replace(
      new RegExp(inputValue.value, "gi"),
      (match) => `<b>${match}</b>`
    );
    user.boldedDisplayName = boldedDisplayName;
    user.boldedUserName = boldedUserName;
  });
  return users;
});

const onAddClick = () => {
  inputValue.value = "";
  inputVisible.value = true;
  nextTick(() => {
    dropdown.value.querySelector("input").focus();
  });
};

const onBlur = (event) => {
  if (
    event.relatedTarget &&
    event.relatedTarget.closest("#selector-dropdown") &&
    (event.relatedTarget.tagName === "BUTTON" ||
      event.relatedTarget.tagName === "INPUT")
  ) {
    return;
  }
  inputValue.value = "";
  inputVisible.value = false;
};

const onInputKeyDown = (event) => {
  if (event.key === "Escape") {
    inputValue.value = "";
    inputVisible.value = false;
    return;
  }
  if (event.key === "Enter") {
    if (document.activeElement.tagName === "INPUT") {
      const dropdownItems = dropdown.value.querySelectorAll("button");
      if (dropdownItems.length === 0) {
        return;
      }
      dropdownItems[0].click();
      return;
    }
    return;
  }
  if (event.key === "ArrowDown") {
    event.preventDefault();
    const dropdownItems = dropdown.value.querySelectorAll("button");
    if (dropdownItems.length === 0) {
      return;
    }
    const currentIndex = Array.from(dropdownItems).findIndex(
      (item) => item === document.activeElement
    );
    let nextIndex = currentIndex + 1;
    if (nextIndex === dropdownItems.length) {
      dropdown.value.querySelector("input").focus();
      return;
    }
    nextIndex = nextIndex % dropdownItems.length;
    dropdownItems[nextIndex].focus();
  }
  if (event.key === "ArrowUp") {
    event.preventDefault();
    const dropdownItems = dropdown.value.querySelectorAll("button");
    if (dropdownItems.length === 0) {
      return;
    }
    const currentIndex = Array.from(dropdownItems).findIndex(
      (item) => item === document.activeElement
    );
    let previousIndex = currentIndex - 1;
    if (previousIndex === -1) {
      dropdown.value.querySelector("input").focus();
      return;
    }
    if (currentIndex === -1) {
      previousIndex = dropdownItems.length - 1;
    }
    if (previousIndex < 0) {
      previousIndex += dropdownItems.length;
    }
    previousIndex = previousIndex % dropdownItems.length;
    dropdownItems[previousIndex].focus();
    return;
  }
};

const onUserClick = (user) => {
  const userNames = selectedUsers.value.map((user) => user.userName);
  if (!userNames.includes(user.userName)) {
    selectedUsers.value.push(user);
  }
  inputValue.value = "";
  inputVisible.value = false;
};

const removeSelectedUser = (user) => {
  selectedUsers.value = selectedUsers.value.filter(
    (selectedUser) => selectedUser !== user
  );
};
</script>

<template>
  <div
    class="my-24 -mx-6 bg-yellow py-16 flex flex-col items-center justify-center"
  >
    <div class="flex gap-6 items-center justify-center mb-16">
      <img
        src="../assets/razisci.svg"
        alt=""
        class="w-[120px] max-sm:w-[90px]"
      />
      <span class="text-5xl font-bold text-center max-sm:text-3xl"
        >Preveri sam_a!</span
      >
      <img
        src="../assets/razisci.svg"
        alt=""
        class="w-[120px] max-sm:w-[90px] -scale-x-100"
      />
    </div>
    <div class="w-full px-2">
      <div
        v-for="user in selectedUsers"
        :key="user.userName"
        class="relative bg-white mb-8 w-full"
      >
        <div class="text-[1.25rem] leading-normal mb-4 px-4 pt-2">
          <div class="font-bold">
            {{ user.displayName }} (<a
              :href="`https://twitter.com/${user.userName}`"
              target="_blank"
              rel="noopener noreferrer"
              >@{{ user.userName }}</a
            >)
          </div>
        </div>
        <div class="flex items-center justify-center">
          <TheChart :selected_username="user.userName.toLowerCase()" />
          <button
            type="button"
            class="absolute top-0 right-0 flex justify-center items-center w-7 aspect-square rounded-full bg-black translate-x-1/2 -translate-y-1/2"
            @click="removeSelectedUser(user)"
          >
            <img
              src="../assets/dodaj.svg"
              alt=""
              class="w-5 -rotate-45 invert"
            />
          </button>
        </div>
      </div>
    </div>
    <div class="mt-4">
      <button
        v-if="!inputVisible"
        type="button"
        class="flex gap-4 border-current border-2 text-2xl p-5 w-[400px] max-sm:w-[230px]"
        @click="onAddClick"
        ref="addButton"
      >
        <img
          src="../assets/dodaj.svg"
          alt=""
          class="h-8 aspect-square max-sm:h-4"
        />
        <img
          src="../assets/dodaj-text.svg"
          alt="dodaj uporabnika"
          class="h-8 max-sm:h-4"
          aria-label="dodaj uporabnika"
        />
      </button>
      <div class="relative" ref="dropdown" id="selector-dropdown">
        <input
          v-if="inputVisible"
          v-model="inputValue"
          type="text"
          placeholder="Vpiši ime"
          class="border-current border-2 text-2xl max-sm:text-lg p-5 max-sm:py-3 w-[400px] max-sm:w-[230px] bg-search bg-no-repeat bg-[right_1rem_center] bg-[length:36px]"
          @keydown="onInputKeyDown"
          @blur="onBlur"
        />
        <div
          v-if="inputVisible && displayedUsers.length > 0"
          class="absolute w-full bg-white border-current border-2 -mt-[2px] max-h-80 overflow-y-auto"
        >
          <button
            v-for="user in displayedUsers"
            :key="user.userName"
            type="button"
            class="w-full flex gap-4 items-center border-current border-y-2 px-5 py-3 -mt-[2px] last:-mb-[2px] text-left"
            @keydown="onInputKeyDown"
            @click="onUserClick(user)"
            @blur="onBlur"
          >
            <div>
              <div class="bg-black w-12 h-12 rounded-full overflow-hidden">
                <img :src="`/avatars/${user.userName}.jpg`" :alt="`${user.userName} avatar`">
              </div>
            </div>
            <div class="flex flex-col leading-tight text-lg">
              <span>@<span v-html="user.boldedUserName"></span></span>
              <span v-html="user.boldedDisplayName"></span>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
