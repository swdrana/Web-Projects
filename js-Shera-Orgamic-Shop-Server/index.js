const express = require('express')
const app = express()
const port = 3000
const categoryRoutes = require('./routes/categoryRoutes');
const userRoutes = require('./routes/userRoutes');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Define API routes
app.use('/api/categories', categoryRoutes);
app.use('/api/users', userRoutes);
// app.use('/api/products', productRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})