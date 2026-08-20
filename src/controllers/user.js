// temp data (in-memory usage)
const users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' }
];

exports.index = (req, res) => {
    res.json(users);
};

exports.show = (req, res) => {

    const user = users.find(
        u => u.id === parseInt(req.params.id)
    );

    if (!user) {
        return res.status(404).json({
            error: 'User not found'
        });
    }

    res.json(user);

};

exports.store = (req, res) => {

    // creds
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({
            error: 'All fields are required'
        });
    }

    const newUser = {
        id: users.length + 1,
        name,
        email,
        password
    };

    // todo: replace
    users.push(newUser);
    res.status(201).json(newUser);
    // res.status(201);

};

exports.update = (req, res) => {

    const user = users.findIndex(
        u => u.id === parseInt(req.params.id)
    );

    if (!user) {
        return res.status(404).json({
            error: 'User not found'
        });
    }

    const { name, email } = req.body;

    if (name)  {
        user.name = name;
    }

    if (email) {
        user.email = email;
    }

    res.json(user);

};

exports.delete = (req, res) => {

    const index = users.findIndex(
        u => u.id === parseInt(req.params.id)
    );

    if (index === -1) {
        return res.status(404).json({ error: 'User not found' });
    }

    users.splice(index, 1); // temp
    res.status(204).send();

};