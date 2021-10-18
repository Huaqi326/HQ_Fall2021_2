<template>
<div>
    <a class="sign_in" href="/signin">Sign In</a>
    <a class="sign_up" href='/signup'>Sign Up</a>
</div>
</template>

<style>
.background-img {
            background:url(../assets/background.jpeg) no-repeat center center fixed;
            background-size: cover;
            filter: blur(5px) brightness(0.7);
            height: 100vh; 
        }
        .sign_in {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #555;
            color: white;
            padding: 12px 60px;
            border: none;
            cursor: pointer;
            border-radius: 5px;
        }
        .sign_up {
            position: absolute;
            top: 60%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #555;
            color: white;
            padding: 12px 56px;
            border: none;
            cursor: pointer;
            border-radius: 5px;
        }
</style>

<script>
export default {
    
}
</script>
