
function checkNull (name, age, genderValue, jobValue, city) {
    if ((!name.value) && (!document.getElementById('nameWarn'))){
        name.style.borderColor = 'red';
        let nameWrong = document.getElementById('_name');
        let nameWarn = document.createElement('div');
        nameWarn.innerHTML = 'Please type your name !';
        nameWarn.id = 'nameWarn';
        nameWarn.style.textTransform = 'uppercase';
        nameWarn.style.marginTop = '5px';
        nameWrong.appendChild(nameWarn);        
    } else if ((name.value) && (document.getElementById('nameWarn'))) {
        name.style.borderColor = '';
        let nameWarn = document.getElementById('nameWarn');
        nameWarn.parentNode.removeChild(nameWarn);
    } else if (name.value) {
        name.style.borderColor = '';
    }
    
    if ((!age.value) && (!document.getElementById('ageWarn'))){
        age.style.borderColor = 'red';
        let ageWrong = document.getElementById('_age');
        let ageWarn = document.createElement('div');
        ageWarn.innerHTML = 'Please type your age !';
        ageWarn.id = 'ageWarn';
        ageWarn.style.textTransform = 'uppercase';
        ageWarn.style.marginTop = '5px';
        ageWrong.appendChild(ageWarn);        
    } else if ((age.value) && (document.getElementById('ageWarn'))) {
        age.style.borderColor = '';
        let ageWarn = document.getElementById('ageWarn');
        ageWarn.parentNode.removeChild(ageWarn);
    } else if (age.value) {
        age.style.borderColor = '';
    }
    
    if ((!genderValue) && (!document.getElementById('genderWarn'))){
        let genderWrong = document.getElementById('_gender');
        let genderWarn = document.createElement('div');
        genderWarn.innerHTML = 'Please select your gender !';
        genderWarn.id = 'genderWarn';
        genderWarn.style.textTransform = 'uppercase';
        genderWarn.style.marginTop = '5px';
        genderWrong.appendChild(genderWarn);        
    } else if ((genderValue) && (document.getElementById('genderWarn'))) {
        let genderWarn = document.getElementById('genderWarn');
        genderWarn.parentNode.removeChild(genderWarn);
    }

    if ((!jobValue.length) && (!document.getElementById('jobWarn'))){
        let jobWrong = document.getElementById('_job');
        let jobWarn = document.createElement('div');
        jobWarn.innerHTML = 'Please select your job !';
        jobWarn.id = 'jobWarn';
        jobWarn.style.textTransform = 'uppercase';
        jobWarn.style.marginTop = '5px';
        jobWrong.appendChild(jobWarn);        
    } else if ((jobValue.length) && (document.getElementById('jobWarn'))) {
        let jobWarn = document.getElementById('jobWarn');
        jobWarn.parentNode.removeChild(jobWarn);
    }

}

function submitted() {  
    var name =  document.getElementById("name");
    var age =  document.getElementById("age");
    var genderCheck =  document.getElementsByClassName('gender');
    for (var i = 0, length = genderCheck.length; i < length; i++) {
        if (genderCheck[i].checked) {
            var genderValue = genderCheck[i].value;
        }
    }

    var jobCheck =  document.getElementsByClassName('job');
    for (var jobValue=[], j=0, i = 0, length = jobCheck.length; i < length; i++) {
        if (jobCheck[i].checked) {
            jobValue[j] = jobCheck[i].value;
            j++;  
        }
    }
    var city =  document.getElementById("city");

    checkNull(name, age, genderValue, jobValue, city);

    alert('Name: ' + name.value +  '\nAge: ' + age.value +  '\nGender: ' + genderValue + '\nJob: ' + jobValue + '\nCity: ' + city.value);
}
var button = document.getElementById("submitButton");
button.addEventListener("click", submitted);

