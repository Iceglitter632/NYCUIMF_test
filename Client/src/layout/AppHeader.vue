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
        <!-- <li>
            <router-link to="/textbooks" tag="a" class="nav-link nav-link-icon">
                課本及講義
            </router-link>
        </li> -->
        <base-dropdown tag="li" title="外部連結" >
            <a class="dropdown-item"
             href="https://drive.google.com/drive/u/1/folders/1TZ2EDy5gEzPn-UyiYk_94qrWAxUMAdOp">雲端硬碟</a>
            <a class="dropdown-item" href="https://imf.nctu.edu.tw/">資財系官網</a>
        </base-dropdown>
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
import BaseDropdown from "@/components/BaseDropdown";
import Upload from "./Upload";

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
