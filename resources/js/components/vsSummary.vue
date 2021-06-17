<template>
    <div class="card">
        <div class="card-header">
            Summary
        </div>
        <div class="card-body">
            <div class="row">
                <vue-select :clearable="false" v-model="currency" :options="currencies" label="name"></vue-select>
            </div>
            <b class="text-success row">Compute</b>
            <div class="row">
                <div class="col-8">{{ `${vsData.cpu} GHz Processor` }}</div>
                <div class="col-4">${{ prices['cpu'] }}</div>
                <div class="col-8">{{ `${vsData.ram} GB RAM` }}</div>
                <div class="col-4">${{ prices['ram'] }}</div>
            </div>
            <b class="text-success row">Storage</b>
            <div class="row">
                <div class="col-8">{{
                        `${vsData['storage']['storageCapacity']} GB ${vsData['storage']['tier']['code']}`
                    }}
                </div>
                <div class="col-4">${{ prices['storage'] }}</div>
            </div>
            <b class="text-success row">Operating System</b>
            <div class="row">
                <div class="col-8">{{ `${vsData['os']['name']}` }}</div>
                <div class="col-4">${{ prices['os'] }}</div>
            </div>
            <b class="text-success row">Network</b>
            <div class="row">
                <div class="col-8">{{ `${vsData['traffic']} GB Traffic` }}</div>
                <div class="col-4">${{ prices['traffic'] }}</div>
            </div>
            <b class="text-success row">Location</b>
            <div class="row">
                <div class="col-8">{{ `${vsData['zone']['code']} - ${vsData['zone']['city']}` }}</div>
                <div class="col-4">${{ prices['zone'] }}</div>
            </div>
            <b class="text-success row">Machine Name</b>
            <div class="row">
                <div class="col-12">Auto Generated</div>
            </div>
            <hr/>
            <b>{{ `${currency.code} $${totalPrice} / month` }}</b>
        </div>
    </div>
</template>

<script>
import {sum, values} from 'lodash'

export default {
    name: "vsSummary",
    props: ['vsData'],
    components: {
        "vue-select": () => import('vue-select'),
    },
    data() {
        return {
            currency: {id: 1, name: 'Australian Dollar', code: 'AUD', rate: 1.31},
            currencies: [
                {id: 1, name: 'Australian Dollar', code: 'AUD', rate: 1.31},
                {id: 2, name: 'Singapore Dollar', code: 'SGD', rate: 1.34}
            ],
            ramPrice: 18.70, //price of ram per 1GB in USD
            cpuPrice: 7.25, //price per 1GHz in USD
            trafficPrice: 0.021 //price per 1gb traffic in USD
        }
    },
    computed: {
        prices() {
            const vsData = this.vsData
            const SELF = this
            return {
                cpu: SELF.parsePrice(vsData['cpu'] * SELF.cpuPrice * SELF.currency.rate),
                ram: SELF.parsePrice(vsData['ram'] * SELF.ramPrice * SELF.currency.rate),
                os: SELF.parsePrice(vsData['os']['price'] * SELF.currency.rate),
                storage: SELF.parsePrice(vsData['storage']['storageCapacity'] * vsData['storage']['tier']['price'] * SELF.currency.rate), //price of 1 gb
                traffic: SELF.parsePrice(vsData['traffic'] * SELF.trafficPrice * SELF.currency.rate),
                zone: SELF.parsePrice(vsData['zone']['price'] * SELF.currency.rate)
            };
        },
        totalPrice() {
            return sum(values(this.prices)).toFixed(2)
        }
    },
    methods: {
        parsePrice(value) {
            value = value.toFixed(2);
            return parseFloat(value);
        }
    }
}
</script>

<style scoped>

</style>
