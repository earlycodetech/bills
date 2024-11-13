export function timestampToDate(stamp) {
    const t = new Date(stamp);

    return t.toLocaleDateString();
}