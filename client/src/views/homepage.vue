<template>
    <section id="home" class="ui">
       <div>
            <nav class="navbar app">Kanban <button class="btn btn-primary" @click.prevent="logout">Logout</button></nav>
            <nav class="navbar board"></nav>
            <div class="lists">
                <Category v-for="(category,i) in categories" :key="i" 
                :category='category'
                :tasks='tasks'
                @add='add'
                @update='update'
                @remove='remove'
                @updateCategory='updateCategory'
                ></Category>
            </div>
        </div>
    </section>
</template>

<script>
    import Category from '../components/category'
    export default {
        name : "HomePage",
        components : { Category },
        props : ['categories','tasks'],
        methods : {
        logout () {
            this.$emit('logout')
        },
        add(payload) {
            this.$emit('add',payload)
        },

        update(payload) {
            this.$emit('update',payload)
        },
        remove(id) {
            this.$emit('remove', id)
        },
        updateCategory(payload) {
            this.$emit('updateCategory',payload)
        }
    }
    }
</script>

<style scoped>
</style>