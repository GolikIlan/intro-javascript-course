var example = {
    count: 1,

    increase: function () {
        this.count++;
        console.log(this.count);
    },

    timeOutIncrease: function () {
        setTimeout(this.increase, 1);
    }
}

for (var i = 1; i < 10; i++) {
    example.timeOutIncrease();
}
