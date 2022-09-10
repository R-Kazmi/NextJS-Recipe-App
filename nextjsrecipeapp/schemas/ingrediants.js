export default {
  name: "ingrediants",
  title: "Ingrediants",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Ingrediants's Name",
      type: "string",
    },
    {
      name: "image",
      title: "image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "note",
      title: "Note",
      type: "text",
    },
  ],
};
