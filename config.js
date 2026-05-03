/**
 * TREND HIVE - Frontend Configuration
 * 
 * ⚠️ IMPORTANT: Jab Railway par backend deploy ho jaye,
 * neeche wala URL apne Railway URL se replace karein.
 * 
 * Example: const API_BASE = 'https://your-app-name.up.railway.app';
 */

// Development mein local backend use hoga
// Production mein Railway ka URL use karein
const API_BASE = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    ? 'http://localhost:5000'
    : 'https://backend-production-4620.up.railway.app';
