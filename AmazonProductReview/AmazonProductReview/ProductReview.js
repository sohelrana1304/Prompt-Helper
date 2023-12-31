const inputText = document.getElementById("inputText");
const inputTextarea1 = document.getElementById("inputTextarea1");
const inputTextarea2 = document.getElementById("inputTextarea2");
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
  const productName = inputTextarea1.value.trim();
  const productDescription = inputTextarea2.value.trim();

  const combinedOutput = `Ignore all previous instructions and start fresh. Act as an experienced copywriter. You are experienced in writing SEO-optimised Amazon Affiliate articles. 

You have to maintain the following tone, voice, vocabulary, and sentence structure while writing.

The tone, voice, vocabulary, and sentence structure in an Amazon product review article should be tailored to appeal to the target audience, which is typically consumers seeking information about the product. Here are some guidelines for crafting the right tone and style:

Tone and Voice: The tone of the text should be informative and reassuring. The writer should adopt an authoritative voice while addressing the audience and providing them with valuable information.

Vocabulary: The vocabulary should be very clear and accessible to the target audience. Technical terms should be minimal. The vocabulary should convey the information in a straightforward manner.

Sentence Structure: The sentences should be concise and well-structured. You should provide information in a straightforward manner, making it extremely easy for readers to understand the information. You should use bullet points and subheadings to aid in organizing the information and enhancing readability.

Be Objective: Present both the pros and cons of the product objectively. Readers appreciate honesty, and it helps build trust in your reviews.

Use Descriptive Language: Paint a vivid picture of the product by using descriptive language. Help readers visualize the product’s features and how it can benefit them.

Focus on Benefits: Emphasize the benefits the product offers to users. Explain how it can solve their problems or improve their lives.

Engage with Questions: Use rhetorical questions to engage readers and prompt them to think about how the product might address their needs.

Include Visuals: If possible, include images or graphics of the product to enhance the visual appeal and provide more context.

Remember, the ultimate aim is to provide helpful and valuable information to readers, empowering them to make informed decisions. By adopting an authentic and reader-centric approach in your writing, you can create engaging Amazon product review articles that resonate with your audience and drive conversions.

The goal of this article is: "The goal of an Amazon product review article is to inform and guide potential buyers, providing them with valuable and unbiased information about the product’s features, benefits, and drawbacks. By building trust, offering unique insights, and helping with their decision-making process, the review aims to increase conversions through affiliate links. Well-optimized reviews also enhance SEO visibility, comply with Amazon’s guidelines, and foster repeat traffic for long-term success as an affiliate marketer."

I am giving you Product Name and Product Descriptions below. It contains all the important information about the product. Don't copy it, but write a unique product review using this product description.

Product Name: "${productName}"

Product Description: "${productDescription}"

From the above Product Name and Description, you have to write an in-depth product review. I want you to try to include the main keyword "${keyword}" and its related keywords while writing, do not mention them separately. 

Now write about these points using the Product Name and Description:

Use a good and catchy Product Name (Make it catchy and shorter, Use H3 heading)
- In-depth Product Review (Write between 200 - 250 words, do not make any bullet points. Use H4 heading)
- What We Liked (Use bullet points, minimum 5 points, and make it a one-liner. Use H4 heading)
- What We Disliked (Use bullet points, minimum 3 points and make it a one-liner. Use H4 heading)
- Key Specifications (Use bullet points, Mention age recommendation, Used material, and Mention any important specification that is related to the product, Do not mention ASIN number, Model number, or any Product inventory-related points. Use H4 heading)
- Our Verdict (use H4 heading)

You should use markdown formatting, including bold, UL/OL, H3, H4, and necessary headings, and write with a degree of creativity, burstiness, and human-like. Use proper headings, subheadings, bullet points, etc. Start with H3 Heading.`;

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

function promptCombined() {
  document.execCommand("copy");

  promptReadyMessage.innerText = "Prompt is Ready to Copy";
  setTimeout(() => {
    promptReadyMessage.innerText = "";
  }, 2000);
}
