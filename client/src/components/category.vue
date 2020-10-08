<template>
        <div class="list text" id="category">
            <header>{{ category.category }}</header>
            <Task
                v-for="task in filterCategory"
                :key="task.id"
                :task="task"
                @remove="remove"
            ></Task>
            <footer><br>
                <center>
                   <form @submit.prevent="add">
                    <input v-model="title" type="text" id="title" placeholder="add task" height="10px">
                    <input type="submit" class="btn btn-primary" value="Submit">
                   </form>
                </center><br>
            </footer> 
        </div>
</template>

<script>
import Task from './task'
export default {
    name : 'Category',
     data() {
        return {
            title : ''
        }
    },
    components : {Task},
    props : [ 'category','tasks' ],
    computed : {
        filterCategory() {
            return this.tasks.filter(task => task.category == this.category.category )
        }
    },
    methods : {
        add() {
            let payload = {
                title : this.title,
                category : this.category.category
            }
            this.$emit('add',payload)
        },
         remove(id) {
            this.$emit('remove',id)
        }
    }
}
</script>

<style>

</style>