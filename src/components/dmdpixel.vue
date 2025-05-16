<template>
    <div  class="dmdPixel" :style="'background-color: ' + props.pixelProps.color + '; opacity:' + props.pixelProps.opacity"></div>
</template>

<script lang="ts" setup>
    import { DmdPixelProps } from "../interfaces/DmdPixelProps";
    const props = defineProps<{
        pixelProps: DmdPixelProps
    }>();
</script>