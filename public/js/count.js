const numbers = document.querySelectorAll(".count-number")

numbers.forEach(function (number) {
    const target = Number(number.dataset.number)
    let current = 0
    const count = setInterval(function () {
        current = current + 8
        number.textContent = current
        if (current >= target) {
            number.textContent = target
            clearInterval(count)
        }
    }, 50)
})