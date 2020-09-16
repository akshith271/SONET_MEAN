let studentArray = [];

function pushData(form, event) {
  debugger;
  event.preventDefault();
  // const form = document.querySelector("form");
  var studentObject = {
    name: form.name.value,
    section: form.section.value,
    number: form.number.value,
    year: form.year.value,
  };
  studentArray.push(studentObject);
  showData();
  clearForm(form);

  
  // studentArray.push(form.section.value);
  // studentArray.push(form.number.value);
  // studentArray.push(form.year.value);
  debugger;
}

function showData() {
  let targetBody = document.querySelector("tbody");
  targetBody.innerHTML = '';
  studentArray.forEach((student) => {
    targetBody.innerHTML += `
             <tr>
                <td>
                    ${student.name}
                </td>
                <td>
                    ${student.section}
                </td>
                <td>
                    ${student.number}
                </td>
                <td>
                    ${student.year}
                </td>
            </tr>
      `;
  });
}

function clearForm(form) {
  form.name.value = "";
  form.section.value = "";
  form.number.value = "";
  form.year.value = "";
}
