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
  { userName: "nmusar", displayName: "Nataša predsednica" },
  { userName: "tfajon", displayName: "Tanja ministrica" },
  { userName: "sarecmarjan", displayName: "Marjan minister" },
  { userName: "milijonar", displayName: "Jonas poslanec" },
  { userName: "strankalevica", displayName: "Levica stranka" },
  { userName: "strankaSD", displayName: "Stranka SD" },
  { userName: "MatjaNemec", displayName: "Ni ž-ja za Matjaža" },
  { userName: "ZidanDejan", displayName: "Dejan reče Z namesto Ž" },
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
  const users = matchingUsers.value.slice(0, 5);
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
    class="my-24 bg-yellow pt-10 pb-16 flex flex-col items-center justify-center"
  >
    <div class="flex gap-6 items-center justify-center mb-16">
      <img src="../assets/razisci.svg" alt="" class="w-[120px]" />
      <span class="text-5xl font-bold">Preveri sam_a!</span>
      <img src="../assets/razisci.svg" alt="" class="w-[120px] -scale-x-100" />
    </div>
    <div>
      <div v-for="user in selectedUsers" :key="user.userName" class="relative bg-white p-4 mb-8">
        <div class="text-[1.25rem] leading-normal mb-4">
          <div class="font-bold">
            {{ user.displayName }} (@{{ user.userName }})
          </div>
        </div>
        <div>
          <TheChart :selected_username="user.userName" />
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
        class="flex gap-4 border-current border-2 text-2xl p-5 w-[400px]"
        @click="onAddClick"
        ref="addButton"
      >
        <img src="../assets/dodaj.svg" alt="" class="h-8 aspect-square" />
        <img
          src="../assets/dodaj-text.svg"
          alt="dodaj uporabnika"
          class="h-8"
          aria-label="dodaj uporabnika"
        />
      </button>
      <div class="relative" ref="dropdown" id="selector-dropdown">
        <input
          v-if="inputVisible"
          v-model="inputValue"
          type="text"
          placeholder="Vpiši ime"
          class="border-current border-2 text-2xl p-5 w-[400px] bg-search bg-no-repeat bg-[right_1rem_center] bg-[length:36px]"
          @keydown="onInputKeyDown"
          @blur="onBlur"
        />
        <div
          v-if="inputVisible && displayedUsers.length > 0"
          class="absolute w-full bg-white border-current border-2 -mt-[2px]"
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
              <div class="bg-black w-12 h-12 rounded-full"></div>
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
