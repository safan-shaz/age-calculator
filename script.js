const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function ageCalculate() {
    let today = new Date();
    let inputDate = new Date(document.getElementById("date-input").value);
    let birthYear, birthMonth, birthDay;
    
    let birthDetails = {
        year: inputDate.getFullYear(),
        month: inputDate.getMonth() + 1,
        date: inputDate.getDate(),
    };

    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth() + 1;
    let currentDate = today.getDate();

    leapChecker(currentYear);

    if (
        birthDetails.year > currentYear ||
        (birthDetails.month > currentMonth && birthDetails.year === currentYear) ||
        (birthDetails.date > currentDate && birthDetails.month === currentMonth && birthDetails.year === currentYear)
    ) {
        alert("Not born yet");
        displayResult("-", "-", "-");
        return;
    }

    birthYear = currentYear - birthDetails.year;

    if (currentMonth >= birthDetails.month) {
        birthMonth = currentMonth - birthDetails.month;
    } else {
        birthYear--;
        birthMonth = 12 + currentMonth - birthDetails.month;
    }

    if (currentDate >= birthDetails.date) {
        birthDay = currentDate - birthDetails.date;
    } else {
        birthMonth--;
        let daysInPrevMonth = months[currentMonth - 2];
        birthDay = daysInPrevMonth + currentDate - birthDetails.date;

        if (birthMonth < 0) {
            birthMonth = 11;
            birthYear--;
        }
    }

    displayResult(birthYear, birthMonth, birthDay);
}

function displayResult(birthYear, birthMonth, birthDay) {
    document.getElementById("year").textContent = birthYear;
    document.getElementById("month").textContent = birthMonth;
    document.getElementById("day").textContent = birthDay;
}

function leapChecker(year) {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        months[1] = 29;
    } else {
        months[1] = 28;
    }
}
