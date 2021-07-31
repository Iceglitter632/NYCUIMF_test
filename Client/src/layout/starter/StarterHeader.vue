<template>
<div style="position: relative">
<base-nav type="primary" expand>
    <router-link tag="a" to="/" class="navbar-brand">資財考古題系統</router-link>
    <ul class="navbar-nav ml-lg-auto">
        <li>
            <router-link to="/exams" tag="a" class="nav-link nav-link-icon">
                考古題專區
            </router-link>
        </li>
        <li>
            <router-link to="/textbooks" tag="a" class="nav-link nav-link-icon">
                課本及講義
            </router-link>
        </li>
        <li>
            <a class="nav-link nav-link-icon" href="#">
                外部連結
            </a>
        </li>
        <li>
            <a class="nav-link nav-link-icon" href="#">
                登入
            </a>
        </li>
        <li>
            <upload class="nav-link nav-link-icon"></upload>
        </li>
    </ul>
    
 </base-nav>
</div>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import CloseButton from "@/components/CloseButton";
import Upload from "../Upload";
import BaseDropdown from "@/components/BaseDropdown";

export default{
  components: {
    BaseNav,
    CloseButton,
    Upload,
    BaseDropdown,
  },
}
</script>

<style>
.upload{
    font-size: 20px;
    color: #5e72e4;
}
.upload h5{
    margin-right: 3%;
    color: #4d64eb;
}
.header-row {
    padding-top: 2%;
}
</style>
