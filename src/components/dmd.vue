<template>
    <div class="dmd u-flexSpaceAround u-flexColumn">
        <div v-for="(row, rowIndex) in rows" class="u-marginL u-marginR u-flexSpaceBetween" :key="'row' + row">
            <dmdpixel v-for="(column, columnIndex) in columns" :key="'dmdpixel' + row + column" color="green" :opacity="0.05" :row="row" :column="column" :ref="el => { dmdpixels[rowIndex][columnIndex] = el }" />
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, ref, onMounted } from "vue";
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
            let col = 0;
            function Create2DArray(rows: number) {
                const arr = [];
                for (let i=0;i<rows;i++) {
                    arr[i] = [];
                }
                return arr;
            }
            const dmdpixels = ref(Create2DArray(params.rows));
            function showDMD(text: string, totCols: number) {
                let tempArray: typeof dmdpixel;
                if (col === totCols) {
                    return
                }
                tempArray = dmdpixels.value[3][col];
                tempArray.opacity = 1;
                // dmdpixels.value[3][col].opacity = 1;
                if (col > 0) {
                    tempArray = dmdpixels.value[3][col - 1];
                    tempArray.opacity = 0.05;
                    // dmdpixels.value[3][col - 1].opacity = 0.05;
                }
                col ++;
            }
            onMounted(() => {
               setInterval(showDMD, 500, 'text string', params.columns)
            });
/*             onBeforeUpdate(() => {
                const dmdpixels = Create2DArray(params.rows);
            }); */
            return { dmdpixels }        
        }
    });
</script>
