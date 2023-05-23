<template>
    <div class="rounded-md shadow-lg w-full overflow-hidden mx-auto p-0 m-0">
        <div id="map" class="h-96 my-24 border">
        </div>
    </div>
</template>

<script>
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js"
import { onMounted } from 'vue';
export default {
    name: "MapView",
    setup() {

        onMounted(() => {
            mapboxgl.accessToken = 'pk.eyJ1IjoiaGVtYWxrYSIsImEiOiJjbGg0ZzVmaGEwa3VkM2dvNTR6dmxpeXluIn0.iKR6-IwoBEParG1qrtI0iQ';
            const map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v12',
                center: [72.5185, 23.0708],
                zoom: 16
            });
            map.addControl(new mapboxgl.NavigationControl());

        })
    }
}
</script>

<style scoped></style>