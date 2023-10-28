<template>
  <div>
    <div>
      <h1>Edit Perfume</h1>
      <form v-on:submit.prevent="editPerfume">
        <p>ชื่อน้ำหอม : <input type="text" v-model="perfume.Perfumename" /></p>
        <p>ยี่ห้อ : <input type="text" v-model="perfume.brand" /></p>
        <p>ประเภท : <input type="text" v-model="perfume.type" /></p>
        <p>ขนาด : <input type="text" v-model="perfume.size" /> ml</p>
        <p>ประเภทกลิ่น : <input type="text" v-model="perfume.scenttype" /></p>
        <p>ประเทศ : <input type="text" v-model="perfume.country" /></p>
        <p>ราคา : <input type="text" v-model="perfume.price" /> บาท</p>
        <p><button type="submit">edit perfume</button></p>
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
    async editPerfume() {
      try {
        await PerfumesService.put(this.perfume);
        this.$router.push({ name: "perfumes" });
      } catch (err) {
        console.log(err);
      }
    },
  },
  async created() {
    try {
      let perfumeId = this.$route.params.perfumeId;
      this.perfume = (await PerfumesService.show(perfumeId)).data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
<style scoped></style>