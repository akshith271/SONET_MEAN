window.onload = () => {
    const form1 = document.querySelector('#addForm');

    let items = document.getElementById('items');
    let submit = document.getElementById('submit');

    form1.addEventListener('submit', addItem);

    function addItem(e) {
        e.preventDefault();
        if (submit.value === 'EDIT') {
            const liId = submit.dataset.currentItemId;
            const li = document.getElementById(liId);
            const inputEle = document.getElementById('item');

            li.dataset.content = inputEle.value;
            li.childNodes[0].data = inputEle.value;

            submit.value = 'Submit';
            inputEle.value = '';

            const success = document.getElementById('lblsuccess');
            success.innerHTML = 'Text edited successfully';

            success.style.display = 'block';

            setTimeout(function () {
                success.style.display = 'none';
            }, 3000);

            return;
        }

        let newItem = document.getElementById('item').value;
        if (!newItem.trim()) return;

        document.getElementById('item').value = '';

        const index = items.children.length;
        items.innerHTML += `
        <li class="list-group-item" id="${index}" data-content="${newItem}">
                ${newItem}
            <button class="btn-danger btn btn-sm float-right delete" onclick="removeItem(${index})">
                Delete
            </button>
            <button class="btn-success btn btn-sm float-right edit" onclick="editItem(${index})">
                Edit
            </button>
        </li>
        `;
    }
};

function toggleButton(inputEle, buttonId) {
    const submitButton = document.getElementById(buttonId);
    const { value } = inputEle;
    submitButton.disabled = !value.trim();
}

function removeItem(id) {
    const li = document.getElementById(id);
    const items = document.getElementById('items');
    if (confirm('Are you Sure?')) {
        items.removeChild(li);
        const success = document.getElementById('lblsuccess');

        success.innerHTML = 'Text deleted successfully';

        success.style.display = 'block';
        setTimeout(function () {
            success.style.display = 'none';
        }, 3000);
    }
}

function editItem(id) {
    const li = document.getElementById(id);
    const inputEle = document.getElementById('item');
    inputEle.value = li.dataset.content;

    const submitButton = document.getElementById('submit');
    submitButton.value = 'EDIT';
    submitButton.dataset.currentItemId = id;
}

