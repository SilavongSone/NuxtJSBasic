<template>
  <div class="bg-violet-50 w-full h-full">
    <section class="flex justify-between ml-3 pt-4 items-center">
      <!-- Department -->
      <div class="flex items-center">
        <div class="font-medium pr-10 text-sm">TimeTable</div>
        <div class="flex pr-6 items-center text-sm">
          <div class="pr-1">Department :</div>
          <div class="bg-white shadow-md p-1 rounded-full text-sm">
            <select>
              <option>Information Technology</option>
              <option>Department of Accounting</option>
              <option>Electonic</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Years -->
      <div class="flex pr-20 items-center text-sm">
        <div class="pr-1">Years :</div>
        <div class="bg-white shadow-md p-1 rounded-full px-5">
          <select class="bg-white w-full">
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
      </div>

      <!-- Classroom -->
      <div class="flex pr-10 items-center text-sm">
        <div class="pr-1">Classroom :</div>
        <div class="bg-white shadow-md rounded-full p-1 px-5">
          <select class="bg-white w-full">
            <option>IT13M1</option>
            <option>IT13M2</option>
            <option>IT13M3</option>
          </select>
        </div>
      </div>
      <section></section>
    </section>

<!-- table -->
    <section class="m-2 text-sm">
      <table class="table-fixed w-full">
        <thead class="">
          <tr class="font-medium">
            <td class="p-3 border-4 bg-white rounded-2xl border-violet-50 flex justify-center items-center">
              Time
            </td>
            <td class="border-4 bg-white rounded-2xl border-violet-50 "><p class="flex justify-center items-center">Mon</p></td>
            <td class="border-4 bg-white rounded-2xl border-violet-50 "><p class="flex justify-center items-center">Tue</p></td>
            <td class="border-4 bg-white rounded-2xl border-violet-50 "><p class="flex justify-center items-center">Wen</p></td>
            <td class="border-4 bg-white rounded-2xl border-violet-50 "><p class="flex justify-center items-center">Thu</p></td>
            <td class="border-4 bg-white rounded-2xl border-violet-50 "><p class="flex justify-center items-center">Fri</p></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              class="p-3 border-4 bg-white rounded-2xl border-violet-50"
              v-for="(item, timeTable) in time1"
              :key="timeTable"
            >
              <p class="flex justify-center items-center">{{ item }}</p>
            </td>
          </tr>
          <tr>
            <td
              class="p-3 border-4 bg-white rounded-2xl border-violet-50"
              v-for="(item, timeTable) in time2"
              :key="timeTable"
            >
              <p class="flex justify-center items-center">{{ item }}</p>
            </td>
          </tr>
          <tr>
            <td
              class="p-3 border-4 bg-white rounded-2xl border-violet-50"
              v-for="(item, timeTable) in time3"
              :key="timeTable"
            >
              <p class="flex justify-center items-center">{{ item }}</p>
            </td>
          </tr>
          <tr>
            <td
              class="p-3 border-4 bg-white rounded-2xl border-violet-50"
              v-for="(item, timeTable) in time4"
              :key="timeTable"
            >
              <p class="flex justify-center items-center">{{ item }}</p>
            </td>
          </tr>

          <!-- Break -->
          <tr class="text-black font-medium">
            <td
              class="p-3 border-4 bg-red-400 rounded-2xl border-violet-50"
              v-for="(item, timeTable) in time5"
              :key="timeTable"
            >
              <p class="flex justify-center items-center">{{ item }}</p>
            </td>
          </tr>
          <tr>
            <td
              class="p-3 border-4 bg-white rounded-2xl border-violet-50"
              v-for="(item, timeTable) in time6"
              :key="timeTable"
            >
              <p class="flex justify-center items-center">{{ item }}</p>
            </td>
          </tr>
          <tr>
            <td
              class="p-3 border-4 bg-white rounded-2xl border-violet-50"
              v-for="(item, timeTable) in time7"
              :key="timeTable"
            >
              <p class="flex justify-center items-center">{{ item }}</p>
            </td>
          </tr>
          <tr>
            <td
              class="p-3 border-4 bg-white rounded-2xl border-violet-50"
              v-for="(item, timeTable) in time8"
              :key="timeTable"
            >
              <p class="flex justify-center items-center">{{ item }}</p>
            </td>
          </tr>
          <tr>
            <td
              class="p-3 border-4 bg-white rounded-2xl border-violet-50"
              v-for="(item, timeTable) in time9"
              :key="timeTable"
            >
              <p class="flex justify-center items-center">{{ item }}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      // Array
      // hobby: ["Playingame", "listenMusic"],

      // Object
      time1: {
        time1: "8:00-8:45 AM",
        mon: "Adobe",
        tue: "",
        wen: "CSS",
        thu: "JsCript",
        fri: "",
      },
      time2: {
        time1: "9:00-9:45 AM",
        mon: "Adobe",
        tue: "",
        wen: "CSS",
        thu: "JsCript",
        fri: "",
      },

      time3: {
        time3: "10:00-10:45 AM",
        mon: "",
        tue: "CSS",
        wen: "",
        thu: "",
        fri: "C++",
      },
      time4: {
        time4: "11:00-11:45 AM",
        mon: "",
        tue: "CSS",
        wen: "",
        thu: "",
        fri: "C++",
      },
      time5: {
        time5: "Break",
        mon: "Break",
        tue: "Break",
        wen: "Break",
        thu: "Break",
        fri: "Break",
      },
      time6: {
        time6: "1:00-1:45 PM",
        mon: "HTML",
        tue: "",
        wen: "JScript",
        thu: "PHP",
        fri: "",
      },
      time7: {
        time7: "2:00-2:45 PM",
        mon: "HTML",
        tue: "",
        wen: "JScript",
        thu: "PHP",
        fri: "",
      },
      time8: {
        time8: "3:00-3:45 PM",
        mon: "",
        tue: "PHP",
        wen: "",
        thu: "",
        fri: "HTML",
      },
      time9: {
        time8: "4:00-4:45 PM",
        mon: "",
        tue: "PHP",
        wen: "",
        thu: "",
        fri: "HTML",
      },
    };
  },
};
</script>
