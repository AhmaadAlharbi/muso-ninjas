<template>
  <div class="navbar">
    <nav>
      <img src="@/assets/ninja.png" />
      <h1><router-link :to="{ name: 'Home' }">Muso Ninjas</router-link></h1>
      <div class="links">
        <button @click="handleClick">Logout</button>
        <router-link class="btn" :to="{ name: 'Signup' }">Signup</router-link>
        <router-link class="btn" :to="{ name: 'Login' }">Login</router-link>
      </div>
    </nav>
  </div>
</template>
  
  <script>
import { useRouter } from "vue-router";
import useLogout from "../composables/useLogout";
export default {
  setup() {
    const router = useRouter();
    const { error, logout, isPending } = useLogout();
    const handleClick = async () => {
      await logout();
      console.log("logged out");
      router.push({ name: "Home" });
    };
    return { handleClick };
  },
};
</script>
  
  <style scoped>
.navbar {
  padding: 16px 10px;
  margin-bottom: 60px;
  background: white;
}
nav {
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}
nav img {
  max-height: 60px;
}
nav h1 {
  margin-left: 20px;
}
nav .links {
  margin-left: auto;
}
nav .links a,
button {
  margin-left: 16px;
  font-size: 14px;
}
</style>