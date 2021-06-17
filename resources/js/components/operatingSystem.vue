<template>
    <div class="col-6 mb-2">
        <div class="card">
            <div class="card-header">
                Operating Servers
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-4">OS:</div>
                    <div class="col-8">
                        <vue-select :clearable="false" v-model="operatingSystem" :options="operatingSystems"
                                    label="name"></vue-select>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import "vue-select/dist/vue-select.css";

export default {
    name: "operatingSystem",
    props: ['operatingSystems'],
    components: {
        "vue-select": () => import('vue-select'),
    },
    data() {
        return {
            operatingSystem: {id: 1, name: 'CentOS Server 7', price: 0}
        }
    },
    mounted() {
        this.$emit('onChanged', this.operatingSystem)
    },
    watch: {
        operatingSystem(nv) {
            this.$emit('onChanged', this.operatingSystem)
        }
    }
}
</script>

<style scoped>

</style>
