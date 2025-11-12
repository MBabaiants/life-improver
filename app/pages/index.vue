<template>
  <div class="flex flex-col gap-6">
    <h1 class="text-2xl">Build a stronger and disciplined version of you</h1>

    <div class="relative h-full max-h-145 w-full grow flex-col gap-5 justify-self-start xl:flex-row">
      <Radar
        v-if="showChart"
        id="balance-wheel-chart"
        ref="myChart"
        class="self-center"
        :options="chartOptions"
        :data="chartData" />

      <div class="flex flex-col gap-5">
        <UPageCard
          v-for="(aspect, ind) in weakAspects"
          :key="ind"
          :description="aspect.description"
          :to="aspect.to"
          target="_self">
          <template #header>
            <div class="flex items-center gap-2">
              <UIcon
                :name="aspect.icon"
                size="18" />

              <h2 class="text-2xl">{{ aspect.title }}</h2>
            </div>
          </template>
        </UPageCard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Radar } from 'vue-chartjs';
  import { Chart as ChartJS, RadarController, LineElement, PointElement, RadialLinearScale, Filler } from 'chart.js';

  ChartJS.register(RadarController, LineElement, PointElement, RadialLinearScale, Filler);

  const aspects = ref([
    {
      title: 'Relationships',
      description: 'Nuxt UI integrates with latest Tailwind CSS v4, bringing significant improvements.',
      icon: 'material-symbols-light:partner-heart',
      value: 7,
      to: '/',
    },
    {
      title: 'Family',
      description: 'Nuxt UI integrates with latest Tailwind CSS v4, bringing significant improvements.',
      icon: 'material-symbols-light:partner-heart',
      value: 7,
      to: '/',
    },
    {
      title: 'Physical',
      description: 'Nuxt UI integrates with latest Tailwind CSS v4, bringing significant improvements.',
      icon: 'material-symbols-light:health-metrics-rounded',
      value: 8,
      to: '/health',
    },
    {
      title: 'Business',
      description: 'Nuxt UI integrates with latest Tailwind CSS v4, bringing significant improvements.',
      icon: 'material-symbols-light:business-center',
      value: 8,
      to: '/',
    },
    {
      title: 'Financial',
      description: 'Nuxt UI integrates with latest Tailwind CSS v4, bringing significant improvements.',
      icon: 'material-symbols-light:finance',
      value: 5,
      to: '/finances',
    },
    {
      title: 'Spiritual',
      description: 'Nuxt UI integrates with latest Tailwind CSS v4, bringing significant improvements.',
      icon: 'mdi:hands-pray',
      value: 7,
      to: '/',
    },
    {
      title: 'Mental',
      description: 'Nuxt UI integrates with latest Tailwind CSS v4, bringing significant improvements.',
      icon: 'material-symbols-light:health-metrics-rounded',
      value: 7,
      to: '/health',
    },
    {
      title: 'Lifestyle',
      description: 'Nuxt UI integrates with latest Tailwind CSS v4, bringing significant improvements.',
      icon: 'material-symbols:charger-rounded',
      value: 5,
      to: '/',
    },
  ]);

  const weakAspects = computed(() => aspects.value.filter(({ value }) => value < 7));

  const chartData = computed(() => ({
    labels: aspects.value.map(({ title }) => title.toLocaleUpperCase()),
    datasets: [
      {
        label: 'My Second Dataset',
        data: aspects.value.map(({ value }) => value),
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
      },
    ],
  }));

  const chartOptions = {
    elements: {
      point: {
        radius: 0,
      },
      line: {
        borderWidth: 3,
      },
    },
    scales: {
      r: {
        min: 0,
        max: 10,
        ticks: {
          display: false,
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.25)',
        },
        angleLines: {
          color: '#fff',
        },
      },
    },
  };

  const showChart = ref(true);
</script>
