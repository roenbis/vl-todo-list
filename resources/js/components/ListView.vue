<template>
    <div>
        <div v-for="(item, index) in items" :key="index">
            <list-item :item="item" class="item" @itemChanged="$emit('reloadList')" />
        </div>
    </div>
</template>
<script>
import ListItem from "./ListItem.vue";

export default {
    name: "ListView",
    components: { ListItem },
    props: ['items']
}
</script>
<style scoped>
.item {
    background: #e6e6e6;
    padding: 5px;
    margin-top: 5px;
}
</style>
