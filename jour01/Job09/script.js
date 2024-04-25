function tri(numbers, order) {
    const n = numbers.length;
    let sorted = numbers.slice();

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if ((order === "asc" && sorted[j] > sorted[j + 1]) || (order === "desc" && sorted[j] < sorted[j + 1])) {
                let temp = sorted[j];
                sorted[j] = sorted[j + 1];
                sorted[j + 1] = temp;
            }
        }
    }
    console.log(sorted);
}