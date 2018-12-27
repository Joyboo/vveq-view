<template>
  <layoutindex>

    <template slot="layoutbody">
      <el-tabs type="border-card">
        <el-tab-pane label="添加分类">
          <div class="admin-label">
            <el-form :model="cateValue" status-icon size="mini" ref="cateValue"
                     label-width="80px" class="demo-ruleForm">
              <el-form-item label="分类名">
                <el-input type="text" placeholder="请输入分类名" v-model="cateValue.name"
                          autocomplete="off"></el-input>
              </el-form-item>

              <el-form-item label="排序">
                <el-input-number v-model="cateValue.sort" :min="1" :max="100"
                                 label="数字越大排名越靠前"></el-input-number>
              </el-form-item>

              <el-form-item>
                <el-button type="primary" @click="submitForm('cateValue')">提交</el-button>
                <el-button @click="resetForm('cateValue')">重置</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-tab-pane>

        <el-tab-pane label="添加标签">
          <div class="admin-label">
            <el-form :model="tagValue" status-icon size="mini" ref="tagValue"
                     label-width="80px" class="demo-ruleForm">
              <el-form-item label="标签名">
                <el-input type="text" placeholder="请输入标签名" v-model="tagValue.name"
                          autocomplete="off"></el-input>
              </el-form-item>

              <el-form-item>
                <el-button type="primary" @click="submitForm('tagValue')">提交</el-button>
                <el-button @click="resetForm('tagValue')">重置</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-tab-pane>

      </el-tabs>

    </template>
  </layoutindex>
</template>

<script>
  // todo 因为现在还没有后台，暂时在这里模拟，后期删除
  import layoutindex from "../components/layout/index"
  import {mapState} from 'vuex'
  import http from "../util/http"

  export default {
    name: "admin",
    components: {layoutindex},
    data() {
      return {
        cateValue: {
          name: "",
          sort: ""
        },
        tagValue: {
          name: ""
        }
      }
    },
    methods: {
      submitForm(formName) {
        if (formName == 'cateValue') {
          this.cateValue.insuid = this.userInfo.id;
          http.post("/admin/cate", this.cateValue)
            .then(res => {
              if (res.data.status == 1) {
                this.cateValue.name = "";
                this.cateValue.sort = 1;
                this.$message.success("添加成功");
              } else {
                this.$message.error("添加失败");
              }
            })
            .catch(err => {
              console.log("err1:", err)
            });
        } else if (formName == 'tagValue') {
          this.tagValue.insuid = this.userInfo.id;
          http.post("/admin/tag", this.tagValue)
            .then(res => {
              if (res.data.status == 1) {
                this.tagValue.name = "";
                this.$message.success("添加成功");
              } else {
                this.$message.error("添加失败");
              }
            })
            .catch(err => {
              console.log("err1:", err)
            });
        }
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    computed: {
      ...mapState({
        userInfo: state => state.userInfo
      })
    }
  }
</script>

<style scoped>
  .admin-label {
    width: 50%;
  }
</style>
