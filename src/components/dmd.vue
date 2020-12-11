<template>
    <div class="dmd u-flexSpaceAround u-flexColumn">
        <div v-for="row in rows" class="u-marginL u-marginR u-flexSpaceBetween" :key="'row' + row">
            <dmdpixel v-for="column in columns" :key="'dmdpixel' + column" :row="row" :column="column"/>
        </div>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from "vue";
    import dmdpixel from "./dmdpixel.vue"
    export default defineComponent({
        name: 'dmd',
        components: {
            dmdpixel
        },
        props: {
            rows: {
                type: Number,
                default: 9
            },
            columns: {
                type: Number,
                default: 80
            },
            displayString: {
                type: String,
                mandatory: false
            }
        }
    });
</script>
