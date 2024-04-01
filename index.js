const { Niji } = require('@rehat666/nijijourney');
const niji = new Niji("rehat"); // The main api key of the project do not change it!

(async () => {
  try {
    const generate = await niji.Create({
      prompt: '', // Prompt to generate text to image.
      imageUrl: '', // URL of the image for transforming an existing image with prompt.
      aspectRatio: '' // Ratio for adjusting the image aspect ratio in text to image not recommended for transforming existing images.
    });

    console.log(generate);
  } catch (error) {
    console.error(error);
  }
})();