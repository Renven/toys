let id = 1;
const ToDo = {
    data() {
        return {
            toDo: [], //ToDo列表
            newToDo: "", //新增的备忘
            isActive: false,
        }
    },
    methods: {
        addToDo() {
            //新增内容为空就不管
            if (!this.newToDo) {
                return;
            }
            //往ToDo列表中新增一条
            //新增的ToDo插在最前面，所以使用 unshift 而不是 push
            this.toDo.unshift({
                id: id++,
                title: this.newToDo,
            });
            //添加成功后，清空输入框
            this.newToDo = " ";
        },
        deleteTodo(index) {
            this.toDo.splice(index, 1)
        },
        todoDone(index) {
            this.isActive = !this.isActive;
        }
    }
}

Vue.createApp(ToDo).mount('#todo-app');