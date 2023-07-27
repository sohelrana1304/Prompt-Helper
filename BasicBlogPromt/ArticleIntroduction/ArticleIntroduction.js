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

1. Tone: The tone of the introduction should align with the overall theme and subject of the article. It can be authoritative, conversational, enthusiastic, or informative, depending on the target audience and the nature of the content. It's essential to strike the right balance to resonate with readers.

2. Voice: The voice of the introduction should be consistent with the brand or publication's style and the content's purpose. First-person, second-person, or third-person voice can be used, depending on the context. Second-person voice (using "you") can create a more personal connection with the readers.

3. Vocabulary: Use clear and concise language to convey the main idea effectively. Avoid jargon or complex terminology that might confuse readers. If technical terms are necessary, explain them briefly. Incorporate powerful words and emotional triggers to evoke curiosity and interest in the readers.

4. Sentence Structure: Keep the sentences in the introduction relatively short and straightforward. This helps maintain readability and allows readers to grasp the main point quickly. A mix of sentence lengths can create a natural flow but avoid overly long or convoluted sentences that might lose the reader's attention.

I want you to write a compelling blog introduction paragraph around ${wordCount} words on "${keyword}" in the English language. Please use the AIDA (Attention Interest Desire Action) copywriting framework to hook and grab the attention of the blog readers. Please intersperse short and long sentences. Utilize uncommon terminology to enhance the originality of the content. Please format the content in a professional format. Do not self-reference. Do not explain what you are doing. It would be great if you can add the main keyword "${keyword}" and its related keyword into the text wherever appropriate, do not mention them separately. Please do highlight these keywords in bold in the text using markdown if you have them in the text. Remember that the topic is "${keyword}".`;

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
