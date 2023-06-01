export default {
  name: "register",
  title: "Register",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "organization",
      title: "Organization",
      type: "reference",
      to: [{ type: "organization" }],
    },
  ],
};
