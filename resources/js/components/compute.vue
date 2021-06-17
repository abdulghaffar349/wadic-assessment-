<template>
    <div class="col-6 mb-2">
        <div class="card">
            <div class="card-header">Compute</div>
            <div class="card-body">
                <div class="row">
                    <div class="col-4">Processor</div>
                    <div class="col-8 input-group">
                        <input class="form-control" v-model="cpu" type="number" min="0.4" step="0.4" max="12.8">
                        <span class="input-group-text">GHz</span>
                    </div>
                </div>
                <div class="row mt-2">
                    <div class="col-4">RAM</div>
                    <div class="col-8 input-group">
                        <input v-model="ram" class="form-control" type="number" min="0.25" step="0.25" max="32">
                        <span class="input-group-text">GB</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "compute",
    data() {
        return {
            cpu: 0.4,
            ram: 0.25,
        }
    },
    watch: {
        cpu(nv) {
            this.$emit('onCpuChanged', nv)
        },
        ram(nv) {
            this.$emit('onRamChanged', nv)
        }
    },
    mounted() {
        this.$emit('onCpuChanged', this.cpu);
        this.$emit('onRamChanged', this.ram);
    }
}
</script>

<style scoped>

</style>
