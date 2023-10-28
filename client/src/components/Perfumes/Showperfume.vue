<template>
    <div>
      <h1>Get Perfume</h1>
      <p>ชื่อน้ำหอม : {{ perfume.Perfumename }}</p>
        <p>ยี่ห้อ : {{ perfume.brand }}</p>
        <p>ประเภท : {{ perfume.type }}</p>
        <p>ขนาด : {{ perfume.size }}</p>
        <p>ประเภทกลิ่น : {{ perfume.scenttype }}</p>
        <p>ประเทศ : {{ perfume.country }}</p>
        <p>ราคา : {{ perfume.price }}</p>
    </div>
  </template>
  <script>
  import PerfumesService from "@/services/PerfumesService";
  export default {
    data() {
      return {
        perfume: "",
      };
    },
    async created() {
      try {
        let perfumeId = this.$route.params.perfumesId;
        this.perfume = (await PerfumesService.show(perfumeId)).data;
      } catch (error) {
        console.log(error);
      }
    },
  };
  </script>
<style scoped></style>