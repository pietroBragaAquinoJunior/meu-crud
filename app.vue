<template>
  <div>
    <header>
      <div class="header-container">
        <h1>This is the Header</h1>
        <nav>
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/about">About</NuxtLink>
          <NuxtLink to="/user">User</NuxtLink>
        </nav>
      </div>
    </header>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
    <footer>
      <p>This is the Footer</p>
    </footer>
  </div>
</template>

<script>
export default {
  // Você pode adicionar lógica global aqui
}
</script>

<style>

header {
  display: flex;
  justify-content: center;
  background-color: #f8f9fa;
  padding-bottom: 20px;
}

.header-container{
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: center;
}

nav{
  display: flex;
  justify-content: center;
  gap: 20px;
}

footer {
  text-align: center;
  padding: 10px;
  background-color: #f8f9fa;
}
</style>
