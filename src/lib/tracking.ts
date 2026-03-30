export const trackLead = () => {
  try {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead');
      console.log('Meta Pixel: Lead event fired successfully.');
    } else {
      console.warn('Meta Pixel: fbq not found on window object.');
    }
  } catch (error) {
    console.error('Meta Pixel Error:', error);
  }
};
