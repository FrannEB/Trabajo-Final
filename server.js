const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const users = {
  'test@example.com': {
    username: 'testuser',
    password: 'testpassword',
  },
};

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const user = users[email];

  if (user && user.password === password) {
    res.json({ success: true });
  } else {
    res.json({ success: false, message: 'Nombre de usuario, correo electrónico o contraseña no válidos.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
