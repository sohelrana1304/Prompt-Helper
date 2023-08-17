const inputText = document.getElementById("inputText");
const inputTextarea1 = document.getElementById("inputTextarea1");
// const inputTextarea2 = document.getElementById("inputTextarea2");
const getPrompt = document.getElementById("getPrompt");
const outputPrompt = document.getElementById("outputPrompt");
const copyPrompt = document.getElementById("copyPrompt");
const copiedMessage = document.querySelector(".copiedMessage");
const promptReadyMessage = document.querySelector(".promptReadyMessage");

getPrompt.addEventListener("click", function () {
  makePrompt();
  promptCombined();
});

// promptReadyMessage.addEventListener("click", function () {
//   promptCombined();
// });
copyPrompt.addEventListener("click", function () {
  copyTextToClipboard();
});

function makePrompt() {
  const keyword = inputText.value.trim();
  const wordCount = inputTextarea1.value.trim();
  //   const productDescription = inputTextarea2.value.trim();

  const combinedOutput = `Please ignore all previous instructions. You are an expert copywriter who writes detailed and compelling blog articles. 

You have to maintain the following tone, voice, vocabulary, and sentence structure while writing:

Tone and Voice: The tone of the text should be informative and reassuring. The writer should adopt an authoritative voice while addressing the audience and providing them with valuable information.

Vocabulary: The vocabulary should be very clear and accessible to the target audience. Technical terms should be minimal. The vocabulary should convey the information in a straightforward manner.

Sentence Structure: The sentences should be concise and well-structured. You should provide information in a straightforward manner, making it extremely easy for readers to understand the information. You should use bullet points and subheadings to aid in organizing the information and enhancing readability.

I want you to write a compelling blog introduction paragraph of around ${wordCount} words on "${keyword}" in the English language. Please use the AIDA (Attention Interest Desire Action) copywriting framework to hook and grab the attention of the blog readers. Please intersperse short and long sentences. Utilize uncommon terminology to enhance the originality of the content. Please format the content in a professional format. Do not self-reference. Do not explain what you are doing. It would be great if you can add the main keyword "${keyword}" and its related keyword into the text wherever appropriate, do not mention them separately. Please do highlight these keywords in bold in the text using markdown if you have them in the text. Remember that the topic is "${keyword}".`;

  outputPrompt.value = combinedOutput;
}

function copyTextToClipboard() {
  outputPrompt.select();
  document.execCommand("copy");

  copiedMessage.innerText = "Prompt copied to clipboard!";
  setTimeout(() => {
    copiedMessage.innerText = "";
  }, 2000);
}

function promptCombined() {
  document.execCommand("copy");

  promptReadyMessage.innerText = "Prompt is Ready to Copy";
  setTimeout(() => {
    promptReadyMessage.innerText = "";
  }, 2000);
}
