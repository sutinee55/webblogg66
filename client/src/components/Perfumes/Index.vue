<template>
    <div>
      <h2>Get all Perfumes</h2>
      <h4>จํานวนน้ำหอม {{ perfumes.length }}</h4>
      <p>
        <button v-on:click="navigateTo('/perfume/create')">
          สร้างข้อมูลน้ำหอม
        </button>
      </p>
  
      <div v-for="perfume in perfumes" v-bind:key="perfume.id">
        <p>ชื่อน้ำหอม : {{ perfume.Perfumename }}</p>
        <p>ยี่ห้อ : {{ perfume.brand }}</p>
        <p>ประเภท : {{ perfume.type }}</p>
        <p>ขนาด : {{ perfume.size }}</p>
        <p>
          <button v-on:click="navigateTo('/perfume/' + perfume.id)">
            ดูข้อมูลน้ำหอม
          </button>
  
          <button v-on:click="navigateTo('/perfume/edit/' + perfume.id)">
            แก้ไขข้อมูลน้ำหอม
          </button>
  
          <button v-on:click="deletePerfume(perfume)">ลบข้อมูลน้ำหอม</button>
        </p>
        <hr />
      </div>
    </div>
  </template>
  <script>
  import PerfumesService from "@/services/PerfumesService";
  export default {
    data() {
      return {
        perfumes: [],
      };
    },
    async created() {
      try {
        this.perfumes = (await PerfumesService.index()).data;
      } catch (error) {
        console.log(error);
      }
    },
    methods: {
      navigateTo(route) {
        this.$router.push(route);
      },
      async deletePerfume(perfume) {
        let result = confirm("Want of delete?")
        if (result) {
        try {
          await PerfumesService.delete(perfume);
          this.refreshData();
        } catch (err) {
          console.log(err);
        }
      }
      },
      async refreshData() {
        this.perfumes = (await PerfumesService.index()).data;
      },
    },
  };
  </script>
  <style scoped></style>