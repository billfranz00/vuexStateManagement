<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex</h1>
                <!-- <app-result :counter="counter"></app-result> -->
                <app-result></app-result>
                <app-another-result></app-another-result>
                <hr>
                <!-- <app-counter @updated="counter += $event"></app-counter> -->
                <app-counter></app-counter>
                <app-another-counter></app-another-counter>
                <hr>
                <!-- <input type="text" :value="value"> -->
                <input type="text" v-model="value">
                <!-- <input type="text" :value="value" @input="updateValue"> -->
                <p>{{ value }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import Counter from './components/Counter.vue';
    import AnotherCounter from './components/AnotherCounter.vue';
    import Result from './components/Result.vue';
    import AnotherResult from './components/AnotherResult.vue';
    import * as types from './store/types';

    export default {
        // data() {
        //     return {
        //         counter: 0
        //     }
        // },
        computed: {
            // value() {
                // return this.$store.getters.value;
            // }
            value: {
                get() {
                    // console.log(this.$store.getters.value);
                    // return this.$store.getters.value;
                    console.log(this.$store.getters[types.VALUE]);
                    return this.$store.getters[types.VALUE];
                },
                set(value) {
                    // this.$store.dispatch('updateValue', value);
                    this.$store.dispatch(types.UPDATE_VALUE, value);
                }
            }
        },
        // methods: {
        //     updateValue(event) {
        //         this.$store.dispatch('updateValue', event.target.value);
        //     }
        // },
        components: {
            appCounter: Counter,
            appAnotherCounter: AnotherCounter,
            appResult: Result,
            appAnotherResult: AnotherResult
        }
    }
</script>

