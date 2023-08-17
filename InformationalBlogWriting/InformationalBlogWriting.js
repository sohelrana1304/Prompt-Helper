const inputText = document.getElementById("inputText");
const inputTextarea1 = document.getElementById("inputTextarea1");
// const inputTextarea2 = document.getElementById("inputTextarea2");
const combineButton = document.getElementById("combineButton");
const outputTextarea = document.getElementById("outputTextarea");
const copyButton = document.getElementById("copyButton");
const message = document.querySelector(".message");
const promptReadyMessage = document.querySelector(".promptReadyMessage");

combineButton.addEventListener("click", function () {
  combineInputs();
  promptCombined();
});

copyButton.addEventListener("click", function () {
  copyTextToClipboard();
});

function combineInputs() {
  const keyword = inputText.value.trim();
  const partfromOutline = inputTextarea1.value.trim();
//   const input3 = inputTextarea2.value.trim();
  const combinedOutput = `You are an expert copywriter who writes detailed and thoughtful blog articles.

You have to maintain the following tone, voice, vocabulary, and sentence structure while writing.

Tone and Voice: The tone of the text should be informative and reassuring. The writer should adopt an authoritative voice while addressing the audience and providing them with valuable information.

Vocabulary: The vocabulary should be very clear and accessible to the target audience. Technical terms should be minimal. The vocabulary should convey the information in a straightforward manner.

Sentence Structure: The sentences should be concise and well-structured. You should provide information in a straightforward manner, making it extremely easy for readers to understand the information. You should use bullet points and subheadings to aid in organizing the information and enhancing readability.

Additionally, use transition words to connect ideas and maintain coherence throughout the article. Always focus on clarity and readability, making it extremely easy for the audience to understand the information presented.

The goal of this article is: "The goal of an information-based article is to provide valuable, accurate, and relevant information in a clear and engaging manner. Inform and educate the audience, ensuring accuracy and credibility. Engage readers with a well-structured format and valuable insights. Tailor the content to the target audience and consider adding a relevant call to action. Keep it concise, SEO-friendly, and prioritize readability and value."

Now write about the "

${partfromOutline}

" part from the outline.

You should use markdown formatting, including bold, UL/OL, H2, H3, H4, and necessary headings, and write with a degree of creativity, burstiness, and human-like. Use proper headings, subheadings, bullet points, etc. Start with H2 Heading. Don't use nested list items. Make bold each heading. Use active voice and short sentences to make the content more readable. I want you to try to include the main keyword "${keyword}" and its related keyword while writing, do not mention them separately. Don't Talk about Yourself or Your Experience Address to the Reader.

By considering each instruction writing language should be simple and very easy to understand.`;

  outputTextarea.value = combinedOutput;
}

function copyTextToClipboard() {
  outputTextarea.select();
  document.execCommand("copy");

  message.innerText = "Text copied to clipboard!";
  setTimeout(() => {
    message.innerText = "";
  }, 2000);
}

function promptCombined() {
  // document.execCommand("copy");

  promptReadyMessage.innerText = "Prompt is Ready to Copy";
  setTimeout(() => {
    promptReadyMessage.innerText = "";
  }, 2000);
}