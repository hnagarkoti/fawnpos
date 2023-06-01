export default {
  name: "subscription",
  title: "Subscription",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "type",
      title: "type",
      type: "string",
    },
    {
      name: "registercount",
      title: "Register Count",
      type: "number",
    },
    {
      name: "usercount",
      title: "User Count",
      type: "number",
    },
    {
      name: "organization",
      title: "Organization",
      type: "reference",
      to: [{ type: "organization" }],
    },
  ],
};
