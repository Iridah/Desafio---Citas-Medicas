// Configuración de Express
app.use(express.json());
app.use(express.static('public'));

// Configuración de Handlebars (opcional)
// ...

// Configuración de Bootstrap
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

// Rutas
app.use('/api/users', require('./routes/users'));

// Error handling
app.use((err, req, res, next) => {
  console.error(chalk.red('Error:', err));
  res.status(err.status || 500).json({ message: err.message });
});

// Inicio del servidor
app.listen(3000, () => {
  console.log(chalk.green('Servidor escuchando en el puerto 3000'));
});

// Configuración de Nodemon (opcional)
nodemon.on('start', () => {
  console.log(chalk.green('Nodemon iniciado'));
});
nodemon.on('watch', () => {
  console.log(chalk.green('Cambios detectados, reiniciando servidor...'));
});