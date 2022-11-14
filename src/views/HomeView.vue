<template>
  <div class="container">
    <div>
      <h1 class="titleName">{{ data?.workerName }}</h1>
    </div>
    <div>
      <div class="inputWrapper">
        <input
          v-model="donutSum"
          type="number"
          min="0"
          oninput="validity.valid||(value='');"
          placeholder="введите сумму чаевых"
        />
        <span class="error" v-if="error">введите сумму</span>
      </div>
      <button class="mainBtn btnPos" @click="paymentHendler">
        отправить чаевые
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  GetInfoRequest,
  CreatePaymentRequest,
} from "../lib/proto/acquiring_donut_pb";
import { acquiringClient } from "../lib/client";
import { ref } from "vue";
let error = ref(false);
let data = ref();
let donutSum = ref();
const params = {
  workerId: 1,
  groupServiceId: 3,
  hash: "8930271e",
};

const loadData = () => {
  const request = new GetInfoRequest()
    .setWorkerId(params.workerId)
    .setGroupServiceId(params.groupServiceId)
    .setHash(params.hash);

  acquiringClient
    .getInfo(request, null)
    .then((result) => {
      data.value = result.toObject();
    })
    .catch((e) => {
      console.log(e);
    });
};

function paymentHendler() {
  const request = new CreatePaymentRequest()
    .setWorkerId(params.workerId)
    .setGroupServiceId(params.groupServiceId)
    .setHash(params.hash)
    .setAmount(donutSum.value);

  acquiringClient
    .createPayment(request, null)
    .then((result) => {
      window.location.href = result.toObject().formUrl;
    })
    .catch((e) => {
      error.value = true;
    });
}
loadData();
</script>
