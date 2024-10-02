/* Try and Catch */

function checkAge(){
    const ageField = document.querySelector('#age');
    const ageText = ageField.value;
    const errorTag = document.getElementById('error');
    errorTag.style.color = 'red';
    errorTag.style.fontWeight = 'bold';

    try{
        const age = parseInt(ageText);

        if(isNaN(age)){
            throw "Please enter a number";
        }else if(age < 18){
            throw "Children is not allow.";
        }
        errorTag.innerHTML = '';
    }
    catch(error){
        console.log('ERROR:', error);
        errorTag.innerHTML = 'ERROR: ' + error;
    }
    finally{
        console.log('All is done inside the Try and Catch');
    }
    console.log(111);
}