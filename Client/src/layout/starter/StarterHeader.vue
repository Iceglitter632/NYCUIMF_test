<template>
    <header class="header-global">
        <div class="row header-row">
            <div class="title col-md-8">
                <h5 class="display-4" href="#"><u>交大資財考古題系統</u></h5>
            </div>
            <div class="col-md-3" style="text-align:right; font-size:20px; color:#5e72e4;">
                <upload></upload>
            </div>
            <!-- <div class="col-md-3 upload"><span>上傳檔案</span></div> -->
        </div>
    </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import CloseButton from "@/components/CloseButton";
import Upload from "../Upload";

export default{
  components: {
    BaseNav,
    CloseButton,
    Upload
  }
};
</script>

<style>
.title {
    margin-left: 2%;
}
.header-row {
    padding-top: 2%;
}
</style>
