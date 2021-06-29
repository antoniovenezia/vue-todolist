Vue.config.devtools = true;

new Vue(
    {
        el: '#app',
        data: {
            array: [
                "Fare i compiti",
                "Fare la spesa",
                "Fare il bucato"
            ],
            newArray: "",
        },

        methods: {
            pushInArray: function () {
                this.array.push(this.newArray);
                this.newArray = "";
                this.focusIn();
            },

            deleteByArray: function (index) {
                this.array.splice(index, 1);
                this.focusIn();
            },

            focusIn: function () {
                const element = document.getElementById("input");
                element.focus();
            },
        }

    });

