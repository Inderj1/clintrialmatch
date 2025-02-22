<script setup>
import { ref, onMounted } from 'vue';
import { useRuntimeConfig } from '#app';
import { GoogleMap, Marker, InfoWindow } from '@fawmi/vue-google-maps'

definePageMeta({
  layout: "landing",
  title: "Crop Locations",
  meta: [
    { hid: 'description', name: 'description', content: 'View our crop locations and agricultural sites' },
  ]
});

// Farm locations with additional metadata
const locations = ref([
  {
    id: 1,
    title: "Main Farm",
    position: { lat: 40.7128, lng: -74.0060 },
    type: "Organic Farm"
  },
  {
    id: 2,
    title: "Processing Center",
    position: { lat: 40.7580, lng: -73.9855 },
    type: "Distribution Hub"
  },
  {
    id: 3,
    title: "Chicago Greenhouse",
    position: { lat: 41.8781, lng: -87.6298 },
    type: "Indoor Growing Facility"
  }
]);

const config = useRuntimeConfig();
const mapRef = ref(null);
const selectedLocation = ref(null);
const userLocation = ref(null);
const nearestLocation = ref(null);
const center = { lat: 39.8283, lng: -98.5795 }; // Center of USA

// Function to calculate distance between two points using Haversine formula
const calculateDistance = (point1, point2) => {
  const R = 6371; // Earth's radius in kilometers
  const dLat = (point2.lat - point1.lat) * Math.PI / 180;
  const dLon = (point2.lng - point1.lng) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(point1.lat * Math.PI / 180) * Math.cos(point2.lat * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
};

// Function to show all locations
const showAllLocations = () => {
  if (!mapRef.value) return;
  
  const bounds = new google.maps.LatLngBounds();
  locations.value.forEach(location => {
    bounds.extend(location.position);
  });
  
  mapRef.value.fitBounds(bounds);
};

// Function to find nearest farm
const findNearestFarm = async () => {
  try {
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    
    userLocation.value = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
    
    let nearest = null;
    let minDistance = Infinity;
    
    locations.value.forEach(location => {
      const distance = calculateDistance(userLocation.value, location.position);
      if (distance < minDistance) {
        minDistance = distance;
        nearest = { ...location, distance };
      }
    });
    
    nearestLocation.value = nearest;
    selectedLocation.value = nearest;
    
    if (mapRef.value && nearest) {
      mapRef.value.panTo(nearest.position);
      mapRef.value.setZoom(12);
    }
  } catch (error) {
    alert('Error getting your location. Please enable location services.');
  }
};

// Function to handle marker click
const handleMarkerClick = (location) => {
  selectedLocation.value = location;
};

onMounted(() => {
  showAllLocations();
});
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold mb-8 text-gray-900">Our Crop Locations</h1>
      
      <!-- Card Component -->
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <!-- Card Header -->
        <div class="p-6 border-b border-gray-200">
          <h2 class="text-2xl font-semibold">Farm Locations</h2>
        </div>
        
        <!-- Card Content -->
        <div class="p-6">
          <!-- Map Container -->
          <div class="h-96 w-full rounded-lg overflow-hidden relative">
            <GoogleMap
              :api-key="config.public.googleMapsApiKey"
              :center="center"
              :zoom="4"
              class="w-full h-full rounded-lg"
            >
              <Marker
                v-for="location in locations"
                :key="location.id"
                :position="location.position"
                :title="location.title"
                @click="handleMarkerClick(location)"
              />
              <InfoWindow
                v-if="selectedLocation"
                :position="selectedLocation.position"
                @closeclick="selectedLocation = null"
              >
                <div class="p-2">
                  <h3 class="font-medium">{{ selectedLocation.title }}</h3>
                  <p class="text-sm">{{ selectedLocation.type }}</p>
                  <p v-if="nearestLocation && selectedLocation.id === nearestLocation.id" class="text-sm text-green-600 mt-1">
                    Nearest to you ({{ nearestLocation.distance.toFixed(1) }} km)
                  </p>
                </div>
              </InfoWindow>
              <Marker
                v-if="userLocation"
                :position="userLocation"
                :icon="{
                  url: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png'
                }"
                title="Your Location"
              />
            </GoogleMap>
            
            <!-- Controls Panel -->
            <div class="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-md">
              <div class="space-y-2">
                <button 
                  @click="showAllLocations"
                  class="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                >
                  Show All Locations
                </button>
                <button 
                  @click="findNearestFarm"
                  class="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                >
                  Find Nearest Farm
                </button>
              </div>
            </div>
          </div>

          <!-- Location List -->
          <div class="mt-4 space-y-2">
            <div 
              v-for="location in locations" 
              :key="location.id" 
              class="p-4 bg-gray-50 rounded-lg"
            >
              <h3 class="font-medium">{{ location.title }}</h3>
              <p class="text-sm text-gray-600">{{ location.type }}</p>
              <p class="text-sm text-gray-500">
                Lat: {{ location.position.lat }}, Lng: {{ location.position.lng }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add any additional styling here if needed */
</style>
