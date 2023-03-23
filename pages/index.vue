<template>
  <div class="box-border fixed bg-violet-50">
    <div class="h-screen w-full">
      <div class="w-full h-full">
        <!-- total -->
        <section class="grid grid-flow-col w-full">
          <article v-for="(item, index) in toTal" :key="index">
            <ul class="py-2 flex justify-center items-center">
              <li
                class="2xl:w-64 2xl:h-28 xl:w-56 xl:h-28 lg:w-40 lg:h-28 md:w-32 md:h-28 w-20 h-36 justify-center items-center rounded-xl"
                :class="[item.color]"
              >
                <div
                  class="py-[4px] flex flex-col justify-center items-center text-md font-thin"
                >
                  <Icon :name="item.icon" size="50" />
                  <p class="text-center text-black">{{ item.label }}</p>
                  <p class="text-center text-black">{{ item.amount }}</p>
                </div>
              </li>
            </ul>
          </article>
        </section>

        <!-- echarts -->
        <section class="p-2 m-2 grid grid-cols-3">
          <div
            class="bg-white rounded-lg overflow-hidden shadow-md relative mx-2 hover:brightness-90 col-span-2"
          >
            <p class="p-2 absolute">Statistics</p>
            <p class="h-48" id="chartBar"></p>
          </div>
          <div
            class="bg-white rounded-lg overflow-hidden shadow-md relative mx-2 hover:brightness-90"
          >
            <p class="p-2">Courses</p>
            <p class="h-40" id="chartPie"></p>
          </div>
        </section>

        <!-- table -->
        <section class="w-full h-full p-6 hidden md:block">
          <div class="overflow-hidden pr-4 p-4 bg-white rounded-lg shadow-lg">
            <ul class="flex pl-2 pt-2 justify-between">
              <li class="font-semibold">Database</li>
              <li class="flex space-x-8 mr-4 text-gray-500">
                <button class="btn p-1">Teacher</button>
                <button class="btn p-1">Students</button>
                <button class="btn p-1">Staff</button>
              </li>
            </ul>

            <table class="table-fixed w-full">
              <thead>
                <tr class="font-medium">
                  <td>
                    <p
                      class="flex justify-center items-center overflow-hidden m-2"
                    >
                      Students Name
                    </p>
                  </td>
                  <td>
                    <p class="flex justify-center items-center overflow-hidden">
                      Score
                    </p>
                  </td>
                  <td>
                    <p class="flex justify-center items-center overflow-hidden">
                      Submited
                    </p>
                  </td>
                  <td>
                    <p class="flex justify-center items-center overflow-hidden">
                      Grad
                    </p>
                  </td>
                  <td>
                    <p class="flex justify-center items-center overflow-hidden">
                      Pass/Fail
                    </p>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="border-t-2 border-black border-opacity-50 text-gray-500 cursor-pointer bg-white p-2 hover:brightness-75 transition-all duration-1000 ease-out"
                  v-for="(item, index) in students"
                  :key="index"
                >
                  <td class="flex space-x-2">
                    <p class="flex justify-center items-center p-1">
                      {{ item.std_fname }} {{ item.std_lname }}
                    </p>
                  </td>
                  <td>
                    <p class="flex justify-center items-center">
                      {{ item.std_date_of_birth }}
                    </p>
                  </td>
                  <td>
                    <p class="flex justify-center items-center">
                      {{ item.std_parent }}
                    </p>
                  </td>
                  <td>
                    <p class="flex justify-center items-center">
                      {{ item.std_gender }}
                    </p>
                  </td>
                  <td>
                    <p class="flex justify-center items-center">
                      {{ item.std_parent_phone }}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section class="block md:hidden lg:hidden xl:hidden 2xl:hidden p-4">
          <div>
            <p class="text-2xl flex justify-center text-red-500">Error</p>
            <p class="flex justify-center">Database not subport low screen!</p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from "echarts";
import { GET_STUDENT_LIMIT } from "~~/gql/query/studentQuery";
import { Student } from "~~/types/student";
import { onMounted } from "vue";

definePageMeta({
  middleware: "user-only",
});

const students = ref<Student[]>([]);
const search = ref("");

//
const getStudent = async () => {
  const { data, error } = await useAsyncQuery<any>(GET_STUDENT_LIMIT, {});
  if (error.value) {
    console.error(error.value);
  }
  console.log(data.value.student);
  const { student: std } = data.value;
  students.value = std;
};

watchEffect(() => {
  getStudent();
});

const toTal = [
  {
    label: "Total Students",
    amount: "1120",
    icon: "ph:student",
    color: "bg-purple-300 text-purple-800",
  },
  {
    label: "Total Teacher",
    amount: "50",
    icon: "ph:chalkboard-teacher",
    color: "bg-red-200 text-red-800",
  },
  {
    label: "Total Course",
    amount: "20",
    icon: "ph:books",
    color: "bg-blue-200 text-blue-800",
  },
  {
    label: "Total Room",
    amount: "200",
    icon: "ic:round-home",
    color: "bg-orange-300 text-orange-800",
  },
];

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
        barWidth: "20%",
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
