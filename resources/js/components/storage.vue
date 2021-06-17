<template>
    <div class="col-6 mb-2">
        <div class="card">
            <div class="card-header">
                Storage
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-4">Tier:</div>
                    <div class="col-8">
                        <vue-select :clearable="false" v-model="tier" :options="tiers" label="name"></vue-select>
                    </div>
                </div>
                <div class="row mt-2">
                    <div class="col-4">Capacity:</div>
                    <div class="col-8 input-group">
                        <input v-model="capacity" class="form-control" type="number" min="100" step="100" max="10000">
                        <span class="input-group-text">GB</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "storage",
    props: ['tiers'],
    components: {
        "vue-select": () => import('vue-select'),
    },
    data() {
        return {
            tier: this.tiers[0],
            capacity: 100
        }
    },
    watch: {
        tier() {
            this.onChanged()
        },
        capacity() {
            this.onChanged()
        }
    },
    mounted() {
        this.onChanged()
    },
    methods: {
        onChanged() {
            this.$emit('onChanged', {tier: this.tier, storageCapacity: this.capacity})
        }
    }
}
</script>

<style scoped>

</style>
