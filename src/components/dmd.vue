<template>
    <div v-if="loaded" class="dmd u-flexSpaceAround u-flexColumn">
        <div v-for="(, rowIndex) in props.rows - 1" class="u-marginL u-marginR u-flexSpaceBetween">
            <dmdpixel v-for="(, colIndex) in props.columns - 1"  
                :pixelProps=pixelsArray[rowIndex][colIndex] 
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, reactive, watch } from "vue";
import dmdpixel from "./dmdpixel.vue";
import { DmdProps } from "../interfaces/DmdProps";
import { DmdPixelProps } from "../interfaces/DmdPixelProps";

const props = defineProps<DmdProps>();
const loaded = ref(false);
const opacity = ref(0.20);
const color = ref('orange');
const fontSize = ref(16);

// Get the full pixel matrix for the text (could be wider than display)
const fullPixels = ref(
    getTextPixels(
        props.displayString!, 
        fontSize.value, 
        Math.max(props.displayString!.length * (fontSize.value / 2) + 16, props.columns), 
        props.rows));

// The current scroll offset (column index)
const scrollOffset = ref(0);

// The visible pixels for the display
const pixelsArray = reactive<DmdPixelProps[][]>(
  Array.from({ length: props.rows }, (_, row) =>
    Array.from({ length: props.columns }, (_, col): DmdPixelProps => ({
      color: color.value,
      opacity: opacity.value
    }))
  )
);

function updateVisiblePixels() {
  for (let row = 0; row < props.rows - 1; row++) {
    for (let col = 0; col < props.columns - 1; col++) {
      // Get the pixel from the full pixel array, offset by scrollOffset
      const sourceCol = col + scrollOffset.value;
      const pixel = fullPixels.value[row][sourceCol] || { color: "black", opacity: 0 };
      pixelsArray[row][col].color = pixel.color;
      pixelsArray[row][col].opacity = pixel.opacity;
    }
  }
}

function scrollText() {
  // Only scroll if the text is wider than the display
  const maxOffset = fullPixels.value[0].length - props.columns;
  if (maxOffset > 0) {
    scrollOffset.value = (scrollOffset.value + 1) % (maxOffset + 1);
    updateVisiblePixels();
  }
}

onMounted(() => {
  // Initialize the pixels array with the full pixel data
  refreshDMD();
});

// add watch for props to refresh the DMD when imageUrl or displayString changes

watch(() => props.displayString, () => {
    refreshDMD();
});

async function refreshDMD() {
    if (props.imageUrl) {
        fullPixels.value = await getImagePixels(props.imageUrl, props.columns, props.rows)
    } else if (props.displayString) {
         fullPixels.value = getTextPixels(
            props.displayString,
            fontSize.value,
            Math.max(props.displayString.length * (fontSize.value / 2) + 32, props.columns),
            props.rows
        );
    }
    updateVisiblePixels();
    if (fullPixels.value[0].length > props.columns) {
        // Start scrolling if the text is wider than the display
        setInterval(() => {
            scrollText();
        }, 50); // Adjust speed as needed
    }
    loaded.value = true;
};

function getTextPixels(text: string, fontSize: number, width = props.columns, height = props.rows) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Failed to get canvas context');
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, width, height);
  ctx.font = `${fontSize}px monospace`;
  ctx.fillStyle = color.value;
  ctx.textBaseline = 'top';
  ctx.fillText(text, 0, 0);

  const imageData = ctx.getImageData(0, 0, width, height);
  const pixels = [];
  for (let y = 0; y < height; y++) {
    const row = [];
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      const r = imageData.data[idx];
      const g = imageData.data[idx + 1];
      const b = imageData.data[idx + 2];
      const a = imageData.data[idx + 3];
      row.push({
        color: `rgb(${r},${g},${b})`,
        opacity: a / 255
      });
    }
    pixels.push(row);
  }
  return pixels;
}

async function getImagePixels(imageUrl: string, width: number, height: number) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Failed to get canvas context');

  // Load the image
  const img = new window.Image();
  img.crossOrigin = 'Anonymous';
  img.src = imageUrl;

  await new Promise((resolve, reject) => {
    img.onload = resolve;
    img.onerror = reject;
  });

  ctx.drawImage(img, 0, 0, width, height);

  const imageData = ctx.getImageData(0, 0, width, height);
  const pixels = [];
  for (let y = 0; y < height; y++) {
    const row = [];
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      const r = imageData.data[idx];
      const g = imageData.data[idx + 1];
      const b = imageData.data[idx + 2];
      const a = imageData.data[idx + 3];
      row.push({
        color: `rgb(${r},${g},${b})`,
        opacity: a / 255
      });
    }
    pixels.push(row);
  }
  return pixels;
}
</script>
