import Vue from "vue";
import Router from "vue-router";
// Users
import UserIndex from "@/components/Users/Index";
import UserCreate from "@/components/Users/CreateUser";
import UserEdit from "@/components/Users/EditUser";
import UserShow from "@/components/Users/ShowUser";

import PerfumeIndex from "@/components/Perfumes/Index";
import PerfumeShow from "@/components/Perfumes/Showperfume";
import PerfumeEdit from "@/components/Perfumes/Editperfume";
import PerfumeCreate from "@/components/Perfumes/Createperfume";

import Login from "@/components/Login";

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/users",
      name: "users",
      component: UserIndex
    },
    {
      path: "/user/create",
      name: "users-create",
      component: UserCreate
    },
    {
      path: "/user/edit/:userId",
      name: "user-edit",
      component: UserEdit
    },
    {
      path: "/user/:userId",
      name: "user",
      component: UserShow
    },
    {
      path: "/perfumes",
      name: "perfumes",
      component: PerfumeIndex
    },
    {
      path: "/perfume/create",
      name: "perfume-create",
      component: PerfumeCreate
    },
    {
      path: "/perfume/edit/:perfumeId",
      name: "perfume-edit",
      component: PerfumeEdit
    },
    {
      path: "/perfume/:perfumesId",
      name: "perfume",
      component: PerfumeShow
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/login",
      name: "login",
      component: Login
    }
  ]
});