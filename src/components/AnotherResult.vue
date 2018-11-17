<template>
    <div>
    	<!-- <p>Counter is: {{ counter }}</p> -->
    	<!-- <p>Counter is: {{ doubleCounter }}</p> -->
    	<p>Counter is: {{ double }}</p>
    	<!-- <p>Number of Clicks: {{ clicks }}</p> -->
    	<!-- <p>Number of Clicks: {{ stringCounter }}</p> -->
    	<p>Number of Clicks: {{ string }}</p>
    </div>
</template>

<script>
	import { mapGetters } from 'vuex';

    export default {
        // props: ['counter']
        // computed: {
        // 	counter() {
        // 		// return this.$store.state.counter;
        // 		return this.$store.getters.doubleCounter;
        // 	},
        // 	clicks() {
        // 		return this.$store.getters.stringCounter;
        // 	}
        // }
     //    computed: mapGetters([
     //    	'doubleCounter',
     //    	'stringCounter'
    	// ])
    	// computed: mapGetters({
    	// 	double: 'doubleCounter',
    	// 	string: 'stringCounter'
    	// })
    	computed: {
    		...mapGetters({
    			double: 'doubleCounter',
    			string: 'stringCounter'
    		}),
    		ourOwn() {
    			
    		}
    	}
    }
</script>