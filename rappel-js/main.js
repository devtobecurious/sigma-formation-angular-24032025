// absence typage
// interprété par le navigateur

// this
// maitrise dom
// orienté fonction
// async/Await


let wizard = {
    name: 'Harry',
    health: 100,
    heal: function(num1, num2) {
        return this.health += num1 + num2;
    }
}

wizard = 2

