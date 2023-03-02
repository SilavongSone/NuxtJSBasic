<template>
  <div class="grid grid-cols-3 p-2">
    <section class="w-full h-full overflow-hidden col-span-2">
      <!-- total -->
      <div class="flex m-2 justify-evenly">
        <article v-for="(item, index) in toTal" :key="index">
          <li
            class="flex mx-1 w-28 h-24 justify-center items-center rounded-xl"
            :class="[item.color]"
          >
            <div
              class="flex flex-col justify-center items-center text-sm font-thin"
            >
              <img class="w-12" :src="item.icon" />
              <p class="text-center">{{ item.label }}</p>
              <p class="text-center">{{ item.amount }}</p>
            </div>
          </li>
        </article>
      </div>

      <!-- echarts -->
      <div class="p-2 m-2">
        <ul class="flex justify-evenly items-center">
          <div
            class="bg-white rounded-lg overflow-hidden shadow-md relative mx-2 hover:brightness-90"
          >
            <li class="p-2 absolute">Statistics</li>
            <li class="h-44 w-96" id="chartBar"></li>
          </div>
          <div
            class="bg-white rounded-lg overflow-hidden shadow-md relative mx-2 hover:brightness-90"
          >
            <li class="p-2">Courses</li>
            <li class="h-44 w-64 p-2" id="chartPie"></li>
          </div>
        </ul>
      </div>

      <!-- table -->
      <div class="w-full h-full">
        <section class="p-2 border-2">
          <div class="overflow-hidden">
            <ul class="flex justify-between pl-2 pt-2">
              <li class="font-semibold">Database</li>
              <li>
                <button class="btn w-14 h-8">Teacher</button>
                <button class="btn p-2 w-14 h-8">Students</button>
                <button class="btn pr-2 w-14 h-8">Staff</button>
              </li>
            </ul>

            <ul>
              <li class="m-2 text-sm">
                <table class="table-fixed w-full border-2">
                  <thead class="border-2">
                    <tr class="font-medium">
                      <td>
                        <p
                          class="flex justify-center items-center overflow-hidden"
                        >
                          Students
                        </p>
                      </td>
                      <td>
                        <p
                          class="flex justify-center items-center overflow-hidden"
                        >
                          Score
                        </p>
                      </td>
                      <td>
                        <p
                          class="flex justify-center items-center overflow-hidden"
                        >
                          Submited
                        </p>
                      </td>
                      <td>
                        <p
                          class="flex justify-center items-center overflow-hidden"
                        >
                          Grad
                        </p>
                      </td>
                      <td>
                        <p
                          class="flex justify-center items-center overflow-hidden"
                        >
                          Pass/Fail
                        </p>
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      class="cursor-pointer bg-white hover:brightness-90"
                      v-for="(item, index) in Students"
                      :key="index"
                    >
                      <td class="flex space-x-2">
                        <img
                          class="sm:w-12 sm:h-12 rounded-full p-1"
                          :src="item.icon"
                          alt=""
                        />
                        <p class="flex justify-center items-center">
                          {{ item.fname }} {{ item.lname }}
                        </p>
                      </td>
                      <td>
                        <p class="flex justify-center items-center">
                          {{ item.Score }}
                        </p>
                      </td>
                      <td>
                        <p class="flex justify-center items-center">
                          {{ item.Submit }}
                        </p>
                      </td>
                      <td>
                        <p class="flex justify-center items-center">
                          {{ item.Grad }}
                        </p>
                      </td>
                      <td>
                        <p class="flex justify-center items-center">
                          {{ item.Pass }}
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </section>

    <section class="w-full h-full overflow-hidden bg-white shadow-md">
      <div
        class="m-2 overflow-hidden flex justify-center bg-white p-2 shadow-md"
      >
        <ul class="wrapper bg-gray-400 rounded-md">
          <header class="">
            <p class="current-date">February 2022</p>
            <div class="icons">
              <span id="prev" class="material-symbols-rounded"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-10 h-10 hover:text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              <span id="next" class="material-symbols-rounded"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-10 h-10 hover:text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </div>
          </header>

          <div class="calendar">
            <ul class="weeks">
              <li class="px-4">Sun</li>
              <li class="px-4">Mon</li>
              <li class="px-4">Tue</li>
              <li class="px-4">Wed</li>
              <li class="px-4">Thu</li>
              <li class="px-4">Fri</li>
              <li class="px-4">Sat</li>
            </ul>
            <ul class="day text-xs">
              <li class="inactive">29</li>
              <li class="inactive">30</li>
              <li class="inactive">31</li>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
              <li>9</li>
              <li>10</li>
              <li>11</li>
              <li>12</li>
              <li>13</li>
              <li>14</li>
              <li>15</li>
              <li>16</li>
              <li>17</li>
              <li>18</li>
              <li>19</li>
              <li>20</li>
              <li>21</li>
              <li>22</li>
              <li class="active">23</li>
              <li>24</li>
              <li>25</li>
              <li>26</li>
              <li>27</li>
              <li>28</li>
              <li class="inactive">1</li>
              <li class="inactive">2</li>
              <li class="inactive">3</li>
              <li class="inactive">4</li>
              <li class="inactive">5</li>
              <li class="inactive">6</li>
              <li class="inactive">7</li>
              <li class="inactive">8</li>
              <li class="inactive">9</li>
              <li class="inactive">10</li>
              <li class="inactive">11</li>
            </ul>
          </div>
        </ul>
      </div>

      <div class="w-full h-full"></div>
    </section>
  </div>
</template>

<script setup>
import * as echarts from "echarts";
import { onMounted } from "vue";
import totalSTD from "../assets/icon/student-male.png";
import totalTC from "../assets/icon/school-director.png";
import totalCourse from "../assets/icon/course-assign.png";
import totalRoom from "../assets/icon/room (1).png";

//std
import Anousone from "../assets/img/Anousone.jpg";
import Owen from "../assets/img/IMG_2586.jpg";
import Noel from "../assets/img/nut.png";
import Pin from "../assets/img/Untitled-1.png";

const toTal = [
  {
    label: "Total Students",
    amount: "1120",

    icon: totalSTD,
    color: "bg-purple-300",
  },
  {
    label: "Total Teacher",
    amount: "50",

    icon: totalTC,
    color: "bg-red-300",
  },
  {
    label: "Total Course",
    amount: "20",

    icon: totalCourse,
    color: "bg-blue-300",
  },
  {
    label: "Total Room",
    amount: "200",

    icon: totalRoom,
    color: "bg-orange-300",
  },
];

//student
const Students = [
  {
    icon: Anousone,
    fname: "Anousone",
    lname: "Silavong",
    Score: "100/100",
    Submit: "25/12/2022-8AM",
    Grad: "S",
    Pass: "Pass",
  },
  {
    icon: Owen,
    fname: "Owen",
    lname: "MaoLaoo",
    Score: "10/100",
    Submit: "25/12/2022-8AM",
    Grad: "F",
    Pass: "Fail",
  },
  {
    icon: Noel,
    fname: "Noel",
    lname: "Wasun",
    Score: "60/100",
    Submit: "25/12/2022-8AM",
    Grad: "C",
    Pass: "Pass",
  },
  {
    icon: Pin,
    fname: "Pin ",
    lname: "Varorant",
    Score: "50/100",
    Submit: "25/12/2022-8AM",
    Grad: "C",
    Pass: "Pass",
  },
];

async function testQuery() {
  const { data } = await useFetch("https://jsonplaceholder.typicode.com/todos");
  console.log(data.value);
}

function chBar() {
  var myChart = echarts.init(document.getElementById("chartBar"));
  myChart.setOption({
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: ["2020", "2021", "2022", "2023", "2024", "2025", "2026"],
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        name: "Direct",
        type: "bar",
        barWidth: "40%",
        data: [
          100,
          200,
          300,
          {
            value: 800,
            itemStyle: {
              color: "#DB00FF",
            },
          },
          400,
          500,
          600,
        ],
      },
    ],
  });
}

function chPie() {
  var myChart = echarts.init(document.getElementById("chartPie"));

  myChart.setOption({
    tooltip: {
      trigger: "",
    },
    legend: {
      top: "",
      left: "",
    },
    series: [
      {
        name: "",
        fontSize: "10",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 10,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 75, name: "In Prosess" },
          { value: 25, name: "Prosess" },
        ],
        color: ["#0047FF", "#D9D9D9"],
      },
    ],
  });
}

onMounted(() => {
  chBar();
  chPie();
});
</script>

<style scoped>
/* calendar Dynamic */

.wrapper {
  width: 500px;
  height: 450px;
}
.wrapper header {
  display: flex;
  align-items: center;
  padding: 25px 30px 10px;
  justify-content: space-between;
}
header .icons {
  display: flex;
}
header .icons span {
  height: 38px;
  width: 38px;
  margin: 0 1px;
  cursor: pointer;
  color: #878787;
  text-align: center;
  line-height: 38px;
  font-size: 1.9rem;
  user-select: none;
  border-radius: 50%;
}
.icons span:last-child {
  margin-right: -10px;
}

header .current-date {
  font-size: 1.45rem;
  font-weight: 500;
}

/* bodycalendar */
.calendar {
  padding: 20px;
  background: #f2f2f2;
  border-radius: 0%;
}
.calendar ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  text-align: center;
}
.calendar .day {
  margin-bottom: 20px;
}
.calendar li {
  color: #333;
  width: calc(100% / 7);
  font-size: 1.07rem;
}
.calendar .weeks li {
  font-weight: 500;
  cursor: default;
}
.calendar .day li {
  z-index: 1;
  cursor: pointer;
  position: relative;
  margin-top: 30px;
}
.day li.inactive {
  color: #aaa;
}
.day li.active {
  color: #f9f9f9;
}
.day li::before {
  position: absolute;
  content: "";
  left: 50%;
  top: 50%;
  height: 40px;
  width: 40px;
  z-index: -1;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}
.day li.active::before {
  background: #9b59b6;
}
.day li:not(.active):hover::before {
  background: #fff;
}
</style>
