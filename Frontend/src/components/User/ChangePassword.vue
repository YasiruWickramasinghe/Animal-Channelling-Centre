<template>
    <b-container fluid class="w-75 form-wrapper">
        <b-col class="form-component-wrapper">
            <div class="form-title">Sign up</div>
            <form @submit.prevent="handleSubmit">
                <b-row class="form-col-row" cols-sm="1" cols="2" cols-md="2">
                    <b-col>
                        <div class="form-group">
                            <input :type="passwordType" v-model="user.password" id="password" name="password" autocomplete="false" placeholder="Password" class="form-control w=75 form-input" :class="{ 'is-invalid': submitted && $v.user.password.$error }" />
                            <div v-if="submitted && $v.user.password.$error" class="invalid-feedback">
                                <span v-if="!$v.user.password.required">Password is required</span>
                                <span v-if="!$v.user.password.minLength">Password must be at least 6 characters</span>
                            </div>
                        </div>
                        <div class="form-group">
                            <input type="checkbox" @change="togglePasswordType" id="showPassword"/>
                            <label for="showPassword" style="margin-left: 5px">Show Password</label>
                        </div>
                        <div class="form-group">
                            <input type="password" v-model="user.confirmPassword" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" autocomplete="false"  class="form-control w=75 form-input" :class="{ 'is-invalid': submitted && $v.user.confirmPassword.$error }" />
                            <div v-if="submitted && $v.user.confirmPassword.$error" class="invalid-feedback">
                                <span v-if="!$v.user.confirmPassword.required">Confirm Password is required</span>
                                <span v-else-if="!$v.user.confirmPassword.sameAsPassword">Passwords must match</span>
                            </div>
                        </div>
                    </b-col>
                </b-row>
                <b-row class="form-actions">
                    <button class="form-btn" @click.prevent="reset">Reset</button>
                    <button class="form-btn" style="background: #5F30E2;color: white">Submit</button>
                </b-row>
            </form>
        </b-col>
    </b-container>
</template>

<style scoped>
.form-wrapper {
    margin: 110px auto;
    background: #FFFFFF;
    border-radius: 33px;
    overflow: hidden;
}

.form-title {
    text-align: start;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 60px;
    color: #171859;
}

.form-component-wrapper {
    margin: 80px 90px 50px 90px;
    overflow: hidden;
}

.form-col-row {
    margin: 90px 0px 30px 0px;
}

.form-input {
    margin: 19px 0px 3px 0px;
    border: 2px solid #7E7DDE;
}

.show-password * {
    display: inline-block;
    margin: 0px 5px 0px 0px;
}

.form-btn {
    width: fit-content;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    padding: 15px 34px;
    border-radius: 19px;
    border: 0px;
    margin: 0px 15px 40px 0px;
}

.form-actions {
    width: fit-content;
    float: right;
}

.form-hint {
    clear: both;
    margin-bottom: 98px;
}

.form-hint-link {
    color: #2B33FF;
}

</style>

<script>
import { required, email, minLength,sameAs } from "vuelidate/lib/validators"
import axios from "axios";
import Vue from "vue"
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

export default {
    name: "SignUp",
    data() {
        return {
            user: {
                password: "",
                confirmPassword: ""
            },
            submitted: false,
            passwordType: "password",
            token: ""
        };
    },
    validations: {
        user: {
            password: { required, minLength: minLength(6) },
            confirmPassword: { required, sameAsPassword: sameAs('password') }
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

                const config = {
                    headers: {
                        "swt-token": localStorage.getItem("sweet-token")
                    }
                }

                const data = {
                    password = this.user.password
                }; 

                this.axios.post("http://localhost:5000/api/user/ChangePassword", data, config).then(result => {
                    if (result.data.status == "successful" ) {
                        alert("Signed in ")
                        localStorage.setItem("sweet-token", result.data.token)
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
    }
};
</script>