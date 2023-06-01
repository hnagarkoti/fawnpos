export default {
  name: "client",
  title: "Client",
  type: "document",
  fields: [
    {
      name: "firstname",
      title: "First Name",
      type: "string",
    },
    {
      name: "lastname",
      title: "Last Name",
      type: "string",
    },
    {
      name: "username",
      title: "Username",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "phone",
      title: "Phone Number",
      type: "number",
    },
    {
      name: "password",
      title: "Password",
      type: "string",
    },
    {
      name: "role",
      title: "Role",
      type: "string",
    },
    {
      name: "orgid",
      title: "OrgId",
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
