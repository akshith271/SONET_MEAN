window.onload = () => {
    //on load
    const form1 = document.querySelector("#addForm");

    let items = document.getElementById("items");
    let submit = document.getElementById("submit");

    let editItem = null;

    //listeners to be added here
};

function addItemm(e) {
    e.preventDefault();

    if (submit.value !== "Submit") {
        console.log("Hello");

        editItem.target.parentNode.childNodes[0].data
            = document.getElementById("item").value;

        submit.value = "Submit";
        document.getElementById("item").value = "";

        document.getElementById("lblsuccess").innerHTML
            = "Text edited successfully";

        document.getElementById("lblsuccess")
            .style.display = "block";

        setTimeout(function() {
            document.getElementById("lblsuccess")
                .style.display = "non";
        }, 3000);

        return false;
    }

    let newItem = document.getElementById("item").value;
    if (newItem.trim() == "" || newItem.trim() == null)
        return false;
    else
        document.getElementById("item").value = "";

    let li = document.createElement("li");
    li.className = "list-group-item";

    let deleteButton = document.createElement("button");

    deleteButton.className =
        "btn-danger btn btn-sm float-right delete";

    deleteButton.appendChild(document.createTextNode("Delete"));

    let editButton = document.createElement("button");

    editButton.className =
        "btn-success btn btn-sm float-right edit";

    editButton.appendChild(document.createTextNode("Edit"));

    li.appendChild(document.createTextNode(newItem));
    li.appendChild(deleteButton);
    li.appendChild(editButton);

    items.appendChild(li);
}

function removeItem(e) {
    e.preventDefault();
    if (e.target.classList.contains("delete")) {
        if (confirm("Are you Sure?")) {
            let li = e.target.parentNode;
            items.removeChild(li);
            document.getElementById("success").innerHTML
                = "Text deleted successfully";

            document.getElementById("lblsuccess")
                .style.display = "block";
            setTimeout(function() {
                document.getElementById("lblsuccess")
                    .style.display = "none";
            }, 3000);
        }
    }
    if (e.target.classList.contains("edit")) {
        document.getElementById("item").value =
            e.target.parentNode.childNodes[0].data;
        submit.value = "EDIT";
        editItem = e;
    }
}

//enable submit button here
