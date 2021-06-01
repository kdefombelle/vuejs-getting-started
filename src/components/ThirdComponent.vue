<template>
  <div class="content">
    <div v-once>
      <h1>{{ propsMessage }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "ThirdComponent", 
  props: {
    callerMessage: {
      required: true,
      type: String,
    },
    callerId: {
      required: true,
      type: [Number, String], //should accept string as from URL it is coming as String
      validator(value) {
        return Number.isInteger(Number(value)); //check value is a number casting it in Number first
      },
    },
  },
  computed: {
    propsMessage() {
      const {callerMessage, callerId} = this;
      return callerMessage + " - " + callerId;
    }
  },
};
</script>

<style>
</style>
