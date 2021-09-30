<template>
    <b-container class="form-wrapper">
        <b-col class="form-component-wrapper">
            <div class="form-title">Sign in</div>
            <form @submit.prevent="handleSubmit">
                 <div class="form-group w-100">
                    <input type="text" v-model="user.email" id="email" name="email" class="form-control w=75 form-input" placeholder="E mail" autocomplete="false" :class="{ 'is-invalid': submitted && $v.user.email.$error }" />
                    <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
                        <span v-if="!$v.user.email.required">Email is required</span>
                        <span v-if="!$v.user.email.email">Email is invalid</span>
                    </div>
                </div>
                <div class="form-group w-100">
                    <input :type="passwordType" v-model="user.password" id="password" name="password" autocomplete="false" placeholder="Password" class="form-control w=75 form-input" :class="{ 'is-invalid': submitted && $v.user.password.$error }" />
                    <div v-if="submitted && $v.user.password.$error" class="invalid-feedback">
                        <span v-if="!$v.user.password.required">Password is required</span>
                        <span v-if="!$v.user.password.minLength">Password must be at least 6 characters</span>
                    </div>
                </div>
                <div class="form-group w-100" style="margin: 8px 0px">
                    <input type="checkbox" @change="togglePasswordType" id="showPassword"/>
                    <label for="showPassword" style="margin-left: 5px">Show Password</label>
                </div>
                <div class="form-group w-100">
                    <div class="forgot-password">Forgot Password</div>
                    <b-row class="form-actions">
                        <button class="form-btn" @click.prevent="reset">Reset</button>
                        <button class="form-btn" style="background: #5F30E2;color: white">Submit</button>
                    </b-row>
                </div>
            </form>

            <div class="form-hint w-100">
                <center>
                    Click here to <span class="form-hint-link">Create an account</span>
                </center>
            </div>
        </b-col>
    </b-container>
</template>

<style scoped>
/*<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">*/
.form-wrapper{
    text-align: start;
    width: 629px;
    background: #FFFFFF;
    border-radius: 33px;
    overflow: hidden;
    margin: 30px auto;
}

.form-title {
    margin: 80px auto 110px 0px;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 60px;
}

.form-btn {
    width: fit-content;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    padding: 15px 34px;
    border-radius: 19px;
    border: 0px;
    margin: 29px 0px 26px 15px;
}

.form-actions {
    width: fit-content;
    margin: 0px;
    display: inline-flex;
    float: right;
    margin-bottom: 66px;
}


.form-hint {
    clear: both;
    margin-bottom: 98px;
}

.form-hint-link {
    color: #2B33FF;
}

.form-component-wrapper {
    margin: 0px 105px;
}

.form-input {
    margin: 19px 0px 3px 0px;
    border: 2px solid #7E7DDE;
}

.show-password * {
    display: inline-block;
    margin: 0px 5px 0px 0px;
}

.show-password {
    font-weight: 500;
    font-size: 15px;
    padding: 3px 0px;
}

.forgot-password {
    font-weight: 500;
    font-size: 15px;
    color: #2B33FF;
    padding: 3px 0px;
}

</style>

<script>
import { required, email, minLength } from "vuelidate/lib/validators"
import axios from "axios";
import Vue from "vue"
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

export default {
    name: "SignUp",
    created() {
        this.image = "../../assets/person.png"
    },
    data() {
        return {
            user: {
                email: "",
                password: "",
            },
            submitted: false,
            passwordType: "password",
        };
    },
    validations: {
        user: {
            email: { required, email },
            password: { required, minLength: minLength(6) },
        }
    },
    methods: {
        handleSubmit() {
            this.submitted = true;

            // stop here if form is invalid
            this.$v.$touch();
            if (this.$v.$invalid) {
                return;
            } else {
                this.axios.post("http://localhost:5000/api/user/SignIn", {
                    email: this.user.email,
                    password: this.user.password
                }).then(result => {
                    if (result.data.status == "successful" ) {
                        localStorage.setItem("sweet-token", result.data.token)
                        alert("Signed in ")
                        this.$router.push('/UserProfile')
                        
                    } else {
                        alert("Wrong email or passowrd, try again");
                    }
                })
                .catch((err) => {
                    alert("An error occured" + JSON.stringify(err))
                })
                
            }
        },
        togglePasswordType() {
            if (this.passwordType == "password") {
                this.passwordType = "text"
            } else {
                this.passwordType = "password"
            }
        },
        reset() {
            this.user.email= ""
            this.user.password = ""
        }
    }
};
</script>