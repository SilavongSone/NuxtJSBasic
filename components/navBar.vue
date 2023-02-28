<template>
  <div>
    <section class="bg-white w-full h-screen text-xs shadow-md">
      <div class="w-36 text-gray-500 p-2">
        <div class="flex items-center justify-center">
          <Nuxt-link to="/"
            ><img class="p-2 w-16" src="../assets/logo/logo.png" alt="logo"
          /></Nuxt-link>
        </div>
        <div v-for="(item, index) in navBarItem" :key="index">
          <NuxtLink :to="item.path"
            ><button
              class="w-full items-center flex cursor-pointer hover:bg-violet-600 hover:text-white rounded-md btn"
            >
              <img class="w-12 p-2" :src="item.icon" />
              <p>{{ item.label }}</p>
            </button></NuxtLink
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import dashboardIcon from "../assets/icon/dashboard.png";
import CourseIcon from "../assets/icon/online-course.png";
import TeacherIcon from "../assets/icon/teacher.png";
import TimeTableIcon from "../assets/icon/timetable.png";
import ExamIcon from "../assets/icon/exam.png";
import MessageIcon from "../assets/icon/messenger.png";
import FriendsIcon from "../assets/icon/friendship.png";
import Students from "../assets/icon/student.png";

const navBarItem = [
  {
    label: "Dashboard",
    path: "/",
    icon: dashboardIcon,
  },
  {
    label: "Courses",
    path: "/courses",
    icon: CourseIcon,
  },
  {
    label: "Students",
    path: "/students",
    icon: Students,
  },
  {
    label: "Teacher",
    path: "/teachers",
    icon: TeacherIcon,
  },
  {
    label: "TimeTable",
    path: "/timeTable",
    icon: TimeTableIcon,
  },
  {
    label: "Exam",
    path: "/",
    icon: ExamIcon,
  },
  {
    label: "Message",
    path: "/",
    icon: MessageIcon,
  },
  {
    label: "Friends",
    path: "/",
    icon: FriendsIcon,
  },
];
</script>

<style>
.btn {
  --curve-size: 0.5em;
  color: var(--color);
  font-size: 14px;

  clip-path: polygon(
    0% var(--curve-size),
    var(--curve-size) 0,
    100% 0,
    100% calc(100% - var(--curve-size)),
    calc(100% - var(--curve-size)) 100%,
    0 100%
  );
  transition: color 250ms;
}

.btn:where(:hover, :focus) {
  color: #ffffff;
  background: #a802ff;
}
</style>
