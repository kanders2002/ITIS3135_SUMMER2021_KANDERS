function isStrongPassword(password) {
    if (password.length < 8) {
        return false;
        }
        else if (password.indexOf("password") == 0) {
            return false;
            }
else if (password.charAt >=65 && password.charAt <= 90) {
    return false;
} else {

return true;

}

}