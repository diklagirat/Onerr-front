<template>
    <div class="login-page">
        <div class="login-container">
            <div class="card">
                <h1>Sign In</h1>
                <form class="form-group flex  column center">
                    <input class="form-input" v-model="emailLogin" type="email" placeholder="Email / Username" required>
                    <input class="form-input" v-model="passwordLogin" type="text" placeholder="Password" required>
                    <button class="form-input submit-btn" type="submit" @click="doLogin">Continue</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            emailLogin: '',
            passwordLogin: ''
        }
    },
    methods: {
        doLogin() {

        }
    }
}
</script>

<style lang="scss" scoped>
// .login-page {
//     position: relative;

//     h1 {
//         font-size: 30px;
//         padding-bottom: 20px;
//     }

//     .card {
//         width: 390px;
//         height: 250px;
//         // background-color: aquamarine;
//         padding: 0 36px 24px;
//         border-radius: 5px;
//         margin: auto;
//         margin-top: 10%;

//         .form-input {

//             margin-bottom: 15px;
//             border: 1px solid #c5c6c9;
//             border-radius: 4px;
//             box-shadow: none;
//             color: #404145;
//             font: inherit;
//             padding: 8px 12px;
//             height: 42px;
//             width: 330px;
//         }

//         .submit-btn {
//             background-color: #1dbf73;
//             color: #fff;
//         }
//     }
// }

// .login-container {
//     width: 400px;
//     height: 400px;
//     // background-color: bisque;
//     top: 30px;
//     left: 450px;
//     // position: absolute;
//     border-radius: 5px;
//     // transform: translate(50%, 50%);

// }
</style>