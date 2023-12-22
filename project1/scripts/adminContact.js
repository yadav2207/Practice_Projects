import * as ContactService from "../services/contactService.js";

window.addEventListener("DOMContentLoaded", () => {
  ContactService.getAllContacts()
    .then((Response) => {
      const contact = Response.data;
      adminContact(contact);
    })
    .catch((error) => {
      console.log(error);
    });
});

const adminContact = (contact) => {
  const ContactRowTable = document.querySelector("#contact-table-body");
  let TableElement = "";

  contact.forEach((T, index) => {
    TableElement += `<tr>;

    <td>${index + 1}</td>;

    <td>
        <img src="${
          T.imageUrl
        }" width = "50" height = "50" class= "rounded-circle shadow-lg">
        
    </td>
    <td>${T.name}</td>
    <td>${T.mobile}</td>
    <td>${T.title}</td>
    <td>${T.company}</td>
    <td>
    <a class = "btn btn-primary mt-2 " href="../pages/editContact.html?Id=${
      T.id
    }">
    UPDATE </a>

    <a class="btn btn-danger mt-2" href"../pages/deleteContact.html?Id =${
      T.id
    }">DELETE</a>
    </td>
    </tr>`;
  });
  ContactRowTable.innerHTML = TableElement;
};
