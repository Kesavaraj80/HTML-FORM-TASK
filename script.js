function action() {
    const fn = document.querySelector('.firstname').value;
    const ln = document.querySelector('.lastname').value;
    const addr = document.querySelector('.address').value;
    const pcode = document.querySelector('.pincode').value;

    if (!fn) {
        alert('Please Enter First Name');
    } else if (!ln) {
        alert('Please Enter Last Name');
    } else if (!addr) {
        alert('Please Enter Address');
    } else if (!pcode) {
        alert('Please Enter pin code');
    } else {

        let tablebody = document.querySelector('.Output_body');
        const trow2 = tablebody.insertRow(0);
        const cell1 = trow2.insertCell(0);
        const cell2 = trow2.insertCell(1);
        const cell3 = trow2.insertCell(2);
        const cell4 = trow2.insertCell(3);
        const cell5 = trow2.insertCell(4);
        const cell6 = trow2.insertCell(5);
        const cell7 = trow2.insertCell(6);
        const cell8 = trow2.insertCell(7);
        cell1.innerHTML = fn;
        cell2.innerHTML = ln;
        cell3.innerHTML = addr;
        cell4.innerHTML = pcode;

        const data = document.getElementsByName('gender');
        for (let i = 0; i < data.length; i++) {
            if (data[i].checked === true)
                cell5.innerHTML = data[i].value;
        }

        const foodvalues = document.querySelector('.food');
        cell6.innerHTML = [...foodvalues.options].filter((val) => val.selected).map((opt) => opt.value);

        cell7.innerHTML = document.querySelector('.State').value;
        cell8.innerHTML = document.querySelector('.country').value;

        alert('Thanks for submitting the form!!')
    }


}