<template>
 <section id="register">
    <div class="cotainer ui login-form">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header text">Register</div>
                    <div class="card-body">
                        <form action="" method="">
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
                                <p>Already Have Account? login <a href="" @click.prevent="changePage">here</a></p>
                                <p>
                                   Or Login With
                                </p>
                                 <center><div class="g-signin2" data-onsuccess="onSignIn"></div></center>
                            </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </section>
</template>

<script>
export default {
    name : "register",
    data() {
        return {
            email : '',
            password :''
        }
    },
    methods : {
        changePage () {
            this.$emit('changePage','login')
        }
    }
}
</script>

<style>

</style>