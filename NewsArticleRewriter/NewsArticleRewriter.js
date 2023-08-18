const inputText = document.getElementById("inputText");
const inputTextarea1 = document.getElementById("inputTextarea1");
// const inputTextarea2 = document.getElementById("inputTextarea2");
const combineButton = document.getElementById("combineButton");
const outputTextarea = document.getElementById("outputTextarea");
const outputTextarea1 = document.getElementById("outputTextarea1");
const copyButton = document.getElementById("copyButton");
const copyButton1 = document.getElementById("copyButton1");
const message = document.querySelector(".message");
const message1 = document.querySelector(".message1");
const promptReadyMessage = document.querySelector(".promptReadyMessage");

combineButton.addEventListener("click", function () {
  combineInputs();
  promptCombined();
});

copyButton.addEventListener("click", function () {
  copyTextToClipboard();
});

copyButton1.addEventListener("click", function () {
  copyTextToClipboard1();
});

function combineInputs() {
  // const keyword = inputText.value.trim();
  const existingNews = inputTextarea1.value.trim();
//   const productDescription = inputTextarea2.value.trim();

  const combinedOutput = `Act as an experienced news article writer. You have to maintain the following tone, voice, vocabulary, and sentence structure while writing.

Tone and Voice: The tone of a news article should be informative, neutral, and straightforward. It’s important to present the facts without expressing personal opinions or emotions. The voice should be authoritative and credible, as if the writer is an expert delivering important information to the readers.

Vocabulary: Use simple and clear vocabulary that the general audience can easily understand. Avoid using jargon, technical terms, or complex words that might confuse readers. Stick to common words that convey the information accurately.

Sentence Structure: Keep sentences concise and to the point. Use active voice to make the writing more direct and engaging. Short and straightforward sentences work well in news articles, as they are easier to understand. Avoid long and convoluted sentence structures that could make the information harder to follow.

Example of a Simple News Article:
Headline: New Park Opening in Town

Introduction:
A brand-new park is set to open in our town, bringing excitement for both kids and adults. The park, named “Sunshine Meadows,” is expected to offer a range of activities and amenities for everyone to enjoy.

Details about the Park:
Sunshine Meadows will feature a large playground with swings, slides, and climbing structures for children. For those who enjoy outdoor sports, there will be basketball and tennis courts, as well as a spacious green area for picnics and outdoor games.

Facilities and Amenities:
The park will also include clean restroom facilities and drinking water stations to ensure the comfort of visitors. Additionally, shaded benches and tables will be available for relaxation and family gatherings.

Opening Date and Hours:
The grand opening of Sunshine Meadows is scheduled for next Saturday, starting at 10 AM. The park will be open daily from 8 AM to 8 PM, providing ample opportunities for families and individuals to make the most of the outdoor space.

Community’s Reaction:
Local residents have expressed their enthusiasm about the new park, citing the need for more recreational areas in the town. Many are looking forward to the various activities that the park will offer and are excited about the positive impact it will have on the community’s well-being.

Conclusion:
The opening of Sunshine Meadows is expected to bring a fresh and vibrant addition to our town. With its diverse range of amenities and opportunities for outdoor enjoyment, the park is poised to become a popular destination for families and individuals alike. Don’t miss out on the grand opening celebration next Saturday!

By maintaining the above tone, voice, vocabulary, and sentence structure rewrite the following News Article:

Now rewrite this News Article: " ${existingNews} "

You should use markdown formatting, including bold, UL/OL, H1, H2, H3, H4, and necessary headings. Use proper headings, subheadings, bullet points, etc. Always start with H1 heading.`;

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

function copyTextToClipboard1() {
  outputTextarea1.select();
  document.execCommand("copy");

  message1.innerText = "Prompt copied to clipboard!";
  setTimeout(() => {
    message1.innerText = "";
  }, 2000);
}

function promptCombined() {
  // document.execCommand("copy");

  promptReadyMessage.innerText = "Prompt is Ready to Copy";
  setTimeout(() => {
    promptReadyMessage.innerText = "";
  }, 2000);
}