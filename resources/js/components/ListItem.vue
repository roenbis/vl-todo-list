<template>
    <div class="item">
        <input type="checkbox" @change="updateCheck()" v-model="item.completed" />
        <span :class="[item.completed ? 'completed' : '', 'itemText']">
      {{ item.name }}
    </span>
        <!-- trashcan or bin -->
        <button @click="removeItem()" class="trashcan">
            <font-awesome-icon icon="trash" />
        </button>
    </div>
</template>
<script>
import { defineComponent } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import axios from 'axios';

export default defineComponent({
    name: 'ListItem',
    components: {
        FontAwesomeIcon,
    },
    props: {
        item: Object,
    },
    methods: {
        updateCheck() {
            axios
                .put('api/item/' + this.item.id, {
                    item: this.item,
                })
                .then((response) => {
                    if (response.status === 200) {
                        this.$emit('itemChanged');
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        removeItem() {
            axios
                .delete('api/item/' + this.item.id)
                .then((response) => {
                    if (response.status === 200) {
                        this.$emit('itemChanged');
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
    computed: {
        itemClasses() {
            return [this.item.completed ? 'completed' : '', 'itemText'];
        },
    },
    style: {
        completed: {
            textDecoration: 'line-through',
            color: '#999',
        },
        itemText: {
            width: '100%',
            marginLeft: '20px',
        },
        item: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        trashcan: {
            background: '#e6e6e6',
            border: 'none',
            color: '#ff0000',
            outline: 'none',
        },
    },
});
</script>
<style scoped>
.completed {
    text-decoration: line-through;
    color: #999;
}

.itemText {
    width: 100%;
    margin-left: 20px;
}

.item {
    display: flex;
    justify-content: center;
    align-items: center;
}

.trashcan {
    background: #e6e6e6;
    border: none;
    color: #ff0000;
    outline: none;
}
</style>
