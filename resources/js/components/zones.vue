<template>
    <div class="col-6 mb-2">
        <div class="card">
            <div class="card-header">
                Availability Zone
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-4">Location:</div>
                    <div class="col-8">
                        <vue-select :clearable="false" v-model="zone" :options="zones"
                                    label="city"></vue-select>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import "vue-select/dist/vue-select.css";

export default {
    name: "zones",
    props: ['zones'],
    components: {
        "vue-select": () => import('vue-select'),
    },
    data() {
        return {
            zone: {id: 1, city: 'Sydney', code: 'AUS', price: 0}
        }
    },
    mounted() {
        this.$emit('onChanged', this.zone)
    },
    watch: {
        zone(nv) {
            this.$emit('onChanged', this.zone)
        }
    }
}
</script>

<style scoped>

</style>
