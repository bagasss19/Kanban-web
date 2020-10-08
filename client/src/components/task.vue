<template>
    <section class="task">
        <ul>
            <li>{{task.title }} <span class="close" @click.prevent="remove">x</span>
                <p class="smallText">by : {{task.User.email}}<p>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    name : 'Task',
    props : ['task'],
    methods : {
        remove() {
            let id = this.task.id
            this.$emit('remove', id)
        }
    }
}
</script>

<style>

</style>