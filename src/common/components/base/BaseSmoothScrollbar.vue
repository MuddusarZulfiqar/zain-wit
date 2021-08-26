<template>
    <div class="scrollArea">
         <scrollbar :maxHeight="height"  >
               <slot />
          </scrollbar>
    </div>
</template>

<script>
export default {
     props:{
          height:String
     }
}
</script>