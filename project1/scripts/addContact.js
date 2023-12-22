import * as ContactService from "../services/contactService.js";

window.addEventListener("DOMContentLoaded", () => {
  ContactService.getAllGroups()
    .then((Response) => {
      const groups = Response.data;

      if (group) {
        displayGroup(groups);
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

const displayGroup = (group) => {
  const selectElement = document.querySelector("#group-select-input");

  let optionElement = `<option value ="> select a group</option>`;

  for (let A of groups) {
    optionElement += `<option value ="${A.id}"> ${A.name}</option`;
  }
  selectElement.innerHTML = optionElement;
};

const formElement = document.querySelector("#edit-contact-form");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const formBody = {
    name: document.querySelector("#name-input").value,
    imageUrl: document.querySelector("#image-input").value,
    mobile: document.querySelector("#mobile-input").value,
    email: document.querySelector("#email-input").value,
    company: document.querySelector("#company-input").value,
    title: document.querySelector("#title-input").value,
    groupId: document.querySelector("#group-select-input").value,
  };

  if (formBody) {
    ContactService.CreateContact(formBody)
      .then((Response) => {
        if (Response && Response.data) {
          window.location.href = "../page/adminContact.html";
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
});
