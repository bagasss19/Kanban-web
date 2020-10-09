<template>
    <section class="task">
        <ul>
            <li v-show="!editForm">{{task.title }} 
                <p><span class="close" @click.prevent="remove">x</span> 
                <span class="close" @click.prevent="edit">e</span>
                <p class="smallText">by : {{task.User.email}}<p>
            </li>
            <center>
                   <form v-show="editForm" @submit.prevent="update">
                    <input v-model="title" type="text" height="10px">
                    <input type="submit" class="btn btn-primary" value="Submit">
                   </form>
                </center><br>
        </ul>
    </section>
</template>

<script>
export default {
    name : 'Task',
    props : ['task'],
    data()  {
        return {
            editForm : false,
            title : ''
        }
    },
    methods : {
        remove() {
            let id = this.task.id
            this.$emit('remove', id)
        },
        edit() {
            this.editForm = true
            this.title = this.task.title
            let payload = {
                id : this.task.id,
                title : this.task.title
            }
        },
        update() {
            let payload = {
                id : this.task.id,
                title : this.title
            }
            
            this.$emit('update', payload)
            this.editForm = false
            this.title = ''
        }
    }
}
</script>

<style>

</style>