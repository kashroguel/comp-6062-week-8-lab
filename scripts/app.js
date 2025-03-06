const app = Vue.createApp({
    data() {
        return {
            mainHeading: 'Welcome to the Vue.js!',
            message: 'This message is displayed based on a boolean property.',  
            showMessage: true,
        }
    },
});
// this connects to the div with the id of app
app.mount('#app');