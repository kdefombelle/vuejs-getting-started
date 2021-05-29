<template>
	<div>
    <button @click="sendEvent()">Send Event from Child Component</button>
  </div>
</template>

<script>

export default {
  props: {
    color: {
      type: String,
      required: true,
      validator(value) {
            return ['red', 'blue'].includes(value);
        }
    },
    alignment: {
      type: String,
      required: true,
    }
  },
  data() {
    return { 
      eventCounter: 0,
      };
  },
  methods: {
    sendEvent(){
      this.eventCounter += 1;
      this.$emit('childEvent', this.eventCounter);
    }
  }
};

</script>

<style scoped>
.red div {
  color: red;
}
.blue div {
  color: blue;
}
.centered div {
	text-align: center;
}
.left div {
	text-align: left;
}
</style>