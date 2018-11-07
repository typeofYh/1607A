import fun from "@/js/index";
import "@/css/index.css";
import "@/fonts2/iconfont.css";
import axios from "axios";
import Vue from 'vue';

let vm = new Vue({
    el: "#app",
    template: `
        <div id="wrap">{{age}}
            <p v-if="mes.mes" class="p">{{mes.success}}</p>
            <div>
                您{{check}}成年
            </div>
        </div>
    `,
    data: {
        age: 14,
        mes: {}
    },
    computed: { //计算属性
        // check() { //check get方法
        //     return this.age >= 18 ? '已' : '未'
        // }
        check: {
            get() {
                return this.age >= 18 ? '已' : '未'
            },
            set(val) {
                this.age = val;
            }
        }
    },
    beforeCreate() {
        //初始化 配置项未挂载在实例
        console.log(this.age);
    },
    created() {
        //初始化完成,配置项分配到实例
        console.log(this.age);
    },
    beforeMount() {
        //dom节点未生成前
        console.log(document.querySelector('#wrap'))
    },
    mounted() {
        //dom节点加载完成
        console.log(document.querySelector('#wrap'));
        //发请求请求数据
        axios.get('/api/data').then(res => {
            this.mes = res.data
        })
    },
    beforeUpdate() {
        //数据发生变化，但是dom未完成
        console.log(document.querySelector('.p'))
        console.log('beforeUpdated');
    },
    updated() {
        //dom节点更新完成
        console.log(document.querySelector('.p'))
        console.log('updated');
    }
});

window.vm = vm;