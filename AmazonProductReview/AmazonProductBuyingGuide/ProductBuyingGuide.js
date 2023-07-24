const inputText = document.getElementById("inputText");
const inputTextarea1 = document.getElementById("inputTextarea1");
// const inputTextarea2 = document.getElementById("inputTextarea2");
const combineButton = document.getElementById("combineButton");
const outputTextarea = document.getElementById("outputTextarea");
const copyButton = document.getElementById("copyButton");
const message = document.querySelector(".message");

combineButton.addEventListener("click", function () {
  combineInputs();
});

copyButton.addEventListener("click", function () {
  copyTextToClipboard();
});

function combineInputs() {
  const keyword = inputText.value.trim();
  const partFromOutline = inputTextarea1.value.trim();
//   const productDescription = inputTextarea2.value.trim();

  const combinedOutput = `You are an expert copywriter who writes detailed and thoughtful blog articles.

You have to maintain the following tone, voice, vocabulary, and sentence structure while writing.

Tone: The tone should be professional, authoritative, and objective.

Voice: The voice should be third-person or second-person, depending on the style guide or preference.

Vocabulary: The vocabulary should be clear, concise, and appropriate for the target audience, avoiding jargon or overly complex terms unless necessary and explained properly.

Sentence Structure: The sentence structure should be varied, with a mix of short and long sentences to maintain a smooth flow and keep the readers engaged.

Additionally, use transition words to connect ideas and maintain coherence throughout the article. Always focus on clarity and readability, making it easy for the audience to understand the information presented. Don't follow AI pattern while writing. Make sure to add a bit of humor and add some funny lines.

Now write about the "

${partFromOutline}

" part from the outline.

You should use markdown formatting, including bold, UL/OL, H2, H3, H4 and necessary headings and write with a degree of creativity, burstiness, and human-like. Use proper headings, subheadings, bullet points, etc. Start with H2 Heading. Don't use nested list items. Make bold each heading. Use active voice and short sentences to make the content more readable. I want you to try to include the main keyword "${keyword}" and it's related keyword while writing, do not mention them seperately. Don't Talk about Yourself or Your Experience Address to the Reader.

The goal of this article is: "The goal of an information-based article is to provide valuable, accurate, and relevant information in a clear and engaging manner. Inform and educate the audience, ensuring accuracy and credibility. Engage readers with a well-structured format and valuable insights. Tailor the content to the target audience and consider adding a relevant call-to-action. Keep it concise, SEO-friendly, and prioritize readability and value."

By considering each instruction writing language should be simple and very easy to understand.`;

  outputTextarea.value = combinedOutput;
}

function copyTextToClipboard() {
  outputTextarea.select();
  document.execCommand("copy");

  message.innerText = "Prompt copied to clipboard!";
  setTimeout(() => {
    message.innerText = "";
  }, 2000);
}
