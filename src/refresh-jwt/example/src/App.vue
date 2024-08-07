<script setup lang="ts">
import { ref } from "vue";
import { getList, login } from "./api";
import { RespStatus, StorageKey } from "./constants";
import { List } from "./api/type";

const msg = ref("");
const list = ref<List[]>();

async function handleLogin() {
  resetData();

  const res = await login();
  if (res.status === RespStatus.SUCCESS) {
    localStorage.setItem(StorageKey.TOKEN, res.token);
    localStorage.setItem(StorageKey.REFRESH_TOKEN, res.refresh_token);
  }

  msg.value = res.message;
}

async function search() {
  resetData();

  const res = await getList();
  if (res.status === RespStatus.SUCCESS) {
    list.value = res.list;
  } else {
    list.value = [];
  }

  msg.value = res.message;
}

function resetData() {
  msg.value = "";
  list.value = [];
}
</script>

<template>
  <div>
    <button @click="handleLogin">login</button>
    <button @click="search">search</button>
  </div>
  <div>
    {{ msg }}
  </div>
  <ul>
    <li v-for="item in list">{{ item.goods }} - {{ item.price }}</li>
  </ul>
</template>
