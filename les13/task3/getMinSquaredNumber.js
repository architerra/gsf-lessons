export default (arr) => {
    if (!Array.isArray(arr) || arr.length ==0) {
        return null;
    }
    const arrRes = arr.map(el => Math.abs(el));
    let num = Math.min(...arrRes);
    return num * num;
}