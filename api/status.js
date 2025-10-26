module.exports = async (req, res) => {
    // CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }
    
    try {
        const { predictionId, apiToken } = req.query;
        
        if (!predictionId || !apiToken) {
            return res.status(400).json({ error: '필수 정보가 없습니다' });
        }
        
        const response = await fetch(
            `https://api.replicate.com/v1/predictions/${predictionId}`,
            {
                headers: {
                    'Authorization': `Token ${apiToken}`
                }
            }
        );
        
        if (!response.ok) {
            const error = await response.json();
            return res.status(response.status).json({ error: error.detail || '상태 확인 실패' });
        }
        
        const prediction = await response.json();
        return res.status(200).json({
            status: prediction.status,
            output: prediction.output,
            error: prediction.error
        });
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
};
