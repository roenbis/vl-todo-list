<template>
    <div class="container">
        <div class="heading">
            <h2 id="title">Todo List</h2>
            <AddItemForm @reloadList="getList" />
        </div>
        <ListView :items="items" @reloadList="getList" />
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import AddItemForm from './components/AddItemForm.vue';
import ListView from './components/ListView.vue';
import axios from 'axios';

export default {
    name: 'App',
    components: { ListView, AddItemForm },
    setup() {
        const items = ref([]);

        const getList = () => {
            axios
                .get('api/items')
                .then(response => {
                    items.value = response.data;
                })
                .catch(error => {
                    console.log(error);
                });
        };

        onMounted(getList);

        return { items, getList };
    },
};
</script>

<style scoped>
.container {
    width: 350px;
    margin: auto;
}

.heading {
    background: #e6e6e6;
    padding: 10px;
}

#title {
    text-align: center;
}
</style>
