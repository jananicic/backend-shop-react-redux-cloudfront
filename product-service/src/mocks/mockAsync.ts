export const mockAsync = async (result) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(result);
        }, 1500);
    });
}