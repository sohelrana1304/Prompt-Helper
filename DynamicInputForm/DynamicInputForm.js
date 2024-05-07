// function copyContent(inputElement) {
//   inputElement.select();
//   inputElement.setSelectionRange(0, 99999); // For mobile devices
//   navigator.clipboard
//     .writeText(inputElement.value)
//     .then(() => {
//       displayMessage("Copied: " + inputElement.value);
//     })
//     .catch((err) => {
//       displayMessage("Error in copying text: " + err, true);
//     });
// }

// function addFields(button) {
//   const container = button.parentNode.parentNode;
//   const newGroup = container.firstElementChild.cloneNode(true);
//   newGroup.querySelectorAll("input").forEach((input) => (input.value = ""));
//   container.appendChild(newGroup);
// }

// function removeFields(button) {
//   const group = button.parentNode;
//   const container = group.parentNode;
//   if (container.children.length > 1) {
//     container.removeChild(group);
//     displayMessage("Input group removed.");
//   } else {
//     displayMessage("At least one input group should remain.", true);
//   }
// }

// function getPrompt() {
//   const groups = document.querySelectorAll(".input-group");
//   let combinedText =
//     "Act as an experienced copywriter you are an expert in writing articles on any topic and you are also an expert in writing articles from anchor text and analysing URLs. Now write an entire article that must consist of the three anchor texts and URL:\n\n";
//   groups.forEach((group) => {
//     const textInput = group.querySelector('input[type="text"]');
//     const urlInput = group.querySelector('input[type="url"]');
//     combinedText += `The anchor text is "${textInput.value}" and the URL is "${urlInput.value}",\n\n`;
//   });
//   combinedText += `The article should be based upon a single topic and Must include the above three anchor texts.\n\nYou should use markdown formatting, including bold, UL / OL, H1, H2, H3, H4, and necessary headings.Use proper headings, subheadings, bullet points, etc.Always start with a clickbait H1 heading.The entire article should be between 700 - 800 words.\n`;
//   document.querySelector("textarea").value = combinedText.trim();
//   displayMessage("Text combined in the textarea.");
// }

// function displayMessage(message, isError = false) {
//   const messageElement = document.getElementById("message");
//   messageElement.textContent = message;
//   messageElement.style.color = isError ? "red" : "green";
// }



// function copyContent(inputElement) {
//   inputElement.select();
//   inputElement.setSelectionRange(0, 99999); // For mobile devices
//   navigator.clipboard
//     .writeText(inputElement.value)
//     .then(() => {
//       document.getElementById("message").textContent =
//         "Copied: " + inputElement.value;
//     })
//     .catch((err) => {
//       document.getElementById("message").textContent =
//         "Error in copying text: " + err;
//     });
// }

function copyContent(inputElement) {
  inputElement.select();
  inputElement.setSelectionRange(0, 99999); // For mobile devices
  navigator.clipboard.writeText(inputElement.value);
}


function addFields(button) {
  const container = document.querySelector(".input-container");
  const newGroup = container.firstElementChild.cloneNode(true);
  newGroup.querySelectorAll("input").forEach((input) => (input.value = ""));
  container.appendChild(newGroup);
}

function removeFields(button) {
  const group = button.closest(".input-group");
  if (group.parentNode.children.length > 1) {
    group.parentNode.removeChild(group);
  } else {
    document.getElementById("message").textContent =
      "At least one input group should remain.";
       setTimeout(() => {
         document.getElementById("message").textContent = ""; // Clear the message after 3 seconds
       }, 3000);
  }
}

function getPrompt() {
 const groups = document.querySelectorAll(".input-group");
 let combinedText =
   "Act as an experienced copywriter, you are an expert in writing articles on any topic and you are also an expert in writing articles from anchor text and analysing URLs. Now write an entire article that must consist of the three anchor texts and URL:\n\n";
 groups.forEach((group) => {
   const textInput = group.querySelector('input[type="text"]');
   const urlInput = group.querySelector('input[type="url"]');
   combinedText += `The anchor text is "${textInput.value}" and the URL is "${urlInput.value}",\n\n`;
 });
 combinedText += `The article should be based upon a single topic and Must include the above three anchor texts.\n\nYou should use markdown formatting, including bold, UL / OL, H1, H2, H3, H4, and necessary headings. Use proper headings, subheadings, bullet points, etc. Always start with a clickbait H1 heading.The entire article should be between 700 - 800 words.\n`;
 document.querySelector("textarea").value = combinedText.trim();
}

document.getElementById("get-prompt").addEventListener("click", function () {
  const messageElement = document.getElementById("prompt-area-msg"); // Assuming 'prompt-area-msg' is the ID for the message span near your prompt area
  messageElement.textContent = "Your prompt is ready to copy";
  setTimeout(() => {
    messageElement.textContent = ""; // Clear the message after 3 seconds
  }, 3000);
});



document.getElementById("copy-prompt").addEventListener("click", function () {
  const promptText = document.getElementById("prompt-area").value;
  navigator.clipboard.writeText(promptText).then(() => {
    const messageElement = document.getElementById("copied-prompt-area-msg");
    messageElement.textContent = "Prompt copied successfully";
    setTimeout(() => {
      messageElement.textContent = ""; // Clear the message after 3 seconds
    }, 3000);
  });
});