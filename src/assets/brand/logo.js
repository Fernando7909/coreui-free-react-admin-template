// Importa la imagen del logo en formato SVG
import logoSVG from '../images/shelby.svg';

// Exporta el componente que muestra la imagen del logo SVG
export const Logo = () => (
  <img src={logoSVG} alt="Logo" style={{ width: '20%', height: 'auto' }} />
);
