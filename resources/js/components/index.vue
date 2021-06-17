<template>
    <div class="row">
        <Loading v-if="isLoading" style="left: 50%;"/>
        <div class="row" v-else>
            <div class="col-9">
                <div class="row">
                    <Zones @onChanged="vsData.zone = $event" :zones="zones"/>
                    <compute @onRamChanged="vsData.ram = $event" @onCpuChanged="vsData.cpu = $event"/>
                    <storage :tiers="tiers" @onChanged="vsData.storage = $event"/>
                    <Network @onChanged="vsData.traffic = $event"/>
                    <OperatingSystem :operating-systems="operatingSystems" @onChanged="vsData.os = $event"/>
                </div>
            </div>
            <div class="col-3">
                <vsSummary :currencies="currencies" :vs-data="vsData"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "index",
    components: {
        Zones: () => import('./zones'),
        Compute: () => import('./compute'),
        Storage: () => import('./storage'),
        Network: () => import('./network'),
        OperatingSystem: () => import('./operatingSystem'),
        vsSummary: () => import('./vsSummary'),
        Loading: () => import('vue-loading-spinner/src/components/Circle4')
    },
    data() {
        return {
            isLoading: false,
            zones: [],
            tiers: [],
            operatingSystems: [],
            currencies: [],
            vsData: {
                cpu: 0,
                ram: 0,
                zone: 0,
                os: 0,
                traffic: 0,
                storage: {
                    tier: 0,
                    storageCapacity: 0
                }
            }
        }
    },
    mounted() {
        this.getProducts()
    },
    methods: {
        async getProducts() {
            this.isLoading = true;
            const response = await axios.get('/products');
            this.setValues(response.data.data);
            setTimeout(() => (this.isLoading = false), 200)

        },
        setValues(data) {
            Object.assign(this, {...data, operatingSystems: data['operating_systems']});
        }
    }
}
</script>

<style scoped>

</style>
