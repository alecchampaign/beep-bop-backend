db.createUser({
  user: 'root',
  pwd: 'secretPass',
  roles: [
    {
      role: 'readWrite',
      db: 'users',
    },
  ],
});
