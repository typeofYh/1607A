import "./css/style.css";

import Vue from 'vue';

let vm = new Vue({
    el: '#app',
    data: {
        title: '购物车',
        abc: "zs",
        list: [{
            name: '苹果',
            checked: true
        }, {
            name: '香蕉',
            checked: false
        }, {
            name: '榴莲',
            checked: false
        }],
        allchecked: false
    },
    methods: {
        checkone(ind) {
            this.list[ind].checked = !this.list[ind].checked;
            this.allchecked = this.list.every(item => item.checked);
        },
        checkall() {
            this.allchecked = !this.allchecked;
            this.list.map(item => { item.checked = this.allchecked });
        }
    }
});