<template>
        <div class="list text" id="category">
            <header>{{ category.category }}</header>
            <draggable 
            :list="filterCategory" group="task" 
            :move="move" 
            :category="category" 
            @end="updateCategory">
                <Task
                v-for="task in filterCategory"
                :key="task.id"
                :task="task"
                @remove="remove"
                @update="update"
            ></Task>
            </draggable>
            <footer><br>
                <center>
                   <form @submit.prevent="add">
                    <input v-model="title" type="text" id="title" height="10px" placeholder="add task" >
                    <input type="submit" class="btn btn-primary" value="Submit">
                   </form>
                </center><br>
            </footer> 
        </div>
</template>

<script>
import Task from './task'
import draggable from 'vuedraggable'
export default {
    name : 'Category',
     data() {
        return {
            title : '',
            currentId : null,
            currentCategory : null
        }
    },
    components : {Task, draggable},
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
            this.title = ''
        },

        update(payload) {
            this.$emit('update', payload)
                
        },

         remove(id) {
            this.$emit('remove',id)
        },
        move(event) {
            this.currentId = event.draggedContext.element.id
            this.currentCategory = event.relatedContext.component.$attrs.category

            console.log(this.currentId,`<<<<<<< ini id`, this.currentCategory,`<<<<<<<< ini category`);
        },
        updateCategory() {
            let payload = {
                id : this.currentId,
                category : this.currentCategory
            }
            console.log(payload);
            this.$emit('updateCategory',payload)
        }
    }
}
</script>

<style>

</style>