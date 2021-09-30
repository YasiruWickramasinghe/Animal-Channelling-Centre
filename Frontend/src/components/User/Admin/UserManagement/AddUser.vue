<template>
<!-- ../../../../assets/person.png -->
    <form @submit.prevent="handleSubmit">
        <b-row class="form-col-row" cols-sm="1" cols="2" cols-md="2">
            <b-col>
                        <div class="form-image-container">
                            <img class="form-image-div overlay-background"  src="../../../../assets/person.png" id="image-id" alt="">
                            <div class="form-image-div overlay">
                                <label for="file-upload" class="custom-file-upload">
                                    <!-- click here to select file -->
                                    <i class="bi bi-upload"></i>
                                </label>
                                <input id="file-upload" accept="image/png, image/gif, image/jpeg" @change="previewImage" multiple="false" type="file"/>
                            </div>
                        </div>
                        <div style="font-size: 13px;width: 300px">Hover and click the upload button to upload the profile picture(.png and .jpg only)</div>
                        <div v-if="image == '../../assets/person.png'" style="font-size: 13px;color: red;width: 300px" :class="{'is-invalid': image == '../../../../assets/person.png'}">Upload an Image</div>
                    </b-col>
                    <b-col cols="8">
                        <div class="form-group">
                            <input type="text" v-model="user.name" id="name" name="name" class="form-control w=75 form-input" placeholder="Name" autocomplete="false" :class="{ 'is-invalid': submitted && $v.user.name.$error }" />
                            <div v-if="submitted && !$v.user.name.required" class="invalid-feedback">First Name is required</div>
                        </div>
                        <div class="form-group">
                            <input type="text" v-model="user.email" id="email" name="email" class="form-control w=75 form-input" placeholder="E mail" autocomplete="false" :class="{ 'is-invalid': submitted && $v.user.email.$error }" />
                            <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
                                <span v-if="!$v.user.email.required">Email is required</span>
                                <span v-if="!$v.user.email.email">Email is invalid</span>
                            </div>
                        </div>
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
                        <div class="form-group">
                            <input type="number" v-model="user.phone" id="phone" name="confirmPassword" placeholder="Phone" autocomplete="false"  class="form-control w=75 form-input" :class="{ 'is-invalid': submitted && $v.user.phone.$error }" />
                            <div v-if="submitted && $v.user.phone.$error" class="invalid-feedback">
                                <span v-if="!$v.user.phone.required">Phone number is required</span>
                                <span v-else-if="!$v.user.phone.minLength">Phone number must have 10 digits</span>
                            </div>
                        </div>
                    </b-col>
        </b-row>
        <b-row class="form-actions">
            <button class="form-btn" @click.prevent="reset">Reset</button>
            <button class="form-btn" style="background: #5F30E2;color: white">Submit</button>
        </b-row>
    </form>
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

.form-image-div {
    background-color: #171859;
    width: inherit;
    height: inherit;
}

.form-image-container {
    width: 300px;
    height: 300px;
    overflow: hidden;
    position: relative;
    border-radius: 19px;
    border: 1px solid #171859;
}

.form-image-div {
    width: inherit;
    height: inherit;
}

.overlay-background {
    background-color: white;
}

.image {
    width: inherit;
    height: auto;
    margin: 0;
    padding: 0;
}

.overlay {
    text-align: center;
    vertical-align: middle;
    background-color: #171859;
    position: absolute;
    transform: translate(-50%,-50%);
    left: 50%;
    top: 50%;
    opacity: 0;
    transition: 300ms;
}

.form-image-container:hover .overlay{
   opacity: 1;
}

#file-upload {
    visibility: hidden;
}

.custom-file-upload {
    color: white;
    position: absolute;
    transform: translate(-50%,-50%);
    left: 50%;
    top: 50%;
    padding: 20px 25px;
    border-radius: 50%;
    background-color: #7E7DDE;
}

.overlay-background {
    background-color: white;
}

.custom-file-upload:hover {
    cursor: pointer;
}

</style>

<script>
import { required, email, minLength,sameAs } from "vuelidate/lib/validators"
import axios from "axios";
import Vue from "vue"
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

export default {
    name: "AddUser",
    data() {
        return {
            user: {
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
                phone: ""
            },
            submitted: false,
            passwordType: "password",
            image: "../../../../assets/person.png",
        };
    },
    validations: {
        user: {
            name: { required },
            email: { required, email },
            password: { required, minLength: minLength(6) },
            confirmPassword: { required, sameAsPassword: sameAs('password') },
            phone: { required, minLength: minLength(10) }
        }
    },
    methods: {
        handleSubmit() {
            this.submitted = true;

            // stop here if form is invalid
            this.$v.$touch();
            if (this.$v.$invalid || this.image == "../../../../assets/person.png") {
                this.image == "../../../../assets/person.png" ? alert("Upload a profile picture") : alert("FIx the invalid fields")
                return;
            } else {
                const form = new FormData()
                form.append("email", this.user.email)
                form.append("password", this.user.password)
                form.append("name", this.user.name)
                form.append("phone", this.user.phone)
                form.append("image", this.image)

                this.axios.post("http://localhost:5000/api/user/SignUp", form).then(result => {
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
        previewImage(e) {
            const file = e.target.files[0];
            document.getElementById("image-id").src = URL.createObjectURL(file);
            this.image = file;
        },
        reset() {
            console.log(this.image);
            this.user = {
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
                phone: ""
            }
            this.submitted = false
            this.image = "../../../../assets/person.png"
            document.getElementById("image-id").src = require("../../../../assets/person.png");
        }
    }
}
</script>