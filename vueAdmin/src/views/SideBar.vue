<template>
  <div class="logo-wrapper">
    <div class="imgbox">
      <img src="../assets/logo.png" alt="" />
    </div>
    <div class="brand_name">Hope <span>UI</span></div>

    <div class="toggle-sidebar-btn">
      <img src="../assets/ArrowRight.png" alt="" />
    </div>
  </div>
  <div class="menu-items">
    <div class="menu-items-type" v-for="(items, index) in sidebar" :key="index">
      <h6 class="text-disable">
        {{ items.name }}
      </h6>
      <div class="itemlist" v-if="items?.child.length > 0">
        <ul v-for="(menuItem, index) in items?.child" :key="index">
          <li @click.prevent="menuItem.collapse = !menuItem.collapse">
            <router-link :to="{ name: menuItem.routeTo }">
              <div class="item">
                <font-awesome-icon :icon="menuItem.icon" />
                <span>
                  {{ menuItem.name }}
                </span>
              </div>
              <div v-if="menuItem?.child?.length > 0">
                <div v-if="menuItem.collapse">
                  <font-awesome-icon icon="fa-solid fa-angle-right" />
                </div>
                <div v-else>
                  <font-awesome-icon icon="fa-solid fa-angle-down" />
                </div>
              </div>
            </router-link>
          </li>
          <ul v-if="menuItem.child.length > 0 && !menuItem.collapse">
            <div v-for="(subitem, index) in menuItem?.child" :key="index">
              <li>
                <a href="">
                  <div class="item">
                    <font-awesome-icon icon="fa-solid fa-circle" />
                    <span>
                      {{ subitem.name }}
                    </span>
                  </div>
                </a>
              </li>
            </div>
          </ul>
        </ul>
      </div>
    </div>
  </div>
  <div class="bg-img">
    <img src="../assets/sidebg.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      sidebar: menuList,
    };
  },
};
const menuList = [
  {
    id: 0,
    name: "Home",
    child: [
      {
        id: 0,
        name: "Dashboard",
        routeTo: "dashboard",
        icon: "fa-grip-horizontal",
        child: [],
      },
      {
        id: 1,
        name: "Menu style",
        icon: "fa-sliders",
        collapse: true,
        child: [
          {
            id: 0,
            name: "Grid view",
          },
          {
            id: 1,
            name: "Folder view",
          },
          {
            id: 2,
            name: "Icon view",
          },
          {
            id: 3,
            name: "Pallete view",
          },
        ],
      },
    ],
  },
  {
    id: 1,
    name: "Pages",
    child: [
      {
        id: 0,
        name: "Example",
        routeTo: "",
        icon: "fa-puzzle-piece",
        collapse: true,
        child: [
          {
            id: 0,
            name: "MMORPG",
          },
          {
            id: 1,
            name: "Puzzles",
          },
          {
            id: 3,
            name: "Battle Royale",
          },
          {
            id: 4,
            name: "Arcade",
          },
        ],
      },
      {
        id: 1,
        name: "Messages",
        routeTo: "",
        icon: "fa-comment",
        collapse: true,
        child: [
          {
            id: 0,
            name: "Chats",
          },
          {
            id: 1,
            name: "Groups",
          },
          {
            id: 3,
            name: "Channels",
          },
          {
            id: 4,
            name: "Calls",
          },
        ],
      },
      {
        id: 2,
        name: "Users",
        routeTo: "",
        icon: "fa-users",
        collapse: true,
        child: [
          {
            id: 0,
            name: "User Profile",
          },
          {
            id: 1,
            name: "Edit User",
          },
          {
            id: 3,
            name: "User List",
          },
        ],
      },
      {
        id: 3,
        name: "Security",
        routeTo: "",
        icon: "fa-shield",
        collapse: true,
        child: [
          {
            id: 0,
            name: "Monitoring",
          },
          {
            id: 1,
            name: "Firewall",
          },
          {
            id: 3,
            name: "Backups",
          },
        ],
      },
      {
        id: 4,
        name: "Location",
        routeTo: "",
        icon: "fa-location-dot",
        collapse: true,
        child: [
          {
            id: 0,
            name: "Default",
          },
          {
            id: 1,
            name: "Traffic",
          },
          {
            id: 2,
            name: "Satelite",
          },
          {
            id: 3,
            name: "Terrain",
          },
          {
            id: 4,
            name: "Transport",
          },
        ],
      },
      {
        id: 5,
        name: "Cloud",
        icon: "fa-cloud",
        routeTo: "",
        child: [],
      },
      {
        id: 6,
        name: "Notification",
        icon: "fa-bell",
        routeTo: "",
        child: [],
      },
      {
        id: 7,
        name: "Wallets",
        icon: "fa-wallet",
        routeTo: "",
        child: [],
      },
    ],
  },
];
</script>

<style scoped>
.logo-wrapper {
  position: relative;
  width: 100%;
  height: 84px;
  padding: 24px 32px 24px 0;
  border-bottom: 1px solid #e9ecef;
  display: flex;
  gap: 14px;
  justify-content: center;
  align-items: center;
}
.imgbox {
  width: 28px;
  height: 28px;
}
.imgbox img {
  width: 100%;
}
.brand_name {
  font-weight: 500;
  font-size: 32px;
  color: #0048b2;
}
.brand_name span {
  font-weight: 600;
}
.toggle-sidebar-btn {
  position: absolute;
  right: 0px;
  width: 32px;
  height: 32px;
  box-shadow: -4px 3px 9px rgba(138, 146, 166, 0.3);
  border-radius: 50%;
  background: #3a57e8;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.menu-items {
  padding: 0 12px;
  width: 100%;
}
.menu-items .menu-items-type {
  margin: 15px 0 15px 14px;
}
.p-12 {
  padding: 12px 0 !important;
}
.text-disable {
  color: #adb5bd;
  font-weight: 600;
  font-size: 16px;
}
.itemlist {
  /* border: 1px solid red; */
}
.itemlist ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.itemlist ul li {
  border-radius: 4px;
}
.itemlist ul li:hover {
  background: #3a57e8;
  box-shadow: 0px 2px 4px rgba(138, 146, 166, 0.3);
}
.itemlist ul li:hover a {
  color: #fff;
}
.itemlist ul li:hover a .item svg {
  color: #fff;
}
.itemlist ul li a {
  color: #8a92a6;
  padding: 12px 24px;
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
.itemlist ul li a .item {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.itemlist ul li a .item svg {
  color: #8a92a6;
  width: 20px;
  height: 20px;
}

/* sub menu design */
.itemlist ul ul {
  margin: 4px 0 0 22px;
}

.itemlist ul ul li a {
  /* padding-left: 31px; */
  padding: 8px 24px 8px 31px;
}
.itemlist ul li a .item {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
}
.itemlist ul ul li a .item svg {
  color: #8a92a6;
  width: 9px;
  height: 9px;
}

.bg-img {
  position: absolute;
  height: 260px;
  bottom: 3.4rem;
  z-index: -10;
}
.bg-img img {
  height: 100%;
}
/* .router-link-exact-active:hover {
  background-color: transparent;
} */
</style>
