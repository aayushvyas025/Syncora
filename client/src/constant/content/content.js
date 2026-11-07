const content = Object.freeze({
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
      {
        id: 1,
        content: `Hey! How's it going ?`,
        isSent: false,
        sendAt: "12:00 pm",
      },
      {
        id: 2,
        content: `I"m doing great! Just working on some new features.`,
        isSent: true,
        sendAt: "3:00 pm",
      },
    ],
    header: {
      fullname: "John doe",
      onlineStatus: "Online",
    },
  },
  home: {
    chat: {
      placeholder: {
        title: "Welcome to Syncora",
        subTitle: "Select a friend from the sidebar to start conversation",
      },
    },
  },
  notFound: {
    title: 404,
    subTitle: "Page Not Found",
    description:
      "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.",
    btn: {
      home: "Return Home",
      auth: "Return Login",
    },
  },
});

export default content;
