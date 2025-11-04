<template>
  <UDashboardGroup>
   <UDashboardSidebar
   open
   toggle-side="right">
    <template #header>
     <h2 class="h-5">
      Life Aspects
     </h2>
    </template>

    <UNavigationMenu
    :items="items"
    orientation="vertical" />
   </UDashboardSidebar>

   <UDashboardPanel>
    <template #header>
     <UDashboardNavbar
     title="Life Improver">
      <template #right>
       <UColorModeSwitch />
      </template>
     </UDashboardNavbar>
    </template>

    <template #body>
     <h1 class="text-2xl">
      Build a stronger and disciplined version of you
     </h1>

     <UPageColumns>
      <UPageCard
      v-for="(aspect, ind) in aspects"
      :key="ind"
      v-bind="aspect"
      target="_self" />
     </UPageColumns>
    </template>
   </UDashboardPanel>
  </UDashboardGroup>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items: NavigationMenuItem[] = [{
  label: 'Home',
  icon: 'i-lucide-house',
  active: true,
}, {
  label: 'Health',
  icon: 'i-lucide-inbox',
},
{
  label: 'Relationships',
  icon: 'i-lucide-users',
},
{
  label: 'Financial',
  icon: 'i-lucide-users',
},
{
  label: 'Career',
  icon: 'i-lucide-users',
},
{
  label: 'Spiritual',
  icon: 'i-lucide-users',
},
]

const aspects = ref([
  {
    title: 'Health',
    description: 'Nuxt UI integrates with latest Tailwind CSS v4, bringing significant improvements.',
    icon: 'material-symbols-light:health-metrics-rounded',
    to: '/',
  },
  {
    title: 'Family and Relationships',
    description: 'Nuxt UI integrates with latest Tailwind CSS v4, bringing significant improvements.',
    icon: 'i-simple-icons-tailwindcss',
    to: '/',
  },
  {
    title: 'Financial',
    description: 'Nuxt UI integrates with latest Tailwind CSS v4, bringing significant improvements.',
    icon: 'i-simple-icons-tailwindcss',
    to: '/',
  },
  {
    title: 'Social',
    description: 'Nuxt UI integrates with latest Tailwind CSS v4, bringing significant improvements.',
    icon: 'i-simple-icons-tailwindcss',
    to: '/',
  },
  {
    title: 'Career',
    description: 'Nuxt UI integrates with latest Tailwind CSS v4, bringing significant improvements.',
    icon: 'i-simple-icons-tailwindcss',
    to: '/',
  },
  {
    title: 'Spiritual',
    description: 'Nuxt UI integrates with latest Tailwind CSS v4, bringing significant improvements.',
    icon: 'i-simple-icons-tailwindcss',
    to: '/',
  },
])
</script>
