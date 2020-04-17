<template>
  <div class="index">
    <el-container>
      <!-- 侧边导航 -->
      <el-aside style="width:null">
        <el-menu
          default-active="1-4-1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#20222A"
          text-color="#BDBDC0"
          active-text-color="#fff"
          :collapse="isCollapse"
        >
          <p class="head">
            <template>
              <i class="el-icon-s-custom" v-show="isCollapse"></i>
              <h1 v-show="!isCollapse">Admin</h1>
            </template>
          </p>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-s-home"></i>
              <span>主页</span>
            </template>

            <el-menu-item index="1-1">选项1</el-menu-item>

            <el-menu-item index="1-2">选项2</el-menu-item>

            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-picture-outline-round"></i>
              <span>组件</span>
            </template>

            <el-menu-item index="2-1">选项1</el-menu-item>

            <el-menu-item index="2-2">选项2</el-menu-item>

            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-s-ticket"></i>
              <span>页面</span>
            </template>

            <el-menu-item index="3-1">选项1</el-menu-item>

            <el-menu-item index="3-2">选项2</el-menu-item>

            <el-menu-item index="3-3">选项3</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-tickets"></i>
              <span>应用</span>
            </template>

            <el-menu-item index="4-1">选项1</el-menu-item>

            <el-menu-item index="4-2">选项2</el-menu-item>

            <el-menu-item index="4-3">选项3</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-connection"></i>
              <span>高级</span>
            </template>

            <el-menu-item index="5-1">选项1</el-menu-item>

            <el-menu-item index="5-2">选项2</el-menu-item>

            <el-menu-item index="5-3">选项3</el-menu-item>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-user-solid"></i>
              <span>用户</span>
            </template>

            <el-menu-item index="6-1">选项1</el-menu-item>

            <el-menu-item index="6-2">选项2</el-menu-item>

            <el-menu-item index="6-3">选项3</el-menu-item>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title">
              <i class="el-icon-s-tools"></i>
              <span>设置</span>
            </template>

            <el-menu-item index="7-1">选项1</el-menu-item>

            <el-menu-item index="7-2">选项2</el-menu-item>

            <el-menu-item index="7-3">选项3</el-menu-item>
          </el-submenu>
          <el-submenu index="8">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>授权</span>
            </template>
            <el-menu-item index="8-1">选项1</el-menu-item>
            <el-menu-item index="8-2">选项2</el-menu-item>
            <el-menu-item index="8-3">选项3</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <!-- 头部 -->
        <el-header>
          <div class="up">
            <div class="head-left">
              <el-button
                icon="el-icon-s-fold"
                v-model="isCollapse"
                @click="change"
                v-show="!isCollapse"
              ></el-button>
              <el-button
                icon="el-icon-s-unfold"
                v-model="isCollapse"
                @click="change"
                v-show="isCollapse"
              ></el-button>
              <el-button icon="el-icon-delete"></el-button>
              <el-button icon="el-icon-refresh-right"></el-button>
              <el-autocomplete placeholder="搜索..." @select="handleSelect"></el-autocomplete>
            </div>
            <div class="head-right">
              <i class="el-icon-edit"></i>
              <i class="el-icon-share"></i>
              <i class="el-icon-delete"></i>
              <i class="el-icon-headset"></i>
              <i class="el-icon-data-line"></i>
            </div>
          </div>
          <div class="down">
            <div class="down-left">
              <el-button icon="el-icon-d-arrow-left" class="iconLeft-btn"></el-button>
              <el-button icon="el-icon-s-home" class="iconLeft-btn"></el-button>
            </div>
            <div class="down-right">
              <el-button icon="el-icon-d-arrow-right" class="iconLeft-btn"></el-button>
              <el-button icon="el-icon-arrow-down" class="iconLeft-btn"></el-button>
            </div>
          </div>
        </el-header>
        <!-- 主体内容 -->
        <el-main>
          <el-row :gutter="10">
            <!-- 左边快捷放肆 -->
            <el-col :sm="18">
              <div class="grid-content bg-purple">
                <el-row :gutter="10">
                  <el-col :md="12">
                    <div class="grid-content bg-purple" style="background:pink">
                      <div class="shortcut">
                        <label>
                          <el-button icon="el-icon-delete"></el-button>主页
                        </label>
                        <label>
                          <el-button icon="el-icon-delete"></el-button>主页2
                        </label>
                        <label>
                          <el-button icon="el-icon-delete"></el-button>主页3
                        </label>
                        <label>
                          <el-button icon="el-icon-delete"></el-button>主页4
                        </label>
                        <label>
                          <el-button icon="el-icon-delete"></el-button>主页5
                        </label>
                        <label>
                          <el-button icon="el-icon-delete"></el-button>主页6
                        </label>
                      </div>
                      <div></div>
                    </div>
                  </el-col>
                  <el-col :md="12">
                    <div class="grid-content bg-purple-light" style="background:red"></div>
                  </el-col>
                </el-row>
              </div>
            </el-col>
            <!-- 右边 -->
            <el-col :sm="6">
              <div class="grid-content bg-purple-light"></div>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    change() {
      this.$data.isCollapse = !this.$data.isCollapse;
    }
  }
};
</script>
<style lang="less" >
.index {
  height: 100%;
}
.el-container {
  height: 100%;
}
// 侧边栏
.el-aside {
  height: 100%;
  .el-menu {
    height: 100%;
  }
  .head {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      color: #909399;
      font-size: 18px;
    }
    h1 {
      line-height: 50px;
      text-align: center;
      color: #bdbdc0;
    }
   
  }
  // 字体大小
  .el-submenu {
    .el-submenu__title {
      font-size: 12px !important;
    }
    .el-menu-item {
      font-size: 12px;
    }
    .is-active {
      color: #fff !important;
      background: #009688 !important;
    }
  }
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
// 头部
.el-header {
  height: 72px !important;
  padding: 0;
  border-bottom: 1px solid #ccc;
  .el-button {
    outline: none;
    border: none;
    width: 30px;
    height: 30px;
    padding: 12px;
  }
  .el-button:hover {
    background: #fff;
  }
  .up {
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    // 头部左边部分
    .head-left {
      width: 300px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 18px;
      .el-input__inner {
        border: none;
        border: none;
      }
    }
    // 头部右边部分
    .head-right {
      width: 180px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-size: 18px;
      padding: 5px 5px;
    }
    .el-radio-button__inner {
      width: 50px;
      height: 50px;
    }
  }
  // header面包屑部分{
  .down {
    height: 30px;
    display: flex;
    justify-content: space-between;
    .down-left {
      display: flex;
      justify-content: space-between;
      .iconLeft-btn {
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .iconLeft-btn:hover {
        background: #f5f5f5;
      }
    }
    .down-right {
      display: flex;
      justify-content: space-between;
    }
  }
}
// main主题内容
.el-main {
  padding: 0;
  .shortcut {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
}

.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
 
  
