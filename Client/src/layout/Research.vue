<template>
<div id="container">
    <div v-for="(p, index) in professors" :key="index" class="professor" 
    id=p v-on:click="getProfessor(p)">
        <p class="pro">{{p}}</p>
    </div>
</div>

</template>

<script>
import Collapse from '../components/Collapse/Collapse.vue';
import CollapseItem from "../components/Collapse/CollapseItem.vue";

export default{
  components: { CollapseItem, Collapse },
  data(){
      return {
          professors: [
              "黃思皓",
              "游家牧",
              "鄧惠文",
              "林瑞嘉",
              "郭家豪",
              "黃星華",
              "李漢星",
              "林智勇",
              "黃宜侯",
              "葉銀華",
              "謝文良",
              "戴天時",
              "鍾惠民",
              "梁婉麗",
            ],
        }
    },
  methods: {
        getProfessor: function(p){
            // alert(p);
            this.$emit("clicked", {"tab":1, "choosen":p})
        }
    }
}

</script>

<style scoped>
.professor {
    cursor: pointer;
    margin: auto;
    border: 1px solid rgb(234, 237, 239);
    border-radius: 10px;
    padding: 10px;
    box-shadow: 3px 3px 10px rgba(234, 237, 239 .5);
    text-align: center;
    background-color: rgb(246, 249, 252);
}
.professor:hover {
    background-color: #e7e8eb;
}

.pro {
    margin: auto;
}

</style>