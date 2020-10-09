<template>
        <section id="main">
            <HomePage v-if="pageName == 'home-page'" 
                      :categories="categories"
                      :tasks="tasks" 
                      @logout="logout"
                      @add="add"
                      @update="update"
                      @remove="remove"
                      @updateCategory='updateCategory'>
            </HomePage>
            <Register v-else-if="pageName == 'register'" @changePage="changePage" @register="register" @glogin='glogin'></Register>
            <Login v-else-if="pageName == 'login'" @changePage="changePage" @login="login" @glogin='glogin'></Login>
        </section>
</template>

<script>
import HomePage from './views/homepage'
import Login from './views/login'
import Register from './views/register'
import axios from '../config/axios'

export default {
    name : "App",
    components : {
        HomePage , Login, Register
    },
    data() {
        return {
            pageName : 'login',
            categories : [
                { category : 'backlog'},
                { category : 'todo'},
                { category : 'doing'},
                { category : 'done'}
            ],
            tasks : []

        }
    },
    created() {
      if (localStorage.token) {
            this.read()    
            return this.pageName = 'home-page'
      }
      
  }
  , methods : {
            read() {
               axios({
                    url : '/tasks',
                    method : 'get',
                    headers : {
                        token : localStorage.token
                    }
                })
                .then(data => {
                    console.log(data.data,'<<< ini datanya');
                    this.tasks = data.data
                })
            },
            changePage(name) {
                this.pageName = name
            },

            register(payload) {
                axios({
                    url : '/register',
                    method : 'post',
                    data : {
                        email : payload.email,
                        password : payload.password
                    }
                })
                .then(data => {
                    console.log(data, 'register sukses')
                    this.changePage('login')
                })
            },

            login(payload) {
                axios({
                    url : '/login',
                    method : 'post',
                    data : {
                        email : payload.email,
                        password : payload.password
                    }
                })
                .then(data => {
                    console.log(data)
                    localStorage.token = data.data.token
                    this.pageName = 'home-page'
                    this.read()
                })
            },

            logout() {
                 localStorage.clear()
                 this.pageName = 'login'
            },


            add(payload) {
                  axios({
                    url : '/tasks',
                    method : 'post',
                    data : {
                        title : payload.title,
                        category : payload.category,
                    },
                     headers : {
                        token : localStorage.token
                    }
                })
                .then(data => {
                    console.log(data.data);
                    this.read()
                })
            },

            update(payload) {
                  axios({
                    url : `/tasks/${payload.id}`,
                    method : 'put',
                    data : {
                        title : payload.title
                    },
                     headers : {
                        token : localStorage.token
                    }
                })
                .then(data => {
                    this.read()
                })
            },

             remove(id) {
                axios({
                    url : `/tasks/${id}`,
                    method : 'delete',
                    headers : {
                        token : localStorage.token
                    }
                })
                .then(data => {
                    this.read()
                })
            },
            
            updateCategory(payload) {
                console.log(payload.category.category, '<<<<<<ini payload patch');
             axios({
                    url : `/tasks/${payload.id}`,
                    method : 'patch',
                    headers : {
                        token : localStorage.token
                    },
                    data : {
                        category : payload.category.category
                    }
                })
                .then(data => {
                    this.read()
                })
            },

             glogin(idToken) {
                axios({
                    url : '/googlelogin',
                    method : 'post',
                    data : {
                        token : idToken
                    }
                })
                .then(data => {
                    console.log(data)
                    localStorage.token = data.data.token
                    this.pageName = 'home-page'
                    this.read()
                })
                .catch(err => {
                    console.log(err.response, '<<<<eror login');
                })
            }         
        }
}
</script>

<style>

</style>