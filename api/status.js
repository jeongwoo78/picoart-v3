module.exports = async (req, res) => {
  // CORS 헤더
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { predictionId, apiToken } = req.query;

    if (!apiToken) {
      return res.status(400).json({ error: 'API token is required' });
    }

    if (!predictionId) {
      return res.status(400).json({ error: 'Prediction ID is required' });
    }

    console.log('Checking prediction status:', predictionId);

    // Get prediction status from Replicate
    const response = await fetch(`https://api.replicate.com/v1/predictions/${predictionId}`, {
      headers: {
        'Authorization': `Token ${apiToken}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Status check error:', error);
      return res.status(response.status).json({ 
        error: 'Failed to check prediction status',
        details: error 
      });
    }

    const prediction = await response.json();
    console.log('Prediction status:', prediction.status);

    return res.status(200).json(prediction);

  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ 
      error: 'Internal server error', 
      message: error.message 
    });
  }
};
