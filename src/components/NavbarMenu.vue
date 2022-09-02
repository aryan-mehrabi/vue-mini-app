<template>
  <div>
    <nav>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | -->
      <div class="menu-item">
        <p>menu item</p>
        <ul>
          <li>
            <router-link to="/colors">رنگ ها</router-link>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </li>
          <li><router-link to="/form">فرم</router-link></li>
          <li><router-link to="/colorpicker">color picker</router-link></li>
          <li>
            <router-link to="/users">یوزر</router-link>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
nav {
  padding: 10px;
  display: flex;
  gap: 10px;

  ul {
    display: none;
    list-style: none;
    position: absolute;
    background-color: aliceblue;
    padding: 5px;
  }

  .menu-item {
    position: relative;
    &:hover {
      & > ul {
        display: block;
      }
    }
    & > ul {
      top: 100%;
      left: 0;
      li {
        position: relative;
        &:hover {
          & > ul {
            display: block;
          }
        }
      }
      ul {
        top: 0;
        left: 100%;
      }
    }
  }
}
</style>

<script>
export default {
  name: "NavbarMenu",
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>
