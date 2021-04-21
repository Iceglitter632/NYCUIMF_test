<template>
<collapse>
    <collapse-item title="大一" name="1">
        <div v-for="(item, index) in courses" :key="index" class="subjects" 
        v-on:click="getCourse(item)">
            <p class="courser">{{item}}</p>
        </div>
    </collapse-item>
    <collapse-item title="大二" name="2">
        <div>
            <p>test</p>
        </div>
    </collapse-item>
    <collapse-item title="大三" name="3">
        <div>
            <p>test</p>
        </div>
    </collapse-item>
    <collapse-item title="大四" name="4">
        <div>
            <p>test</p>
        </div>
    </collapse-item>
    <collapse-item title="其他課程" name="5">
        <div>  
            <p>test</p>
        </div>
    </collapse-item>
</collapse>
</template>

<script>
import Collapse from '../components/Collapse/Collapse.vue';
import CollapseItem from "../components/Collapse/CollapseItem.vue";

export default{
  components: { CollapseItem, Collapse },
  data() {
      return {
          courses: [
          "微積分(甲)",
          "微積分(乙)",
          "會計(一)",
          "經濟學原理(一)",
          "程式設計",
          ]}
    },
    methods: {
        getCourse: function(item){
            this.$emit("clicked", {"tab":0, "choosen":item})
        }
    }

}

</script>

<style scoped>
.subjects {
    padding: 0.3rem;
}

.subjects:hover {
    background-color: #e7e8eb;
}

.courser{
    margin-left: 15px;
    margin-top: auto;
    margin-bottom: auto;
}

</style>