<template>
  <div class="hello bg-black-400 mt-6">
    <h1 class="text-gray-600 text-center text-3xl">{{ msg }}</h1>
    <div class="md:container px-2 md:w-2/4 mx-auto">
      <UserInfo />
    </div>
  </div>
</template>

<script>
import UserInfo from './UserInfo'

export default {
  components: {
    UserInfo
  },
  props: {
    msg: String
  },
  
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
