// ClickIt section start!

var countIt = 0;
document.getElementById('clickIt').addEventListener('click', function () {
    countIt++;
    document.getElementById('countIt').innerText = `Click Count: ${countIt}`;
    document.getElementById('countIt').style.color = "green";
});


// MousePosition tracerEvent_Section Start! 
document.getElementById('mouseCursor').addEventListener('mousemove', function (mouseEvent) {
    let screenX = mouseEvent.screenX;
    let screenY = mouseEvent.screenY;
    document.getElementById('mousePosition').innerText = `Mouse Position: (${screenX}, ${screenY})`;
    document.getElementById('mousePosition').style.color = "green";
});


// keyboardEvent display!
document.getElementById('keyIn').addEventListener('keydown', function (myEvent) {
    document.getElementById('keyOut').innerText = `Last Key Pressed: ${myEvent.key}`;
    document.getElementById('keyOut').style.color = "green";
});


// Focus and Blur Events section Start!
const focusInput = document.getElementById('focBlurIn');
focusInput.addEventListener('focus', function () {
    document.getElementById('focBlurOut').innerText = 'The Input_field is now in Focus!';
    document.getElementById('focBlurOut').style.color = "green";
});
focusInput.addEventListener('blur', function () {
    document.getElementById('focBlurOut').innerText = 'The Input_field is  blurred NOW!';
    document.getElementById('focBlurOut').style.color = "red";
});


// Window Resize Event Start from here!

window.addEventListener('resize', function () {
    const width = window.innerWidth;
    const height = window.innerHeight;
    document.getElementById('sizeWindow').innerText = `Window width:  ${width}px  & Height: ${height}px`;
    document.getElementById('sizeWindow').style.color = "green";
});



// Form_Submit Event setion in JS here!

document.getElementById('submit_Form').addEventListener('submit', function (sub) {
    sub.preventDefault();

    let user_Input = document.getElementById('myInput').value;

    document.getElementById('form_Status').innerText = `Form Submitted: ${user_Input}`;
    document.getElementById('form_Status').style.color = "green";
    document.getElementById('myInput').value = '';
});




// Drag and Drop Event
let dragArea = document.getElementById('drag'); 
let dropArea = document.getElementById('drop');  

dragArea.addEventListener('dragstart', function () {
    document.getElementById('dragDropStatus').innerText = 'Dragging started';
    document.getElementById('dragDropStatus').style.color = "green";
});

dropArea.addEventListener('dragover', function (e) {
    e.preventDefault(); // Prevent default to allow drop
});

dropArea.addEventListener('drop', function () {
    document.getElementById('dragDropStatus').innerText = 'Dropped successfully!';
    document.getElementById('dragDropStatus').style.color = "green";
});

