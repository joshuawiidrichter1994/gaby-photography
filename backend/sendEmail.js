module.exports = async (req, res) => {
  console.log('Function invoked');

  res.setHeader('Access-Control-Allow-Origin', 'https://gaby-photography.com');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  console.log('Received request:', req.body);

  res.status(200).send('Function is working');
};
