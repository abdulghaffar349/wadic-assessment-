<template>
    <div class="col-6 mb-2">
        <div class="card">
            <div class="card-header">
                Network
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-4">Traffic:</div>
                    <div class="col-8 input-group">
                        <input v-model="traffic" class="form-control" type="number" min="100" step="50" max="10000">
                        <span class="input-group-text">GB</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "network",
    data() {
        return {
            traffic: 100,
        }
    },
    watch: {
        traffic(nv) {
            this.$emit('onChanged', this.traffic)
        }
    },
    mounted() {
        this.$emit('onChanged', this.traffic)
    }
}
</script>

<style scoped>

</style>
