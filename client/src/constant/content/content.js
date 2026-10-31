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
    title: "Preview",
    previewMessages: [
      { id: 1, content: `Hey! How's it going ?`, isSent: false, sendAt:'12:00 pm' },
      {
        id: 2,
        content: `I"m doing great! Just working on some new features.`,
        isSent: true,
        sendAt:'3:00 pm'
      },
    ],
    header: {
      fullname: "John doe",
      onlineStatus: "Online",
    },
  },
});

export default content;
