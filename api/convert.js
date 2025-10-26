module.exports = async (req, res) => {
    // CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }
    
    try {
        const { apiToken, image, style } = req.body;
        
        if (!apiToken || !image || !style) {
            return res.status(400).json({ error: '필수 정보가 없습니다' });
        }
        
        const prompts = {
            'van_gogh': 'in the style of Vincent van Gogh, swirling brushstrokes',
            'picasso': 'in the style of Pablo Picasso, cubist',
            'monet': 'in the style of Claude Monet, impressionist',
            'munch': 'in the style of Edvard Munch, the scream',
            'klimt': 'in the style of Gustav Klimt, golden',
            'watercolor': 'watercolor painting style'
        };
        
        const response = await fetch('https://api.replicate.com/v1/predictions', {
            method: 'POST',
            headers: {
                'Authorization': `Token ${apiToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                version: 'a478e6eeb1aed1f3a8f4e1411cba09d4cf604d2f657b99ecc1e90d75ce1ae121',
                input: {
                    image: image,
                    prompt: prompts[style] || prompts['van_gogh']
                }
            })
        });
        
        if (!response.ok) {
            const error = await response.json();
            return res.status(response.status).json({ error: error.detail || 'API 실패' });
        }
        
        const prediction = await response.json();
        return res.status(200).json({
            predictionId: prediction.id,
            status: prediction.status
        });
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
};
