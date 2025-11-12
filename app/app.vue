<template>
  <UDashboardGroup>
    <UDashboardSidebar
      open
      toggle-side="right">
      <template #header>
        <h2 class="h-5">
          {{ 'Life Aspects' }}
        </h2>
      </template>

      <UNavigationMenu
        :items="items"
        orientation="vertical" />
    </UDashboardSidebar>

    <UDashboardPanel>
      <template #header>
        <UDashboardNavbar title="Life Improver">
          <template #right>
            <UColorModeSwitch />
          </template>
        </UDashboardNavbar>
      </template>

      <template #body>
        <NuxtPage />
      </template>
    </UDashboardPanel>
  </UDashboardGroup>
</template>

<script setup lang="ts">
  import type { NavigationMenuItem } from '@nuxt/ui';

  const items: NavigationMenuItem[] = [
    {
      label: 'Home',
      icon: 'material-symbols-light:home',
      to: '/',
      defaultOpen: true,
    },
    {
      label: 'Health',
      icon: 'material-symbols-light:health-metrics-rounded',
      to: '/health',
    },
    {
      label: 'Relationships',
      icon: 'material-symbols-light:partner-heart',
    },
    {
      label: 'Finances',
      icon: 'material-symbols-light:finance',
      to: '/finances',
    },
    {
      label: 'Business',
      icon: 'material-symbols-light:business-center',
    },
    {
      label: 'Spiritual',
      icon: 'mdi:hands-pray',
    },
    {
      label: 'Lifestyle',
      icon: 'material-symbols:charger-rounded',
    },
  ];
</script>
