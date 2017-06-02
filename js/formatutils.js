const DELIMETER = ', ';
const NO_OF_TRAIL_CHARACTERS = 2;
const START_INDEX = 0;

class ObjectFormatter{
    static format(obj){
        let formattedMessage = "";
        
        if(obj){
            for(let property in obj){
                var validation = obj[property] &&
                    typeof(obj[property] !== 'function');

                if(validation){
                    formattedMessage += `${obj[property]}${DELIMETER}`;
                }
            }

            if(formattedMessage.length > NO_OF_TRAIL_CHARACTERS){
                formattedMessage = formattedMessage.substr(
                START_INDEX, formattedMessage.length - NO_OF_TRAIL_CHARACTERS);
            }
        }

        return formattedMessage;
    }
}

export{ ObjectFormatter };