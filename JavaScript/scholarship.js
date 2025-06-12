const submit = document.getElementById('submit-button');

submit.addEventListener('click', () => {

    const inputFields = document.querySelectorAll('.f1');
    let allFilled = true;
    inputFields.forEach((field) => {
        if (field.value === '') 
        {
            allFilled = false;
        }
    }
);

    if (allFilled) 
    {
        alert('Application submitted successfully!');
    } 
    else 
    {
        alert('Fill in all portions!');
    }
}
);

const submit1 = document.getElementById('submit-button1');

submit1.addEventListener('click', () => {

    const inputFields = document.querySelectorAll('.f2')
    let allFilled = true;
    inputFields.forEach((field) => {
        if (field.value === '') 
        {
            allFilled = false;
        }
    }
);

    if (allFilled) 
    {
        alert('Application submitted successfully!');
    } 
    else 
    {
        alert('Fill in all portions!');
    }
}
);