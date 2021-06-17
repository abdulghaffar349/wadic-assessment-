<template>
    <div class="row">
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
    },
    data() {
        return {
            zones: [
                {id: 1, city: 'Sydney', code: 'AUS', price: 0},
                {id: 2, city: 'Brisbane', code: 'AUS', price: 0},
                {id: 3, city: 'Perth', code: 'AUS', price: 0},
            ],
            tiers: [
                {id: 1, name: 'Basic servers', code: 'ioSTOR-250', price: 0.11},
                {id: 2, name: 'Mid tier', code: 'ioSTOR-500', price: 0.20},
                {id: 3, name: 'Backup', code: 'ioSTOR-100', price: 0.069},
                {id: 4, name: 'High performance', code: 'ioSTOR-1000', price: 0.33},
            ],
            operatingSystems: [
                {id: 1, name: 'CentOS Server 7', price: 0},
                {id: 2, name: 'CentOS Server 8', price: 0},
                {id: 3, name: 'Debian Server 9', price: 0},
                {id: 4, name: 'Debian Server 10', price: 0},
            ],
            currencies: [
                {id: 1, name: 'Australian Dollar', code: 'AUD', rate: 1.31},
                {id: 2, name: 'Singapore Dollar', code: 'SGD', rate: 1.34}
            ],
            vsData: {
                cpu: 0,
                ram: 0,
                zone: null,
                os: null,
                traffic: 0,
                storage: {
                    tier: null,
                    storageCapacity: 0
                }
            }
        }
    },
}
</script>

<style scoped>

</style>
