<template>
    <div className="add-item">
        <input type="text" v-model="item.name"/>
        <font-awesome-icon
            icon="plus-square"
            @click="addItem"
            :class="[item.name ? 'active' : 'inactive', 'plus']"
        />
    </div>
</template>
<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
    name: "AddItemForm",
    components: {FontAwesomeIcon},
    data() {
        return {
            item: {
                name: "",
            },
        };
    },
    methods: {
        addItem() {
            if (this.item.name == "") {
                return;
            }

            axios
                .post("api/item/store/", {
                    item: this.item,
                })
                .then((response) => {
                    if (response.status == 201) {
                        this.item.name = "";
                        this.$emit("reloadList");
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
};
</script>
<style scoped>
.add-item {
    display: flex;
    justify-content: center;
    align-items: center;
}

input {
    background: #f7f7f7;
    border: 0;
    outline: none;
    padding: 5px;
    margin-right: 10px;
    width: 100%;
}

.plus {
    font-size: 20px;
}

.active {
    color: #00ce25;
}

.inactive {
    color: #999;
}
</style>
