const inputPairs = document.querySelectorAll(".input-pair");

for (let i = 0; i < inputPairs.length; i++) {
  const inputText = inputPairs[i].querySelector("input[type='text']");
  const combineButton = inputPairs[i].querySelector(".combine-button");
  const outputTextarea = inputPairs[i].querySelector(".output-textarea");
  const copyButton = inputPairs[i].querySelector(".copy-button");
  const message = inputPairs[i].querySelector(".message");
  const promptReadyMessage = inputPairs[i].querySelector(".promptReadyMessage");

  combineButton.addEventListener("click", function () {
    combineInputs(i);
    promptCombined(i);
  });

  copyButton.addEventListener("click", function () {
    copyTextToClipboard(i);
  });
}

function combineInputs(index) {
  const inputText = document
    .getElementById(`inputText${index + 1}`)
    .value.trim();
  const outputTextarea = document.querySelectorAll(".output-textarea")[index];

  // Implement your combining logic for each pair here
  let combinedOutput = "";

  switch (index) {
    case 0:
      combinedOutput = `Act as an SEO Copywriter. You’ll have to provide 5-6 catchy, click-worthy headlines that include the "${inputText}" and meta descriptions that also include the "${inputText}". Each title should be under 80 characters and each meta description should be within 140 characters. Must include the exact "${inputText}" in both title and meta description. Write 10-15 tags for the "${inputText}" and separate them by a comma.`;
      break;
    case 1:
      combinedOutput = `Please ignore all previous instructions. Please respond only in the English language. You are a market research expert who is an expert at generating questions and answers for topics. You have a Conversational tone of voice. You have a Conversational writing style. Please generate the 10 most frequently asked questions with answers on the topic "${inputText}". Make each question bold. Follow numeric numbering, and do not use list items. Must use FAQ Title based on the topic. Do not self-reference. Do not explain what you are doing. Do not include FAQ words in Numbering.`;
      break;
    case 2:
      combinedOutput = `Please ignore all previous instructions, and start fresh. Act as an experienced copywriter, you are experienced in writing Analogy. Write an analogy about the "${inputText}" topic.

You have to maintain the following tone, voice, vocabulary, and sentence structure to use when crafting analogies:

Tone and Voice: The tone of the text should be informative and reassuring. The writer should adopt an authoritative voice while addressing the audience and providing them with valuable information.

Vocabulary: The vocabulary should be very clear and accessible to the target audience. Technical terms should be minimal. The vocabulary should convey the information in a straightforward manner.

Sentence Structure: The sentences should be concise and well-structured. You should provide information in a straightforward manner, making it extremely easy for readers to understand the information. You should use bullet points and subheadings to aid in organizing the information and enhancing readability.

Structuring the Analog:

Start with Context: Introduce the topic and provide some context to set the stage for the analogy. This can be a brief explanation of the concept you want to analogize.

Create the Comparison: Present the analogy by drawing a parallel between the complex concept and something more familiar or relatable. Be creative and find connections that are easy to visualize and understand.

Explain the Connection: After presenting the analogy, explain how the comparison relates to the original concept. This step is crucial to ensure that the readers can grasp the intended message and apply it to the original topic.

Reinforce the Understanding: Use the analogy to provide additional insights and expand on the concept. Reinforce the main points and showcase how the analogy simplifies the complex idea.`;
      break;
    case 3:
      combinedOutput = `Pair 4 Output: ${inputText}`;
      break;
    default:
      break;
  }

  outputTextarea.value = combinedOutput;
}

function copyTextToClipboard(index) {
  const outputTextarea = document.querySelectorAll(".output-textarea")[index];
  outputTextarea.select();
  document.execCommand("copy");

  const message = document.querySelectorAll(".message")[index];
  message.innerText = "Text copied to clipboard!";
  setTimeout(() => {
    message.innerText = "";
  }, 2000);
}

function promptCombined(index) {
  // document.execCommand("copy");

  const promptReadyMessage = document.querySelectorAll(".promptReadyMessage")[index];
  promptReadyMessage.innerText = "Prompt is Ready to Copy";
  setTimeout(() => {
    promptReadyMessage.innerText = "";
  }, 2000);
}








// const pair1 = document.querySelector(".input-pair-1");
// const pair2 = document.querySelector(".input-pair-2");
// const pair3 = document.querySelector(".input-pair-3");
// const pair4 = document.querySelector(".input-pair-4");

// const pairs = [pair1, pair2, pair3, pair4];

// for (let i = 0; i < pairs.length; i++) {
//     const inputField1 = pairs[i].querySelector(".input-text-1");
//     const inputField2 = pairs[i].querySelector(".input-text-2");
//     const combineButton = pairs[i].querySelector(".combine-button");
//     const outputTextArea = pairs[i].querySelector(".output-textarea");
//     const copyButton = pairs[i].querySelector(".copy-button");
//     const message = pairs[i].querySelector(".message");

//     combineButton.addEventListener("click", function() {
//         combineInputs(inputField1.value.trim(), inputField2.value.trim(), i);
//     });

//     copyButton.addEventListener("click", function() {
//         copyTextToClipboard(i);
//     });
// }

// function combineInputs(input1, input2, index) {
//     const outputTextArea = document.querySelectorAll(".output-textarea")[index];

//     // Implement your combining logic for each pair here
//     let combinedOutput = "";

//     switch (index) {
//         case 0:
//             combinedOutput = `Pair 1 Output: ${input1} - ${input2}`;
//             break;
//         case 1:
//             combinedOutput = `Pair 2 Output: ${input1} and ${input2}`;
//             break;
//         case 2:
//             combinedOutput = `Pair 3 Output: Input1: ${input1}, Input2: ${input2}`;
//             break;
//         case 3:
//             combinedOutput = `Pair 4 Output: ${input2} - ${input1}`;
//             break;
//         default:
//             break;
//     }

//     outputTextArea.value = combinedOutput;
// }

// function copyTextToClipboard(index) {
//     const outputTextArea = document.querySelectorAll(".output-textarea")[index];
//     outputTextArea.select();
//     document.execCommand("copy");

//     const messageElement = document.querySelectorAll(".message")[index];
//     messageElement.innerText = "Text copied to clipboard!";
//     setTimeout(() => {
//         messageElement.innerText = "";
//     }, 2000);
// }
