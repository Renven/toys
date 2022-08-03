let id = 1;
const ToDo = {
    data() {
        return {
            toDo: [], //ToDo列表
            newToDo: "", //新增的备忘
            isActive: false,
            currentIndex: -1,
            chooseArr: []
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
            this.newToDo = "";
        },
        deleteTodo(index) {
            for (var i = 0; i <= this.toDo.length - 1; i++) {
                if (this.toDo[i].id === index) {
                    this.toDo.splice(i, 1)
                }
            }

            if (this.chooseArr.includes(index)) {
                for (var i = 0; i < this.chooseArr.length; i++) {
                    this.chooseArr[i] === index;
                    this.chooseArr.splice(i, 1)
                }
            } else {
                return;
            }

        },
        todoDone(index) {
            if (!this.chooseArr.includes(index)) {
                this.chooseArr.push(index)
            } else {
                for (var i = 0; i < this.chooseArr.length; i++) {
                    this.chooseArr[i] === index;
                    this.chooseArr.splice(i, 1)
                }

            }
        }
    }
}

Vue.createApp(ToDo).mount('#todo-app');