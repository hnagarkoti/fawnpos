export default {
  name: "registerlog",
  title: "Register Log",
  type: "document",
  fields: [
    {
      name: "date",
      title: "date",
      type: "date",
    },
    {
      name: "registerid",
      title: "registerId",
      type: "number",
    },
    {
      name: "orgid",
      title: "Organization Id",
      type: "number",
    },
    {
      name: "client",
      title: "Client",
      type: "reference",
      to: [{ type: "client" }],
    },
  ],
};
