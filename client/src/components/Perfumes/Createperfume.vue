<template>
    <div>
    <div>
      <h1>Create Perfume</h1>
      <form v-on:submit.prevent="createPerfume">
        <p>ชื่อน้ำหอม : <input type="text" v-model="perfume.Perfumename" /></p>
        <p>ยี่ห้อ : <input type="text" v-model="perfume.brand" /></p>
        <p>ประเภท : <input type="text" v-model="perfume.type" /></p>
        <p>ขนาด : <input type="text" v-model="perfume.size" /> ml</p>
        <p>ประเภทกลิ่น : <input type="text" v-model="perfume.scenttype" /></p>
        <p>ประเทศ : <input type="text" v-model="perfume.country" /></p>
        <p>ราคา : <input type="text" v-model="perfume.price" /> บาท</p>
        <p><button type="submit">create perfume</button></p>

      </form>
      </div>
      <hr />
      <div>
        <p>ชื่อน้ำหอม : {{ perfume.Perfumename }}</p>
        <p>ยี่ห้อ : {{ perfume.brand }}</p>
        <p>ประเภท : {{ perfume.type }}</p>
        <p>ขนาด : {{ perfume.size }}</p>
        <p>ประเภทกลิ่น : {{ perfume.scenttype }}</p>
        <p>ประเทศ : {{ perfume.country }}</p>
        <p>ราคา : {{ perfume.price }}</p>

    </div>
  </div>
  </template>
  <script>
  import PerfumesService from "@/services/PerfumesService";
  
  export default {
    data() {
      return {
        perfume: {
          brand:"",
          type:"",
          size:"",
          scenttype:"",
          country:"",
          price:""
        },
      };
    },
    methods: {
      async createPerfume() {
        try {
          await PerfumesService.post(this.perfume);
          this.$router.push({
            name: "perfumes",
          });
        } catch (err) {
          console.log(err);
        }
      },
    },
  };
  </script>
  <style scoped></style>