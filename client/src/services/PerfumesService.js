import Api from "@/services/Api";
export default {
  index(search) {
    return Api().get("perfumes");
  },
  show(perfumeId) {
    return Api().get("perfumes/" + perfumeId);
  },
  post(perfume) {
    return Api().post("perfume", perfume);
  },
  put(perfume) {
    return Api().put("perfumes/" + perfume.id, perfume);
  },
  delete(perfume) {
    return Api().delete("perfume/" + perfume.id, perfume);
  },
};