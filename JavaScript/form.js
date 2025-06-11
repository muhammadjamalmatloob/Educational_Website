const submit = document.getElementById('submit-button');

submit.addEventListener('click', () => {

    const inputFields = document.querySelectorAll('input');
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

const uphoto = document.getElementById('uphoto');
const photo = document.getElementById('photo');

uphoto.addEventListener('change', (e) => {
    const file = uphoto.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
        photo.src = event.target.result;
    };
    reader.readAsDataURL(file);
}
);
