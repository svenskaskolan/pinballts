<template>
    <div  :style="'width:5px; height:5px; border-radius:50%; background-color: ' + color + '; opacity:' + opacity"></div>
</template>

<script lang="ts">
    import {defineComponent, ref} from "vue";
    export default defineComponent({
        name: 'dmdpixel',
        props: {
            row: {
                type: Number,
                mandatory: true
            },
            column: {
                type: Number,
                mandatory: true
            },
            opacity: {
                type: Number,
                default: 0.05
            },
            color: {
                type: String,
                default: 'green'
            }
        },
        setup(parameters) {
            // ref makes the value reactive.  To change a value use backupOpacity.value for example
            if (parameters.row && parameters.column) {
         //       const divs = ref([])
                const backupOpacity = ref(parameters.opacity);
                const backupColor = ref(parameters.color);

/*                 onBeforeUpdate(() => {
                    divs.value = []
                }) */
                return {
                    backupOpacity,
                    backupColor
         //           divs
                }
            }
        }
    });
</script>