<template>
<div>
        <div>
        {{comments.content}}
    </div>
    <div>made by : {{comments.author}}</div>
</div>
</template>


<script>
export default {
    name:"commentItem",
    props:["comments"]
}
</script>

<style scoped>

</style>