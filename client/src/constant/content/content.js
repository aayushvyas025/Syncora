const content = Object.freeze({
  auth: {
    signup: {},
    login: {},
  },
  themes: {
    title: "Theme",
    subTitle: "Choose a theme for your chat interface",
    list: [
      "light",
      "dark",
      "bumblebee",
      "synthwave",
      "corporate",
      "halloween",
      "forest",
      "dim",
      "night",
      "sunset",
      "luxury",
      "business",
    ],
  },
  preview: {
    title: "",
    previewMessages: [
      { id: 1, content: `Hey! How's it going ?`, isSent: false },
      {
        id: 2,
        content: `I"m doing great! Just working on some new features.`,
        isSent: true,
      },
    ],
  },
});

export default content;
