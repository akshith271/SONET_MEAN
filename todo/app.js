let todos = [];

window.onload = () => {
    const form1 = document.querySelector('#addForm');

    let submit = document.getElementById('submit');

    form1.addEventListener('submit', addItem);

    function addItem(e) {
        e.preventDefault();

        if (submit.value === 'EDIT') {
            todos = todos.map((item) => {
                if (item.isEditing) {
                    return {
                        id: item.id,
                        value: getInputValue(),
                    };
                }
                return item;
            });
            submit.value = 'Submit';
            notify(true);
        } else {
            todos.push({
                id: todos.length,
                value: getInputValue(),
            });
        }

        setInputValue('');
        renderTodos();
    }
};

function notify(isEdit = false) {
    const success = document.getElementById('lblsuccess');
    success.innerHTML = `Text ${isEdit ? 'edited' : 'deleted'} successfully`;

    success.style.display = 'block';

    setTimeout(function () {
        success.style.display = 'none';
    }, 3000);
}

function renderTodos() {
    let content = '';

    todos.forEach((item) => {
        const { id, value } = item;
        content += `
        <li class="list-group-item" id="${id}" data-content="${value}">
                ${value}
            <button class="btn-danger btn btn-sm float-right delete" onclick="removeItem(${id})">
                Delete
            </button>
            <button class="btn-success btn btn-sm float-right edit" onclick="editItem(${id})">
                Edit
            </button>
        </li>
        `;
    });
    document.getElementById('items').innerHTML = content;
    console.log(todos);
}

function toggleButton(inputEle, buttonId) {
    const submitButton = document.getElementById(buttonId);
    const { value } = inputEle;
    submitButton.disabled = !value.trim();
}

function removeItem(id) {
    if (confirm('Are you Sure?')) {
        todos = todos.filter((item) => item.id !== id);
        renderTodos();
        notify();
    }
}

function editItem(id) {
    const currentTodo = todos.find((item) => item.id === id);
    currentTodo.isEditing = true;
    const submitButton = document.getElementById('submit');
    submitButton.value = 'EDIT';
    setInputValue(currentTodo.value);
}

function getInputValue() {
    return document.getElementById('item').value.trim();
}

function setInputValue(value) {
    document.getElementById('item').value = value;
}
