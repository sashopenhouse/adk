// Image placeholder utility
type TownName = 'boonville' | 'old-forge' | 'inlet' | 'eagle-bay';

export const getImageWithFallback = (imagePath: string, town: string) => {
  const placeholders: Record<TownName | 'default', string> = {
    boonville: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #93c5fd 100%)',
    'old-forge': 'linear-gradient(135deg, #059669 0%, #10b981 50%, #6ee7b7 100%)', 
    inlet: 'linear-gradient(135deg, #7c2d12 0%, #ea580c 50%, #fed7aa 100%)',
    'eagle-bay': 'linear-gradient(135deg, #374151 0%, #6b7280 50%, #d1d5db 100%)',
    default: 'linear-gradient(135deg, #D2B48C 0%, #C9A876 50%, #F5F1E8 100%)'
  };

  return {
    backgroundImage: `url('${imagePath}'), ${placeholders[town as TownName] || placeholders.default}`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };
};