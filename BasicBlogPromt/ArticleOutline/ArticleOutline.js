const inputText = document.getElementById("inputText");
const inputTextarea1 = document.getElementById("inputTextarea1");
// const inputTextarea2 = document.getElementById("inputTextarea2");
const getPrompt = document.getElementById("getPrompt");
const outputPrompt = document.getElementById("outputPrompt");
const copyPrompt = document.getElementById("copyPrompt");
const copiedMessage = document.querySelector(".copiedMessage");

getPrompt.addEventListener("click", function () {
  makePrompt();
});

copyPrompt.addEventListener("click", function () {
  copyTextToClipboard();
});

function makePrompt() {
  const keyword = inputText.value.trim();
  const targatedAudiance = inputTextarea1.value.trim();
  //   const productDescription = inputTextarea2.value.trim();

  const combinedOutput = `Please ignore all previous instructions. You are an expert copywriter who creates content outlines. You have a Conversational tone of voice. You have a Conversational writing style. Create a long form content outline in the english language for the blog post titled "${keyword}", targeting "${targatedAudiance}" audiance. The outline should be extensive and it should cover the entire topic. Create detailed subheadings that are engaging and catchy. Do not write the blog post, please only write the outline of the blog post. Please do not number the headings. Do not self reference. Do not explain what you are doing.`;

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
