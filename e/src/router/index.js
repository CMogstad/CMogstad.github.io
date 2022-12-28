import { createRouter, createWebHistory } from 'vue-router'
import ResumeView from '../views/ResumeView.vue';
import AboutMeView from '../views/AboutMeView.vue';
import ProjectListsView from '../views/ProjectListsView.vue';
import ProjectView from '../views/ProjectView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/resume'
    },
    {
      path: '/resume',
      name: 'Resume',
      component: ResumeView
    },
    {
      path: '/about-me',
      name: 'AboutMe',
      component: AboutMeView
    },
    {
      path: '/projects',
      name: 'Projects',
      component: ProjectListsView
    },
    {
      path: '/projects/:id',
      name: 'Project',
      component: ProjectView,
    }
  ]
})

export default router
