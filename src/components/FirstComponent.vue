<template>
  <div class="content">
		<div class="top">
			<div v-once><h2>{{ pageTitle }}</h2></div>
			<div>{{ computedGetter.computedAttribute1 }}</div>
      <br/>
			<span v-if="display">Conditional display with <b>v-if</b></span>
      <br/>
			<span v-show="display">Conditional  with <b>v-show</b></span>
      <br/>
      <br/>
			<button @click="toggleDisplay()">@click to toggle display </button>
      <br/>
      <br/>
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
      <br/>
      <br/>
		</div>
		<div class="bottom">
      <div><h2>Child Component Section</h2></div>
			<ChildComponent :color="childColor" alignment="center" @childEvent="v => attribute1=v"/>
      <div >Click number{{ attribute1 }}</div>
		</div>
		<div class="bottom">
      <div><h2>Style Examples</h2></div>
			<div :style="borderStyle">title :style</div>
			<div :style="[borderStyle, custom-title]">title :style array</div>
			<div :class="{'red-border': display}">title :class</div>
			<div :class="[borderCssClass, 'custom-title']">title :class array</div>
		</div>
	</div>
</template>

<script>
import ChildComponent from './ChildComponent.vue'
import HelperMixin from './HelperMixin.js'

function functionX(v) {
	console.log("functionX: "+v);
}

export default {
  name: "FirstComponent", //best practice: a 2 words name
  created() { //cf. lifecycle diagram https://vuejs.org/v2/guide/instance.html
    console.log('Component created');
  },
  components: {ChildComponent},
  data() { //note data() is a function
    return {
      pageTitle: "This is FirstComponent Page Title",
      attribute1: 0,
      computedAttribute1: "test computed attribute",
      display: true,
      collection: ['element1','element2'],
      childColor: "red",
    };
  },
  mixin: [HelperMixin],
  computed: {
       computedGetter: function(){
           return this.computedAttribute1 + " computed suffix";
       }
  },
  methods: {
    setAttribute1(v) {
      console.log('V :: '+v);
      this.attribute1 = v;
    },
    toggleDisplay() {
      functionX("method1");
      this.display = ! this.display;
      this.childColor = "blue";
    },
    borderStyle() {
      return {border: this.display ? '1px solid red' : '1px solid blue'}
    },
    borderCssClass() {
      return {border: this.display ? 'red-border' : ''}
    },
  }
};
</script>

/* global styles, usually only in App.vue only */
<style> 
button{
  color: white;
  background-color: green;
}
</style>

/* scope your style to be applied only in current component */
/* You can use SAAS simply adding lang attribute */
<style scoped>
.content {
  align-content: center;
  background: linear-gradient(to bottom,white, rgb(203, 235, 203));
}
.top {
  align-content: center;
}
.custom-title {
  text-align: center;
}
.red-border {
  border: 1px solid red;
}
table {
  border: 1px solid blue;
  display: inline-table;
}
</style>
