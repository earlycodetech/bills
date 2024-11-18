export const sumFromArray = (arr) => {
    let total = 0;
    arr.map(item => {
        total += item.amount
    });

    return total;
}