<template>
  <main>
    <div class="container mt-3 pt-4">
      <h2 class="text-center text-success">VUE CRUD</h2>
      <div class="action gap-2 d-flex justify-content-end">
        <div class="searchbox">
          <form>
            <div class="form-group">
              <div class="input-group border rounded p-1">
                <input
                  type="text"
                  class="form-control border-0"
                  placeholder="Search Record by name"
                />
                <span class="input-group-addon">
                  <button class="btn btn-secondary border-0" disabled>
                    <font-awesome-icon icon="fa-solid fa-search" />
                  </button>
                </span>
              </div>
            </div>
          </form>
        </div>

        <button class="btn btn-danger">
          <font-awesome-icon icon="fa-solid fa-trash" />
        </button>
        <div class="dropdown">
          <button
            class="btn btn-primary"
            id="dropdownMenuButton"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <font-awesome-icon icon="fa-solid fa-filter" />
          </button>
          <ul
            class="dropdown-menu"
            aria-labelledby="dropdownMenuButton"
            role="menu"
          >
            <li class="dropdown-item">
              <label for="actived">
                <input
                  id="actived"
                  type="checkbox"
                  value="actived"
                  v-model="filteredList"
                />
                <span> Actived </span>
              </label>
            </li>
            <li class="dropdown-item">
              <input type="checkbox" value="deactived" v-model="filteredList" />
              Deactived
            </li>
            <li class="dropdown-item">
              <input type="checkbox" value="created" v-model="filteredList" />
              Created
            </li>
          </ul>
        </div>
        <button class="btn btn-success">
          <font-awesome-icon icon="fa-solid fa-add" />
        </button>
      </div>
      <table class="table table-bordered table-striped mt-5">
        <thead>
          <tr>
            <template v-for="(list, index) in columnList" :key="index">
              <th
                :class="{
                  'bg-light': list.order === 'A' || list.order === 'D',
                }"
                scope="col"
                @click="toggleOrder(index)"
              >
                <div class="w-100 d-flex justify-content-between px-3">
                  <span class="lh-1"> {{ list.label }} </span>
                  <template v-if="list.order === 'D'">
                    <font-awesome-icon
                      icon="fa-solid fa-arrow-down-short-wide"
                    />
                  </template>
                  <template v-else>
                    <font-awesome-icon icon="fa-solid fa-arrow-up-short-wide" />
                  </template>
                </div>
              </th>
            </template>
          </tr>
        </thead>
        <tbody>
          <template
            v-for="(
              { id, name, old, email, status, birthday }, index
            ) in listRow"
            :key="index"
          >
            <tr>
              <th class="text-center" scope="row">{{ id }}</th>
              <td class="ps-4">{{ name }}</td>
              <td class="ps-4">{{ old }}</td>
              <td class="ps-4">{{ email }}</td>
              <td class="ps-4">{{ status }}</td>
              <td class="ps-4">{{ birthday }}</td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      isOrderdData: null,
      // temp: false,
      columnList: [
        { order: "", label: "Id" },
        { order: "", label: "Name" },
        { order: "", label: "Old" },
        { order: "", label: "Email" },
        { order: "", label: "Status" },
        { order: "", label: "Birthday" },
      ],
      dataList: [
        {
          id: 1,
          name: "a",
          old: 18,
          email: "ttquoccuong@gmail.com",
          status: "deactived",
          birthday: "2018-04-12",
        },
        {
          id: 2,
          name: "b",
          old: 20,
          email: "ttquoccuong@gmail.com",
          status: "actived",
          birthday: "2018-04-1",
        },
        {
          id: 3,
          name: "c",
          old: 16,
          email: "ttquoccuong@gmail.com",
          status: "actived",
          birthday: "2018-04-11",
        },
        {
          id: 4,
          name: "e",
          old: 18,
          email: "ttquoccuong@gmail.com",
          status: "created",
          birthday: "2018-04-12",
        },
        {
          id: 5,
          name: "b",
          old: 18,
          email: "ttquoccuong@gmail.com",
          status: "deactived",
          birthday: "2018-04-12",
        },
        {
          id: 6,
          name: "a",
          old: 18,
          email: "ttquoccuong@gmail.com",
          status: "actived",
          birthday: "2018-04-12",
        },
        {
          id: 7,
          name: "g",
          old: 18,
          email: "ttquoccuong@gmail.com",
          status: "created",
          birthday: "2018-04-12",
        },
        {
          id: 8,
          name: "d",
          old: 18,
          email: "ttquoccuong@gmail.com",
          status: "deactived",
          birthday: "2018-04-12",
        },
        {
          id: 9,
          name: "p",
          old: 18,
          email: "ttquoccuong@gmail.com",
          status: "deactived",
          birthday: "2018-04-12",
        },
      ],
      filteredList: [],
    };
  },
  computed: {
    listRow: function () {
      if (this.isOrderdData?.order === "A") {
        this.setDataInAscending(this.isOrderdData?.label);
      } else if (this.isOrderdData?.order === "D") {
        this.setDataInDescending(this.isOrderdData?.label);
      }
      if (this.filteredList.length > 0) {
        return this.dataList.filter((row) => {
          return this.filteredList.find(
            (value) => value.toLowerCase() == row.status
          );
        });
      }
      return this.dataList;
    },
  },
  methods: {
    toggleOrder(pos) {
      this.columnList.filter((item, index) => {
        if (item.order.length > 0 && index !== pos) {
          return (item.order = "");
        }
      });
      if (this.columnList[pos].order === "") {
        this.columnList[pos].order = "D";
      } else if (this.columnList[pos].order === "D") {
        this.columnList[pos].order = "A";
      } else {
        this.columnList[pos].order = "D";
      }
      console.log(this.isOrderdData);
      this.isOrderdData = this.columnList[pos];
    },

    setDataInAscending(args) {
      var columnName = args.toLowerCase();
      this.dataList.sort((currentObj, prevObj) => {
        if (currentObj[columnName] < prevObj[columnName]) {
          return -1;
        }
        if (currentObj[columnName] > prevObj[columnName]) {
          return 1;
        }
        return 0;
      });
    },
    setDataInDescending(args) {
      var columnName = args.toLowerCase();
      this.dataList.sort((currentObj, prevObj) => {
        if (currentObj[columnName] > prevObj[columnName]) {
          return -1;
        }
        if (currentObj[columnName] < prevObj[columnName]) {
          return 1;
        }
        return 0;
      });
    },
  },

  watch: {
    columnList: {
      handler() {
        if (this.isOrderdData) {
          this.columnList.find(
            (item) => item.order === this.isOrderdData.order
          );
        }
      },
      deep: true,
    },
    filteredList: {
      handler() {
        console.log(this.filteredList);
      },
    },
  },
};
</script>
<style scoped>
button {
  height: 45px !important;
}
</style>
