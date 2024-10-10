import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Reader from "@/views/Reader.vue";
import Book from "@/views/Book.vue";
import Publisher from "@/views/Publisher.vue";
import Staff from "@/views/Staff.vue";
import Track from "@/views/Track.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/reader",
        name: "reader",
        component: Reader,
    },
    {
        path: "/book",
        name: "book",
        component: Book,
    },
    {
        path: "/publisher",
        name: "publisher",
        component: Publisher,
    },
    {
        path: "/staff",
        name: "staff",
        component: Staff,
    },
    {
        path: "/track",
        name: "track",
        component: Track,
    }
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;