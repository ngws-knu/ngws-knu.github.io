<template>
  <header class="site-header">
    <router-link to="/" class="logo">
      <img src="@/assets/knu-logo.png" alt="KNU">
    </router-link>

    <nav class="dept-nav">
      <router-link to="/" class="dept">컴퓨터학부</router-link>
      <router-link to="/" class="dept">IT대학</router-link>
    </nav>
  </header>
  <router-view />   
</template>



<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-size: 16px;
}
html,
body {
  height: 100%;
  font-family: "Poppins", sans-serif;
  background-color: #f6f7f9;
}
.container {
  width: 80%;
  margin: 0 auto;
}

.background {
  position: sticky;
  height: 100vh;
  z-index: -100;
  background-color: blue;
}

#nav {
  position: relative;
  z-index: 1;
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  a {
    color: #494949;
    text-decoration: none;
    margin-left: 20px;
    font-size: 16px;
    &:hover {
      text-decoration: underline;
    }
  }

  #logo {
    margin-left: 0;
    margin-right: 20px;
    color: black;
    font-size: 36px;
    font-family: "Shrikhand", cursive;
    text-decoration: none;
  }

  .second-nav {
    a {
      padding: 5px 15px;
      border-radius: 30px;
      background-color: #f6c467;
      text-decoration: none;
      transition: 0.2s ease-in;
      &:hover {
        background-color: #f7ac21;
      }
    }
  }
}

.drop-shadow {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  transition: 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    transform: scale(1.02);
  }
}
</style>

<style scoped>
.site-header{
  display:flex;
  align-items:center;
  gap:2rem;            
  padding:24px 40px;
}
.logo img{
  height: 60px;  
  width:auto;
}
.dept-nav .dept{
  font-size:2.25rem; 
  font-weight:700; 
  color:#222;
  text-decoration:none;
  margin-right:1rem;
}
.dept-nav .dept:hover{
  text-decoration:underline;
}
</style>