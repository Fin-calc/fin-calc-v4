function calculateSum(columnId, value) {
    const sumElement = document.getElementById(`${columnId}_sum`);
    let currentSum = parseFloat(sumElement.innerText);

    // Знайдемо чекбокс, що викликав зміну
    const checkbox = event.target;

    // Додаємо або віднімаємо значення в залежності від стану чекбокса
    if (checkbox.checked) {
        currentSum += value;
    } else {
        currentSum -= value;
    }

    // Оновлюємо відображення суми
    sumElement.innerText = currentSum.toFixed(2);
}
