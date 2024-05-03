const data = [
  { id: 1, email: "person1@example.com" },
  { id: 2, email: "person2@example.com" },
  { id: 3, email: "person3@example.com" },
  { id: 4, email: "person4@example.com" },
  { id: 5, email: "person5@example.com" },
  { id: 6, email: "person6@example.com" },
  { id: 7, email: "person7@example.com" },
  { id: 8, email: "person8@example.com" },
  { id: 9, email: "person9@example.com" },
  { id: 10, email: "person10@example.com" },
  { id: 11, email: "person11@example.com" },
  { id: 12, email: "person12@example.com" },
  { id: 13, email: "person13@example.com" },
  { id: 14, email: "person14@example.com" },
  { id: 15, email: "person15@example.com" },
  { id: 16, email: "person16@example.com" },
  { id: 17, email: "person17@example.com" },
  { id: 18, email: "person18@example.com" },
  { id: 19, email: "person19@example.com" },
  { id: 20, email: "person20@example.com" },
];

const userEmail = async (req, res) => {
  const { email: inputText } = req.body;
  console.log(inputText);
  const suggestUserEmail = data.filter((item) => {
    return item.email.includes(inputText);
  });
  console.log(suggestUserEmail);
  res.status(200).json({ code: 200, users: suggestUserEmail });
};

module.exports = userEmail;
