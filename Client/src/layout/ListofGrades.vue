<template>
<tabs class="flex-column flex-md-row">
    <tab-pane key="tab1">
        <template slot="title">
            <i class="fa fa-pencil" aria-hidden="true"></i>
            考古專區
        </template>
        <grades @clicked="returnItem"></grades>
        <!-- <p>arbitrary words</p> -->
    </tab-pane>
    <tab-pane key="tab2">
        <template slot="title">
            <i class="fa fa-sticky-note-o" aria-hidden="true"></i>
            專題心得
        </template>
       <research @clicked="returnItem"></research>
        <!-- <p>words from tab2</p> -->
    </tab-pane>
</tabs>
</template>

<script>
import Tabs from "../components/Tabs/Tabs.vue";
import TabPane from "../components/Tabs/TabPane.vue";
import Grades from "./Grades.vue";
import Research from "./Research.vue";

export default{
    data() {
        return {

        }
    },
    components: {
        Tabs,
        TabPane,
        Grades,
        Research,
    },
    methods: {
        returnItem({tab, choosen}){
            // alert(tab);
            // alert(professor);
            this.$emit("clicked",{"tab":tab, "choosen":choosen});
            // alert(value);\
        }
    }
}
</script>

<style>
</style>