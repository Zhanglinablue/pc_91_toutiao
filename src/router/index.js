import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('@/views/home')
const Layout = () => import('@/views/layout')
const Question = () => import('@/views/question')
const Video = () => import('@/views/video')
const User = () => import('@/views/user')
const Profile = () => import('@/views/user/profile')
const Chat = () => import('@/views/user/chat')
const Search = () => import('@/views/search')
const Result = () => import('@/views/search/result')
const Article = () => import('@/views/article')
const Login = () => import('@/views/login')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Layout,
    children: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/question',
        component: Question
      },
      {
        path: '/video',
        component: Video
      },
      {
        path: '/user',
        component: User
      }
    ]
  },
  {
    path: '/user/profile',
    component: Profile
  },
  {
    path: '/user/chat',
    component: Chat
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/search/result',
    component: Result
  },
  {
    path: '/article',
    component: Article
  },
  {
    path: '/login',
    component: Login
  }

]

const router = new VueRouter({
  routes
})

export default router
