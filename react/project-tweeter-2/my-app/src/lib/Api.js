export const API_URL = "https://lrazzxpwhdtmxcetgtng.supabase.co/rest/v1/Tweets";
export const API_KEY = "sb_publishable_PYoOQaHg4j7ps7Vo5Br41Q_QfmiyPSB";

export const getHeaders = () => ({
  "Content-Type": "application/json",
  "apikey": API_KEY,
  "Authorization": `Bearer ${API_KEY}`
});
