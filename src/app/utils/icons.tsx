import { ReactNode } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

class IconsUtils {
  public static convertIconComponentToSvg(iconComponent: ReactNode): string {
    const iconSvg = renderToStaticMarkup(iconComponent);
    const iconDataUrl = `data:image/svg+xml,${encodeURIComponent(iconSvg)}`;
    return iconDataUrl;
  }
}

export default IconsUtils;
