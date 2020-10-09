<template>
  <section id="login">
    <div class="cotainer ui login-form">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header text">Login</div>
                    <div class="card-body">
                        <form @submit.prevent="login">
                            <div class="form-group row">
                                <label for="email_address" class="col-md-4 col-form-label text-md-right text">E-Mail Address</label>
                                <div class="col-md-6">
                                    <input v-model="email" type="text" id="email_address" class="form-control" name="email-address" required autofocus
                                    placeholder="Email">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right text" >Password</label>
                                <div class="col-md-6">
                                    <input v-model="password" type="password" id="password" class="form-control" name="password" required
                                    placeholder="Password">
                                </div>
                            </div>

                            <div class="text">
                                <button type="submit" class="btn btn-primary">
                                    Login
                                </button><br><br>
                                 <p>Don't Have Account? please register <a href="" @click.prevent="changePage">here</a></p>
                                <p>
                                   Or
                                </p>
                            </div>
                    </form>
                    <center><button v-google-signin-button="clientId" class="google-signin-button"> Continue with Google</button></center>
                </div>
            </div>
        </div>
    </div>
    </section>
</template>

<script>
export default {
    name : "login",
    data() {
        return {
            email : '',
            password :'',
            clientId: '484267733566-lbpdokvk0k3cme5vrl92456im55o8aj1.apps.googleusercontent.com'
        }
    },
    methods : {
        OnGoogleAuthSuccess (idToken) {
            console.log(idToken, 'token')
            // Receive the idToken and make your magic with the backend
            this.$emit('glogin', idToken)
        },
        
        OnGoogleAuthFail (error) {
             console.log(error, 'err')
        }
        ,
        changePage () {
            this.$emit('changePage','register')
        },
        login () {
            let payload = {
                email : this.email,
                password : this.password
            }
            this.$emit('login', payload)
        },

        glogin () {
            let token = googleUser.getAuthResponse().id_token;
            let profile = googleUser.getBasicProfile();

            let payload = {
                token : token,
                email : profile.getEmail()
            }
            this.$emit('glogin', payload)
        }
    }
}
</script>

<style>

</style>