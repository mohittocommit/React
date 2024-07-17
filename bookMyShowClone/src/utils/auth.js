export const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    return token?.length > 0 ? true : false;
}