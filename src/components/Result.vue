<template>
    <p>Counter is: {{ counter }}</p>
</template>

<script>
    import {mapGetters} from 'Vuex';
    import * as types from '../store/types';

    export default {
        // props: ['counter']
        computed: {
        	// counter() {
        	// 	// return this.$store.state.counter;
        	// 	return this.$store.getters.doubleCounter;
        	// }
            ...mapGetters({
                counter: types.DOUBLE_COUNTER
            })
        }
    }
</script>