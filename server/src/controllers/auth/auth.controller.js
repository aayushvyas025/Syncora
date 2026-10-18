
export function signupUser(request, response, next) {
    try {
        const {fullname, email, password} = request.body; 
        
        // if(!fullname.trim())
        
        
    } catch (error) {
        console.error(`Error while signup: ${error.message}`);
        next(error); 
    }

}

export function loginUser(request, response, next) {

}

export function logoutUser(request, response, next) {

}