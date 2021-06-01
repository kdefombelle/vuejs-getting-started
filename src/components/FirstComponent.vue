<template>
  <div class="content">
    <div v-once><h1>{{ pageTitle }}</h1></div>
		<div class="top">
			<h2>Core Directives</h2>
      <button @click="toggleDisplay()">@click to toggle display</button>
      <br/><br/>
      <div>
        <span v-if="display">Conditional display with <b>v-if</b></span>
        <br/>
        <span v-show="display">Conditional  with <b>v-show</b></span> 
        <br/>
      </div>
      <br/>
      <div>
        <div><b>v-for</b> example</div>
        <table>
            <tr>
              <th>index</th>
              <th>value</th>
            </tr>
            <tr v-for="(element, index) in collection" :key="index">
              <td>{{ index }}</td>
              <td>{{ element }}</td>
            </tr>
        </table>
      </div>
		</div>
		<div class="middle">
      <h2>Child Component</h2>
      <select v-model="selectedColor">
        <option disabled value="">Please select one color</option>
        <option>red</option>
        <option>green</option>
      </select>
      <br/><br/>
			<ChildComponent :color="selectedColor" alignment="center" @childEvent="v => childCounter=v"/>
      <br/>
      <div >Click number <b>{{ childCounter }}</b></div>
		</div>
		<div class="bottom">
      <div><h2>Style Examples</h2></div>
      <button @click="toggleColors()">Toggle borders</button>
			<div :style="borderCssStyle">title <code>:style</code></div>
			<div :style="[borderCssStyle, 'custom-title']">title <code>:style</code> array</div>
			<div :class="{'green-border': green}">title <code>:class</code></div>
			<div :class="[borderCssClass, 'custom-title']">title <code>:class</code> array</div>
		</div>
	</div>
</template>

<script>
import ChildComponent from './ChildComponent.vue'
import HelperMixin from './HelperMixin'

function functionX(v) {
	console.log("functionX: " + v);
}

export default {
  name: "FirstComponent", //best practice: a 2 words name
  created() { //cf. lifecycle diagram https://vuejs.org/v2/guide/instance.html
    console.log('Component created');
  },
  components: {ChildComponent},
  data() { //note data() is a function
    return {
      pageTitle: "FirstComponent",
      childCounter: 0,
      display: true,
      collection: ['element1','element2'],
      selectedColor: "green",
      green: true,
    };
  },
  mixins: [HelperMixin],
  computed: {
      borderCssStyle() {
        return { 
          border: this.green ? 
            '1px solid '+this.selectedColor : 
            '',
        };
      },
      borderCssClass() {
        return this.green ? this.selectedColor+'-border' : '';
      },
  },
  methods: {
    toggleDisplay() {
      functionX("toggleDisplay");
      this.display = ! this.display;
    },
    toggleColors() {
      functionX("toggleColors");
      this.green = ! this.green;
    },
  }
};
</script>



/* scope your style to be applied only in current component */
/* You can use SAAS simply adding lang attribute */
<style scoped>
.content {
  background: linear-gradient(to bottom, white, #226974);
  background-attachment: fixed;
}
button{
  color: white;
  background-color: green;
}
.top {
  align-content: center;
}
.custom-title {
  font-style: italic;
}
.green-border {
  border: 1px solid darkgreen;
}
.red-border {
  border: 1px solid red;
}
table {
  border: 1px solid black;
  display: inline-table;
}
</style>
