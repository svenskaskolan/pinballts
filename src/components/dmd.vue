<template>
    <div class="dmd u-flexSpaceAround u-flexColumn">
        <div v-for="(row, rowIndex) in rows" class="u-marginL u-marginR u-flexSpaceBetween" :key="'row' + row">
            <dmdpixel v-for="(column, columnIndex) in columns" :key="'dmdpixel' + row + column" :row="row" :column="column" :ref="el => { dmdpixels[rowIndex][columnIndex] = el }" />
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, onBeforeUpdate, ref } from "vue";
    import dmdpixel from "./dmdpixel.vue";
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
                default: "Welcome to Pinball Tutorials"
            },
            flowFrom: {
                type: String,
                default: "right"
            },
            flowStop: {
                type: String,
                default: "loop"
            }
        },

        setup(params) {
            function Create2DArray(rows: number) {
                const arr = [];
                for (let i=0;i<rows;i++) {
                    arr[i] = [];
                }
                return arr;
            }
            const dmdpixels = ref(Create2DArray(params.rows));
            onBeforeUpdate(() => {
                const dmdpixels = Create2DArray(params.rows);
            });
            return { dmdpixels }        
        }
    });
</script>
