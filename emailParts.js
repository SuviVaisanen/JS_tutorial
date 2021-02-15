// This function returns username and domain separately

function emailParts(email) {
    let emailcase = email.toLowerCase()
    return emailcase.split("@");
}