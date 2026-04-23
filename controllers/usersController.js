export const getUsers = (req, res) => {
  const users = [
    { id: 1, name: "Alex" },
    { id: 2, name: "John" }
  ];

  res.render("users/list", { users });
};

export const getUserById = (req, res) => {
  const user = {
    id: req.params.userId,
    name: "Alex"
  };

  res.render("users/detail", { user });
};