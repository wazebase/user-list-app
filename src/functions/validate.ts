export function validateAge(newDate:string,date:number[]) {
    let userDate = newDate.split('-').map((str: string) => parseInt(str));
    if(date[0]-userDate[0] >18) {
        return true;
    }
    else if(date[0] - userDate[0] ===18 && userDate[1] < date[1]) {
        return true;
    }
    else if (date[0] - userDate[0] ===18 && userDate[1] === date[1] && userDate[2]<=date[2]) {
        return true;
    }
    else{
        return false;
    }

}

export function validateName(name:string) {
    return /^([A-Za-z\s])*$/.test(name) && name.length>0;
}

export function validateSelect(name:string) {
    return name.length >0;
}

export function validateEmail(email:string) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}