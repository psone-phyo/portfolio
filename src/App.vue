
<template>
  <div class="card shadow-sm">
      <Menubar :model="items">
          <template #start>
            <Avatar>
            <img src="./assets/myprofile.jpg" class="w-full rounded-full"/>
            </Avatar>
          </template>

          <template #end>
              <div class="flex items-center gap-2">
                  <InputText placeholder="Search" type="text" class="w-32 sm:w-auto" />
              <div class="font-bold ml-2">
                Pyae Sone Phyo
              </div>

              </div>
          </template>
      </Menubar>
  </div>
  <router-view />
</template>

<script setup>
import Menubar from 'primevue/menubar';
import InputText from 'primevue/inputtext'
import Avatar from 'primevue/avatar'
import { ref } from "vue";

const items = ref([
  {
      label: 'Home',
      icon: 'pi pi-home',
  },
  {
      label: 'Skills',
      icon: 'pi pi-home',
  },
  {
      label: 'Projects',
      icon: 'pi pi-search',
      items: [
          {
              label: 'Core',
              icon: 'pi pi-bolt',
              shortcut: '⌘+S'
          },
          {
              label: 'Blocks',
              icon: 'pi pi-server',
              shortcut: '⌘+B'
          },
          {
              separator: true
          },
          {
              label: 'UI Kit',
              icon: 'pi pi-pencil',
              shortcut: '⌘+U'
          }
      ]
  },
  {
      label: 'About me',
      icon: 'pi pi-home'
  },
  {
      label: 'Contact',
      icon: 'pi pi-home'
  },
]);
</script>
