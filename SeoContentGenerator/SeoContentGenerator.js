document.getElementById("get-prompt").addEventListener("click", function () {
  const focusKeyword = document.getElementById("focus-keyword").value.trim();
  const titleChecked = document.getElementById("title").checked;
  const metaDescriptionChecked =
    document.getElementById("meta-description").checked;
  const tagsChecked = document.getElementById("tags").checked;
  const faqChecked = document.getElementById("faq").checked;
  const aiImageChecked = document.getElementById("ai-image").checked;

  const titleCount = document.getElementById("title-count").value.trim() || "1";
  const metaDescriptionCount =
    document.getElementById("meta-description-count").value.trim() || "1";
  const tagsCount = document.getElementById("tags-count").value.trim() || "5";
  const faqCount = document.getElementById("faq-count").value.trim() || "5";
  const aiImagePrompt =
    document.getElementById("ai-image-input").value.trim() ||
    "Super hyper realistic image";
  const description = document.getElementById("description").value.trim();


  let checkdValue = ``;
  let promptText = ``;
  // let promptText = `Act as an SEO-optimized ${checkdValue} writing expert.`;

  // console.log(checkdValue);

  // let getTitle, getTitleCount, 
  //   // getTitlePrompt,
  //   getMetaDescription,
  //   getMetaDescriptionCount,
  //   // getMetaDescriptionPrompt,
  //   getTags,
  //   getTagsCount,
  //   // getTagsPrompt,
  //   getFaqs,
  //   getFaqsCount,
  //   // getFaqsPrompt,
  //   getAiImagePromptWriter,
  //   // getAiImagePrompt,
  //   getAiImagePromptStyle
  //   // getDescription;

  if (titleChecked) {
    checkdValue += `Title, `;
    let getTitleCount = `${titleCount}`;
    promptText += `You’ll have to provide ${getTitleCount} catchy, click-worthy SEO-optimized title under 55 characters, in this title the focus keyword "${focusKeyword}" should be present (Important, don't change the focus keyword. Don't try to make the focus keyword grammatically correct or translate it.)`;
    // promptText += `Title (Count: ${titleCount})\n`;
  }
  if (metaDescriptionChecked) {
    checkdValue += `Meta Description, `;
    let getMetaDescriptionCount = `${metaDescriptionCount}`;
    promptText += `You’ll have to provide ${getMetaDescriptionCount} catchy, click-worthy SEO-optimized meta description under 160 characters, in this meta description the focus keyword "${focusKeyword}" should be present (Important, don't change the focus keyword. Don't try to make the focus keyword grammatically correct or translate it.)`;
    // promptText += `Meta Description (Count: ${metaDescriptionCount})\n`;
  }
  if (tagsChecked) {
    checkdValue += `Tags, `;
    let getTagsCount = `${tagsCount}`;
    promptText += `Write ${getTagsCount} SEO optimized tags and separate them by comma and also put a comma on the last tag,`;
    // promptText += `Tags (Count: ${tagsCount})\n`;
  }
  if (faqChecked) {
    checkdValue += `FAQ`;
    let getFaqsCount = `${faqCount}`;
    promptText += `Write the ${getFaqsCount} most frequently asked questions with answers on the topic ${focusKeyword}. Make each question bold. Do not do numbering, or do not use list items. Must use the FAQ Title that is "FAQs With Answers". Use markdown formatting. Make FAQ heading H2, for question use H3 heading and for answers use paragraph. Write only FAQ heading, questions, and answers. Do not add anything by yourself.`;
    // promptText += `FAQ (Count: ${faqCount})\n`;
  }
  if (aiImageChecked) {
    checkdValue += `Ai image generation prompt, `;
    let getAiImagePromptStyle = `${aiImagePrompt}`;
    promptText += `Write an optimized and extremely detailed ai image generation prompt for AI model, do not need to make points or list items while writing, writing prompt in paragraph style only, image style should be ${getAiImagePromptStyle}`;
    // promptText += `AI Image Generation Prompt: ${aiImagePrompt}\n`;
  }
  if (description) {
    promptText += `Here is the information you can use this to generate better output, information: "${description}"`;
    // promptText += `Description: ${description}\n`;
  }

  // console.log(getTitle, "Hi", getTitleCount)
  // console.log(checkdValue);
  // checkdValue;

  let completePrompt = `Act as an SEO-optimized ${checkdValue} writing expert. ${promptText}`;

  // let promptText = `Act as an SEO-optimized ${getTitle}, ${getMetaDescription}, ${getTags}, ${getFaqs}, ${getAiImagePromptWriter} writing expert, ${getTitlePrompt} ${getMetaDescriptionPrompt} ${getTagsPrompt} ${getFaqsPrompt} ${getAiImagePrompt} ${getDescription}`;

  // document.getElementById("output").value = promptText;
  document.getElementById("output").value = completePrompt;
  document.getElementById("get-prompt-message").textContent =
    "Prompt is ready to Copy";
});

document.getElementById("copy-text").addEventListener("click", function () {
  const outputText = document.getElementById("output");
  outputText.select();
  document.execCommand("copy");
  document.getElementById("copy-message").textContent =
    "Prompt has been successfully copied";
});
