// state - use state to build powerful and reliable objects - data that has to be managed in our application from our users. It always is present. State tells us the status of our application.
// state found in objects at the top of the constructor -> status

class App{
    constructor(){
        this.state = {
        isAuth: false,// checkAuth user needs to be true
        error: '',
        }
        this.checkAuth();
        this.render();
        //this.$userMessage = document.getElementById('user-message');
    }
    checkAuth(){
        const user = false; // given state but its not managing state hard to tell where the user is
        if(user){
            this.state = { ...this.state, isAuth: true}
            //this.$userMessage.textContent = "welcome back";
        } else{
            this.state = { ...this.state, error: 'You must sign in'}
            //this.$userMessage.textContent = 'YOu must sign in';
            //this.$userMessage.style.color = 'red';
        }

    }
    render(){
        const {isAuth, error} = this.state;
        document.getElementById('root').innerHTML = `
        <div style = 'color: ${error && 'red'}'>
            ${this.state.isAuth? 'Welcome back ': this.state.error}
        </div>`;
    }
}

new App();